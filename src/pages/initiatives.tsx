import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'components/container/Container';
import { ProjectButton } from 'components/button/ProjectButton';
import s from './initiatives.scss';

export default () => (
  <>
    <Helmet title="Initiatives" />
    <Container>
      <div className={s.section_title}>
        <h1 className={s.title}>Initiatives</h1>
        <p className={s.des}>
          Grounded makes space in communities for expression in service of
          mindfulness. We are a collaboration between activists, artists,
          community leaders, and anyone looking for their voice and communities
          to express themselves.
        </p>
      </div>
    </Container>
    <section
      className={s.hero_image}
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1552084089-2abe7dc04d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)`,
      }}
    />
    <Container>
      <div className={s.section_featured}>
        <h2 className={s.project_name}>Me And The Light</h2>
        <span className={s.project_year}>2019</span>
        <p className={s.project_des}>
          G Me and the Light, featuring critically acclaimed movement artist Lil
          Buck with new music by Valerie June and Drumma Boy, reveals how art
          can help transform ourselves and our communities struggling with
          violence
        </p>
        <ProjectButton url="#" name="See Project" icon="&#10230;" />
      </div>
    </Container>
  </>
);
