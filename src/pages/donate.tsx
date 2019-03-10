import React from 'react';
import Helmet from 'react-helmet';

import { Container } from 'components/container/Container';

import { BlockText } from 'components/block-text/BlockText';
import { ItemList } from 'components/item-list/ItemList';
import { PageIntro } from 'components/intro/PageIntro';

export default () => {
  return (
    <>
      <Helmet title="Purpose" />

      <p>Support us with a donation.</p>
      <p>When you donate, you'll do more than lorem</p>
      <script src="https://donorbox.org/widget.js" paypalExpress="false" />
      <iframe
        src="https://donorbox.org/embed/hello-3"
        height="685px"
        width="100%"
        style={{
          maxWidth: '500px',
          minWidth: '310px',
          maxHeight: 'none!important',
        }}
        seamless="seamless"
        name="donorbox"
        frameborder="0"
        scrolling="no"
        allowpaymentrequest
      />

      <Container>
        <PageIntro
          title={
            <>
              What makes us <br />
              grounded
            </>
          }
        />
      </Container>

      <BlockText
        heading="About Grounded"
        description={
          <>
            <p>
              Founded in 2012, Grounded is a nonprofit artistic collective
              rooted in the Memphis community. We believe artists have the power
              to inspire students, communities, and cities to unite, pursue
              their passions, and end cycles of violence.
            </p>

            <p>
              Our core team and expansive network of collaborators bring an
              exceptional level of talent, professionalism and authenticity to
              all of our projects.
            </p>
          </>
        }
      />

      <BlockText
        heading="What We Do"
        description={
          <>
            <p>
              Our shared purpose is to create content that is meaningful and
              inspiring while serving the larger mission of using creativity as
              a means of connecting and activating communities around important
              social issues.
            </p>

            <p>
              We are guided by <a href="#">our methodology</a> of using art to
              advance non-violence education and as a tool for change, growth,
              and transformation. We know there is greater opportunity for art
              and mindfulness paired with a network of collaborators to create
              safer cities and a healthier community.
            </p>
          </>
        }
      />

      <BlockText
        heading="Our Partners"
        description={
          <>
            <p>
              We work with the best lorem ipsum dolor sit amet del donde
              seninkininde.
            </p>
          </>
        }
      />
    </>
  );
};
