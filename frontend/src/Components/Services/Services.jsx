import React from "react";
import Icon1 from "../../images/Icon1.png";
import Icon2 from "../../images/layers.png";
import Icon3 from "../../images/coding.png";
import Flip from "react-reveal/Flip";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>My Services</ServicesH1>
        <ServicesWrapper>
          <Flip left>
            <ServicesCard>
              <ServicesIcon src={Icon1} />
              <ServicesH2>Frontend Development</ServicesH2>
              <ServicesP>
                Let me put together a Stunning UI for your website. I work with
                newest front-end frameworks like React.
              </ServicesP>
            </ServicesCard>
          </Flip>

          <Flip left>
            <ServicesCard>
              <ServicesIcon src={Icon2} />
              <ServicesH2>Backend Development </ServicesH2>
              <ServicesP>
                Need your website putting together? Let me handle that. I work
                with cross-platform runtime environment like Node.
              </ServicesP>
            </ServicesCard>
          </Flip>

          <Flip left>
            <ServicesCard>
              <ServicesIcon src={Icon3} />
              <ServicesH2>Software Development </ServicesH2>
              <ServicesP>
                Perhaps you want to create an application. I can make it happen.
              </ServicesP>
            </ServicesCard>
          </Flip>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
