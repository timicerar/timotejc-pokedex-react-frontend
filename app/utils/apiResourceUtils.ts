export const getIdFromResourceUrl = (url?: string | null): string | undefined =>
  url?.match(/\/(\d+)\/?$/)?.[1];
