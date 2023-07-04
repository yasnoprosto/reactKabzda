import React, {ChangeEvent} from "react";
import {ItemType} from "../ControlledAccordion/ControlledAccordion";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled} from "@mui/material";

type ControlledSelectPropsType = {
    selectedValue: string | undefined
    onChange: (value: string | undefined) => void
    items: ItemType[]
}

export const ControlledSelect: React.FC<ControlledSelectPropsType> = (props) => {


    const onChangeSelectHandler = (event: SelectChangeEvent) => {
        props.onChange(event.target.value);
        console.log(event);
    };

    const mappedItems = props.items.map((i, index) => {
        return (
            <MenuItem key={index} value={i.value}>{i.title}</MenuItem>
        );
    });

    const mapOptions = props.items.filter(i => i.value === props.selectedValue)

    return (
        <div>
            {mapOptions.map(o => {
                debugger
                return (
                <div>{o.title}</div>)}
                )
            }
        <div>
            <FormControl style={{display: "flex", alignItems: "center"}} fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    style={{width: "100px"}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={onChangeSelectHandler}
                >
                    {mappedItems}
                </Select>
            </FormControl>
        </div>
        </div>
    );
};
