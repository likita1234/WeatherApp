// __tests__/CustomButton.test.tsx

import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import CustomButton from "@components/CustomButton";

describe("<CustomButton />", () => {
  test("renders label properly", () => {
    const { getByText } = render(
      <CustomButton label="Get Weather" onPress={() => {}} disable={false} />
    );

    getByText("Get Weather");
  });

  test("when not disabled, calls onPress after pressed", () => {
    const mockPress = jest.fn();

    const { getByText } = render(
      <CustomButton label="Get Weather" onPress={mockPress} disable={false} />
    );

    fireEvent.press(getByText("Get Weather"));

    expect(mockPress).toHaveBeenCalled();
  });

  test("when disabled, shouldnt fire onPress", () => {
    const mockPress = jest.fn();

    const { getByText } = render(
      <CustomButton label="Get Weather" onPress={mockPress} disable={true} />
    );

    fireEvent.press(getByText("Get Weather"));

    expect(mockPress).not.toHaveBeenCalled();
  });
});
