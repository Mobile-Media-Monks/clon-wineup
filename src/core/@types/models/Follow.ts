import { CreatedReference, Field, Timestamp } from '../commons';

export interface FollowTo {
  followTo: boolean;
  id: string;
}

export interface UserFollow {
  follow_id: string;
  uid: string;
  firstName: string;
  lastName: string;
  nickname: string;
  roles: string[];
  media?: string;
  followTo?: FollowTo | null;
}

export interface CreateFollowResponse {
  id: Field<number>[];
  uuid: Field<string>[];
  label: Field<string>[];
  uid: CreatedReference[];
  created: Timestamp[];
  changed: Timestamp[];
  field_follow: CreatedReference[];
}
