import React, { FunctionComponent } from "react";
import TextTypes, { defaultProps } from "./textTypes";
import { StyledText } from "./Text.styled";

const Text: FunctionComponent<TextTypes> = ({ children }) => {
    return <StyledText {...defaultProps}>{children}</StyledText>;
};

Text.defaultProps = defaultProps;

export default Text;
