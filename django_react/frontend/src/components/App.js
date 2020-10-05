import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api" + window.location.pathname)
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (

                                    <li class="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
										<div class="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
											<div class="product_name"><a href="product.html">{this.state.data.title}</a></div>
										</div>
										<div class="product_price text-lg-center product_text"><span>Цена: </span>{this.state.data.price}р</div>
                                        <div class="product_quantity_container">
										</div>

									</li>

    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);