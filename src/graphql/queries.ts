import { gql } from "@urql/core";

const TILE_INFO = gql`
  fragment TileInfo on contentModel {
    _id
    slug
    category
    title
    color
    title_image
    rotation
    mask
    event {
      fromDate
      toDate
      fromTime
      toTime
      location
      link
    }
    tags
}`;

const DETAIL_INFO = gql`
${TILE_INFO}
fragment DetailInfo on contentModel {
  ...TileInfo
  subhead
  caption
  body
  image
  embed
}
`;

export const GET_TILE_DATA = gql`
  ${TILE_INFO}
  query GetTileData($filter: JsonType!, $limit: Int, $sort: JsonType = { _created: true}) {
    contentModel(limit: $limit, sort: $sort, filter: $filter) {
      ...TileInfo 
    }
}`;

export const GET_DETAIL_DATA = gql`
  ${DETAIL_INFO}
  query GetDetailData($filter: JsonType!) {
    contentModel(filter: $filter) {
      ...DetailInfo
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

export const GET_HIGHLIGHTS = gql`
    query GetHighlights {
	    highlightsModel(populate: 1) {
        highlight01
        highlight02
        highlight03
        highlight04
        highlight05
      }
    }
  `;

export const GET_NEXT_EVENT = gql`
  query GetNextEvent {
    ${TILE_INFO}
    contentModel(filter: {category: "Event"}, sort: {_modified: true}, limit: 1) {
      caption
      body
      image
      ...TileInfo
    }
}
`;
