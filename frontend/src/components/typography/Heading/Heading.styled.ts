import React, { ReactElement } from "react";
import styled from "styled-components";
import headingTypes from "./heading.types";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const StyledHeading = styled(
    ({
        component,
        outline,
        truncate,
        ...props
    }: headingTypes & { component: ReactElement }) =>
        React.cloneElement(component, props)
)``;

/* eslint-enable @typescript-eslint/no-unused-vars */
