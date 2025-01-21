import endpoints from '@/core/rest/api';

const noTokenEndpoints = [endpoints.CMS.LOGIN_FIREBASE];

const noTokenBaseUrls: string[] = [];

export const needsToken = (
  url: string | undefined,
  baseURL: string | undefined,
): boolean => {
  if (!url || !baseURL) {
    return false;
  }

  // Check if the URL starts with any of the no-token base URLs
  if (noTokenBaseUrls.some(baseUrl => baseUrl.startsWith(baseURL))) {
    return false;
  }

  // Check if the URL includes any of the no-token endpoints
  return !noTokenEndpoints.some(endpoint => url.includes(endpoint));
};
