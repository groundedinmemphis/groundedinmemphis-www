import React from 'react';
// import { Container } from 'components/container/Container';
import s from './PageIntro.scss';

interface IIntroProps {
  title?: string;
  des?: string;
}

export const PageIntro = (props: IIntroProps) => {
  return (
    // <Container>
    <div className={s.section_title}>
      <h1 className={s.title}>{props.title}</h1>
      <p className={s.des}>{props.des}</p>
    </div>
    // </Container>
  );
};
