import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./App.css";

const ProductRow = (props) => {
  let btnClass = classNames("", {
    "col-md-12": props.listView,
    " col-xs-12 col-sm-6 col-md-4 col-lg-3 thumbnail-grid": props.gridView,
  });
  // let statusClass = classNames('list-status list-text-block',{
  //     'draft-color': props.data.status === 'Draft',
  //     'published-color': props.data.status === 'Published',
  //     'routed-color': props.data.status === 'Routed',
  //     'work-color': props.data.status === 'Work Done',
  //     'assigned-color': props.data.status === 'Assigned',
  // });
  return (
    <div
      className={btnClass}
      style={{ paddingRight: props.listView === true ? "0rem" : "1rem" }}
    >
      <div className="caption">
        <h4 className="group inner list-group-item-heading list-text-block">
          {props.data.eventname}
        </h4>
        <p className="group inner list-group-item-text list-group-item-id list-text-block">
          <strong>{props.listView === true ? "" : "Date & Time:"}</strong>
          {props.data.start_time_display}
        </p>
        {/* <p>
          <strong>Status:</strong>
          {props.data.label}
        </p> */}
        <p className="list-address list-text-block">
          <strong>{props.listView === true ? "" : "Address:"}</strong>
          {props.data.venue.full_address}
        </p>
        {/* <p className="list-amount list-text-block">
          <strong>Pay:</strong>
          {props.data.pay_amount}
          {props.data.pay_type}
        </p>
        <p className="list-date list-text-block">
          <strong>Service Date:</strong>
          {props.data.service_date}
          <br />
          {props.data.service_time}
        </p> */}
      </div>
    </div>
  );
};

ProductRow.propTypes = {
  listView: PropTypes.bool,
  gridView: PropTypes.bool,
};

export default ProductRow;
