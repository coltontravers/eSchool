import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import FlexTypes, {
    defaultProps,
    alignContent as alignContentTypes,
    alignItems as alignItemsTypes,
    flexDirections,
    flexWrap,
    justify as justifyTypes
} from "./flex.types";

export const Flex: FunctionComponent<FlexTypes> = ({
    direction,
    alignItems,
    alignContent,
    justify,
    wrap,
    children
}) => (
    <div
        css={[
            tw`flex`,
            direction && flexDirections[direction],
            alignItems && alignItemsTypes[alignItems],
            alignContent && alignContentTypes[alignContent],
            justify && justifyTypes[justify],
            wrap && flexWrap[wrap]
        ]}
    >
        {children}
    </div>
);

Flex.defaultProps = defaultProps;

export default Flex;
