export interface UserPreferences {
  challenge: number;
  likedWines: number[];
  wineEnjoyments: number[];
}

export const enum UserRole {
  WINER = 'winer',
  WINE_MAKER = 'wine_maker',
  WINE_EXPERT = 'wine_expert',
}

export const enum UserSearchRole {
  WINER = 'winer',
  WINE_MAKER = 'wine_maker',
  WINE_EXPERT = 'wine_expert',
  WINERY = 'winery',
}

export interface UserSearch {
  first_name: string;
  id: string;
  last_name: string;
  media: string | null;
  nickname: string;
  roles: UserSearchRole[];
}
