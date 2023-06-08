import React from "react";
import "./App.css";
// import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
// import {PageTitle} from "./components/PageTitle/PageTitle";
// import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle/PageTitle";


const App = () => {
    console.log("App is rendering");

    return (
        <div className="App">
            <PageTitle title={"TITLE"} />
            <div>
                <UncontrolledAccordion titleValue={"Users"}/>
            </div>
            <div>
                <Rating/>
            </div>
            <div>
                <OnOff/>
            </div>
            <div><Accordion titleValue={"sdsd"}/></div>
        </div>
    );
};


export default App;
