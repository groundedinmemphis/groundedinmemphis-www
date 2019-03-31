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
    prismicProjects {
      id
      data {
        projects {
          projects {
            id
            document {
              ... on PrismicProject {
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
      }
    }
  }
`;

export default ({ data }: any) => {
  const projects = data.prismicProjects.data.projects.map((p: any) => {
    return p.projects.document[0];
  });

  const featured = projects.slice(0, 1).shift();

  return (
    <>
      <Helmet title="Projects" />

      <Container>
        <PageIntro
          title="Our work, our passion"
          des="We collaborate with artists, musicians, dancers, filmmakers, and students to create conscious content in order to advocate for non-violence and advance education."
        />
        <section
          className={s.hero_image}
          style={{
            backgroundImage: `url(${featured.data.project_cover.url})`,
          }}
        />
        <div className={s.section_featured}>
          <h2 className={s.project_name}>{featured.data.title.text}</h2>
          <span className={s.project_year}>{featured.data.year_long.text}</span>
          <p className={s.project_des}>{featured.data.description.text}</p>
          <ProjectButton
            url={featured.prismicId}
            name="See Project"
            icon="&#10230;"
          />
        </div>
      </Container>

      {projects.slice(1).map((project: any, index: number) => {
        return (
          <ProjectRow
            key={project.uid}
            img_url={project.data.project_cover.url}
            url={project.uid}
            title={project.data.title.text}
            year={project.data.year_long.text}
            des={project.data.description.text}
            flip={index % 2 === 1}
          />
        );
      })}
    </>
  );
};
