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
        <h6 css={[tw`my-oneThird text-center`]}>{name}</h6>
        <div css={[tw`pl-half`]}>
            <p css={[tw`my-oneThird`]}>{teacher}</p>
            <p css={[tw`my-oneThird`]}>{grade}</p>
            <p css={[tw`my-oneThird`]}>{time}</p>
        </div>
    </>
);

export default ClassInfo;
