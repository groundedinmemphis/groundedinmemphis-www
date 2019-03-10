import React from 'react';
import { get } from 'lodash';
import Helmet from 'react-helmet';
import Logo from 'assets/svg/ueno-logo.svg';
import Instagram from 'assets/svg/instagram.svg';
import Facebook from 'assets/svg/facebook.svg';
import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';
import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => {
  const theme = get(
    children,
    'props.pageResources.component.navigationTheme',
    'dark'
  );

  return (
    <div className={s.layout}>
      <Helmet {...helmet} />

      <Header theme={theme} />

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
