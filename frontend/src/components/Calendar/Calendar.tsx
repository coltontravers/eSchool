import React, {
    FunctionComponent,
    useState,
    useRef,
    useEffect
} from "react";
import dayjs from "dayjs";
import CalendarTypes from "./calendar.types";
import WeeklyCalendarView from "./views/WeeklyCalendarView/WeeklyCalendarView";
import MonthlyCalendarView from "./views/MonthlyCalendarView/MonthlyCalendarView";

const Calendar: FunctionComponent<CalendarTypes> = ({ view }) => {
    const [currentDay, setCurrentDay] = useState(dayjs());
    const [currentView, setCurrentView] = useState(view);
    const calendarRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const updateView = () => {
            if (calendarRef.current) {
                if (
                    calendarRef.current.getBoundingClientRect().width < 720 ||
                    window.outerWidth < 1280
                ) {
                    setCurrentView("Weekly");
                } else {
                    setCurrentView("Monthly");
                }
            }
        };

        if (!view) {
            window.addEventListener("resize", updateView);

            updateView();
        }

        return () => window.removeEventListener("resize", updateView);
    }, []);

    return (
        <div ref={calendarRef}>
            {currentView === "Weekly" ? (
                <WeeklyCalendarView
                    currentDay={currentDay}
                    setCurrentDay={setCurrentDay}
                />
            ) : (
                <MonthlyCalendarView
                    currentDay={currentDay}
                    setCurrentDay={setCurrentDay}
                />
            )}
        </div>
    );
};

export default Calendar;
