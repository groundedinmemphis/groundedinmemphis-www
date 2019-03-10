import React from 'react';
import s from './PageIntro.scss';

interface IIntroProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  des?: React.ReactNode;
}

export const PageIntro = (props: IIntroProps) => {
  return (
    <div className={s.section_title}>
      {props.title && <h1 className={s.title}>{props.title}</h1>}
      {props.des && <p className={s.des}>{props.des}</p>}
      {props.children}
    </div>
  );
};
