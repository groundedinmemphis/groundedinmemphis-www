import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { t as typy } from 'typy';

import { Container } from 'components/container/Container';
import { PageIntro } from 'components/intro/PageIntro';
import { ProjectButton } from 'components/button/ProjectButton';
import { ProjectRow } from 'components/row/ProjectRow';

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
                  order
                  hidden
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
  const projectsClearing = data.prismicProjects.data.projects
    .filter(pr => {
      const [d] = pr.projects.document;
      console.log({ d });
      return d.data.hidden.toLowerCase() === 'no';
    })
    .sort((a, b) => {
      const [aData] = a.projects.document;
      const [bData] = b.projects.document;
      return typy(aData, 'data.order').safeNumber >=
        typy(bData, 'data.order').safeNumber
        ? -1
        : 1;
    });
  const projects = projectsClearing.map((p: any) => {
    const [d] = p.projects.document;
    return d;
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
            backgroundImage: `url(${
              typy(featured, 'data.project_cover.url').safeString
            })`,
          }}
        />
        <div className={s.section_featured}>
          <h2 className={s.project_name}>
            {typy(featured, 'data.title.text').safeString}
          </h2>
          <span className={s.project_year}>
            {typy(featured, 'data.year_long.text').safeString}
          </span>
          <p className={s.project_des}>
            {typy(featured, 'data.description.text').safeString}
          </p>
          <ProjectButton
            url={typy(featured, 'uid').safeString}
            name="See Project"
            icon="&#10230;"
          />
        </div>
      </Container>

      {projects.slice(1).map((project: any, index: number) => {
        return (
          <ProjectRow
            key={typy(project, 'uid').safeString}
            img_url={typy(project, 'data.project_cover.url').safeString}
            url={typy(project, 'uid').safeString}
            title={typy(project, 'data.title.text').safeString}
            year={typy(project, 'data.year_long.text').safeString}
            des={typy(project, 'data.description.text').safeString}
            flip={index % 2 === 1}
          />
        );
      })}
    </>
  );
};
