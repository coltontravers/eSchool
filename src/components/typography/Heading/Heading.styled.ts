import React, { ReactElement } from "react";
import styled from "styled-components";
import { darken } from "polished";
import { fontSizes, fontWeights } from "../../../constants/typography";
import splitColorKeys from "../../../helpers/splitColorKeys";
import headingTypes from "./headingTypes";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const StyledHeading = styled(
    ({
        component,
        outline,
        truncate,
        ...props
    }: headingTypes & { component: ReactElement }) =>
        React.cloneElement(component, props)
)`
    font-size: ${({ size }) => size && fontSizes[size]};
    font-weight: ${({ weight }) => weight && fontWeights[weight]};
    color: ${({ color }) => color && splitColorKeys(color)};
    ${({ outline, color }) =>
        outline &&
        color &&
        `
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${darken(0.3, splitColorKeys(color))};
    `};
    margin: 0;
`;

/* eslint-enable @typescript-eslint/no-unused-vars */
