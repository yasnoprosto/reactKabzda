import {ControlledAccordionTitle} from "./ControlledAccordionTitle";
import {ControlledAccordionBody} from "./ControlledAccordionBody";

type AccordionPropsType = {
    titleValue: string;
    setExpanded:(value: boolean)=>void
    expanded: boolean
}
export const ControlledAccordion = ({titleValue, setExpanded, expanded}: AccordionPropsType) => {
    console.log("UncontrolledAccordion is rendering")
    return (
        <div>
            <ControlledAccordionTitle titleValue={titleValue} setExpanded={() => {setExpanded(!expanded)}}/>
            {expanded && <ControlledAccordionBody/> }
        </div>
    )
}