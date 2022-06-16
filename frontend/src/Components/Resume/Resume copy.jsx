import React from "react";
import { useState } from "react";
import "./ResumeElements.css";

export default function Resume() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="messages-tab"
            data-bs-toggle="tab"
            data-bs-target="#messages"
            type="button"
            role="tab"
            aria-controls="messages"
            aria-selected="false"
          >
            Messages
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="settings-tab"
            data-bs-toggle="tab"
            data-bs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Settings
          </button>
        </li>
      </ul>

      <div class="tab-content">
        <div
          class="tab-pane active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          ...
        </div>
        <div
          class="tab-pane"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          ...
        </div>
        <div
          class="tab-pane"
          id="messages"
          role="tabpanel"
          aria-labelledby="messages-tab"
        >
          ...
        </div>
        <div
          class="tab-pane"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          ...
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="bloc-tabs">
    //     <button
    //       className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
    //       onClick={() => toggleTab(1)}
    //     >
    //       Tab 1
    //     </button>
    //     <button
    //       className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
    //       onClick={() => toggleTab(2)}
    //     >
    //       Tab 2
    //     </button>
    //     <button
    //       className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
    //       onClick={() => toggleTab(3)}
    //     >
    //       Tab 3
    //     </button>
    //   </div>

    //   <div className="content-tabs">
    //     <div
    //       className={toggleState === 1 ? "content  active-content" : "content"}
    //     >
    //       <h2>Content 1</h2>
    //       <hr />
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //         praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
    //         vel voluptatum?
    //       </p>
    //     </div>

    //     <div
    //       className={toggleState === 2 ? "content  active-content" : "content"}
    //     >
    //       <h2>Content 2</h2>
    //       <hr />
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
    //         voluptatum qui adipisci.
    //       </p>
    //     </div>

    //     <div
    //       className={toggleState === 3 ? "content  active-content" : "content"}
    //     >
    //       <h2>Content 3</h2>
    //       <hr />
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
    //         nostrum rerum laudantium totam unde adipisci incidunt modi alias!
    //         Accusamus in quia odit aspernatur provident et ad vel distinctio
    //         recusandae totam quidem repudiandae omnis veritatis nostrum
    //         laboriosam architecto optio rem, dignissimos voluptatum beatae
    //         aperiam voluptatem atque. Beatae rerum dolores sunt.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
