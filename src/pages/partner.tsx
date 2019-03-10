import React from 'react';
import Helmet from 'react-helmet';
import { Segment } from 'components/segment/Segment';
import { BlockText } from 'components/block-text/BlockText';

export default () => {
  return (
    <>
      <Helmet title="Partner with us" />
      <Segment>
        <BlockText heading="Partner with us" description="Yes" />
      </Segment>
    </>
  );
};
