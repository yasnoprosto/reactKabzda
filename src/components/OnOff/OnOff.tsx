import React from "react";
import s from "./OnOff.module.css"
import Buttons from "./Buttons";
import Circle from "./Circle";

type OnOffPropsType = {
    isPowerON: boolean;
}
const OnOff = (props: OnOffPropsType) => {

    return (
        <div><Buttons isPowerON={props.isPowerON}/>
        <Circle isPowerON={props.isPowerON}/>
        </div>
    );
};

export default OnOff;
