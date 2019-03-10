import React from 'react';
import { Link } from 'gatsby';
import GroundedLogo from 'assets/svg/grounded-workmark-no-mark.svg';
import GroundedLogoWithMark from 'assets/svg/grounded-workmark.svg';
import IconMenu from 'assets/svg/icon-menu.svg';

import s from './Header.scss';
import { Link as HeaderLink } from 'components/header/Link';

interface IHeaderProps {
  children?: React.ReactNode;
  theme: 'dark' | 'light';
}

export const Header = (props: IHeaderProps) => {
  const { children, theme } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const header__light = theme === 'light'; // tslint:disable-line
  const header__navigation__open = isOpen; // tslint:disable-line

  const handleClick = () => {
    setIsOpen(!isOpen);
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
              <HeaderLink name="Partner with Us" to="/#partner" />
              <HeaderLink name="Donate" to="/donate" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
