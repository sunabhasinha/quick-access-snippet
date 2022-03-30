// create a hashmap
let mymap = new Map();

/** Set value in map */
mymap.set("key", "value");

/** Get a value by Key in map */
mymap.get("key");

/** Check if value exists in the map */
mymap.has("key"); //returns boolean

/** Clear the map */
mymap.clear();

/** Delete element from map */
mymap.delete("key"); //returns true, denoting succesful deletion of the element.

/** Iterate over a map */
for (const entry of mymap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// 0: foo
// 1: bar
// [Object]: baz
