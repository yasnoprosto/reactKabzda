

type UncontrolledAccordionTitlePropsType = {
    titleValue: string
}
export const UncontrolledAccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {
    console.log("UncontrolledAccordion title is rendering")
    return (
        <>
            <h3>-- {props.titleValue} --</h3>
        </>
    )
};