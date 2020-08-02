import styled from "styled-components";
import gridTypes from "./gridTypes";

export const StyledGrid = styled.div<gridTypes>`
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-template-rows: ${({ rows }) => rows};
    grid-gap: ${({ gridGap }) => gridGap};
    justify-content: space-between;
    position: relative;
`;
