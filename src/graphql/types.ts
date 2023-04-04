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
  JsonType: {"path":"string","title":"string","mime":"string","type":"string","description":"string","tags":["string"],"size":"number","colors":["string"],"width":"number","height":"number","_hash":"strign","_created":"number","_modified":"number","_cby":"string","folder":"string","_id":"string"};
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
  componentModel?: Maybe<Array<Maybe<ComponentModel>>>;
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
  texttttModel?: Maybe<Array<Maybe<TexttttModel>>>;
};


export type QueryComponentModelArgs = {
  _id?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JsonType']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
  projection?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['JsonType']>;
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


export type QueryTexttttModelArgs = {
  _id?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JsonType']>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  populate?: InputMaybe<Scalars['Int']>;
  projection?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['JsonType']>;
};

export type SetEvent = {
  __typename?: 'SetEvent';
  date?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
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

export type ComponentModel = {
  __typename?: 'componentModel';
  _created: Scalars['Int'];
  _id: Scalars['String'];
  _modified: Scalars['Int'];
  comp?: Maybe<Scalars['JsonType']>;
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

export type TexttttModel = {
  __typename?: 'texttttModel';
  _created: Scalars['Int'];
  _id: Scalars['String'];
  _modified: Scalars['Int'];
  lay?: Maybe<Scalars['JsonType']>;
  text?: Maybe<Scalars['String']>;
};

export type GetContentByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetContentByIdQuery = { __typename?: 'Query', contentModel?: Array<{ __typename?: 'contentModel', _id: string, category: string, tags?: {"path":"string","title":"string","mime":"string","type":"string","description":"string","tags":["string"],"size":"number","colors":["string"],"width":"number","height":"number","_hash":"strign","_created":"number","_modified":"number","_cby":"string","folder":"string","_id":"string"} | null, title_image?: {"path":"string","title":"string","mime":"string","type":"string","description":"string","tags":["string"],"size":"number","colors":["string"],"width":"number","height":"number","_hash":"strign","_created":"number","_modified":"number","_cby":"string","folder":"string","_id":"string"} | null } | null> | null };
