import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import DetailsListTypes from "./detailsList.types";

const DetailsList: FunctionComponent<DetailsListTypes> = ({ list, name }) => (
    <div css={[tw`p-oneThird`]}>
        <h6 css={[tw`sm:text-small xxl:text-medium`]}>{name}</h6>
        <div css={[tw`pl-half`]}>
            {list.map((item: DetailsListTypes, index) => {
                return (
                    <p
                        css={[tw`text-gray-dark truncate`]}
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${item.name}-${index}`}
                    >
                        {item.name}
                    </p>
                );
            })}
        </div>
    </div>
);

export default DetailsList;
