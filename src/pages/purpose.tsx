import React from 'react';
import Helmet from 'react-helmet';

import { Container } from 'components/container/Container';

// import { graphql } from 'gatsby';

import { BlockText } from 'components/block-text/BlockText';
import { ItemList } from 'components/item-list/ItemList';
import { PageIntro } from 'components/intro/PageIntro';

import SprayImageFoot from 'assets/images/spray-foot.png';
import SprayImageSingleStroke from 'assets/images/spray-single.png';

import s from './purpose.scss';

export default () => {
  return (
    <>
      <Helmet title="Purpose" />

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

      <div className={s.Purpose}>
        <BlockText
          heading="About Grounded"
          description={
            <>
              <p>
                Founded in 2012, Grounded is a nonprofit artistic collective
                rooted in the Memphis community. We believe artists have the
                power to inspire students, communities, and cities to unite,
                pursue their passions, and end cycles of violence.
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
                inspiring while serving the larger mission of using creativity
                as a means of connecting and activating communities around
                important social issues.
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

        <Container>
          <ItemList>
            <li>Educators &amp; school districts</li>
            <li>Scientists</li>
            <li>Juvenile detention facilities</li>
            <li>Mental health professionals</li>
            <li>Producers</li>
            <li>City leaders</li>
            <li>Judges</li>
            <li>Law enforcement </li>
            <li>Philanthropists</li>
            <li>Our communities</li>
            <li>Scientists</li>
          </ItemList>
        </Container>
      </div>

      <div className={s.Spray__Top}>
        <img src={SprayImageFoot} alt="spray" />
      </div>

      <div className={s.Spray__Bottom}>
        <img src={SprayImageSingleStroke} alt="spray" />
      </div>
    </>
  );
};
