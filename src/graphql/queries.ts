import { gql } from "@urql/core";

const GetContentById = gql`
  query GetContentById($id: String!) {
    contentModel(_id: $id) {
      _id
      category
      tags
      title_image
    }
  }
`;

const GetAll = gql`
  query GetContentById($id: String!) {
    contentModel(_id: $id) {
      _id
      category
      tags
      title_image
    }
  }
`;

export { GetContentById, GetAll };
