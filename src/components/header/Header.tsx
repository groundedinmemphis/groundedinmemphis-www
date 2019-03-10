import React from 'react';
import { Link } from 'gatsby';
import GroundedLogo from 'assets/svg/grounded-workmark-no-mark.svg';
import s from './Header.scss';
import { Link as HeaderLink } from 'components/header/Link';

interface IHeaderProps {
  children: React.ReactNode;
  theme: 'dark' | 'light';
}

export const Header = (props: IHeaderProps) => {
  const { children, theme } = props;
  const header__light = theme === 'light'; // tslint:disable-line

  return (
    <header className={s('header', { header__light })}>
      <div className={s.header__container}>
        <div className={s.header__content}>
          <div className={s.header__navigation}>
            <div className={s.header__left}>
              <Link to="/" className={s.header__logo}>
                <GroundedLogo className={s.header__logoSvg} />
              </Link>
              <HeaderLink name="About" to="/about" />
              <HeaderLink name="Projects" to="/projects" />
              <HeaderLink name="Methodology" to="/methodology" />
              <HeaderLink name="Purpose" to="/purpose" />
              <HeaderLink name="Meet the Team" to="/meet-the-team" />
            </div>
            <div className={s.header__right}>
              <HeaderLink name="Partner with Us" to="/partner" />
              <HeaderLink name="Donate" to="/donate" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
