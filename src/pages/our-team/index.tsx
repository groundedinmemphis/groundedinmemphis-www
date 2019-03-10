import React from 'react';
import Helmet from 'react-helmet';

import { Container } from 'components/container/Container';
import s from './OurTeam.scss';

import placeholderImage from 'assets/images/grounded-member-portrait.png';
import { graphql } from 'gatsby';
import Member from './components/Member/Member';

import { chunk } from 'lodash';

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
`;

export default ({ data }: any) => {
  return (
    <>
      <Helmet title="Our Story" />

      <Container>
        <h1 className={s.OurTeam__Title}>Our Team</h1>

        <p className={s.OurTeam__Intro}>
          Our founders and team of creative collaborators are on a mission to
          bring positive changes to Memphis through art, dance, music, film,
          mindful meditation, and educational programs focused on Adverse
          Childhood Experiences (ACE) awareness.
        </p>

        <div className={s.OurTeam}>
          {chunk(data.allPrismicTeamMember.edges, 2).map((arr, index) => {
            const className =
              index % 2 === 0 ? s.Team__Row__right : s.Team__Row__left;

            return (
              <div key={index} className={className}>
                {arr.map(({ node }: any) => {
                  // console.log(arr);

                  return (
                    <Member
                      // index={index}
                      key={node.id}
                      name={node.data.name.text}
                      position={node.data.position.text}
                      imgUrl={node.data.photo.url}
                      description={node.data.description.text}
                    />
                  );
                })}
              </div>
            );
          })}

          {/* 
                    {data.allPrismicTeamMember.edges.map(({ node }: any, index: number) => {

                        console.log(arr);

                        return (
                            
                            <Member
                                index={index}
                                key={node.id}
                                name={node.data.name.text}
                                position={node.data.position.text}
                                imgUrl={node.data.photo.url}
                                description={node.data.description.text}
                            />
                        )
                    })} */}
        </div>
      </Container>
    </>
  );
};
