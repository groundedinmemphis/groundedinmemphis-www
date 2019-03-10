import React from 'react';
import { Link } from 'gatsby';
import GroundedLogo from 'assets/svg/grounded-workmark-no-mark.svg';
import GroundedLogoWithMark from 'assets/svg/grounded-workmark.svg';
import IconMenu from 'assets/svg/icon-menu.svg';
import XMenu from 'assets/svg/x.svg';

import s from './Header.scss';
import { Link as HeaderLink } from 'components/header/Link';
import { TweenLite } from 'gsap';
import 'gsap/ScrollToPlugin';

interface IHeaderProps {
  children?: React.ReactNode;
  theme?: 'dark' | 'light';
}

export const Header = (props: IHeaderProps) => {
  const { theme } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const header__light = theme === 'light'; // tslint:disable-line
  const header__navigation__open = isOpen; // tslint:disable-line

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handlePartnerClick = (e: any) => {
    e.preventDefault();
    TweenLite.to(window, 1, { scrollTo: '#footer' });
    return false;
  };

  return (
    <header className={s('header', { header__light })}>
      <div className={s.header__container}>
        <div className={s.header__content}>
          <div className={s.header__mobile}>
            <GroundedLogoWithMark className={s.header__mobile__logo} />
            <button className={s.header__mobile__button} onClick={handleClick}>
              <IconMenu className={s.header__mobile__icon} />
            </button>
          </div>
          <div
            className={s('header__navigation', { header__navigation__open })}
          >
            <button className={s.closing_mobile_menu} onClick={handleClick}>
              <XMenu />
            </button>
            <div className={s.header__left}>
              <Link to="/" className={s.header__logo}>
                <GroundedLogo className={s.header__logoSvg} />
              </Link>
              <HeaderLink name="Projects" to="/projects" />
              <HeaderLink name="Purpose" to="/purpose" />
              <HeaderLink name="Methodology" to="/methodology" />
              <HeaderLink name="Meet the Team" to="/meet-the-team" />
              <HeaderLink name="News" to="/news" />
            </div>
            <div className={s.header__right}>
              <HeaderLink
                name="Partner with Us"
                to="/#partner"
                onClick={handlePartnerClick}
              />
              <HeaderLink name="Donate" to="/donate" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
