import React, {
    FunctionComponent,
    useState,
    useMemo,
    useEffect,
    useRef
} from "react";
import tw, { css } from "twin.macro";
import dayjs from "dayjs";
import { useVirtual } from "react-virtual";
import CalendarItem from "../../CalendarItem/CalendarItem";
import CalendarMonthHeader from "../../CalendarMonthHeader/CalendarMonthHeader";
import WeeklyCalendarViewTypes, {
    defaultProps
} from "./WeeklyCalendarView.types";

const WeeklyCalendarView: FunctionComponent<WeeklyCalendarViewTypes> = ({
    currentDay,
    setCurrentDay
}) => {
    const [selectedDay, setSelectedDay] = useState(currentDay);

    const weeklyCalendarRef = useRef<null | HTMLDivElement>(null);

    const daysInWeek = useMemo(
        () =>
            Array.from(
                {
                    length: 7
                },
                (x, i) => {
                    const randonNumber = Math.floor(Math.random() * 6) + 1;

                    const elements = [];

                    for (let index = 0; index < randonNumber; index++) {
                        elements.push(
                            <CalendarItem key={`cal-item-${index}`} />
                        );
                    }

                    return {
                        day: currentDay.add(i, "day"),
                        elements
                    };
                }
            ),
        [currentDay]
    );

    const rowVirtualizer = useVirtual({
        size: daysInWeek.length,
        parentRef: weeklyCalendarRef,
        overscan: 5
    });

    useEffect(() => {
        setSelectedDay(currentDay);
    }, [currentDay]);

    const handleDayClick = (index: number) => {
        rowVirtualizer.scrollToIndex(index);
    };

    return (
        <div>
            <CalendarMonthHeader
                monthFormat="short"
                currentDay={currentDay}
                setCurrentDay={setCurrentDay}
                days={daysInWeek}
            />
            <div
                css={[
                    tw`flex justify-between text-center border-b-2 border-gray-light bg-white w-full`
                ]}
            >
                {daysInWeek.map(({ day }, index) => {
                    const sameDay = selectedDay.isSame(day);

                    return (
                        <button
                            type="button"
                            onClick={() => handleDayClick(index)}
                            css={[
                                tw`py-full flex-1 capitalize sm:text-extraSmall xl:text-small`,
                                sameDay && tw`bg-gray-light`
                            ]}
                            key={`cal-day-name-${day.toISOString()}`}
                        >
                            {dayjs(day).format("ddd")}
                        </button>
                    );
                })}
            </div>
            <div
                css={[
                    tw`pt-half overflow-y-scroll`,
                    css`
                        max-height: calc(70vh - 54px);
                        width: 100%;
                        position: relative;
                        height: ${rowVirtualizer.totalSize}px;
                    `
                ]}
                ref={weeklyCalendarRef}
            >
                {rowVirtualizer.virtualItems.map(
                    ({ index, measureRef, start }) => {
                        const { day, elements } = daysInWeek[index];
                        const dateToString = `cal-day-info-${day.toISOString()}`;

                        return (
                            <div
                                key={index}
                                ref={measureRef}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    minHeight: "50px",
                                    transform: `translateY(${start}px)`
                                }}
                                id={dateToString}
                            >
                                <span>{dayjs(day).format("D")}</span>
                                {elements}
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

WeeklyCalendarView.defaultProps = defaultProps;

export default WeeklyCalendarView;
