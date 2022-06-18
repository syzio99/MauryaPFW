import React, { Component } from 'react'

export class WorkEducation extends Component {
  render() {
    return (
        <div class="timeline">
        <div class="outer">
          <div class="card">
            <div class="info">
              <h3 class="title">Associate – Oracle Consultant</h3>
              <small className=" bg-base-color mb-2 fw-bold">
                {" "}
                06/2021 – Present{" "}
              </small>
              <p>PriceWaterhouseCoopers (PwC), Bangalore</p>
            </div>
          </div>
          <div class="card">
            <div class="info">
              <h3 class="title">Bachelor of Technology - Computer Science & Engineering</h3>
              <small className=" bg-base-color mb-2 fw-bold">
                06/2017 - 07/2021{" "}
              </small>
              <p>
              SRM Institute of Science and Technology, NCR Campus
              </p>
            </div>
          </div>
          <div class="card">
            <div class="info">
              <h3 class="title">Intern – Web Developer</h3>
              <small className=" bg-base-color mb-2 fw-bold">
                {" "}
                06/2019 - 07/2019{" "}
              </small>
              <p>NIIT LTD, Gurugram</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkEducation
