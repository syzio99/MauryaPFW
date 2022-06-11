import React from "react";
import Icon1 from "../../images/Icon1.png"
import Icon2 from "../../images/layers.png"
import Icon3 from "../../images/coding.png"

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP} from "./ServicesElements"


const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>My Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Frontend Development</ServicesH2>
            <ServicesP>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                dijnsjkhnsknslkslk
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Backend Development </ServicesH2>
            <ServicesP>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              veniam magni quibusdam nesciunt,
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Software Development </ServicesH2>
            <ServicesP>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              veniam magni quibusd
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
