import React from 'react';
import s from './news.scss';
import { graphql } from 'gatsby';
import NewsItem from './components/news-item/NewsItem';
import { PageIntro } from 'components/intro/PageIntro';

interface INewsEdge {
  node: {
    id: string;
    first_publication_date: string;
    data: {
      title: any;
      image: any;
      url: any;
      summary: any;
      tag: string;
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
            tag
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
      <PageIntro
        title={
          <>
            News and
            <br />
            updates
          </>
        }
      >
        {data.allPrismicNews.edges.map(({ node }) => (
          <NewsItem
            key={node.id}
            date={node.first_publication_date}
            {...node.data}
          />
        ))}
      </PageIntro>
    </div>
  );
};

export default News;
