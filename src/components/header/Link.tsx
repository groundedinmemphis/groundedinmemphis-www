import React from 'react';
import { Link as InternalLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import s from './Link.scss';

interface ILinkProps {
  name: string;
  to: string;
  icon?: React.ReactNode;
  onClick?(e: any): any;
}

export const Link = ({ name, to, icon, onClick }: ILinkProps) => {
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  const content = () => (
    <span>
      {icon && React.cloneElement(icon as any, { className: s.link__icon })}
      {name}
    </span>
  );

  if (isExternal) {
    return (
      <OutboundLink
        className={s.link}
        target="_blank"
        rel="noopener noreferrer"
        href={to}
      >
        {content()}
      </OutboundLink>
    );
  }

  return (
    <InternalLink className={s.link} to={to} onClick={onClick}>
      {content()}
    </InternalLink>
  );
};
