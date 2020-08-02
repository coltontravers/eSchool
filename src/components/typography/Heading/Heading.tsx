import React, { FunctionComponent } from "react";
import headingTypes, { defaultProps, componentVariants } from "./headingTypes";
import { StyledHeading } from "./Heading.styled";

const Heading: FunctionComponent<headingTypes> = ({
    variant = "h3",
    children,
    ...restProps
}) => {
    return (
        <StyledHeading component={componentVariants[variant]} {...restProps}>
            {children}
        </StyledHeading>
    );
};

Heading.defaultProps = defaultProps;

export default Heading;
