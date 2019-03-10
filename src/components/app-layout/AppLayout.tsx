import React from 'react';
import Helmet from 'react-helmet';
import Logo from 'assets/svg/ueno-logo.svg';
import Instagram from 'assets/svg/instagram.svg';
import Facebook from 'assets/svg/facebook.svg';
import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';
import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => {
  const theme = (children as any).props.pageResources.component.navigationTheme;

  return (
    <div className={s.layout}>
      <Helmet {...helmet} />

      <Header theme={theme}>
        <HeaderLink name="About" to="/about" />
        <HeaderLink name="Projects" to="/projects" />
        <HeaderLink name="Methodology" to="/methodology" />
        <HeaderLink name="Purpose" to="/purpose" />
        <HeaderLink name="Meet the Team" to="/meet-the-team" />
        <HeaderLink name="Partner with Us" to="/partner" />
        <HeaderLink name="Donate" to="/donate" />
      </Header>

      {children}

      <Footer
        logo={<Logo />}
        social={[
          // { icon: <Dribbble />, to: 'https://dribbble.com/ueno' },
          // { icon: <Twitter />, to: 'https://twitter.com/uenodotco' },
          // { icon: <Github />, to: 'https://github.com/ueno-llc' },
          { icon: <Instagram />, to: 'https://www.instagram.com/' },
          { icon: <Facebook />, to: 'https://www.facebook.com/' },
          // { icon: <Linkedin />, to: 'https://www.linkedin.com/company/ueno' },
        ]}
      />

      {isDev && <Devtools />}
    </div>
  );
};
