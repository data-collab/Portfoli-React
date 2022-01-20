import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import primLanguage from "./res_primaryLanguage.json";


class Projects extends Component {
  constructor(props) {
    super(props);
    console.log('Project Props: ' + JSON.stringify(props))
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (primLanguage) {
      var sectionName = primLanguage.basic_info.section_name.projects;
      var projects = primLanguage.projects.map(function (projects) {
        return (
            <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={projects.title}
                style={{ cursor: "pointer" }}
            >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                      src={projects.images[0]}
                      alt="projectImages"
                      height="230"
                      style={{marginBottom: 0, paddingBottom: '30px', position: 'relative', height: '200px'}}
                  />
                  <span
                      className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
            </div>
        );
      });
    }

    return (
        <section id="portfolio">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projects}</div>
            </div>
            <ProjectDetailsModal
                show={this.state.detailsModalShow}
                onHide={detailsModalClose}
                data={this.state.deps}
            />
          </div>
        </section>
    );
  }
}

export default Projects;
