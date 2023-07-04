import React, {ChangeEvent, useRef, useState} from "react";
import type {Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input",
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue =  e.currentTarget.value;
        setValue(actualValue)
    };
    return <><input onChange={onChangeValue}/> - {value} </>;
};

export const GetValueOfUncontrolledInputOfButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef =  useRef<HTMLInputElement>(null)

    const saveValue = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    };
    return <><input ref={inputRef} id={"inputId"}/> <button onClick={saveValue}>save</button> - {value} </>;
};
export const ControlledInputWithFixedValues = () => <input value={"it-incubator.by"}/>;

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {setParentValue(event.currentTarget.value)};
    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox= () => {
    const [parentValue, setParentValue] = useState(false);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {setParentValue(event.currentTarget.checked)};
    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect= () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {setParentValue(event.currentTarget.value)};
    return <select value={parentValue} onChange={onChangeHandler}>
        <option >none</option>
        <option value={"1"}>Ufa</option>
        <option value={"2"}>Sochi</option>
        <option value={"3"}>Moscow</option>
    </select>
}
