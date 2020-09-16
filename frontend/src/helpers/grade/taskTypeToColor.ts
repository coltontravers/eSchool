import tw, { TwStyle } from "twin.macro";
import { Task } from "../../../../types/task/task";

export const taskTypeToColor = (taskType: Task["type"]): TwStyle => {
    switch (taskType) {
        case "homework":
            return tw`bg-primary-dark`;

        case "quiz":
            return tw`bg-secondary-dark`;

        case "test":
            return tw`bg-tertiary-dark`;

        default:
            return tw`bg-warning`;
    }
};
