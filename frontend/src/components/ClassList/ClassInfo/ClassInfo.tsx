import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { gradeToLetter } from "utils/grade/gradeToLetter";
import { gradeToColor } from "utils/grade/gradeToColor";
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
            <CircularProgressbarWithChildren
                value={grade}
                styles={{
                    path: {
                        stroke: gradeToColor(grade)
                    }
                }}
            >
                <p css={[tw`font-extraBold text-gray-dark leading-none`]}>
                    {grade}
                </p>
                <p css={[tw`uppercase text-gray-dark`]}>
                    {gradeToLetter(grade)}
                </p>
            </CircularProgressbarWithChildren>
        </div>
        <div
            css={[
                tw`flex flex-row flex-1 flex-wrap justify-around items-center overflow-hidden`
            ]}
        >
            <h6 css={[tw`px-half font-bold text-center truncate`]}>{name}</h6>
            <div css={[tw`px-half text-center`]}>
                <p css={[tw`my-oneThird text-gray-dark font-bold`]}>
                    {teacher}
                </p>

                <p css={[tw`my-oneThird text-gray-dark font-light`]}>{time}</p>
            </div>
        </div>
    </div>
);

export default ClassInfo;
