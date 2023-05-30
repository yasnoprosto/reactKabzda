type AccordionBodyPropsType = {
    collapsed?: boolean;
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log("Accordion list is rendering");
    return (
        <>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </>
    );
};
