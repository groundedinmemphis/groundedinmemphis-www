import { get } from 'lodash';
import { Link, RichText as PrismicRichText } from 'prismic-reactjs';
import React from 'react';
import { linkResolver } from 'utils/linkResolver';
import s from './RichText.scss';

interface IProps {
  children: React.ReactNode;
  slice?: boolean;
  small?: boolean;
}

export default class RichText extends React.PureComponent<IProps> {
  static defaultProps = {
    children: <div />,
  };

  static asText = (object: any, path?: string) => {
    if (object === '') {
      return null;
    }

    return PrismicRichText.asText(path ? get(object, path) : object);
  };

  static render = (object: any, path?: string) => {
    let obj = object;

    if (path) {
      obj = get(object, path, []);
    }

    if (!obj.raw || !Array.isArray(obj.raw)) {
      if (obj.text) {
        return <p>{obj.text}</p>;
      }
      return null;
    }

    obj = obj.raw.map((node: any) => ({
      type: 'paragraph',
      text: '',
      spans: [],
      ...node,
    }));

    return <RichText>{PrismicRichText.render(obj, linkResolver)}</RichText>;
  };

  static url = (object: any, path?: string) => {
    if (object === null) {
      return null;
    }

    return Link.url(path ? get(object, path, []) : object, linkResolver);
  };

  render() {
    const { children, slice = false, small = false } = this.props;

    return <div className={s(s.richText, { slice, small })}>{children}</div>;
  }
}
