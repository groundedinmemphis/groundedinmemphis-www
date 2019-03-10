import React from 'react';
import Helmet from 'react-helmet';

import { Container } from 'components/container/Container';
import s from './OurTeam.scss';

import { graphql } from 'gatsby';
import Member from './components/Member/Member';

import { chunk } from 'lodash';
import { PageIntro } from 'components/intro/PageIntro';

export const query = graphql`
  query {
    allPrismicTeamMember {
      edges {
        node {
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
          title="Our Team"
          des="Grounded makes space in communities for expression in service of mindfulness. We are a collaboration between activists, artists, community leaders, and anyone looking for their voice and communities to express themselves."
        />

        <div className={s.OurTeam}>
          {chunk(data.allPrismicTeamMember.edges, 2).map((arr, index) => {
            const className =
              index % 2 === 0 ? s.Team__Row__right : s.Team__Row__left;

            return (
              <div key={index} className={className}>
                {arr.map(({ node }: any) => {
                  return (
                    <Member
                      key={node.id}
                      name={node.data.name.text}
                      position={node.data.position.text}
                      quote={node.data.quote.text}
                      imgUrl={node.data.photo.url}
                      description={node.data.description.text}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};
