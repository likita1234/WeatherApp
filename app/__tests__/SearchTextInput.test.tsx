import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchTextInput from "@features/weather/components/SearchTextInput"; // Adjust path if needed

describe("<SearchTextInput />", () => {
  it("renders correct placeholder", () => {
    const { getByPlaceholderText } = render(
      <SearchTextInput placeholder="Search City" value="" onChange={() => {}} />
    );

    expect(getByPlaceholderText("Search City")).toBeTruthy();
  });

  it("calls onChange when text is entered", () => {
    const mockOnChange = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchTextInput
        placeholder="Search City"
        value=""
        onChange={mockOnChange}
      />
    );

    const input = getByPlaceholderText("Search City");
    fireEvent.changeText(input, "Kathman");

    expect(mockOnChange).toHaveBeenCalledWith("Kathman");
  });

  it("display clear icon when we input a city", () => {
    const { getByTestId } = render(
      <SearchTextInput
        placeholder="Search City"
        value="Kath"
        onChange={() => {}}
      />
    );

    expect(getByTestId("clear-btn")).toBeTruthy();
  });

  it("does not display clear icon when nothing in input field", () => {
    const { queryByTestId } = render(
      <SearchTextInput placeholder="Search City" value="" onChange={() => {}} />
    );

    expect(queryByTestId("clear-btn")).toBeNull();
  });

  it("clears the input field when clear icon is clicked", () => {
    const mockOnChange = jest.fn();

    const { getByTestId } = render(
      <SearchTextInput
        placeholder="Search City"
        value="Kath"
        onChange={mockOnChange}
      />
    );

    const clearButton = getByTestId("clear-btn");
    fireEvent.press(clearButton);

    expect(mockOnChange).toHaveBeenCalledWith("");
  });
});
