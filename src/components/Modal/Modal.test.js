import Modal from "./Modal";
import { render } from "@testing-library/react";

describe("Modal", () => {
  test("isModal", () => {
    const {container} = render(<Modal />);
    const div = container.querySelector("div");
    expect(div).toHaveClass("modal-container")
  });
});
