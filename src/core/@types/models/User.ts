export interface AuthUserResponse {
  current_user: {
    uid: string;
    roles: string[];
    name: string;
  };
  csrf_token: string;
  logout_token: string;
  access_token: string;
}
