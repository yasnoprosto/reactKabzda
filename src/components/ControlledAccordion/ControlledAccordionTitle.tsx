

type AccordionTitlePropsType = {
    titleValue: string
    setExpanded:(value: boolean)=>void
    expanded: boolean
}
export const ControlledAccordionTitle = ({titleValue,setExpanded,expanded}: AccordionTitlePropsType) => {
    console.log("UncontrolledAccordion title is rendering")

    let reverseExpanded = !expanded
    return (
        <>
            <h3 onClick={() => {setExpanded(reverseExpanded)}}>-- {titleValue} --</h3>
        </>
    )
};