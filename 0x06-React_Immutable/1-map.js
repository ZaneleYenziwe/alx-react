// 1-map.js
import { Map } from 'immutable';

function getImmutableObject(object) {
  return Map(object);
}

// Example usage:
const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableObj = getImmutableObject(obj);
console.log(immutableObj);

