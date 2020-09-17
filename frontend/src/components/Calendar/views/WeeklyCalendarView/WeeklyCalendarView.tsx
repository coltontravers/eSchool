import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import tw, { css } from "twin.macro";
import dayjs from "dayjs";
import { useVirtual } from "react-virtual";
import CalendarItem from "../../CalendarItem/CalendarItem";
import CalendarMonthHeader from "../../CalendarMonthHeader/CalendarMonthHeader";
import { useEvents } from "../../../../api/hooks/useEvents";
import WeeklyCalendarViewTypes, {
    defaultProps
} from "./WeeklyCalendarView.types";
import { DayInterface } from "../../calendar.types";

const WeeklyCalendarView: FunctionComponent<WeeklyCalendarViewTypes> = ({
    currentDay,
    setCurrentDay
}) => {
    const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs>(currentDay);

    const weeklyCalendarRef = useRef<null | HTMLDivElement>(null);

    const { isLoading, data: daysInWeek } = useEvents({
        startDate: selectedDay.toISOString(),
        endDate: selectedDay.add(1, "week").toISOString()
    });

    const rowVirtualizer = useVirtual({
        size: isLoading || !daysInWeek ? 0 : daysInWeek.length,
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
                {daysInWeek?.map(({ day }: DayInterface, index) => {
                    const toDayjs = dayjs(day);
                    const sameDay = selectedDay.isSame(toDayjs);

                    return (
                        <button
                            type="button"
                            onClick={() => handleDayClick(index)}
                            css={[
                                tw`py-full flex-1 capitalize sm:text-extraSmall xl:text-small`,
                                sameDay && tw`bg-gray-light`
                            ]}
                            key={`cal-day-name-${day}`}
                        >
                            {toDayjs.format("ddd")}
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
                        if (daysInWeek) {
                            const { day, events } = daysInWeek[index];
                            const dateToString = `cal-day-info-${day}`;

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
                                    {events.map((event, eventIndex) => (
                                        <CalendarItem
                                            key={`cal-item-${eventIndex}`}
                                        >
                                            {event}
                                        </CalendarItem>
                                    ))}
                                </div>
                            );
                        }

                        return null;
                    }
                )}
            </div>
        </div>
    );
};

WeeklyCalendarView.defaultProps = defaultProps;

export default WeeklyCalendarView;
