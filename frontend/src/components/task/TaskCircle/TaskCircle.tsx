import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";

import TaskCircleTypes from "./TaskCircle.types";
import { taskTypeToColor } from "utils/grade/taskTypeToColor";

const TaskCircle: FunctionComponent<TaskCircleTypes> = ({ type }) => {
    return (
        <div
            css={[
                tw`rounded-full`,
                taskTypeToColor(type),
                css`
                    height: 15px;
                    width: 15px;
                `
            ]}
        />
    );
};

export default TaskCircle;
