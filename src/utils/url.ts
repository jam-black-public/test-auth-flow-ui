export const getBaseUrl = (): string => {
  return process.env.REACT_APP_BASE_API_URL || 'missingBaseApiUrlEnvVar';
};
