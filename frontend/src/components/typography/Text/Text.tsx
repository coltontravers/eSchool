import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import TextTypes, { defaultProps, fontSizes, fontWeights } from "./text.types";

const Text: FunctionComponent<TextTypes> = ({
    size,
    weight,
    truncate,
    children
}) => (
    <span
        css={[
            size && fontSizes[size],
            weight && fontWeights[weight],
            truncate && tw`truncate`
        ]}
    >
        {children}
    </span>
);

Text.defaultProps = defaultProps;

export default Text;
