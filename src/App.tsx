import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";


const App = () => {
    console.log("App is rendering")

    return (
        <div className="App">
            <PageTitle title={"TITLE"} />
            <Accordion titleValue={"Menu"} expanded={true}/>
            <Accordion titleValue={"Users"} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
            <OnOff isPowerON={false} />
            <OnOff isPowerON={false} />
        </div>
    )
}


export default App;
