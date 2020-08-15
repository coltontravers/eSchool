import React, { FunctionComponent } from "react";
import tw from "twin.macro";

const CalendarItem: FunctionComponent = () => (
    <div
        css={[
            tw`bg-secondary-light my-twoThirds p-oneThird shadow-lightSm rounded-full truncate`
        ]}
    >
        Calender Item
    </div>
);

export default CalendarItem;