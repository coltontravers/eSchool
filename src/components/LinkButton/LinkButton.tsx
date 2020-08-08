import React, { FunctionComponent } from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import { defaultProps } from "../Button/button.types";
import { LinkButtonTypes } from "./linkButton.types";

export const LinkButton: FunctionComponent<LinkButtonTypes> = ({
    to = "",
    children,
    onClick,
    ...restProps
}) => {
    const history = useHistory();

    return (
        <Button
            onClick={(event) => {
                onClick && onClick(event);
                history.push(to);
            }}
            {...restProps}
        >
            {children}
        </Button>
    );
};

LinkButton.defaultProps = defaultProps;

export default LinkButton;
