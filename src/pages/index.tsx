import SprayImageTop from 'assets/images/draw-4.png';
import JumpImage from 'assets/images/jump.png';
import LookImage from 'assets/images/look.png';
import RainImage from 'assets/images/rain.png';
import BigLogo from 'assets/svg/logo-big.svg';
import OpeningText from 'assets/svg/opening-text.svg';
import { Container } from 'components/container/Container';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import s from './homepage.scss';
import SprayImageFoot from 'assets/images/spray-foot.png';
import { graphql, Link } from 'gatsby';
import { TimelineLite } from 'gsap';
import RichText from 'components/rich-text/RichText';

const words = ['ART', 'MUSIC', 'CREATIVITY', 'MEDITATION', 'HEALING'];
const randomWord = words[Math.floor(Math.random() * words.length)];

export const query = graphql`
  query {
    mainImage: file(relativePath: { eq: "main.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prismicHomepage {
      data {
        mission_long {
          html
          text
          raw {
            type
            text
          }
        }
        mission_short {
          html
          text
        }
        story_long {
          html
          text
        }
        story_short {
          html
          text
        }
      }
    }
  }
`;

const Homepage = ({ data }: any) => {
  const bodyText = data.prismicHomepage.data;
  const svg = React.useRef(null);
  React.useEffect(() => {
    if (svg && svg.current) {
      const texts = Array.from(svg.current.querySelectorAll('text'));
      const timeline = new TimelineLite();
      timeline.set(texts[2], { alpha: 0 });
      timeline.to(texts[0], 1, { strokeDashoffset: 0 }, 0.4);
      timeline.to(texts[1], 1, { strokeDashoffset: 0 }, '-=0.2');
      timeline.to(texts[2], 1, { alpha: 1 }, '-=0.3');
    }
  }, [svg]);

  return (
    <>
      <Helmet title="Inspiring a city to walk together" />
      <div className={s.opening__image}>
        <div className={s.opening__image__background}>
          <Img {...data.mainImage.childImageSharp} />
        </div>
        <div className={s.opening__image__content}>
          <div className={s.opening__image__big__logo}>
            <BigLogo />
          </div>

          <div className={s.opening__image__text} id="big_g" ref={svg}>
            <svg width="600" height="210" viewBox="0 0 600 210" fill="none">
              <text
                stroke="white"
                strokeWidth="2"
                strokeDasharray={880}
                strokeDashoffset={880}
                style={{ whiteSpace: 'pre' }}
                fontFamily="Anton"
                fontSize="120"
                letterSpacing="0.05em"
              >
                <tspan x="-0.000976562" y="95.56">
                  GROUNDED
                </tspan>
              </text>
              <text
                stroke="white"
                strokeWidth="2"
                strokeDasharray={880}
                strokeDashoffset={880}
                style={{ whiteSpace: 'pre' }}
                fontFamily="Anton"
                fontSize="120"
                letterSpacing="0.05em"
              >
                <tspan x="-0.000976562" y="200.56">
                  BY
                </tspan>
              </text>
              <text
                fill="white"
                style={{ whiteSpace: 'pre' }}
                fontFamily="Anton"
                fontSize="120"
                letterSpacing="0.02em"
              >
                <tspan x="98.999" y="200.56">
                  {randomWord}
                </tspan>
              </text>
            </svg>
          </div>
          <div className={s.opening__image__spray}>
            <img src={SprayImageTop} alt="spray" />
          </div>
        </div>
      </div>
      <div className={s.content}>
        <Container>
          <div className={s.body__content}>
            <div className={s.two__column__text}>
              <div className={s.two__column__text__big}>
                <p>Our Story</p>
                <p>{bodyText.story_short.text}</p>
              </div>
              <div className={s.two__column__text__small}>
                <p>{bodyText.story_long.text}</p>
              </div>
            </div>
            <div className={s.button__row}>
              <Link to="/projects">See our Work</Link>
              <Link to="/meet-the-team">Meet the Team</Link>
            </div>
          </div>
        </Container>
        <div className={s.image__grid}>
          <img src={RainImage} alt="Rainy" />
          <img src={JumpImage} alt="Jumpy" />
          <img src={LookImage} alt="Looky" />
        </div>
        <div className={s.body__content}>
          <div className={s.two__column__text}>
            <div className={s.two__column__text__big}>
              <p>Our Mission</p>
              <p>{bodyText.mission_short.text}</p>
            </div>
            <div
              className={s.two__column__text__small}
              dangerouslySetInnerHTML={{ __html: bodyText.mission_long.html }}
            />
          </div>
          <div className={s.button__row}>
            <Link to="/meet-the-team">Our Purpose</Link>
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
