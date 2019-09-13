import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

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
                Founded in 2019 and in action since 2012, Grounded is an
                organization of artists and storytellers who know Memphis inside
                and out. We believe artists have the power to inspire students,
                communities, and cities to unite, pursue their passions, and end
                cycles of violence.
              </p>

              <p>
                Statistically, Memphis is a traumatized city. It is ranked as
                one of the worst cities in the nation for violent crime. It’s
                homicide rate is the third highest among the country’s largest
                cities. One in every 30 black males in Tennessee are
                incarcerated. Memphis also sits at the top of the list for
                overall poverty and childhood poverty.
              </p>

              <p>
                Memphis is also the place where Dr. Martin Luther King, Jr. was
                assassinated more than 50 years ago. The lasting wounds from the
                city’s trauma are amplified by increasing violence, racial
                discrimination and the criminialization of poverty.
              </p>
              <p>
                While Memphis has many challenges, it is also full of
                possibility, profound authenticity, powerful thinking, creative
                solutions, and limitless inspiration. These forms of resilience,
                when combined with art and mindfulness, generate opportunities
                for healing.
              </p>

              <div className={s.Spray__Top}>
                <img src={SprayImageFoot} alt="spray" />
              </div>
            </>
          }
        />

        <BlockText
          heading="What We Do"
          description={
            <>
              <p>
                Our shared purpose is to create conscious content that is
                impactful, meaningful and inspiring, while serving the larger
                mission of using creativity as a means of connecting and
                galvanizing communities around important social issues.
              </p>

              <p>
                We are guided by <Link to="/methodology">our methodology</Link>{' '}
                of using art as a vehicle for growth, trauma release, and
                transformation.
              </p>

              <p>
                We know there is greater opportunity for art and mindfulness,
                when paired with a network of collaborators, to create emotional
                outcomes such as empathy, compassion, healing, happiness and
                confidence.
              </p>

              <p>
                Research shows that engagement with the creative arts --
                specifically music engagement, visual arts therapy,
                movement-based creative expression, and creative writing can
                help to heal trauma and improve health and behavioral outcomes.
              </p>

              <p>
                We have already seen positive outcomes. Last year during our
                four month pilot program in a Memphis juvenile detention center,
                there was a 54% reduction in violence. And during a recent
                public art installation at the site of a homicide, family
                members who had lost a loved one to gun violence were able to
                find new meaning and healing in a place that was difficult to
                confront. In the fall of 2019, educational curriculum that
                accompanies our film Me and the Light, will be implemented in
                Memphis schools to teach the difficult history of our city and
                to prompt conversations about conscious choices and resilience.
              </p>

              <p>
                By using the arts as a strategic vehicle for targeting larger
                issues, our work also aligns with national cause-based
                organizations and initiatives. By sharing with other communities
                and cities what we're learning, Grounded can assist in
                coordinating effective artist-driven solutions for social
                change.
              </p>
            </>
          }
        />

        <BlockText
          heading="Our collaborators"
          description={
            <>
              <p>We work in association with an open network, including:</p>
            </>
          }
        />

        <Container>
          <ItemList>
            <li>Students and young artists</li>
            <li>Local communities</li>
            <li>Educators and school districts</li>
            <li>Juvenile detention facilities</li>
            <li>Producers and creative production houses</li>
            <li>Judges and the criminal justice system</li>
            <li>Philanthropists and nonprofit groups</li>
            <li>Scientists</li>
            <li>Mental health professionals</li>
            <li>City leaders and law enforcement </li>
          </ItemList>
        </Container>
      </div>

      <div className={s.Spray__Bottom}>
        <img src={SprayImageSingleStroke} alt="spray" />
      </div>
    </>
  );
};
