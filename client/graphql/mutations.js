import gql from "graphql-tag";

export default {
    // we make sure to use the `mutation` key word when creating our frontend mutations
    // just like we would in GraphiQL
    DELETE_GOD: gql`
    mutation DeleteGod($id: ID) {
      deleteGod(id: $id) {
        id
      }
    }
  `
};