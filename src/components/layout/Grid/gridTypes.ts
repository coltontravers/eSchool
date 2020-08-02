import { ReactNode } from "react";

export default interface GridTypes {
    columns?: string;
    rows?: string;
    gridGap?: string;
    children: ReactNode;
}
