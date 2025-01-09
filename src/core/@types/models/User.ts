import { Field, ItemBase } from '../commons';
import { FollowTo } from './Follow';

interface Region {
  description: string;
  id: string;
  label: string;
  media: string;
  key: string;
}

export interface User {
  countFollowers: number;
  countFollowed: number;
  followTo?: FollowTo;
  hasFavoriteArticles: boolean;
  hasFavoritePosts: boolean;
  hasFavoriteReels: boolean;
  profile: {
    field_about_me: string;
    field_birthdate: string;
    field_certifications: string;
    field_expertise_regions: Region[];
    field_first_name: string;
    field_gender: string;
    field_last_name: string;
    country: string;
    area: string;
    field_nickname: string;
    field_media: string;
    field_preferences: Field<string>[];
    field_verified: string;
    roles: string[];
    fixed_content?: ItemBase[];
    winery?: {
      id: string;
      label: string;
      media: string;
    };
  };
}
