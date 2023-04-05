import { gql } from "@urql/core";

const FULL_INFO = gql`
  fragment FullInfo on contentModel {
    _id
    slug
    category
    title
    color
    title_image
    rotation
    mask
    event {
      date
      time
      location
      link
    }
    tags
}`;

export const GET_COMMUNITY = gql`
  ${FULL_INFO}
  query GetCommunity($limit: Int) {
  contentModel(limit: $limit, sort: { _created: true }, filter: {category: "Community"}) {
    ...FullInfo
  }
}`;

export const GET_EXPERIENCE = gql`
  ${FULL_INFO}
  query GetExperience($limit: Int) {
  contentModel(limit: $limit, sort: { _created: true }, filter: {category: "Experience"}) {
    ...FullInfo
  }
}`;

export const GET_COSMOS = gql`
  ${FULL_INFO}
  query GetCosmos($limit: Int) {
  contentModel(limit: $limit, sort: { _created: true }, filter: {category: "Cosmos"}) {
    ...FullInfo
  }
}`;

export const GET_GLOSSARY_SLIDER = gql`
  query GetGlossarySlider {
    glossaryModel {
      slider {
        image
        link
        display
      }
    }
}`;

export const GET_NEXT_EVENT = gql`
  query GetNextEvent {
    contentModel(filter: {category: "Event"}, sort: {_modified: true}, limit: 1) {
      _id
      title
      title_image
      slug
      subhead
      title_image
      rotation
      mask
      caption
      event {
        date
        time
        location
        link
      }
      body
      image
    }
}
`;

export const GetContentById = gql`
  query GetContentById($id: String!) {
    contentModel(_id: $id) {
      _id
      category
      tags
      title_image
    }
  }
`;

export const GetAll = gql`
  query GetContentById($id: String!) {
    contentModel(_id: $id) {
      _id
      category
      tags
      title_image
    }
  }
`;
