const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);


export function filterPlainArray(array, filters) {
  const filterKeys = Object.keys(filters);
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find(filter => getValue(filter) === getValue(item[key]));
    });
  });
}