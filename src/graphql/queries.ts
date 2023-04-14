import { gql } from "@urql/core";
import { PUBLIC_STATE } from "$env/static/public";

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
	}
`;

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
	query GetTileData($filter: JsonType!, $limit: Int, $sort: JsonType = { _created: true }) {
		contentModel(limit: $limit, sort: $sort, filter: $filter) {
			...TileInfo
		}
	}
`;

export const GET_DETAIL_DATA = gql`
	${DETAIL_INFO}
	query GetDetailData($filter: JsonType, $sort: JsonType, $limit: Int) {
		contentModel(filter: $filter, limit: $limit, sort: $sort) {
			...DetailInfo
		}
	}
`;

export const GET_RSS_DATA = gql`
	query GetRssData {
		contentModel(limit: 10, sort: { _modified: true }, filter: { _state: PUBLIC_STATE }) {
			title
			title_image
			slug
			category
			subhead
			_created
		}
	}
`;

export const GET_GLOSSARY_SLIDER = gql`
	query GetGlossarySlider {
		glossaryModel {
			slider {
				image
				link
				display
			}
		}
	}
`;

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
    contentModel(filter: {category: "Event", _state: PUBLIC_STATE}, sort: {_modified: true}, limit: 1) {
      caption
      body
      image
      ...TileInfo
    }
}
`;

export const GET_GLOSSARY = gql`
	query GetGlossary {
		glossaryModel {
			terms {
				term
				definition
				image
			}
			colors
		}
	}
`;

export const GET_INFORMATION = gql`
	query GetInformation {
		informationModel {
			vision
			team
			team_member {
				image
				name
				description
				mask
				link
				mail
				linked_in
			}
			contact
		}
	}
`;

export const GET_OFFER = gql`
	query GetOffer {
		offerModel {
			offers {
				text
				image
				link
			}
		}
	}
`;
// export const
