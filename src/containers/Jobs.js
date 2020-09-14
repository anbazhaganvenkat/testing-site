import React, { Component } from "react";
// CSS
import "../css/jobs.css";

class Jobs extends Component {

  render() {
    return (
          <div>
            <div className="container-fluid bg-light pt-5 pb-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center mt-sm-2 mt-lg-0 mt-xs-0 mt-3 mt-md-0">
                    <h4>
                      <span className="text-danger">ThiDiff ?</span>
                    </h4>
                    <p>
                      We do not offer job. We give platform for you to build
                      your career.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
export default Jobs;
