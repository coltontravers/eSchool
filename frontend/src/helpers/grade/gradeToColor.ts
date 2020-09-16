import { theme } from "twin.macro";

export const gradeToColor = (grade: number): string => {
    if (grade >= 90) return theme("colors.success").toString();
    if (grade >= 80) return theme("colors.primary.normal").toString();
    if (grade >= 70) return theme("colors.secondary.normal").toString();
    if (grade >= 60) return theme("colors.warning").toString();

    return theme("colors.error").toString();
};

export default gradeToColor;
