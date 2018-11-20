import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Button, InputGroupText, Input } from 'reactstrap';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { toggleKitchen: false, toggleIngr: false, togglePop: false };
  }

  toggle(e) {
    let event = e.target.getAttribute('data-toggle');
    if (event === "kitchen") this.setState({ toggleKitchen: !this.state.toggleKitchen })
    if (event === "ingredients") this.setState({ toggleIngr: !this.state.toggleIngr })
    if (event === "popular") this.setState({ togglePop: !this.state.togglePop })
  }

  render() {
    return (
      <div>
        <div className="toggle-popular">
          <Button data-toggle="popular" onClick={this.toggle}>Популярные</Button>
          <Collapse isOpen={this.state.togglePop}>
            <InputGroupText>
              <Link className="link-popular" to="#">Пицца</Link>
            </InputGroupText>
            <InputGroupText>
              <Link className="link-popular" to="#">Торт</Link>
            </InputGroupText>
            <InputGroupText>
              <Link className="link-popular" to="#">Стейк</Link>
            </InputGroupText>
          </Collapse>
        </div>
        <div className="toggle-kitchen">
          <Button data-toggle="kitchen" onClick={this.toggle}>Кухня</Button>
          <Collapse isOpen={this.state.toggleKitchen}>
            <InputGroupText>
              <Input addon className="chk-bx" type="checkbox" aria-label="Checkbox for following text input" value="Украинская" />
              Украинская
          </InputGroupText>
            <InputGroupText>
              <Input addon className="chk-bx" type="checkbox" aria-label="Checkbox for following text input" value="Американская" />
              Американская
          </InputGroupText>
            <InputGroupText>
              <Input addon className="chk-bx" type="checkbox" aria-label="Checkbox for following text input" value="Итальянская" />
              Итальянская
          </InputGroupText>
          </Collapse>
        </div>
        <div className="toggle-ingredients">
          <Button data-toggle="ingredients" onClick={this.toggle}>Ингредиенты</Button>
          <Collapse isOpen={this.state.toggleIngr}>
            <InputGroupText>
              <Input addon className="chk-bx" type="checkbox" aria-label="Checkbox for following text input" value="Мясо и мясная продукция" />
              Мясо и мясная продукция
          </InputGroupText>
            <InputGroupText>
              <Input addon className="chk-bx" type="checkbox" aria-label="Checkbox for following text input" value="Овощи, бобовые" />
              Овощи, бобовые
          </InputGroupText>
            <InputGroupText>
              <Input addon className="chk-bx" type="checkbox" aria-label="Checkbox for following text input" value="Молоко и молочная продукция" />
              Молоко и молочная продукция
          </InputGroupText>
          </Collapse>
        </div>
        <Button className="btn-filter">Показать</Button>
      </div>
    );
  }
}

export default Toggle;
