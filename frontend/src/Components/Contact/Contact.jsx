import React from "react";

import { Emailer } from "./Emailer";

export default function Contact() {

  return (
    <section id="contact" className="resumeContainer">
          <div className="container resumeWrapper">
            <div className="row ">
            <h1 class="text-center pb-5">Contact</h1>
              
            </div>
            <div className="row ">
              <div className="col-md-6">
              <h3>Let's talk about</h3>
              <h1>everything! </h1>
               <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
               maiores quo, omnis doloremque blanditiis, recusandae iusto culpa
                 fugiat hic facere enim quas! Sed vero nostrum nemo aspernatur.
                 Eos, in debitis?
               </p>
              </div>

              <div className="col-md-6">
                <Emailer />
              </div>
            </div>
          </div>
        </section>
  );
}
