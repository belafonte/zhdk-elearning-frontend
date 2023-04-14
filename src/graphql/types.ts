export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JsonType: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteContentItem?: Maybe<DeleteContentItemOutput>;
  saveContentItem?: Maybe<SaveContentItemOutput>;
};


export type MutationDeleteContentItemArgs = {
  id: Scalars['String'];
  model: Scalars['String'];
};


export type MutationSaveContentItemArgs = {
  data: Scalars['JsonType'];
  model: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  content?: Maybe<Array<Maybe<Scalars['JsonType']>>>;
  contentModel?: Maybe<Array<Maybe<ContentModel>>>;
  contentTree?: Maybe<Array<Maybe<Scalars['JsonType']>>>;
  glossaryModel?: Maybe<GlossaryModel>;
  highlightsModel?: Maybe<HighlightsModel>;
  imprintModel?: Maybe<ImprintModel>;
  informationModel?: Maybe<InformationModel>;
  lokalize?: Maybe<Scalars['JsonType']>;
  offerModel?: Maybe<OfferModel>;
  pageByID?: Maybe<Scalars['JsonType']>;
  pageByRoute?: Maybe<Scalars['JsonType']>;
  pages?: Maybe<Array<Maybe<Scalars['JsonType']>>>;
  pagesMenu?: Maybe<Scalars['JsonType']>;
  pagesMenus?: Maybe<Array<Maybe<Scalars['JsonType']>>>;
};


export type QueryContentArgs = {
  fields?: InputMaybe<Scalars['JsonType']>;
  filter?: InputMaybe<Scalars['JsonType']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  model: Scalars['String'];
  populate?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['JsonType']>;
};


export type QueryContentModelArgs = {
  _id?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JsonType']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
  projection?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['JsonType']>;
};


export type QueryContentTreeArgs = {
  fields?: InputMaybe<Scalars['JsonType']>;
  locale?: InputMaybe<Scalars['String']>;
  model: Scalars['String'];
  parent?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
};


export type QueryGlossaryModelArgs = {
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
};


export type QueryHighlightsModelArgs = {
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
};


export type QueryImprintModelArgs = {
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
};


export type QueryInformationModelArgs = {
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
};


export type QueryLokalizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
  nested?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QueryOfferModelArgs = {
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
};


export type QueryPageByIdArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
};


export type QueryPageByRouteArgs = {
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
  route: Scalars['String'];
};


