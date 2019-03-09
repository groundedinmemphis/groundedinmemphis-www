import React from 'react';
import { Container } from 'components/container/Container';

export const query = graphql`
  query {
    prismicWhoWeAre {
      data {
        title {
          html
          text
        }
      }
    }
  }
`;

export default ({ data }) => {
  const titleData = data.prismicWhoWeAre.data.title;
  console.log(titleData);
  return (
    <Container>
      <h1>{titleData.text}</h1>
      <img src="" />
      <section>
        <p>Our mission—</p>
      </section>
    </Container>
  );
};
