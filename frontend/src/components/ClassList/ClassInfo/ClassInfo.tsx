import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import ClassInfoTypes from "./classInfo.types";

const ClassInfo: FunctionComponent<ClassInfoTypes> = ({
    name,
    teacher,
    grade,
    time
}) => (
    <div css={[tw`relative overflow-hidden`]}>
        <h6 css={[tw`my-oneThird text-center truncate mx-double`]}>{name}</h6>
        <div css={[tw`pl-half`]}>
            <p css={[tw`my-oneThird`]}>{teacher}</p>

            <p css={[tw`my-oneThird`]}>{time}</p>
        </div>
        <span
            css={[
                tw`p-half absolute bg-white rounded-full shadow-lightSm font-bold uppercase h-triple w-triple`,
                css`
                    top: -7px;
                    right: -7px;
                    line-height: calc(2.5em - 14px);
                `
            ]}
        >
            {grade}
        </span>
    </div>
);

export default ClassInfo;
