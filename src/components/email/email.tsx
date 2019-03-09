import React from 'react';

export const Email = () => {
  return (
    <form
      action="https://twitter.us20.list-manage.com/subscribe/post"
      method="POST"
    >
      <input type="hidden" name="u" value="8dd7fa03ad7489cb285a063e1" />
      <input type="hidden" name="id" value="33ad5892a4" />
      <input
        type="email"
        placeholder="Your email"
        name="MERGE0"
        id="MERGE0"
        placeholder="you@example.com"
      />
      <input
        type="hidden"
        name="ht"
        value="c31b0f4df16064711a0560dbdac80f907aeaf0ec:MTU1MjE2NDE0OS4xMzUz"
      />
      <input type="submit" name="submit" value="JOIN" />
    </form>
  );
};
