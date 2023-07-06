import React, {ChangeEvent, useState} from "react";
import {ItemType} from "../ControlledAccordion/ControlledAccordion";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled} from "@mui/material";
import styles from ".././ControlledSelect/ControlledSelect.module.css";

export type ControlledSelectPropsType = {
    selectedValue?: string | undefined
    onChange: (value: string | undefined) => void
    items: ItemType[]
}

export const ControlledSelect: React.FC<ControlledSelectPropsType> = (props) => {

    const [active, setActive] = useState(false);


    const onChangeSelectHandler = (event: SelectChangeEvent) => {
        props.onChange(event.target.value);
        setActive(true);
    };

    const mappedItemsToSelect = props.items.map((i, index) => {
        return (
            <MenuItem key={index} value={i.value}>{i.title}</MenuItem>
        );
    });

    const mappedItemsToPage = props.items.map((i, index) => {
        return (
            <div key={index} onClick={() => props.onChange(i.value)}>{i.title}</div>
        );
    });

    const toggleItems   = () => {
        setActive(!active);
    };

    const mappedFilterOptions = props.items.filter(i => i.value === props.selectedValue).map(o => {
            return (
                <h3 onClick={toggleItems} className={"header__select"}>{o.title}</h3>);
        }
    )
    ;

    return (
        <div>
            <div>
                <FormControl className={styles.formControl} fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        className={styles.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={onChangeSelectHandler}
                    >
                        {mappedItemsToSelect}
                    </Select>
                    {mappedFilterOptions}
                    {active && mappedItemsToPage}
                </FormControl>
            </div>

        </div>
    );
};
