import React from "react";
import s from "./OnOff.module.css";

type CirclePropsType = {
    isPowerON: boolean
}
const Circle = (props: CirclePropsType) => {
    switch (props.isPowerON) {
        case true:
            return (
                <>
                    <div><div className={s.greenCircle}></div></div>
                </>
            );
        case false:
            return (
                <>
                    <div><div className={s.redCircle}></div></div>
                </>
            );
    }
};

<div><div className={s.circle}></div></div>
export default Circle;
