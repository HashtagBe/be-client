const filterify = function filterify(query) {
  const filters = [query.saved && 'saved', query.claimed && 'claimed'].filter(f => f);
  if (query.viewed === true) filters.push('viewed');
  if (query.viewed === false) filters.push('not_viewed');
  return filters.length ? filters : undefined;
};

export default function queryDegoodifier(query, join) {
  const filters = filterify(query);
  const apiQuery = {};
  if (query.limit) apiQuery.nwidgets = query.limit;
  if (query.type) apiQuery.widget_names = join ? query.type : [query.type];
  if (query.types) apiQuery.widget_names = join ? query.types.join(',') : query.types;
  if (filters) apiQuery.filters = join ? filters.join(',') : filters;
  if (query.interest) apiQuery.interests = join ? query.interest : [query.interest];
  if (query.interests) apiQuery.interests = join ? query.interests.join(',') : query.interests;
  // TODO: Don't do this
  if (query.query) apiQuery.q = query.query.split(' ').join(',');
  if (query.onlyNew) apiQuery.get_all = false;

  return apiQuery;
}
