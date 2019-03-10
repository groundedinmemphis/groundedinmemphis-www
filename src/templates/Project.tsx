import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import s from './Project.scss';

export const query = graphql`
  query Projecta($id: String) {
    prismicProject(prismicId: { eq: $id }) {
      id
      data {
        title {
          text
        }
        description {
          text
        }
        categories {
          text
        }
        youtube_link {
          embed_url
        }
        year
      }
    }
  }
`;

export default ({ data }: any) => {
  const { title, categories, description, year } = data.prismicProject.data;

  return (
    <>
      <Helmet title={`Project - ${title.text} `} />
      <div className={s.project_video}>
        <iframe
          src="https://www.youtube.com/embed/uxEghzZAEl4?modestbranding=1"
          className={s.iframe}
        />
      </div>
      <div className={s.project_info_wrapper}>
        <div className={s.project_name}>{title.text}</div>
        <div className={s.project_info}>
          <span className={s.project_tags}>{categories.text}</span>
          <p className={s.project_des}>{description.text}</p>

          <div className={s.project_details}>
            <div className={s.project_timestamp}>
              <span className={s.project_year}>Year</span>
              <span className={s.project_year} style={{ color: '#757575' }}>
                {year}
              </span>
            </div>
            <div className={s.project_timestamp}>
              <span className={s.project_year}>Contributors</span>
              <span className={s.project_year} style={{ color: '#757575' }}>
                {year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
