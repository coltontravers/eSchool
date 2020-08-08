import React, { FunctionComponent } from "react";
import headingTypes, { defaultProps, componentVariants } from "./heading.types";
import { StyledHeading } from "./Heading.styled";

const Heading: FunctionComponent<headingTypes> = ({
    variant = "h3",
    ...restProps
}) => <StyledHeading component={componentVariants[variant]} {...restProps} />;

Heading.defaultProps = defaultProps;

export default Heading;
