import React, { FunctionComponent } from "react";
import {
    LeftArrowAlt as LeftArrowIcon,
    RightArrowAlt as RightArrowIcon
} from "@styled-icons/boxicons-regular";
import dayjs from "dayjs";
import tw, { css } from "twin.macro";

import CalendarMonthHeaderTypes, {
    defaultProps
} from "./CalendarMonthHeader.types";

const CalendarMonthHeader: FunctionComponent<CalendarMonthHeaderTypes> = ({
    monthFormat,
    currentDay,
    setCurrentDay,
    days
}) => {
    return (
        <div
            css={[
                tw`flex justify-between items-center mb-full w-3/12 mx-auto`,
                css`
                    min-width: 150px;
                `
            ]}
        >
            <button
                type="button"
                onClick={() =>
                    setCurrentDay(
                        currentDay.subtract(
                            1,
                            monthFormat === "normal" ? "month" : "week"
                        )
                    )
                }
            >
                <LeftArrowIcon size="1.5rem" />
            </button>
            <div css={[tw`px-half text-center`]}>
                <h6>
                    {dayjs(currentDay).format(
                        monthFormat === "normal" ? "MMMM" : "MMM"
                    )}
                </h6>
                {monthFormat === "short" && (
                    <span css={[tw`text-gray-dark`]}>
                        {dayjs(days?.[0].day).format("D")} -{" "}
                        {dayjs(days?.[days.length - 1].day).format("D")}
                    </span>
                )}
            </div>
            <button
                type="button"
                onClick={() =>
                    setCurrentDay(
                        currentDay.add(
                            1,
                            monthFormat === "normal" ? "month" : "week"
                        )
                    )
                }
            >
                <RightArrowIcon size="1.5rem" />
            </button>
        </div>
    );
};

CalendarMonthHeader.defaultProps = defaultProps;

export default CalendarMonthHeader;
