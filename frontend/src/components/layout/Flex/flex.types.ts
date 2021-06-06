import { ReactNode } from "react";
import tw from "twin.macro";

export const flexDirections = {
    row: tw`flex-row`,
    rowReverse: tw`flex-row-reverse`,
    column: tw`flex-col`,
    columnReverse: tw`flex-col-reverse`
};

export const alignItems = {
    stretch: tw`items-stretch`,
    center: tw`items-center`,
    start: tw`items-start`,
    end: tw`items-end`
};

export const alignContent = {
    start: tw`content-start`,
    center: tw`content-center`,
    end: tw`content-end`,
    spaceBetween: tw`content-between`,
    spaceAround: tw`content-around`
};

export const justify = {
    start: tw`justify-start`,
    center: tw`justify-center`,
    end: tw`justify-end`,
    spaceBetween: tw`justify-between`,
    spaceAround: tw`justify-around`,
    evenly: tw`justify-evenly`
};

export const flexWrap = {
    noWrap: tw`flex-no-wrap`,
    wrap: tw`flex-wrap`,
    wrapReverse: tw`flex-wrap-reverse`
};

export default interface FlexTypes {
    direction?: keyof typeof flexDirections;
    alignItems?: keyof typeof alignItems;
    alignContent?: keyof typeof alignContent;
    justify?: keyof typeof justify;
    wrap?: keyof typeof flexWrap;
    children: ReactNode;
}

export const defaultProps: FlexTypes = {
    direction: "column",
    alignItems: "center",
    alignContent: "spaceAround",
    wrap: "wrap",
    children: null
};
