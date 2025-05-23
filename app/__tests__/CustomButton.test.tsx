import { render } from "@testing-library/react-native";
import React from "react";
import CustomButton from "@components/CustomButton";

describe("<CustomButton />", () => {
  test("renders label properly", () => {
    const { getByText } = render(
      <CustomButton label="Get Weather" onPress={() => {}} />
    );

    getByText("Get Weather");
  });
});
