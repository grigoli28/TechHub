import React from "react";
import ReactDOM from "react-dom";
import App, { inc, dec, Value } from "./App";
import Adapter from "enzyme-adapter-react-16";
import { mount, render, shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

/* JEST testing 
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("function tests", () => {
  it("decrement, state value decreases -1", () => {
    const state = { value: 0 };
    const stateNew = dec(state);
    expect(stateNew.value).toBe(-1);
  });

  it("decrement, state value decreases -1", () => {
    const state = { value: 0 };
    const stateNew = inc(state);
    expect(stateNew.value).toBe(1);
  });
});
*/

/* Enzyme testing */
describe("App Component Test, Enzyme", () => {
  it("Renders value", () => {
    const Container = shallow(<App />);
    expect(Container.find(Value)).toHaveLength(1);
  });

  it("Value component Props check", () => {
    const Container = shallow(<App />);
    let ValueComponent = Container.find(Value);

    expect(ValueComponent.props().value).toEqual(0);

    Container.setState({ value: 7 });
    ValueComponent = Container.find(Value);
    expect(ValueComponent.props().value).toEqual(7);
  });

  it("Tests Increment button", () => {
    const Container = shallow(<App />);
    Container.setState({ value: 0 });
    Container.find("button").at(0).simulate("click");
    expect(Container.state().value).toEqual(1);
  });

  it("Tests Decrement button", () => {
    const Container = shallow(<App />);
    Container.setState({ value: 0 });
    Container.find("button").at(1).simulate("click");
    expect(Container.state().value).toEqual(-1);
  });
});
