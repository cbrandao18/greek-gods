import gql from "graphql-tag";

// we use gql with a template literal to construct graphql queries
export default {
    FETCH_GODS: gql`
    query FetchGods {
      gods {
        id
        name
        description
      }
    }
  `
};