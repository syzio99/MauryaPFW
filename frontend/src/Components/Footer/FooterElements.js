import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
   background: linear-gradient( rgba(0,0,0,1), rgba(0,0,0,1));
`;

export const FooterWarp = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialLinks = styled.section`
  max-width: 1000px;
  width: 100px;
`;

export const SocialLinksWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 24px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #f55422;
    text-decoration: none;
  }
`;

export const SocailIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: #f55422;
  }
`;

export const Rights = styled.small`
  color: #fff;
  margin-top: 16px;
`;
