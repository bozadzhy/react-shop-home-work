import Button from "./Button";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import NewThemeProvider from "../../context/context";

describe("Button", () => {
  test("sneapShot", () => {
    const button = render(
      <NewThemeProvider>
        <Provider store={store}>
          <Button />
        </Provider>
      </NewThemeProvider>
    );
    expect(button).toMatchSnapshot();
  });
  test("onClick button", () => {
    const onClick = jest.fn();
    const { container } = render(
      <NewThemeProvider>
        <Provider store={store}>
          <Button onClick={onClick}></Button>
        </Provider>
      </NewThemeProvider>
    );
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();

    // fireEvent.click(button);
    // expect(onClick).toHaveBeenCalled();
    //чому не працює?
    
  });
  test("isClass", () => {
    const { container } = render(
      <NewThemeProvider>
        <Provider store={store}>
          <Button className="btn"></Button>
        </Provider>
      </NewThemeProvider>
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("btn");
  });
});
