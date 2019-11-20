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
                projects, programs, collaborators and communities in Memphis.
              </p>
              <p>
                Contributions to Grounded are tax-deductible to the extent
                permitted by law.
              </p>
              <p>
                Donations will be made to MLB Uptown, LLC which a registered
                501(c)(3) tax-exempt nonprofit organization. MLB Uptown, LLC is
                the fiscal sponsor of Grounded and 100% of your donation will go
                to Grounded.
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
        frameBorder="0"
        scrolling="no"
        allowpaymentrequest
      />
    </div>
  );
};
