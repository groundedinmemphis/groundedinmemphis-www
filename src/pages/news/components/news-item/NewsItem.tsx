import React from 'react';
import RichText from 'components/rich-text/RichText';
import s from './NewsItem.scss';

interface INewsItemProps {
  title: any;
  image: any;
  url: any;
  summary: any;
}

export default (props: INewsItemProps) => (
  <div className={s.newsItem}>
    <div className={s.date}>Outreach | Jan 12, 2019</div>
    {props.title && RichText.render(props.title)}
    {props.image && <img src={props.image.url} />}
    {props.summary && RichText.render(props.summary)}
    {props.url && (
      <a href={props.url.url} className={s.link}>
        Read More +
      </a>
    )}
  </div>
);
