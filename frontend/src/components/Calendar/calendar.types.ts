export default interface CalendarTypes {
    view?: "Weekly" | "Monthly";
}

export interface DayInterface {
    day: string;
    events: JSX.Element[];
}
