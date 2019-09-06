import React from 'react';
import Helmet from 'react-helmet';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Container } from 'components/container/Container';
import { PageIntro } from 'components/intro/PageIntro';
import { BlockText } from 'components/block-text/BlockText';

import s from './methodology.scss';
import { ItemList } from 'components/item-list/ItemList';

import IconAbuse from 'assets/svg/icon-abuse.svg';
import IconNeglect from 'assets/svg/icon-neglect.svg';
import IconHd from 'assets/svg/icon-hd.svg';

export default () => {
  return (
    <>
      <Helmet title="Methodology" />

      <Container>
        <PageIntro
          title={
            <>
              Building each <br />
              other up
            </>
          }
        />
      </Container>

      <BlockText
        heading=""
        description={
          <>
            <p>
              Grounded is focused on using art to advocate for non-violence and
              advance education as a tool for change, growth, and transformation
              in Memphis. We are creating healing content to spark mindfulness
              and self-activation around the most pressing issues faced by
              children, families, underserved communities, and those affected by
              Adverse Childhood Experiences .
            </p>

            <p>
              We honor our city’s history and culture to create programming and
              resources to help frame the challenges our communities have faced
              in the past and continue to face now.
            </p>
          </>
        }
      />

      <div className={s.Aces} id="aces">
        <h2 className={s.Aces__Title}>
          Addressing Adverse Childhood Experiences (ACEs)
        </h2>

        <BlockText
          description={
            <>
              <p>
                The impact of poverty and crime creates long-lasting wounds
                visible through adverse childhood experiences and adverse
                community experiences. ACEs refer to abuse, neglect, and
                household dysfunction such as parental mental illness or
                substance abuse experienced in childhood.
              </p>
            </>
          }
        />

        <Container>
          <div className={s.Aces__Categories}>
            <div className={s.Aces__Categories__Wrapper}>
              <div className={s.Aces__Categories__Entry}>
                <IconAbuse />
                <p className={s.Aces__Categories__Entry__Title}>Abuse</p>
              </div>

              <div className={s.Aces__Categories__Entry}>
                <IconNeglect />
                <p className={s.Aces__Categories__Entry__Title}>Neglect</p>
              </div>

              <div className={s.Aces__Categories__Entry}>
                <IconHd />
                <p className={s.Aces__Categories__Entry__Title}>
                  Household Dysfunction
                </p>
              </div>
            </div>

            <div className={s.Aces__Categories__Text}>
              <p>
                According to the Center for Youth Wellness the effects of ACEs
                include increased chances of developing:
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <ItemList>
            <li>Obesity</li>
            <li>Diabetes</li>
            <li>Depression</li>
            <li>STDs</li>
            <li>Heart disease</li>
            <li>Cancer</li>
            <li>Stroke</li>
            <li>COPD and broken bones</li>
            <li>Suicidal behavior</li>
          </ItemList>
        </Container>

        <BlockText
          description={
            <>
              <p>
                ACEs are also associated with behaviors such as smoking,
                alcoholism and drug abuse, as well as lower graduation rates and
                academic achievement.
              </p>

              <p>
                Grounded is focusing on helping people acknowledge the effects
                of ACEs and take steps as a community to overcome the effects
                through art and mindfulness.
              </p>
            </>
          }
        />
      </div>

      <div className={s.Theory}>
        <h1 className={s.Theory__Title}>Our Theory of Change Pillars</h1>

        <BlockText
          description={
            <>
              <p>
                We use consciousness, community building, and culture to
                transform cities through mindful art.
              </p>
            </>
          }
        />

        <div className={s.Theory__Entry}>
          <div className={s.Theory__Entry__Name}>
            Elevating <br />
            consciousness
          </div>
          <div className={s.Theory__Entry__Desc}>
            <p>
              Helping students and young people acknowledge their inner voice
              and emotions is the first step to changing actions and
              perspective.
            </p>

            <p>
              By listening to their interests and passions, we help students
              affected by ACEs to develop a new awareness in themselves, their
              decisions, their futures and communities.
            </p>
          </div>
        </div>

        <div className={s.Theory__Entry}>
          <div className={s.Theory__Entry__Name}>
            Building <br />
            community
          </div>
          <div className={s.Theory__Entry__Desc}>
            <p>
              When students pay attention to their passions and have an elevated
              awareness of themselves, they can work collaboratively and act as
              positive influences for each other.
            </p>

            <p>
              We create a feeling of community and use it to develop unity,
              trust, and emotional openness that breeds a culture of
              self-expression and healing.
            </p>
          </div>
        </div>

        <div className={s.Theory__Entry}>
          <div className={s.Theory__Entry__Name}>
            Impacting <br />
            culture
          </div>
          <div className={s.Theory__Entry__Desc}>
            <p>
              Self awareness and a sense of community work to change the actions
              and relationships in the students' communities. As students change
              through mindfulness and self-expression, there are pronounced
              shifts in the culture around them and their day-to-day lives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
