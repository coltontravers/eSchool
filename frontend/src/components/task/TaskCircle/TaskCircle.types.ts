import { Task } from "../../../../../types/task/task";

export interface TaskCircleTypes {
    type: Task["type"];
}

export const defaultProps: TaskCircleTypes = {
    type: "other"
};

export default TaskCircleTypes;
