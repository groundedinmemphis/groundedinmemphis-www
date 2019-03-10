import React from 'react';

import s from './Member.scss';
import { ProjectButton } from 'components/button/ProjectButton';

export default (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.Member}>
      <div className={s.Member__Photo}>
        <img src={props.imgUrl} />
      </div>

      <h1 className={s.Member__Name}>
        {props.name} {props.index}
      </h1>

      <h2 className={s.Member__Position}>{props.position}</h2>

      <p className={s.Member__Desc}>{props.description}</p>

      <button className={s.Member__ReadMore} onClick={handleClick}>
        Read More
      </button>

      <div className={isOpen ? s.Member__Detail : s.Member__Detail__hide}>
        <p className={s.Member__DescFull}>{props.description}</p>
        <button className={s.Member__ReadLess} onClick={handleClick}>
          Read Less
        </button>
      </div>
    </div>
  );
};
