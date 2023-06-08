import {useState} from "react";

type OnOffPropsType = {
    // isOn: boolean;
}
export const OnOff = (props: OnOffPropsType) => {
    console.log("OnOff is rendering");

    const [isOn, setIsOn] = useState(false);

    console.log("isOn = " + isOn);

    const turnOn = () => {
      setIsOn(true)
    }

    const turnOff = () => {
        setIsOn(false)
    }

    const onStyle = {
        width: "30px",
        height: "30px",
        margin: "5px",
        marginRight: "0px",
        padding: "2px",
        border: "1px solid black",
        display: "inline",
        backgroundColor: isOn ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "30px",
        padding: "2px",
        border: "1px solid black",
        display: "inline",
        backgroundColor: !isOn ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        margin: "0 5px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: isOn ? "green" : "red",
    };

    return (
        <div>
            <div onClick={() => {turnOn()}} style={onStyle}>On</div>
            <div onClick={() => {turnOff()}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};