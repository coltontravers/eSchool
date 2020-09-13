import React, { FunctionComponent, HTMLAttributes } from "react";
import tw, { TwStyle } from "twin.macro";
import WidgetTypes, { defaultProps, BoxShadowsType } from "./widget.types";

const generateBoxShadow = (color: BoxShadowsType): TwStyle | undefined => {
    switch (color) {
        case "small":
            return tw`shadow-normalSm`;
        case "medium":
            return tw`shadow-normalMd`;
        case "large":
            return tw`shadow-normalLg`;

        default:
            return undefined;
    }
};

const Widget: FunctionComponent<
    WidgetTypes & HTMLAttributes<HTMLDivElement>
> = ({ round, shadow, children, className, ...restProps }) => (
    <div
        css={[
            tw`overflow-hidden`,
            round && tw`rounded-md`,
            shadow && generateBoxShadow(shadow)
        ]}
        className={className}
        {...restProps}
    >
        {children}
    </div>
);

Widget.defaultProps = defaultProps;

export default Widget;
