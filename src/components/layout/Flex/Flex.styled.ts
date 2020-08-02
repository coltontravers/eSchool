import styled from "styled-components";
import flexTypes from "./flexTypes";

export const StyledFlex = styled.div<flexTypes>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: ${({ alignItems }) => alignItems};
    align-content: ${({ alignContent }) => alignContent};
    flex-wrap: ${({ wrap }) => wrap};
`;
