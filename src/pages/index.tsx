import React from 'react';
import Helmet from 'react-helmet';
import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Email } from 'components/email/email';
import s from './homepage.scss';
import BigLogo from 'assets/svg/logo-big.svg';
import OpeningText from 'assets/svg/opening-text.svg';

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
    </div>

    <Email />

    <BlockText
      heading="Who we are"
      description={
        <>
          Ueno is a full-service agency, busy designing and building beautiful
          digital products, brands, and experiences. For more informations go to{' '}
          <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
            ueno.co
          </a>
          .
        </>
      }
    />
  </>
);

Homepage.navigationTheme = 'light';

export default Homepage;
