import React from 'react';

import s from './ItemList.scss';

interface ItemListProps {
  children: React.ReactNode;
}

export const ItemList = (props: ItemListProps) => {
  const { children } = props;

  return (
    <div className={s.block}>
      <ul className={s.List}>{children}</ul>
    </div>
  );
};
