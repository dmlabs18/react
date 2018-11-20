import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Crumbs = (props) => {
  return (
    <div className="crumbs">
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Главная</a></BreadcrumbItem>
        <BreadcrumbItem active>{props.sect}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Crumbs;