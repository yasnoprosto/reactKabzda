import React, {useState} from "react";
import "./App.css";
// import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
// import {PageTitle} from "./components/PageTitle/PageTitle";
// import {ControlledRating} from "./components/ControlledRating/ControlledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {ControlledAccordion} from "./components/ControlledAccordion/ControlledAccordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {ControlledRating, RatingValueType} from "./components/ControlledRating/ControlledRating";


const App = () => {
    console.log("App is rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3);
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="App">
            <PageTitle title={"TITLE"}/>
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<OnOff/>*/}
            <ControlledAccordion titleValue={"Controlled"} setExpanded={setExpanded} expanded={expanded}/>
            <ControlledRating value={ratingValue} setRatingValue={setRatingValue}/>
        </div>
    );
};


export default App;
