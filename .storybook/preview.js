import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyles from "../src/styles/index";
import "../src/assets/main.css";

const withGlobal = (cb) => (
    <div style={{ margin: "10px" }}>
        <GlobalStyles />
        {cb()}
    </div>
);

addDecorator(withGlobal);
