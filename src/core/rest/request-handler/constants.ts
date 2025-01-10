import endpoints from '@/core/rest/api';

export const RETRY_STATUS_CODES = [401, 403];
export const EXCLUDED_RETRY_ENDPOINTS = [
  //endpoints.CMS.LOGOUT(''),
  endpoints.CMS.LOGIN_FIREBASE,
];
