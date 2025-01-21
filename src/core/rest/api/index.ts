export default {
  COUNTRIES: {
    ALL: '/v3.1/all',
  },
  CMS: {
    LOGIN_FIREBASE: '/wup-api/user-login?_format=json',
    LOGOUT: (logoutToken: string) =>
      `/user/logout?_format=json&token=${logoutToken}`,
  },
};
