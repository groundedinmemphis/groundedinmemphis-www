import React from 'react';
import { Container } from 'components/container/Container';
import { Email } from 'components/email/email';
import GroundedLogo from 'assets/svg/grounded-workmark.svg';
import { Link } from 'gatsby';

import s from './Footer.scss';

interface ISocial {
  icon: React.ReactNode;
  to: string;
}

interface IFooterProps {
  logo: React.ReactNode;
  social: ISocial[];
}

console.log({ s });

export const Footer = ({ logo, social }: IFooterProps) => (
  <>
    <div className={s.footer__contact__wrapper}>
      <Container>
        <div className={s.footer__contact}>
          <div className={s.contact__text}>
            <p>Interested in partnering with us?</p>
            <p>Contact us, let us know lorem.</p>
          </div>
          <div className={s.contact__form}>
            <form name="contact" method="POST" data-netlify="true">
              <p class={s.input__field}>
                <label>
                  <input type="text" name="name" placeholder="Name" />
                </label>
              </p>
              <p class={s.input__field}>
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </label>
              </p>
              <p class={s.input__field}>
                <label>
                  <textarea name="message" placeholder="Message" rows="10" />
                </label>
              </p>
              <p className={s.submit}>
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
    <div className={s.footer}>
      <Container>
        <div className={s.footer__content}>
          <div className={s.footer__content__wrapper}>
            <Link to="/" className={s.footer__logo}>
              <GroundedLogo className={s.footer__logoSvg} />
            </Link>
          </div>

          <ul className={s.footer__list}>
            {social.map(item => (
              <li key={item.to} className={s.footer__item}>
                <a href={item.to} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Email />
      </Container>
    </div>
  </>
);
