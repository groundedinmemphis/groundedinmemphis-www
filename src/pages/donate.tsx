import React from 'react';
import { Container } from 'components/container/Container';
export default () => {
  return (
    <Container>
      <p>Support us with a donation.</p>
      <p>When you donate, you'll do more than lorem</p>
      <script src="https://donorbox.org/widget.js" paypalExpress="false" />
      <iframe
        src="https://donorbox.org/embed/hello-3"
        height="685px"
        width="100%"
        style={{
          maxWidth: '500px',
          minWidth: '310px',
          maxHeight: 'none!important',
        }}
        seamless="seamless"
        name="donorbox"
        frameborder="0"
        scrolling="no"
        allowpaymentrequest
      />
    </Container>
  );
};
