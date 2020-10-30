import React, { FunctionComponent } from "react";
import { useRouter } from 'next/router';
import Button from "../Button/Button";
import { defaultProps } from "../Button/button.types";
import { LinkButtonTypes } from "./linkButton.types";

export const LinkButton: FunctionComponent<LinkButtonTypes> = ({
    to,
    children,
    onClick = () => null,
    ...restProps
}) => {
    const router = useRouter();

    return (
        <Button
            onClick={(event) => {
                onClick(event);
                router.push(to);
            }}
            {...restProps}
        >
            {children}
        </Button>
    );
};

LinkButton.defaultProps = defaultProps;

export default LinkButton;
