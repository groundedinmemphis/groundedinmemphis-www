import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { t as typy } from 'typy';

import s from './Project.scss';

export const query = graphql`
  query Projecta($prismicId: String) {
    prismicProject(prismicId: { eq: $prismicId }) {
      id
      data {
        title {
          text
        }
        description_long {
          html
        }
        categories {
          text
        }
        youtube_link {
          embed_url
        }
        video_preview_image {
          url
        }
        year_long {
          text
        }
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
    description_long,
    contributors,
    year_long,
    youtube_link,
    video_preview_image,
  } = data.prismicProject.data;

  console.log({ youtube_link });

  var provider =
    youtube_link && typy(youtube_link, 'embed_url').isString
      ? typy(youtube_link, 'embed_url').safeString.match(
          /https:\/\/(?:www.)?(?:(vimeo).com\/(.*)|(youtube).com\/watch\?v=(.*?))/
        )
      : '';
  let videoContent = null;

  if (provider && provider.includes('youtube')) {
    const [, youtubeId] =
      youtube_link && youtube_link.embed_url
        ? youtube_link.embed_url.match(/v\=(.*)$/)
        : [null, null];
    videoContent = youtubeId ? (
      <iframe
        src={`//www.youtube.com/embed/${youtubeId}?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&amp;widgetid=1`}
        className={s.iframe}
      />
    ) : null;
  } else if (provider && provider.includes('vimeo')) {
    const vimeoID = youtube_link.embed_url.substring(
      youtube_link.embed_url.lastIndexOf('/') + 1
    );
    videoContent = (
      <iframe
        src={`https://player.vimeo.com/video/${vimeoID}?color=ffffff&title=0&byline=0&portrait=0`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className={s.iframe}
      />
    );
  }

  if (!videoContent && video_preview_image && video_preview_image.url) {
    videoContent = (
      <div className={s.iframe} style={{ overflow: 'hidden' }}>
        <img
          src={video_preview_image && video_preview_image.url}
          alt="video preview"
          style={{ height: '100%', maxWidth: '200%' }}
        />
      </div>
    );
  }

  return (
    <>
      <Helmet title={title.text} />
      <div className={s.project_video}>
        <div className={s.project_video_top} />
        {videoContent}
      </div>
      <div className={s.project_info_wrapper}>
        <div className={s.project_name}>{title.text}</div>
        <div className={s.project_info}>
          <span className={s.project_tags}>{categories.text}</span>
          <div
            className={s.project_des}
            dangerouslySetInnerHTML={{ __html: description_long.html }}
          />

          <div className={s.project_details}>
            <div className={s.project_timestamp}>
              <span className={s.project_year}>Year</span>
              <span className={s.project_year} style={{ color: '#757575' }}>
                {year_long.text}
              </span>
            </div>
            <div
              className={s.project_timestamp}
              style={{ visibility: contributors.text ? 'visible' : 'hidden' }}
            >
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
