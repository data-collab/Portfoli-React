import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import primLanguage from "./res_primaryLanguage.json";

class About extends Component {
  render() {
    if (primLanguage) {
      var sectionName = primLanguage.basic_info.section_name.about;
      var hello = primLanguage.basic_info.description_header;
      var about = primLanguage.basic_info.description;
    }

    return (
        <section id="about">
          <div className="col-md-12">
            <h1 style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="row center mx-auto mb-5">
              <div className="col-md-4 mb-5 center">
                <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                      height="210px"
                      width='200px'
                      border='15px'
                      src={'https://avatars.githubusercontent.com/u/71837739?s=400&u=09a507e83a97bfac3989dcdf51deb386c37ee4ee&v=4'}
                      alt="Avatar placeholder"
                  />
                  <Icon
                      icon={angularIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                      icon={reactIcon}
                      style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
                </div>
              </div>

              <div className="col-md-8 center">
                <div className="col-md-10">
                  <div className="card">
                    <div className="card-header">
                    <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                    ></span>{" "}
                      &nbsp;{" "}
                      <span
                          className="iconify"
                          data-icon="twemoji:yellow-circle"
                          data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                          className="iconify"
                          data-icon="twemoji:green-circle"
                          data-inline="false"
                      ></span>
                    </div>
                    <div
                        className="card-body font-trebuchet text-justify ml-3 mr-3"
                        style={{
                          height: "auto",
                          fontSize: "132%",
                          lineHeight: "200%",
                        }}
                    >
                      <br />
                      <span className="wave">{hello} </span>
                      <br />
                      <br />
                      {about}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default About;
