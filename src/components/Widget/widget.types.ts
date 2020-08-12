export type BoxShadowsType = "small" | "medium" | "large";

export default interface WidgetTypes {
    round?: boolean;
    shadow?: BoxShadowsType;
}

export const defaultProps: WidgetTypes = {
    round: false
};
