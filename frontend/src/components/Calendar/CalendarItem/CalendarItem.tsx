import React, { FunctionComponent } from "react";
import tw from "twin.macro";

const CalendarItem: FunctionComponent = ({ children }) => (
    <div
        css={[
            tw`bg-secondary-light my-twoThirds p-oneThird shadow-lightSm rounded-full truncate sm:text-extraSmall xl:text-small`
        ]}
    >
        {children}
    </div>
);

export default CalendarItem;
