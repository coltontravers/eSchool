import { ReactNode } from "react";

const FlexDirections = {
    Row: "row",
    RowReverse: "row-reverse",
    Column: "column",
    ColumnReverse: "column-reverse"
};

const AlignItems = {
    Stretch: "stretch",
    Center: "center",
    Start: "start",
    End: "end"
};

const AlignContent = {
    Start: "start",
    Center: "center",
    SpaceBetween: "space-between",
    SpaceAround: "space-around"
};

const FlexWrap = {
    NoWrap: "no-wrap",
    Wrap: "wrap",
    WrapReverse: "wrap-reverse"
};

export default interface FlexTypes {
    direction?: keyof typeof FlexDirections;
    alignItems?: keyof typeof AlignItems;
    alignContent?: keyof typeof AlignContent;
    wrap?: keyof typeof FlexWrap;
    children: ReactNode;
}

export const defaultProps: FlexTypes = {
    direction: "Column",
    alignItems: "Center",
    alignContent: "SpaceAround",
    wrap: "Wrap",
    children: null
};
