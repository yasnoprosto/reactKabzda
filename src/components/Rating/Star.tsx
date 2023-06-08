import React from "react";
import s from "./Star.module.css"

type StarPropsType = {
    selected: boolean
    callback:(value: number)=>void
    value: number
}

export const Star = (props: StarPropsType) => {

    const onStarClickHandler = () => {
        props.callback(props.value)
    }

    return (
        <span className={ props.selected ? s.active : ""} onClick={onStarClickHandler}> STAR </span>
    )

    // return props.selected ? <span> ★ </span> : <span> ☆  </span>
    }