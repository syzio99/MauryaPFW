import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
export class WorkEducation extends Component {
  render() {
    return (
      <Fade>
                <div className="timeline">
        <div className="outer">
          <div className="card">
            <div className="info">
              <h3 className="title">Associate – Oracle Consultant</h3>
              <small className=" bg-base-color mb-2 fw-bold">
                {" "}
                06/2021 – Present{" "}
              </small>
              <p>PriceWaterhouseCoopers (PwC), Bangalore</p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="title">Bachelor of Technology - Computer Science & Engineering</h3>
              <small className=" bg-base-color mb-2 fw-bold">
                06/2017 - 07/2021{" "}
              </small>
              <p>
              SRM Institute of Science and Technology, NCR Campus
              </p>
            </div>
          </div>

          <div className="card">
            <div className="info">
              <h3 className="title">Intern – Web Developer</h3>
              <small className=" bg-base-color mb-2 fw-bold">
                {" "}
                06/2019 - 07/2019{" "}
              </small>
              <p>NIIT LTD, Gurugram</p>
            </div>
          </div>
        </div>
      </div>
      </Fade>

    )
  }
}

export default WorkEducation
