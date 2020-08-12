import React, { FunctionComponent } from "react";
import tw, { css } from "twin.macro";
import DetailsListTypes from "./detailsList.types";

const DetailsList: FunctionComponent<DetailsListTypes> = ({ list, name }) => (
    <div css={[tw`p-oneThird`]}>
        <h6>{name}</h6>
        <div css={[tw`pl-half`]}>
            {list.map((item) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                return <p css={[tw`text-gray-dark`]}>{item.name}</p>;
            })}
        </div>
    </div>
);

export default DetailsList;
