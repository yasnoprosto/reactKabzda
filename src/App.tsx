import React from "react";
import "./App.css";
// import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
// import {PageTitle} from "./components/PageTitle/PageTitle";
// import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./components/Rating/Rating";


const App = () => {
    console.log("App is rendering");

    return (
        <div className="App">
            {/*<PageTitle title={"TITLE"} />*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} expanded={true}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}
            <Rating />
            {/*<OnOff />*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
        </div>
    );
};


export default App;
