import React from "react";
import { render } from "@testing-library/react";

// App
import App from "./App";

// Unit Test cases
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
