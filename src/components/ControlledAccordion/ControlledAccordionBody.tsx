type AccordionBodyPropsType = {
    collapsed?: boolean;
}

export const ControlledAccordionBody = (props: AccordionBodyPropsType) => {
    console.log("UncontrolledAccordion list is rendering");
    return (
        <>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </>
    );
};
