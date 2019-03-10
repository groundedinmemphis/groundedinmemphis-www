import React from 'react';
import Helmet from 'react-helmet';

import { Container } from 'components/container/Container';
import s from './donate.scss';

import { BlockText } from 'components/block-text/BlockText';
import { ItemList } from 'components/item-list/ItemList';
import { PageIntro } from 'components/intro/PageIntro';

export default () => {
  return (
    <div className={s.donate__page}>
      <Helmet title="Purpose" />

      <script src="https://donorbox.org/widget.js" paypalExpress="false" />

      <Container>
        <PageIntro
          title={
            <>
              Support us <br />
              with a donation
            </>
          }
        />
      </Container>
      <div className={s.block__text}>
        <BlockText
          heading=""
          description={
            <>
              <p>
                When you donate to Grounded, you'll be helping to support our
                collaborators, our projects and programs, and communities in
                Memphis.
              </p>
            </>
          }
        />
      </div>

      <iframe
        src="https://donorbox.org/embed/hello-3"
        height="685px"
        width="100%"
        style={{
          maxWidth: '500px',
          minWidth: '310px',
          maxHeight: 'none!important',
          margin: '0 auto',
          display: 'block',
        }}
        seamless="seamless"
        name="donorbox"
        frameborder="0"
        scrolling="no"
        allowpaymentrequest
      />
    </div>
  );
};