export type QueryPagesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type QueryPagesMenuArgs = {
  locale?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type QueryPagesMenusArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SetEvent = {
  __typename?: 'SetEvent';
  fromDate?: Maybe<Scalars['String']>;
  fromTime?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  toDate?: Maybe<Scalars['String']>;
  toTime?: Maybe<Scalars['String']>;
};

export type SetOffers = {
  __typename?: 'SetOffers';
  image?: Maybe<Scalars['JsonType']>;
  link?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type SetSlider = {
  __typename?: 'SetSlider';
  display: Scalars['String'];
  image: Scalars['JsonType'];
  link: Scalars['String'];
};

export type SetTeam_Member = {
  __typename?: 'SetTeam_member';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['JsonType']>;
  link?: Maybe<Scalars['String']>;
  linked_in?: Maybe<Scalars['String']>;
  mail?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['JsonType']>;
  name?: Maybe<Scalars['String']>;
};

export type SetTerms = {
  __typename?: 'SetTerms';
  definition?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['JsonType']>;
  term?: Maybe<Scalars['String']>;
};

export type ContentModel = {
  __typename?: 'contentModel';
  _created: Scalars['Int'];
  _id: Scalars['String'];
  _modified: Scalars['Int'];
  body?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  category: Scalars['String'];
  color?: Maybe<Scalars['JsonType']>;
  embed?: Maybe<Scalars['String']>;
  event?: Maybe<SetEvent>;
  image?: Maybe<Array<Maybe<Scalars['JsonType']>>>;
  mask?: Maybe<Scalars['JsonType']>;
  rotation?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JsonType']>;
  title: Scalars['String'];
  title_image?: Maybe<Scalars['JsonType']>;
};

export type DeleteContentItemOutput = {
  __typename?: 'deleteContentItemOutput';
  error?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type GlossaryModel = {
  __typename?: 'glossaryModel';
  _created?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  _modified?: Maybe<Scalars['Int']>;
  colors?: Maybe<Scalars['JsonType']>;
  slider?: Maybe<Array<Maybe<SetSlider>>>;
  terms?: Maybe<Array<Maybe<SetTerms>>>;
};

export type HighlightsModel = {
  __typename?: 'highlightsModel';
  _created?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  _modified?: Maybe<Scalars['Int']>;
  highlight01?: Maybe<Scalars['JsonType']>;
  highlight02?: Maybe<Scalars['JsonType']>;
  highlight03?: Maybe<Scalars['JsonType']>;
  highlight04?: Maybe<Scalars['JsonType']>;
  highlight05?: Maybe<Scalars['JsonType']>;
};

export type ImprintModel = {
  __typename?: 'imprintModel';
  _created?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  _modified?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
};

export type InformationModel = {
  __typename?: 'informationModel';
  _created?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  _modified?: Maybe<Scalars['Int']>;
  contact?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  team_member?: Maybe<Array<Maybe<SetTeam_Member>>>;
  vision?: Maybe<Scalars['String']>;
};

export type OfferModel = {
  __typename?: 'offerModel';
  _created?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  _modified?: Maybe<Scalars['Int']>;
  offers?: Maybe<Array<Maybe<SetOffers>>>;
};

export type SaveContentItemOutput = {
  __typename?: 'saveContentItemOutput';
  error?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['JsonType']>;
};

export type TileInfoFragment = { __typename?: 'contentModel', _id: string, slug?: string | null, category: string, title: string, color?: any | null, title_image?: any | null, rotation?: string | null, mask?: any | null, tags?: any | null, event?: { __typename?: 'SetEvent', fromDate?: string | null, toDate?: string | null, fromTime?: string | null, toTime?: string | null, location?: string | null, link?: string | null } | null };

export type DetailInfoFragment = { __typename?: 'contentModel', subhead?: string | null, caption?: string | null, body?: string | null, image?: Array<any | null> | null, embed?: string | null, _id: string, slug?: string | null, category: string, title: string, color?: any | null, title_image?: any | null, rotation?: string | null, mask?: any | null, tags?: any | null, event?: { __typename?: 'SetEvent', fromDate?: string | null, toDate?: string | null, fromTime?: string | null, toTime?: string | null, location?: string | null, link?: string | null } | null };

export type GetTileDataQueryVariables = Exact<{
  filter: Scalars['JsonType'];
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['JsonType']>;
}>;


export type GetTileDataQuery = { __typename?: 'Query', contentModel?: Array<{ __typename?: 'contentModel', _id: string, slug?: string | null, category: string, title: string, color?: any | null, title_image?: any | null, rotation?: string | null, mask?: any | null, tags?: any | null, event?: { __typename?: 'SetEvent', fromDate?: string | null, toDate?: string | null, fromTime?: string | null, toTime?: string | null, location?: string | null, link?: string | null } | null } | null> | null };

export type GetDetailDataQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JsonType']>;
  sort?: InputMaybe<Scalars['JsonType']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetDetailDataQuery = { __typename?: 'Query', contentModel?: Array<{ __typename?: 'contentModel', subhead?: string | null, caption?: string | null, body?: string | null, image?: Array<any | null> | null, embed?: string | null, _id: string, slug?: string | null, category: string, title: string, color?: any | null, title_image?: any | null, rotation?: string | null, mask?: any | null, tags?: any | null, event?: { __typename?: 'SetEvent', fromDate?: string | null, toDate?: string | null, fromTime?: string | null, toTime?: string | null, location?: string | null, link?: string | null } | null } | null> | null };

export type GetRssDataQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JsonType']>;
}>;


export type GetRssDataQuery = { __typename?: 'Query', contentModel?: Array<{ __typename?: 'contentModel', title: string, title_image?: any | null, slug?: string | null, category: string, subhead?: string | null, _created: number } | null> | null };

export type GetGlossarySliderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlossarySliderQuery = { __typename?: 'Query', glossaryModel?: { __typename?: 'glossaryModel', slider?: Array<{ __typename?: 'SetSlider', image: any, link: string, display: string } | null> | null } | null };

export type GetHighlightsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHighlightsQuery = { __typename?: 'Query', highlightsModel?: { __typename?: 'highlightsModel', highlight01?: any | null, highlight02?: any | null, highlight03?: any | null, highlight04?: any | null, highlight05?: any | null } | null };

export type GetNextEventQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['JsonType']>;
  sort?: InputMaybe<Scalars['JsonType']>;
}>;


export type GetNextEventQuery = { __typename?: 'Query', contentModel?: Array<{ __typename?: 'contentModel', image?: Array<any | null> | null, title: string, title_image?: any | null, mask?: any | null, event?: { __typename?: 'SetEvent', fromDate?: string | null, toDate?: string | null, fromTime?: string | null, toTime?: string | null, location?: string | null, link?: string | null } | null } | null> | null };

export type GetGlossaryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlossaryQuery = { __typename?: 'Query', glossaryModel?: { __typename?: 'glossaryModel', colors?: any | null, terms?: Array<{ __typename?: 'SetTerms', term?: string | null, definition?: string | null, image?: any | null } | null> | null } | null };

export type GetInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInformationQuery = { __typename?: 'Query', informationModel?: { __typename?: 'informationModel', vision?: string | null, team?: string | null, contact?: string | null, team_member?: Array<{ __typename?: 'SetTeam_member', image?: any | null, name?: string | null, description?: string | null, mask?: any | null, link?: string | null, mail?: string | null, linked_in?: string | null } | null> | null } | null };

export type GetOfferQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOfferQuery = { __typename?: 'Query', offerModel?: { __typename?: 'offerModel', offers?: Array<{ __typename?: 'SetOffers', text?: string | null, image?: any | null, link?: string | null } | null> | null } | null };
