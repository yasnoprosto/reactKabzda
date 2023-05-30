import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string;
    expanded?: boolean;
}
export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion is rendering")
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            { props.expanded && <AccordionBody/> }
        </div>
    )
}