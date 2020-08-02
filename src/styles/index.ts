import { createGlobalStyle } from "styled-components";
import * as primary from "./primary";

const styles = {
    ...primary
};

console.log(styles);

const GlobalStyles = createGlobalStyle`
    ${Object.keys(styles).map((key) => styles[key as keyof typeof styles])}
`;

export default GlobalStyles;
