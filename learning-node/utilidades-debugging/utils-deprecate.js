const util = require('util');

const helloPluto = util.deprecate(()=>{
  console.log('hello pluto');
},'pluto is deprecate, It is not a planet anymore');

helloPluto();
