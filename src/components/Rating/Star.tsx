import React from "react";


type StarPropsType = {
    selected: boolean
}
export const Star = (props: StarPropsType) => {
    if (props.selected) {
        return <span> ★ </span>
    } else {
        return <span> ☆  </span>
    }
}