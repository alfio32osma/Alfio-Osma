interface SearchParamUpdate {
  key: string;
  value: string | null;
}

export function buildPathWithUpdatedSearchParams(
  pathname: string,
  currentSearchParams: string,
  updates: SearchParamUpdate[]
): string {
  const params = new URLSearchParams(currentSearchParams);

  updates.forEach(({ key, value }) => {
    if (value === null || value.length === 0) {
      params.delete(key);
      return;
    }

    params.set(key, value);
  });

  const query = params.toString();

  return query.length > 0 ? `${pathname}?${query}` : pathname;
}
