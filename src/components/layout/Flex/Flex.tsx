import React, { FunctionComponent } from "react";
import FlexTypes, { defaultProps } from "./flexTypes";
import { StyledFlex } from "./Flex.styled";

export const Flex: FunctionComponent<FlexTypes> = ({
    children,
    ...restProps
}) => {
    return <StyledFlex {...restProps}>{children}</StyledFlex>;
};

Flex.defaultProps = defaultProps;

export default Flex;
