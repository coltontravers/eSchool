import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

describe("<App />", () => {
    test("Renders correctly", () => {
        const { container } = render(<App />);
        expect(container).toBe(true);
    });
});
