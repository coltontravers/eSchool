import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import GridTypes from "./grid.types";

const Grid: FunctionComponent<GridTypes> = ({
    columns,
    rows,
    gridGap,
    children
}) => (
    <div
        css={[
            columns && tw`grid-cols-${columns}`,
            rows && tw`grid-rows-${rows}`,
            gridGap && tw`gap-${gridGap}`
        ]}
    >
        {children}
    </div>
);

export default Grid;
