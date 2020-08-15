import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import ClassInfoTypes from "./classInfo.types";

const ClassInfo: FunctionComponent<ClassInfoTypes> = ({
    name,
    teacher,
    grade,
    time
}) => (
    <>
        <h6 css={[tw`my-oneThird`]}>{name}</h6>
        <p css={[tw`my-oneThird`]}>{teacher}</p>
        <p css={[tw`my-oneThird`]}>{grade}</p>
        <p css={[tw`my-oneThird`]}>{time}</p>
    </>
);

export default ClassInfo;
