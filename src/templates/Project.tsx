import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import s from './Project.scss';

export const query = graphql`
  query Projecta($prismicId: String) {
    prismicProject(prismicId: { eq: $prismicId }) {
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
        contributors {
          text
        }
      }
    }
  }
`;

export default ({ data }: any) => {
  const {
    title,
    categories,
    description,
    contributors,
    year,
    youtube_link,
  } = data.prismicProject.data;
  const [, youtubeId] = youtube_link.embed_url.match(/v\=(.*)$/);

  return (
    <>
      <Helmet title={title.text} />
      <div className={s.project_video}>
        <div className={s.project_video_top} />
        <iframe
          src={`//www.youtube.com/embed/${youtubeId}?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&amp;widgetid=1`}
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
                {contributors.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
