import SprayImageTop from 'assets/images/draw-4.png';
import JumpImage from 'assets/images/jump.png';
import LookImage from 'assets/images/look.png';
import RainImage from 'assets/images/rain.png';
import BigLogo from 'assets/svg/logo-big.svg';
import OpeningText from 'assets/svg/opening-text.svg';
import { Container } from 'components/container/Container';
import React from 'react';
import Helmet from 'react-helmet';
import s from './homepage.scss';
import SprayImageFoot from 'assets/images/spray-foot.png';

import { TimelineLite } from 'gsap';

const Homepage = () => {
  React.useEffect(() => {
    const svg = document.getElementById('big_g');
    if (svg) {
      const texts = Array.from(svg.querySelectorAll('text'));
      const timeline = new TimelineLite();
      timeline.set(texts[2], { alpha: 0 });
      timeline.to(texts[0], 0.75, { strokeDashoffset: '500px' });
      timeline.to(texts[1], 0.75, { strokeDashoffset: '500px' }, '-=0.2');
      timeline.to(texts[2], 1, { alpha: 1 }, '-=0.3');
    }
  }, []);

  return (
    <>
      <Helmet title="Inspiring a city to walk together" />
      <div className={s.opening__image}>
        <div className={s.opening__image__big__logo}>
          <BigLogo />
        </div>

        <div className={s.opening__image__text} id="big_g">
          <OpeningText />
        </div>
        <div className={s.opening__image__spray}>
          <img src={SprayImageTop} alt="spray" />
        </div>
      </div>
      <div className={s.content}>
        <Container>
          <div className={s.body__content}>
            <div className={s.two__column__text}>
              <div className={s.two__column__text__big}>
                <p>Our Story</p>
                <p>
                  From the streets of Memphis, we are a collective of artists,
                  musicians, dancers, filmmakers, and students inspiring our
                  community though collaborative expression.
                </p>
              </div>
              <div className={s.two__column__text__small}>
                <p>
                  Grounded works in neighborhoods, with juvenile detention
                  facilities and schools, and builds teams of student
                  collaborators to creatively address youth violence in Memphis.
                </p>
              </div>
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
        <div className={s.body__content}>
          <div className={s.two__column__text}>
            <div className={s.two__column__text__big}>
              <p>Our Mission</p>
              <p>
                From the streets of Memphis, we are a collective of artists,
                musicians, dancers, filmmakers, and students inspiring our
                community though collaborative expression.
              </p>
            </div>
            <div className={s.two__column__text__small}>
              <p>
                Grounded works in neighborhoods, with juvenile detention
                facilities and schools, and builds teams of student
                collaborators to creatively address youth violence in Memphis.
              </p>
            </div>
          </div>
          <div className={s.button__row}>
            <a href="">Meet the Team</a>
          </div>
        </div>
        <div className={s.spray__foot}>
          <img src={SprayImageFoot} alt="spray" />
        </div>
        <div className={s.spray__top}>
          <img src={SprayImageFoot} alt="spray" />
        </div>
      </div>
    </>
  );
};

Homepage.navigationTheme = 'light';

export default Homepage;
