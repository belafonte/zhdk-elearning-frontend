type Image = {
  path: string | null
  title: string | null
  mime: string | null
  type: string | null
  description: string | null
  tags: [string] | []
  size: number | null
  colors:
  | []
  | [string | null]
  | [string | null, string | null]
  | [string | null, string | null, string | null]
  | [string | null, string | null, string | null, string | null]
  | [string | null, string | null, string | null, string | null, string | null]
  width: number | null
  height: number | null
  _hash: string | null
  _created: number | null
  _modified: number | null
  _cby: string | null
  folder: string | null
  _id: string | null
}

export type Event = {
  date: string | null
  time: string | null
  location: string | null
  link: string | null
}


export type Detail = {
  category: string | null
  tags: null
  title: string | null
  slug: string | null
  subhead: string | null
  title_image: Image
  rotation: string | null
  mask: Image
  caption: null
  event: Event
  color: Image
  body: string | null
  image: [Image]
  embed: string | null
  _modified: number | null
  _mby: string | null
  _created: number | null
  _state: number | null
  _cby: string | null
  _id: string | null
  [k: string]: any
} | undefined
