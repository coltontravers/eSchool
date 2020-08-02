import colors from "./colors";

export const badgePositions = {
    topLeft: {
        top: "-25%",
        left: "-25%"
    },
    topRight: {
        top: "-25%",
        right: "-25%"
    }
};

export const badgeThemes = {
    normal: {
        background: colors.primary.normal,
        textColor: colors.white
    },
    danger: {
        background: colors.tertiary.dark,
        textColor: colors.white
    },
    info: {
        background: colors.secondary.dark,
        textColor: colors.white
    },
    warning: {
        background: colors.warning,
        textColor: colors.white
    },
    success: {
        background: colors.success,
        textColor: colors.white
    }
};
