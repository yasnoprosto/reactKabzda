import React from "react";
import s from "./OnOff.module.css";

type ButtonsPropsType = {
    isPowerON: boolean;
}
const Buttons = (props: ButtonsPropsType) => {
    switch (props.isPowerON) {
        case true:
            return (
                <>
                    <button className={s.greenButton}>{"ON"}</button>
                    <button className={s.button}>{"OFF"}</button>
                </>
            );
        case false:
            return (
                <>
                    <button className={s.button}>{"ON"}</button>
                    <button className={s.redButton}>{"OFF"}</button>
                </>
            );
    }
};

export default Buttons;
