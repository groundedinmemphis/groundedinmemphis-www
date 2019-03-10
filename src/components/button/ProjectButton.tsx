import React from 'react';
// import s from './ProjectButton.scss';

interface IButtonProps {
  url?: string;
  name?: string;
  // html entity
  icon?: string;
}

export const ProjectButton = (props: IButtonProps) => {
  return (
    <>
      <a href={props.url}>
        {props.name} {props.icon}
      </a>
    </>
  );
};
