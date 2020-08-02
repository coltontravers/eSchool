import React, { FunctionComponent } from "react";
import GridTypes from "./gridTypes";
import { StyledGrid } from "./Grid.styled";

const Grid: FunctionComponent<GridTypes> = ({ children, ...restProps }) => {
    return <StyledGrid {...restProps}>{children}</StyledGrid>;
};

export default Grid;
