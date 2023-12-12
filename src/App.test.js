import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NewThemeProvider from "./context/context";
import store from "./store";

describe("App", () => {
  test("snapshot App", () => {
    const app = render(
      <NewThemeProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </NewThemeProvider>
    );
    expect(app).toMatchSnapshot();
  });
});
