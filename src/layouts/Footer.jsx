import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  a {
    color: yellow;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        好書推薦網 -{' '}
        <a href="https://chihyu.me/">ChihYu</a>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
