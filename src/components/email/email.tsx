import React from 'react';
import s from './email.scss';

export const Email = () => (
  <>
    <div id="mc_embed_signup">
      <form
        action="https://twitter.us20.list-manage.com/subscribe/post?u=8dd7fa03ad7489cb285a063e1&amp;id=33ad5892a4"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <p className={s.email__label}>Subscribe to our mailing list</p>
          <div className={s.input__wrapper}>
            <input
              type="email"
              placeholder="Email Address"
              name="EMAIL"
              className={s.input__field}
              id="mce-EMAIL"
            />
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_8dd7fa03ad7489cb285a063e1_33ad5892a4"
                tabIndex={-1}
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className={s.submit}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
);
