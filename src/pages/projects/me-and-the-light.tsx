import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Container } from 'components/container/Container';

export const query = graphql`
  query Projecta($id: String) {
    prismicProject(prismicId: { eq: $id }) {
      id
      data {
        title {
          text
        }
      }
    }
  }
`;

const MeAndTheLight = ({ data }: any) => {
  const { title } = data.prismicProject.data;

  return (
    <>
      <Helmet title={`Project - ${title.text} `} />
      <Container>
        <h1>{title.text}</h1>
      </Container>
    </>
  );
};

export default MeAndTheLight;
