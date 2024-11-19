import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);
  return immutableObject.getIn(array);
}

// Example usage:
const result = accessImmutableObject({
  name: {
    first: "Guillaume",
    last: "Salva"
  }
}, ['name', 'first']);
console.log(result); // Should return "Guillaume"

