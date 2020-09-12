import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import PageWrapperTypes, { defaultProps } from "./pageWrapper.types";

const PageWrapper: FunctionComponent<PageWrapperTypes> = ({
    spacing,
    children
}) => <div css={[spacing && tw`m-full`]}>{children}</div>;

PageWrapper.defaultProps = defaultProps;

export default PageWrapper;
