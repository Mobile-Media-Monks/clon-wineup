export interface Field<T> {
  value: T;
}

export enum AuthorType {
  WINERY = 'wup_winery',
  USER = 'user',
  APP = 'app',
}

export interface Author {
  id: string;
  name: string;
  media?: string;
  roles?: string[];
  type?: AuthorType;
}

export interface LatLong {
  lat_long: string;
}

export interface IsItFavorite {
  status: boolean;
  favorite_id: string;
}

export interface ItemBase {
  author: Author;
  is_it_favorite: IsItFavorite;
  id: string;
  label: string;
  created_at: string;
  media?: string;
  type?: `${FeedType}`;
  pinned?: boolean;
}
export interface Timestamp {
  value: string;
  format: string;
}

export interface CreatedReference {
  target_id: number;
  target_type: string;
  target_uuid: string;
  url: string;
}

export enum FeedType {
  ARTICLE = 'wup_article',
  EVENT = 'wup_event',
  POST = 'wup_post',
  REEL = 'wup_reel',
  WINERY = 'wup_winery',
}
