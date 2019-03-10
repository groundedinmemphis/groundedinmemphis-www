import React from 'react';
import Helmet from 'react-helmet';
import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Email } from 'components/email/email';
import s from './homepage.scss';
import BigLogo from 'assets/svg/logo-big.svg';
import OpeningText from 'assets/svg/opening-text.svg';
import { Container } from 'components/container/Container';
import SprayImageTop from 'assets/images/draw-4.png';
import SprayImageFooter from 'assets/images/draw.png';
import RainImage from 'assets/images/rain.png';
import JumpImage from 'assets/images/jump.png';
import LookImage from 'assets/images/look.png';

const Homepage = () => (
  <>
    <Helmet title="Home" />

    <div className={s.opening__image}>
      <div className={s.opening__image__big__logo}>
        <BigLogo />
      </div>

      <div className={s.opening__image__text}>
        <OpeningText />
      </div>
      <div className={s.opening__image__spray}>
        <img src={SprayImageTop} alt="spray" />
      </div>
    </div>
    <Container>
      <div className={s.body__content}>
        <div className={s.two__column__text}>
          <p>
            From the streets of Memphis, we are a collective of artists,
            musicians, dancers, filmmakers, and students inspiring our community
            though collaborative expression.
          </p>
          <p>
            Grounded works in neighborhoods, with juvenile detention facilities
            and schools, and builds teams of student collaborators to creatively
            address youth violence in Memphis.
          </p>
        </div>
        <div className={s.button__row}>
          <a href="">Meet the Team</a>
        </div>
      </div>
    </Container>
    <div className={s.image__grid}>
      <img src={RainImage} alt="" />
      <img src={JumpImage} alt="" />
      <img src={LookImage} alt="" />
    </div>

    <Container>
      <div className={s.body__content}>
        <div className={s.two__column__text}>
          <p>
            From the streets of Memphis, we are a collective of artists,
            musicians, dancers, filmmakers, and students inspiring our community
            though collaborative expression.
          </p>
          <p>
            Grounded works in neighborhoods, with juvenile detention facilities
            and schools, and builds teams of student collaborators to creatively
            address youth violence in Memphis.
          </p>
        </div>
        <div className={s.button__row}>
          <a href="">Meet the Team</a>
        </div>
      </div>
    </Container>
  </>
);

Homepage.navigationTheme = 'light';

export default Homepage;
