import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ClassInfoTypes from "./classInfo.types";

const ClassInfo: FunctionComponent<ClassInfoTypes> = ({
    name,
    teacher,
    grade,
    time
}) => (
    <div css={[tw`p-oneThird flex justify-between items-center`]}>
        <div
            css={[
                tw`w-2/12 py-half`,
                css`
                    min-width: 60px;
                    max-width: 100px;
                `
            ]}
        >
            <CircularProgressbarWithChildren value={35}>
                <p css={[tw`uppercase font-bold text-gray-dark leading-none`]}>
                    {grade}
                </p>
                <p css={[tw`text-gray-dark`]}>96</p>
            </CircularProgressbarWithChildren>
        </div>
        <h6 css={[tw`my-oneThird text-center truncate`]}>{name}</h6>
        <div css={[tw`pl-half`]}>
            <p css={[tw`my-oneThird`]}>{teacher}</p>

            <p css={[tw`my-oneThird`]}>{time}</p>
        </div>
    </div>
);

export default ClassInfo;
