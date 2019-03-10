import React from 'react';
import { Container } from 'components/container/Container';
import { Email } from 'components/email/Email';
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
);
