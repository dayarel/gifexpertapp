import React from "react";
import Popular from "../../components/Popular";
import { shallow } from "enzyme";

describe("Tests sobre Popular", () => {
  const setCategories = jest.fn();
  const wrapper = shallow(<Popular setCategories={setCategories} />);

  test("se muestra el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Se cambia la categoria cuando se pulsa el botn", () => {
    const boton = wrapper.find(".boton");

    boton.simulate("click");

    expect(setCategories).toHaveBeenCalled();
  });
});
