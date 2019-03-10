import Facebook from 'assets/svg/facebook.svg';
import Instagram from 'assets/svg/instagram.svg';
import Logo from 'assets/svg/ueno-logo.svg';
import { Devtools } from 'components/devtools/Devtools';
import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import React from 'react';
import Helmet from 'react-helmet';
import { helmet } from 'utils/helmet';
import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
  pageContext: {
    theme?: string;
  };
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children, pageContext, location }: IAppLayoutProps) => {
  return (
    <div className={s.layout}>
      <Helmet {...helmet} />

      <Header theme={pageContext.theme} location={location} />

      {children}

      <Footer
        logo={<Logo />}
        social={[
          { icon: <Instagram />, to: 'https://www.instagram.com/' },
          { icon: <Facebook />, to: 'https://www.facebook.com/' },
        ]}
      />

      {isDev && <Devtools />}
    </div>
  );
};
