import React from 'react';
import s from './ProjectRow.scss';
import { ProjectButton } from 'components/button/ProjectButton';

interface IProjectRowProps {
  img_url: string;
  title: string;
  year: string;
  des: string;
  url?: string;
  flip?: boolean;
}

export const ProjectRow = (props: IProjectRowProps) => (
  <div
    className={s.project_row}
    style={{ flexDirection: props.flip ? 'row-reverse' : 'row' }}
  >
    <div
      className={s.project_cover}
      style={{
        backgroundImage: `url(${props.img_url})`,
      }}
    />
    <div className={s.project_info}>
      <div className={s.project_info_wrapper}>
        <h2 className={s.project_name}>{props.title}</h2>
        <span className={s.project_year}>{props.year}</span>
        <p className={s.project_des}>{props.des}</p>
        <ProjectButton url={props.url} name="See Project" icon="&#10230;" />
      </div>
    </div>
  </div>
);
