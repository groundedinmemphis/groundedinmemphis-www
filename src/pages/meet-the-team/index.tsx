import React from 'react';
import Helmet from 'react-helmet';

import { Container } from 'components/container/Container';
import { BlockText } from 'components/block-text/BlockText';
import s from './OurTeam.scss';

import { graphql } from 'gatsby';
import Member from './components/Member/Member';

import { chunk } from 'lodash';
import { PageIntro } from 'components/intro/PageIntro';

export const query = graphql`
  query {
    prismicOurStory {
      data {
        title {
          html
          text
        }
        description {
          html
          text
        }
        team_members {
          team_member {
            document {
              id
              data {
                name {
                  html
                  text
                }
                position {
                  html
                  text
                }
                quote {
                  html
                  text
                }
                photo {
                  alt
                  copyright
                  url
                }
                description {
                  html
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ({ data }: any) => {
  return (
    <>
      <Helmet title="Meet the Team" />

      <Container>
        <PageIntro
          title="Meet the Team"
          des="Our team of professional artists collaborate with youth and social justice innovators to create healing content, curriculum and commentary around the most pressing issues faced by families and communities affected by Adverse Childhood Experiences and Adverse Community Experiences."
        />
        <div className={s.Team}>
          {chunk(data.prismicOurStory.data.team_members, 2).map(
            (arr, index) => {
              const className =
                index % 2 === 0 ? s.Team__Row__right : s.Team__Row__left;
              return (
                <div key={index} className={className}>
                  {arr.map(({ team_member: { document } }: any) => {
                    const teamMember = document[0].data;
                    const id = document[0].id;
                    return (
                      <Member
                        key={id}
                        name={teamMember.name.text}
                        position={teamMember.position.text}
                        quote={teamMember.quote.text}
                        imgUrl={teamMember.photo.url}
                        description={teamMember.description.text}
                      />
                    );
                    return null;
                  })}
                </div>
              );
            }
          )}
        </div>
      </Container>

      <div className={s.Practice}>
        <h1 className={s.Practice__Title}>Our Practice</h1>

        <BlockText
          heading=""
          description={
            <>
              <p>
                Our emphasis on mindfulness extends directly from the
                relationship between Thich Nhat Hanh and Dr. Martin Luther King,
                Jr.
              </p>

              <p>
                Deploying a strategic combination of art and mindfulness
                activations across Memphis can release trauma, recalibrate value
                alignment and reduce violence by elevating consciousness,
                building community and shifting culture towards abundance.
              </p>

              <p>
                By honoring the challenges we’ve faced in life as our strengths
                and not our weaknesses, we’re able to harness the power of
                resilience. This is where creativity and opportunity flourishes.
              </p>

              <p>
                The diversity of our backgrounds, art genres, and platforms,
                enable us to reach, empower and inspire a broad audience.
              </p>
            </>
          }
        />
      </div>
    </>
  );
};
