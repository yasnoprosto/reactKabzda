

type AccordionTitlePropsType = {
    titleValue: string
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("UncontrolledAccordion title is rendering")
    return (
        <>
            <h3>-- {props.titleValue} --</h3>
        </>
    )
};