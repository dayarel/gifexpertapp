import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../../components/GifExpertApp";

describe("Pruebas sobre GifExpertApp", () => {
  test("se renderiza el componente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find("GifGrid").length).toBe(categories.lenth);
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
