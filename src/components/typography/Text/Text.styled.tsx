import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { fontSizes, fontWeights } from "../../../constants/typography";
import splitColorKeys from "../../../helpers/splitColorKeys";
import textTypes from "./textTypes";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const StyledText = styled(
    ({ outline, truncate, ...props }: textTypes) => <span {...props} />
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
