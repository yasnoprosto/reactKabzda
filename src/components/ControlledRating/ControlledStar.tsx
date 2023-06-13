import React from "react";
import s from "./ControlledStar.module.css"
import {RatingValueType} from "./ControlledRating";

type StarPropsType = {
    selected: boolean
    setRatingValue:(value: RatingValueType) => void
    value: RatingValueType
}

export const ControlledStar = ({selected, setRatingValue, value}: StarPropsType) => {

    // const onStarClickHandler = () => {
    //     props.callback(props.value)
    // }

    return (
        <span className={selected ? s.active : ""} onClick={() => {
            debugger
            setRatingValue(value)}
        }> STAR </span>
    )

    // return props.selected ? <span> ★ </span> : <span> ☆  </span>
    }