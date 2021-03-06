import React, { Component } from "react";
import ReactDOM from 'react-dom'
class ProductRow extends Component {
  render() {
    const product = this.props.product;
      <span style={{color: 'red'}}>
        {product.title}
      </span>;

    return (
      <tr>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.base_unit}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {


    return (
      <table>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Единицы измерения</th>
          </tr>
        </thead>
        <tbody>
        <ProductRow
          product={this.props.product} />
          </tbody>
      </table>
    );
  }
}


class FilterableProductTable extends Component {
constructor(props) {
  super(props);
  // Не вызывайте здесь this.setState()!
  this.state = {
    value: '',
    data:     {
    }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.setState({

            value: event.target.value
        });
    }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.value != prevState.value) {
        fetch("http://127.0.0.1:8000/api/product/"+ this.state.value)
        .then(response => {
            return response.json();
        })
      .then(data => {
        this.setState(() => {
          return {
            data:data
          };
        });

      });
  }
  }

  render() {
    return (
      <div>

        <form >
                Введите код товара:
                <input type="text" value={this.state.value} onChange={this.handleInputChange} />
        </form>

        <ProductTable product={this.state.data} />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('app')
);