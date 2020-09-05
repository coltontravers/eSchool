import React, { FunctionComponent } from "react";
import {
    LeftArrowAlt as LeftArrowIcon,
    RightArrowAlt as RightArrowIcon
} from "@styled-icons/boxicons-regular";
import dayjs from "dayjs";
import tw from "twin.macro";

import CalendarMonthHeaderTypes, {
    defaultProps
} from "./CalendarMonthHeader.types";

const CalendarMonthHeader: FunctionComponent<CalendarMonthHeaderTypes> = ({
    monthFormat,
    currentDay,
    setCurrentDay
}) => {
    return (
        <div
            css={[tw`flex justify-between items-center mb-full w-2/12 mx-auto`]}
        >
            <button
                type="button"
                onClick={() => setCurrentDay(currentDay.subtract(1, "week"))}
            >
                <LeftArrowIcon size="1.5rem" />
            </button>
            <h6 css={[tw`px-half`]}>
                {dayjs(currentDay).format(
                    monthFormat === "normal" ? "MMMM" : "MMM"
                )}
            </h6>
            <button
                type="button"
                onClick={() => setCurrentDay(currentDay.add(1, "week"))}
            >
                <RightArrowIcon size="1.5rem" />
            </button>
        </div>
    );
};

CalendarMonthHeader.defaultProps = defaultProps;

export default CalendarMonthHeader;
