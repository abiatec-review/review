import React, { FC } from 'react';

import FilterBlock from '../../moleculs/FilterBlock';

const styles = {
  listStyle: 'list-none flex flex-col items-start',
};

const filters = [
  { type: 'gender', values: ['male', 'female'] },
  { type: 'status', values: ['alive', 'dead', 'unknown'] },
  { type: 'species', values: ['alien', 'human'] },
];

const Filters = () => (
  <ul className={styles.listStyle}>
    {filters.map((item) => (
      <FilterBlock
        type={item.type}
        values={item.values}
        key={item.type}
      />
    ))}
  </ul>
);

export default Filters;
