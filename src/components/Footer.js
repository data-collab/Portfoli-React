import React, { Component } from "react";
import primShared from "./portfolio_shared_data.json";

class Footer extends Component {
  render() {
    if (primShared) {
      var networks = primShared.basic_info.social.map(function (network) {
        return (
            <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
        <footer>
          <div className="col-md-12">
            <div className="social-links">{networks}</div>

            <div className="copyright py-4 text-center">
              <div className="container">
                <small>
                  Created by {"Davit Gvasalia"}

                </small>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
