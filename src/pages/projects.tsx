import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'components/container/Container';
import { PageIntro } from 'components/intro/PageIntro';
import { ProjectButton } from 'components/button/ProjectButton';
import { ProjectRow } from 'components/row/ProjectRow';
import { graphql } from 'gatsby';

import s from './projects.scss';
import { node, array } from 'prop-types';

export const query = graphql`
  query {
    allPrismicProject {
      edges {
        node {
          uid
          prismicId
          data {
            title {
              text
            }
            project_cover {
              url
            }
            description {
              text
            }
            year_long {
              text
            }
          }
        }
      }
    }
  }
`;

export default ({ data }: any) => {
  const projects = data.allPrismicProject.edges;
  const featured = projects[0].node.data;
  // const projectRows = projects.slice(1).map(({ node: any }, { index: any }) => {
  //   console.log(node.node.data);
  // });

  return (
    <>
      <Helmet title="Projects" />
      <PageIntro
        title="Projects"
        des="Grounded makes space in communities for expression in service of mindfulness. We are a collaboration between activists, artists, community leaders, and anyone looking for their voice and communities to express themselves."
      />
      <section
        className={s.hero_image}
        style={{
          backgroundImage: `url(${featured.project_cover.url})`,
        }}
      />
      <Container>
        <div className={s.section_featured}>
          <h2 className={s.project_name}>{featured.title.text}</h2>
          <span className={s.project_year}>{featured.year_long.text}</span>
          <p className={s.project_des}>{featured.description.text}</p>
          <ProjectButton url="#" name="See Project" icon="&#10230;" />
        </div>
      </Container>

      {projects.slice(1).map((arr, index) => {
        let project = arr.node.data;

        return (
          <ProjectRow
            key={project.uid}
            img_url={project.project_cover.url}
            title={project.title.text}
            year={project.year_long.text}
            des={project.description.text}
            flip={index % 2 === 1}
          />
        );
      })}
    </>
  );
};
