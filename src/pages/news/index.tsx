import React from 'react';
import s from './news.scss';
import { graphql } from 'gatsby';
import NewsItem from './components/news-item/NewsItem';

interface INewsEdge {
  node: {
    id: string;
    data: {
      title: any;
      image: any;
      url: any;
      summary: any;
    };
  };
}

interface INewsProps {
  data: {
    allPrismicNews: {
      edges: INewsEdge[];
    };
  };
}

export const query = graphql`
  query {
    allPrismicNews {
      edges {
        node {
          id
          first_publication_date
          data {
            title {
              raw {
                type
                text
              }
            }
            image {
              alt
              copyright
              url
            }
            url {
              link_type
              url
              target
            }
            summary {
              raw {
                type
                text
              }
            }
          }
        }
      }
    }
  }
`;

const News = ({ data }: INewsProps) => {
  return (
    <div className={s.news}>
      <h1 className={s.news__heading}>News</h1>
      {data.allPrismicNews.edges.map(({ node }) => (
        <NewsItem key={node.id} {...node.data} />
      ))}
    </div>
  );
};

export default News;
