import { valueToEm } from "../helpers/valueToPoint";

const defaultGutter = 1;

export const gutters = {
    oneThird: valueToEm(defaultGutter * 0.2),
    half: valueToEm(defaultGutter * 0.5),
    twoThirds: valueToEm(defaultGutter * 0.66),
    full: valueToEm(defaultGutter),
    double: valueToEm(defaultGutter * 2)
};

export default gutters;
