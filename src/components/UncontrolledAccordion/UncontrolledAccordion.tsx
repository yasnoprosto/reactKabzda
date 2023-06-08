import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";
import {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string;
    // expanded?: boolean;
}
export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    const [expanded, setExpanded] = useState(true);

    return (
        <div>
            <UncontrolledAccordionTitle titleValue={props.titleValue}/>
            <button onClick={() => {setExpanded(!expanded)}}>+</button>
            { expanded && <UncontrolledAccordionBody/>}
        </div>
    )
}