import SprayImageTop from 'assets/images/draw-4.png';
import JumpImage from 'assets/images/jump.png';
import LookImage from 'assets/images/look.png';
import RainImage from 'assets/images/rain.png';
import CloseIcon from 'assets/svg/close.svg';
import BigLogo from 'assets/svg/logo-big.svg';
import LogoWhite from 'assets/svg/grounded-workmark-white.svg';
import OpeningText from 'assets/svg/opening-text.svg';
import { Container } from 'components/container/Container';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import s from './homepage.scss';
import SprayImageFoot from 'assets/images/spray-foot.png';
import { graphql, Link } from 'gatsby';
import { TimelineLite } from 'gsap';
import { t as typy } from 'typy';
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
  console.log(bodyText);
  // const svg = React.useRef(null);
  // React.useEffect(() => {
  //   if (svg && svg.current) {
  //     const texts = Array.from(svg.current.querySelectorAll('text'));
  //     const timeline = new TimelineLite();
  //     timeline.set(texts[2], { alpha: 0 });
  //     timeline.to(texts[0], 1, { strokeDashoffset: 0 }, 0.4);
  //     timeline.to(texts[1], 1, { strokeDashoffset: 0 }, '-=0.2');
  //     timeline.to(texts[2], 1, { alpha: 1 }, '-=0.3');
  //   }
  // }, [svg]);

  const [openModal, setOpenModal] = React.useState(false);

  const videoURL =
    'https://nuu-group.sfo2.digitaloceanspaces.com/clients/we-are-grounded/preview.mp4';
  // const videoURL;

  return (
    <>
      <Helmet title="Inspiring a city to walk together" />
      {openModal ? (
        <div className={s.modal__wrap}>
          <div
            className={s.modal__overlay}
            onClick={() => setOpenModal(false)}
          />
          <div className={s.modal__close} onClick={() => setOpenModal(false)}>
            <CloseIcon />
          </div>
          <div className={s.modal__content}>
            <video controls className={s.opening__image__background__video}>
              <source src={videoURL} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}
      <div className={s.opening__image}>
        <div
          className={
            videoURL ? s.opening__image__videoBG : s.opening__image__background
          }
        >
          {videoURL ? (
            <>
              <div className={s.opening__image__videoBG__over} />
              <video
                loop
                muted
                autoPlay
                className={s.opening__image__videoBG__video}
              >
                <source src={videoURL} type="video/mp4" />
              </video>
            </>
          ) : (
            <Img
              {...data.mainImage.childImageSharp}
              imgStyle={{ objectPosition: '70% 100%' }}
            />
          )}
        </div>
        <div className={s.opening__image__content}>
          {!videoURL ? (
            <div className={s.opening__image__big__logo}>
              <BigLogo />
            </div>
          ) : (
            <div className={s.opening__image__contwrapped}>
              <button
                onClick={() => setOpenModal(true)}
                className={s.opening__image__contwrapped__link}
              >
                <div className={s.opening__image__contwrapped__link__icon} />
                Play Video
              </button>
              <LogoWhite className={s.opening__image__contwrapped__svg} />
              <p className={s.opening__image__contwrapped__legend}>
                Grounded is an organization created by Memphis artists to
                harness the power of art to inspire healing
              </p>
            </div>
          )}

          {/* <div className={s.opening__image__text} id="big_g">
            <svg className="" width="41" height="80" viewBox="0 0 41 80" fill="none"><path d="M0 40.0615V55.1486H14.697L0 69.742V80.0005H11.1431L24.9865 66.2402V80.0005H40.1647V55.1486V40.0615H24.9865H0Z" fill="white"></path><path d="M0 0V15.087H24.9865V25.0988H40.1647V15.087V4.85932V1.32667V0H0Z" fill="white"></path></svg>
          </div> */}
          {/* <div className={s.opening__image__spray}>
            <img src={SprayImageTop} alt="spray" />
          </div> */}
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
            <Link to="/purpose">Our Purpose</Link>
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
