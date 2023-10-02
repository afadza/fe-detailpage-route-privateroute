import React, { Component } from "react";
import Card from "./Card";
import '../assets/styles/navbar.css'

interface Foods {
  borgirChecked: boolean;
  breadChecked: boolean;
  breakfastChecked: boolean;
  cakeChecked: boolean;
  chocolateChecked: boolean;
  dessertChecked: boolean;
  friesChecked: boolean;
  noodlesChecked: boolean;
  sausageChecked: boolean;
  spicyChecked: boolean;
  sweetChecked: boolean;
  newChecked: boolean;
  favoriteChecked: boolean;
  featuredChecked: boolean;
  name: string[];
  checked: boolean;
  isContentVisible: boolean;
  isContentVisibleTag: boolean;
}

export default class Navbar extends Component<{ value?: null }, Foods> {
  constructor(props: { value?: null }) {
    super(props);
    this.state = {
      borgirChecked: false,
      breadChecked: false,
      breakfastChecked: false,
      cakeChecked: false,
      chocolateChecked: false,
      dessertChecked: false,
      friesChecked: false,
      noodlesChecked: false,
      sausageChecked: false,
      spicyChecked: false,
      sweetChecked: false,
      newChecked: false,
      favoriteChecked: false,
      featuredChecked: false,
      name: [],
      checked: false,
      isContentVisible: false,
      isContentVisibleTag: false,
    };
  }

  toggleContent = () => {
    this.setState((prevState) => ({
      isContentVisible: !prevState.isContentVisible,
    }));
  };

  toggleContentTag = () => {
    this.setState((prevState) => ({
      isContentVisibleTag: !prevState.isContentVisibleTag,
    }));
  };

  checkboxHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    this.setState((prevState) => ({ ...prevState, [name]: checked }));
  };

  handleButtonClick = () => {
    const {
      borgirChecked,
      breadChecked,
      breakfastChecked,
      cakeChecked,
      chocolateChecked,
      dessertChecked,
      friesChecked,
      noodlesChecked,
      sausageChecked,
      spicyChecked,
      sweetChecked,
      newChecked,
      favoriteChecked,
      featuredChecked,
    } = this.state;
    let message = "";

    if (borgirChecked) {
      message += "Borgir ";
    }
    if (breadChecked) {
      message += "Bread ";
    }
    if (breakfastChecked) {
      message += "Breakfast ";
    }
    if (cakeChecked) {
      message += "Cake ";
    }
    if (chocolateChecked) {
      message += "Chocolate ";
    }
    if (dessertChecked) {
      message += "Dessert ";
    }
    if (friesChecked) {
      message += "Fries ";
    }
    if (noodlesChecked) {
      message += "Noodles ";
    }
    if (sausageChecked) {
      message += "Sausage ";
    }
    if (spicyChecked) {
      message += "Spicy ";
    }
    if (sweetChecked) {
      message += "Sweet ";
    }
    if (newChecked) {
      message += "New ";
    }
    if (favoriteChecked) {
      message += "Favorite ";
    }
    if (featuredChecked) {
      message += "Featured ";
    }
    if (message) {
      alert(`Kamu memilih: ${message}`);
    } else {
      alert("Kamu tidak memilih apapun");
    }
  };

  render() {
    const { isContentVisible } = this.state;
    const buttonText = isContentVisible ? "↑" : "↓";
    const { isContentVisibleTag } = this.state;
    const buttonTextTag = isContentVisibleTag ? "↑" : "↓";
    return (
      <>
        <div className="sm:flex sm:flex-row flex-col justify-between">
          <div className="flex flex-col max-w-[100%] sm:h-screen p-8 sm:border-r-2 sm:max-w-[20%] sm:fixed">
            <div className="border-b-2 mb-8 w-full">
              <p className="text-4xl">Restaurant</p>
            </div>
            <div className="flex mb-5 w-full ">
              <input type="text" className="border rounded-md w-full" />
              <button
                className="bg-[#0a192f] px-2 rounded text-gray-200 text-xs"
                onClick={this.handleButtonClick}
              >
                cari
              </button>
            </div>
            <div className="flex justify-between w-full border-b-2 mb-4 pb-2">
              <button
                onClick={this.toggleContent}
                className="flex justify-between items-center w-full"
              >
                <span className="text-left">Category</span>
                <span className="text-right">{buttonText}</span>
              </button>
            </div>
            {isContentVisible && (
              <div className="flex flex-col">
                <label htmlFor="borgir">
                  <input
                    type="checkbox"
                    id="borgir"
                    name="borgirChecked"
                    checked={this.state.borgirChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Borgir
                </label>
                <label htmlFor="bread">
                  <input
                    type="checkbox"
                    id="bread"
                    name="breadChecked"
                    checked={this.state.breadChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Bread
                </label>
                <label htmlFor="breakfast">
                  <input
                    type="checkbox"
                    id="breakfast"
                    name="breakfastChecked"
                    checked={this.state.breakfastChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Breakfast
                </label>
                <label htmlFor="cake">
                  <input
                    type="checkbox"
                    id="cake"
                    name="cakeChecked"
                    checked={this.state.cakeChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Cake
                </label>
                <label htmlFor="chocolate">
                  <input
                    type="checkbox"
                    id="chocolate"
                    name="chocolateChecked"
                    checked={this.state.chocolateChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Chocolate
                </label>
                <label htmlFor="dessert">
                  <input
                    type="checkbox"
                    id="dessert"
                    name="dessertChecked"
                    checked={this.state.dessertChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Dessert
                </label>
                <label htmlFor="fries">
                  <input
                    type="checkbox"
                    id="fries"
                    name="friesChecked"
                    checked={this.state.friesChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Fries
                </label>
                <label htmlFor="noodles">
                  <input
                    type="checkbox"
                    id="noodles"
                    name="noodlesChecked"
                    checked={this.state.noodlesChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Noodles
                </label>
                <label htmlFor="sausage">
                  <input
                    type="checkbox"
                    id="sausage"
                    name="sausageChecked"
                    checked={this.state.sausageChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Sausage
                </label>
                <label htmlFor="spicy">
                  <input
                    type="checkbox"
                    id="spicy"
                    name="spicyChecked"
                    checked={this.state.spicyChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Spicy
                </label>
                <label htmlFor="sweet" className="mb-8">
                  <input
                    type="checkbox"
                    id="sweet"
                    name="sweetChecked"
                    checked={this.state.sweetChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Sweet
                </label>
              </div>
            )}
            <div className="flex justify-between w-full border-b-2 mb-4 pb-2">
              <button
                onClick={this.toggleContentTag}
                className="flex justify-between items-center w-full"
              >
                <span className="text-left">Tag</span>
                <span className="text-right">{buttonTextTag}</span>
              </button>
            </div>
            {isContentVisibleTag && (
              <div className="flex flex-col">
                <label htmlFor="new">
                  <input
                    type="checkbox"
                    id="new"
                    name="newChecked"
                    checked={this.state.newChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  New
                </label>
                <label htmlFor="favorite">
                  <input
                    type="checkbox"
                    id="favorite"
                    name="favoriteChecked"
                    checked={this.state.favoriteChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Favorite
                </label>
                <label htmlFor="featured">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featuredChecked"
                    checked={this.state.featuredChecked}
                    onChange={this.checkboxHandleChange}
                  />{" "}
                  Featured
                </label>
              </div>
            )}
          </div>
          <div className="bg-[#0a192f] w-full sm:w-[80%] p-8 sm:ml-[20%]">
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 text- items-center justify-between">
            <Card />
            </div>
          </div>
        </div>
      </>
    );
  }
}
