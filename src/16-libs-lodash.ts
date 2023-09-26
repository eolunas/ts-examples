//var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'Eduardo',
    role: 'admin',
  },
  {
    username: 'Juana',
    role: 'seller',
  },
  {
    username: 'zara',
    role: 'seller',
  },
  {
    username: 'Ana',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
