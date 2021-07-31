import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";

export default class HomePage extends Component {
  state = {
    eventcategory: [],
  };

  componentDidMount() {
    localStorage.removeItem("listdata");
    axios
      .get("https://allevents.s3.amazonaws.com/tests/categories.json")
      .then((response) => {
        console.log(response.data);
        this.setState({ eventcategory: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div
        style={{
          paddingTop: "3%",
          paddingLeft: "3%",
          paddingRight: "3%",
          background: "#093028" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #237A57, #093028)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #237A57, #093028)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
        className="bodydiv"
      >
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                AllEvents.in
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Event Categories</a>
              </li>
              {/* <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li> */}
              <li style={{ float: "right" }}>
                <a href="#">Made by souvik das</a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />

        <div className="row categorymain">
          {this.state.eventcategory.map((eventcategory, index) => {
            return (
              <div
                className="col-sm-4 categorycard"
                style={{
                  marginBottom: "3%",
                  border: "solid grey 1px",
                  marginLeft: "2%",
                  paddingBottom: "2%",
                  borderRadius: "5px",
                  backgroundImage:
                    eventcategory.category === "music"
                      ? "url(https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
                      : eventcategory.category === "business"
                      ? "url(https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
                      : eventcategory.category === "sports"
                      ? "url(https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
                      : eventcategory.category === "workshops"
                      ? "url(https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
                      : "url(https://images.pexels.com/photos/4668244/pexels-photo-4668244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
                  backgroundSize: "cover",
                }}
              >
                <div className="card">
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        color: "white",
                      }}
                    >
                      {eventcategory.category[0].toUpperCase() +
                        eventcategory.category.substring(1)}
                    </h5>
                    <p className="card-text" style={{ color: "white" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                    <button
                      //   href="/ListingPage"
                      className="btn btn-primary btn-block"
                      onClick={() => {
                        // const newurl = `https${eventcategory.data.slice(
                        //   4,
                        //   eventcategory.data.length
                        // )}`;
                        // window.location = "/ListingPage";
                        axios
                          .get(
                            "https://" +
                              eventcategory.data.slice(
                                7,
                                eventcategory.data.length
                              )
                          )
                          .then((response) => {
                            console.log(response.data);
                            // console.log(
                            //   eventcategory.data.slice(
                            //     4,
                            //     eventcategory.data.length
                            //   )
                            // );
                            localStorage.setItem(
                              "listdata",
                              JSON.stringify(response.data.item)
                            );
                            window.location = "/ListingPage";
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      }}
                    >
                      View Listing
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
