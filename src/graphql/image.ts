export type ImageType = {
  path: string;
  folder: string;
  title?: string | undefined | null;
  mime?: string | undefined | null;
  type?: string | undefined | null;
  description?: string | undefined | null;
  tags?: [string] | undefined | null;
  size?: number;
  colors?: [string] | undefined | null;
  width: number;
  height: number;
  _hash: string;
  _created: number;
  _modified: number;
  _cby: string;
  _id: string;
};
