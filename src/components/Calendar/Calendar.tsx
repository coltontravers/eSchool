import React, {
    FunctionComponent,
    useState,
    useRef,
    useLayoutEffect
} from "react";
import CalendarTypes, { CalendarViewTypes } from "./calendar.types";
import DailyCalendarView from "./views/DailyCalendarView/DailyCalendarView";
import WeeklyCalendarView from "./views/WeeklyCalendarView/WeeklyCalendarView";

const Calendar: FunctionComponent<CalendarTypes> = () => {
    const [view, setView] = useState<CalendarViewTypes>("Daily");
    const calendarRef = useRef<null | HTMLDivElement>(null);

    useLayoutEffect(() => {
        const updateView = () => {
            if (calendarRef.current) {
                if (
                    calendarRef.current.getBoundingClientRect().width < 720 ||
                    window.innerWidth < 1028
                ) {
                    setView("Weekly");
                } else {
                    setView("Monthly");
                }
            }
        };

        window.addEventListener("resize", updateView);

        updateView();

        return () => window.removeEventListener("resize", updateView);
    }, []);

    return (
        <div ref={calendarRef}>
            {view === "Weekly" ? <DailyCalendarView /> : <WeeklyCalendarView />}
        </div>
    );
};

export default Calendar;
