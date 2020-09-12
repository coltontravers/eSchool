import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { Search as SearchIcon } from "@styled-icons/boxicons-regular";
import { SearchProps, defaultProps } from "./search.types";
import { fontSizes } from "../../../types/typography";
import TextInput from "../TextInput/TextInput";

const Search: FunctionComponent<SearchProps> = ({
    fullWidth,
    round,
    iconPlacement,
    iconColor,
    iconSize = "medium",
    ...textInputProps
}) => (
    <div
        css={[
            tw`inline-flex bg-white shadow-lightSm border border-gray-normal focus:border-gray-dark focus:shadow-normalSm`,
            fullWidth && tw`w-full`,
            round && tw`rounded`,
            iconPlacement === "left" && tw`flex-row-reverse`
        ]}
    >
        <TextInput inSearch {...textInputProps} />

        <div css={[tw`flex`]}>
            <button type="button" css={[tw`px-oneThird focus:outline-none`]}>
                <SearchIcon
                    size={fontSizes[iconSize].fontSize.toString()}
                    color={iconColor}
                />
            </button>
        </div>
    </div>
);

Search.defaultProps = defaultProps;

export default Search;
