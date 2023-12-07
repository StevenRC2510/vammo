import { screen, fireEvent, waitFor, render } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import Tag from ".";

import { TagProps } from "./types";

describe("Components:: Tag", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps: TagProps = {
    text: faker.word.sample(),
  };

  it("Should render the component correctly", () => {
    render(<Tag {...defaultProps} />);

    const textTag = screen.getByText(defaultProps.text);

    expect(textTag).toBeDefined();
  });
});
