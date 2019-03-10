/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  return new Promise(resolve => {
    graphql(`
      query {
        allPrismicProject {
          edges {
            node {
              uid
              prismicId
            }
          }
        }
      }
    `).then(result => {
      result.data.allPrismicProject.edges.forEach(({ node }) => {
        actions.createPage({
          path: `project/${node.uid}`,
          component: path.resolve('./src/templates/Project.tsx'),
          context: node,
        });
      });
      resolve();
    });
  });
};
