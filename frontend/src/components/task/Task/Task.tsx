import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import dayjs from "dayjs";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Task as TaskProps } from "../../../../../types/task/task";
import { defaultProps } from "./Task.types";
import gradeToColor from "utils/grade/gradeToColor";
import TaskCircle from "../TaskCircle/TaskCircle";

const Task: FunctionComponent<TaskProps> = ({
    type,
    taskName,
    taskDueDate,
    taskStatus,
    teacherName,
    className
}) => {
    return (
        <div css={[tw`flex justify-between items-center p-half`]}>
            <div css={[tw`flex w-7/12 items-center`]}>
                <TaskCircle type={type} />

                <div css={[tw`flex-1 px-half ml-full overflow-hidden`]}>
                    <h6 css={[tw`truncate`]}>{className}</h6>
                    <p css={[tw`text-gray-dark truncate`]}>{teacherName}</p>
                </div>

                <div css={[tw`flex-1 px-half text-center overflow-hidden`]}>
                    <h6 css={[tw`truncate`]}>{taskName}</h6>
                    <p css={[tw`text-gray-dark truncate`]}>{type}</p>
                </div>
            </div>

            <div css={[tw`text-center px-half w-3/12`]}>
                <h6>{dayjs(taskDueDate).format("h:mm A")}</h6>
                <h6 css={[tw`text-gray-dark`]}>
                    {dayjs(taskDueDate).format("ddd D")}
                </h6>
            </div>

            <div
                css={[
                    tw`flex-1 px-half w-2/12`,
                    css`
                        min-width: 60px;
                        max-width: 100px;
                    `
                ]}
            >
                {taskStatus < 100 ? (
                    <CircularProgressbarWithChildren
                        value={taskStatus}
                        styles={{
                            path: {
                                stroke: gradeToColor(taskStatus)
                            }
                        }}
                    >
                        <p
                            css={[
                                tw`font-extraBold text-gray-dark leading-none text-center`
                            ]}
                        >
                            {taskStatus}% Complete
                        </p>
                    </CircularProgressbarWithChildren>
                ) : (
                    "Done"
                )}
            </div>
        </div>
    );
};

Task.defaultProps = defaultProps;

export default Task;
