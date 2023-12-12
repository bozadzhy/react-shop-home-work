import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import MainLayout from "./MainLayout";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";
import NewThemeProvider from "../../context/context";

describe("MainLayout Snapshot Test", () => {
  it("should match snapshot for MainLayout component", () => {
    const component = renderer.create(
      <NewThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <MainLayout />
          </BrowserRouter>
        </Provider>
      </NewThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
