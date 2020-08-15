import React, { FunctionComponent } from "react";
import tw from "twin.macro";

const CalendarItem: FunctionComponent = () => (
    <div css={[tw`bg-secondary-light p-oneThird shadow-lightSm rounded-full`]}>
        Calender Item
    </div>
);

export default CalendarItem;
