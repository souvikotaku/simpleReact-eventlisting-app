import React, { Component } from "react";
import classNames from "classnames";
import "./App.css";
import WorkOrders from "./WorkOrders";
import ProductRow from "./ProductRow";
import Header from "./Header";
import BtnGroup from "./BtnGroup";
import Sidebar from "./Sidebar";
import axios from "axios";

class ListingPage extends Component {
  state = {
    listView: false,
    gridView: true,
    value: "John Doe",
    modalVisibility: false,
    eventsdata: [],
  };

  componentDidMount() {
    // let listdata = JSON.parse(sessionStorage.getItem("listdata"));

    this.setState({
      eventsdata: JSON.parse(localStorage.getItem("listdata")),
    });
  }

  handleList = () => {
    this.setState({
      listView: true,
      gridView: false,
    });
  };
  handleGrid = () => {
    this.setState({
      listView: false,
      gridView: true,
    });
  };
  showModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };
  hideModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };
  handleSave = (event) => {
    this.setState({
      value: this.refs.nameForm.value,
      modalVisibility: false,
    });
  };

  render() {
    let modalStyle = this.state.modalVisibility ? "block" : "none";
    let btnClass = classNames("item", {
      "list-group-item": this.state.listView,
      "grid-group-item": this.state.gridView,
    });
    let rows = this.state.eventsdata.map((event) => {
      return (
        <ProductRow
          key={event.event_id}
          data={event}
          listView={this.state.listView}
          gridView={this.state.gridView}
        />
      );
    });

    return (
      <div className="container">
        <div
          className="modal fade bs-example-modal-sm in"
          tabindex="-1"
          style={{ display: modalStyle }}
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="mySmallModalLabel">
                  Edit Name
                </h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>
                    Name
                    <input
                      ref="nameForm"
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      defaultValue={this.state.value}
                    />
                  </label>
                  <br />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={this.hideModal}
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  onClick={this.handleSave}
                  type="button"
                  className="btn btn-success"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">{/* <Header /> */}</div>
        <div className="row row-eq-height gray-bg">
          {/* <Sidebar
                    value = {this.state.value}
                    showModal = {this.showModal}
                /> */}
          <div
            className="col-sm-9 col-xs-12 container"
            style={{ maxWidth: "100%", flexBasis: "100%" }}
          >
            {/* <h2>React JS List Grid View Interchange</h2> */}
            <div className="row">
              <div className="col-sm-offset-8 col-sm-4 text-right grid-space landscapebtn">
                <span
                  className="btn btn-default"
                  style={{ float: "left", marginLeft: "-200%" }}
                  onClick={() => {
                    window.location = "/";
                  }}
                >
                  <i className="glyphicon glyphicon-th-list" /> Back
                </span>
                <BtnGroup
                  handleList={this.handleList}
                  handleGrid={this.handleGrid}
                  listView={this.state.listView}
                  gridView={this.state.gridView}
                />
              </div>
              <div className="col-sm-offset-8 col-sm-4 text-right grid-space portraitbtn">
                <span
                  className="btn btn-default"
                  onClick={() => {
                    window.location = "/";
                  }}
                >
                  <i className="glyphicon glyphicon-th-list" /> Back
                </span>
                <BtnGroup
                  handleList={this.handleList}
                  handleGrid={this.handleGrid}
                  listView={this.state.listView}
                  gridView={this.state.gridView}
                />
              </div>
            </div>

            <div className={btnClass}>
              <div className="row auto-clear">
                <div className="table-row header caption">
                  <div
                    className="list-group-item-heading list-text-block"
                    style={{ marginLeft: "1rem", fontSize: "20px" }}
                  >
                    Title
                  </div>
                  <div
                    className=" list-text-block"
                    style={{ marginLeft: "-1rem", fontSize: "20px" }}
                  >
                    Date & Time
                  </div>
                  {/* <div className=" list-text-block">Status</div> */}
                  <div
                    className=" list-text-block"
                    style={{ marginLeft: "-3rem", fontSize: "20px" }}
                  >
                    Location
                  </div>
                  {/* <div className=" list-text-block">Pay</div>
                  <div className="list-date list-text-block">Date/Time</div> */}
                </div>
              </div>
              <div className="row auto-clear">{rows}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingPage;
