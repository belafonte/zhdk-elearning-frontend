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
      date
      time
      location
      link
    }
    tags
}`;

export const GET_TILE_DATA = gql`
  ${TILE_INFO}
  query GetTileData($filter: JsonType!, $limit: Int) {
    contentModel(limit: $limit, sort: { _created: true }, filter: $filter) {
      ...TileInfo 
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
