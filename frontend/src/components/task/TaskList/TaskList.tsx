import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { useQuery } from "react-query";

const TaskList: FunctionComponent = () => {
    // const { data: classes } = useQuery<ClassInterface[], string>(
    //     "class-list",
    //     getClasses
    // );

    return (
        <div css={[tw`grid grid-cols-12 -m-oneThird p-oneThird`]}>Tasks</div>
    );
};

// ClassList.defaultProps = defaultProps;

export default TaskList;
