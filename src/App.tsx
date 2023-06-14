import React, {useState} from "react";
import "./App.css";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";
import {ControlledAccordion} from "./components/ControlledAccordion/ControlledAccordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {ControlledRating, RatingValueType} from "./components/ControlledRating/ControlledRating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";


const App = () => {
    console.log("App is rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="App">
            <PageTitle title={"TITLE"}/>
            <div>
                Uncontrolled OnOff <UncontrolledOnOff/>
            </div>
            <div>
                Uncontrolled Accordion <UncontrolledAccordion titleValue={"Users"}/>
            </div>
            <div>
                Uncontrolled Rating <UncontrolledRating/>
            </div>
            <div>
                Controlled OnOff <ControlledOnOff setIsOn={setIsOn} isOn={isOn}/>
            </div>
            <div>
                Controlled Accordion <ControlledAccordion titleValue={"Controlled"} setExpanded={setIsExpanded}
                                                          expanded={isExpanded}/>
            </div>
            <div>
                Controlled Rating <ControlledRating value={ratingValue} setRatingValue={setRatingValue}/>
            </div>
        </div>
    );
};


export default App;
