import React from 'react';
import s from './ProjectButton.scss';

interface IButtonProps {
  url?: string;
  name?: string;
  // html entity
  icon?: string;
}

export const ProjectButton = (props: IButtonProps) => {
  return (
    <>
      <a href={props.url} className={s.project_link}>
        {props.name} <span className={s.project_link_icon}>{props.icon}</span>
      </a>
    </>
  );
};
