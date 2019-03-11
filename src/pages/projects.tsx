import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'components/container/Container';
import { PageIntro } from 'components/intro/PageIntro';
import { ProjectButton } from 'components/button/ProjectButton';
import { ProjectRow } from 'components/row/ProjectRow';
import { graphql } from 'gatsby';

import s from './projects.scss';

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
  let projects = data.allPrismicProject.edges;
  projects[0] = projects.splice(1, 1, projects[0])[0];
  projects[3] = projects.splice(2, 1, projects[3])[0];

  // for (let i = 0; i < projects.length; i++) {
  //   if (projects[i])
  // }
  // projects.sort((a: any, b: any) => {
  //   return a.node.data.title.text - b.node.data.title.text;
  // });
  const featured = projects[0].node.data;
  // const projectRows = projects.slice(1).map(({ node: any }, { index: any }) => {
  //   console.log(node.node.data);
  // });

  return (
    <>
      <Helmet title="Projects" />

      <Container>
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
        <div className={s.section_featured}>
          <h2 className={s.project_name}>{featured.title.text}</h2>
          <span className={s.project_year}>{featured.year_long.text}</span>
          <p className={s.project_des}>{featured.description.text}</p>
          <ProjectButton
            url={projects[0].node.uid}
            name="See Project"
            icon="&#10230;"
          />
        </div>
      </Container>

      {projects.slice(1).map((arr: any, index: number) => {
        const project = arr.node.data;

        return (
          <ProjectRow
            key={project.uid}
            img_url={project.project_cover.url}
            url={arr.node.uid}
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
