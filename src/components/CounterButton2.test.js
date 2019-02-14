import React from "react";
import { shallow } from "enzyme";
import CounterButton2 from "./CounterButton2";

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton2 color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton2 color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });

  expect(wrapper.props().color).toEqual("red");
});
