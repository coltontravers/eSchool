import colors, { colorsTypesWithString } from "../constants/colors";

export const splitColorKeys = (stringKeys: colorsTypesWithString): string => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [category, shade]: [keyof typeof colors, string] = stringKeys.split(
        "."
    );

    if (!colors[category]) {
        return stringKeys;
    }

    if (shade) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return colors[category][shade];
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return colors[category];
};

export default splitColorKeys;
