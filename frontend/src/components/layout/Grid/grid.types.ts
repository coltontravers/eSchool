import { ReactNode } from "react";

export const gridNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
] as const;

export default interface GridTypes {
    columns?: typeof gridNumbers[number];
    rows?: typeof gridNumbers[number];
    gridGap?: typeof gridNumbers[number];
    children: ReactNode;
}
