import React from 'react';
import Helmet from 'react-helmet';

import { Container } from 'components/container/Container';
import { PageIntro } from 'components/intro/PageIntro';
import { BlockText } from 'components/block-text/BlockText';

import s from './methodology.scss';
import { ItemList } from 'components/item-list/itemList';

import TestIcon from 'assets/svg/test-icon.svg';

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
              Grounded is focused on using art to advance non-violence education
              and as a tool for change, growth, and transformation in Memphis.
              We are creating mindful and healing content to spark mindfulness
              and self-activation around the most pressing issues faced by
              children, families, underserved communities, and those affected by{' '}
              <a href="#">Adverse Childhood Experiences</a>.
            </p>

            <p>
              We use our city’s history and culture to create programming and
              resources for youth violence reduction and to help frame the
              challenges our communities have and continue to face.
            </p>
          </>
        }
      />

      <div className={s.Aces}>
        <h2 className={s.Aces__Title}>
          Addressing Adverse Childhood Experiences (ACEs)
        </h2>

        <BlockText
          description={
            <>
              <p>
                The impact of poverty and crime creates long lasting wounds
                through adverse childhood experiences. ACEs refers to abuse,
                neglect, and household dysfunction such as parental mental
                illness or substance abuse experienced in childhood
              </p>
            </>
          }
        />

        <Container>
          <div className={s.Aces__Categories}>
            <div className={s.Aces__Categories__Entry}>
              <TestIcon />
              <p className={s.Aces__Categories__Entry__Title}>Abuse</p>
            </div>

            <div className={s.Aces__Categories__Entry}>
              <TestIcon />
              <p className={s.Aces__Categories__Entry__Title}>Neglect</p>
            </div>

            <div className={s.Aces__Categories__Entry}>
              <TestIcon />
              <p className={s.Aces__Categories__Entry__Title}>
                Household Dysfunction
              </p>
            </div>
          </div>
        </Container>

        <BlockText
          description={
            <>
              <p>
                According to the <a href="#">Center for Youth Wellness</a>, the
                effects of ACEs include increased chances of developing:{' '}
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

        <BlockText
          description={
            <>
              <p>
                ACEs are also associated with risky behaviors such as smoking,
                alcoholism and drug abuse a well as reduced graduation rates and
                academic achievement.
              </p>

              <p>
                Grounded is focusing on helping people acknowledge the effects
                of ACEs and take steps as a community to overcome them through
                art and mindfulness.
              </p>
            </>
          }
        />
      </div>

      <div className={s.Theory}>
        <h1 className={s.Theory__Title}>Our Theory of Change</h1>

        <BlockText
          description={
            <>
              <p>
                We use consciousness, community building, and culture to
                transform cities through art.
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
              Helping students acknowledge their inner voice and emotions is the
              first step to changing actions and perspective.
            </p>

            <p>
              By listening to their interests and passions, we help students
              affected by ACEs to develop a new awareness in themselves, their
              decisions, and communities.
            </p>
          </div>
        </div>

        <div className={s.Theory__Entry}>
          <div className={s.Theory__Entry__Name}>
            Elevating <br />
            consciousness
          </div>
          <div className={s.Theory__Entry__Desc}>
            <p>
              Helping students acknowledge their inner voice and emotions is the
              first step to changing actions and perspective.
            </p>

            <p>
              By listening to their interests and passions, we help students
              affected by ACEs to develop a new awareness in themselves, their
              decisions, and communities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
