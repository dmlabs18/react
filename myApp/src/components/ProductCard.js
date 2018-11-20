import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {}
    }
  }
  componentWillMount() {
    this._mounted = true;
    fetch('http://localhost:3000/db.json')
      .then(response => response.json())
      .then(data => {
        for (let item in data) {
          if (Array.isArray(data[item])) {
            data[item].forEach(card => {
              if (card.id === this.props.match.params.id) return this.setState({ card })
            })
          }
        }
      })
  }

  componentWillUnmount() {
    this._mounted = false;
}

  render() {
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div className="product-card">
        <div className="crumbs">
          <Breadcrumb>
            <BreadcrumbItem><a href="/">Главная</a></BreadcrumbItem>
            <BreadcrumbItem><a href={this.props.match.path.replace(/\/:id/, '')}>{this.props.location.sect}</a></BreadcrumbItem>
            <BreadcrumbItem active>{this.state.card.title}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Card>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" title={this.state.card.title} src={this.state.card.video} allowFullScreen />
          </div>
          <CardBody>
            <CardTitle>{this.state.card.title}</CardTitle>
            <CardSubtitle>Ингредиенты</CardSubtitle>
            <CardText>{this.state.card.body}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
};