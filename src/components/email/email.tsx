import React from 'react';
import s from './Email.scss';

export const Email = () => (
  <>
    <form
      action="https://twitter.us20.list-manage.com/subscribe/post"
      method="POST"
    >
      <h2>Sign up for news and updates.</h2>
      <input type="email" className={s.email} required />
      <input type="submit" name="submit" value="JOIN" />
    </form>
  </>
);
