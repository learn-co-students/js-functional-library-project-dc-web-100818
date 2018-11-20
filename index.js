fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i=0; i <  collection.length; i ++) {
          callback(collection[i]);
        }
      } else {
        let newObject = Object.assign({}, collection);
        for(let key in newObject) {
          callback(newObject[key])
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      if (Array.isArray(collection)) {
        for (let i=0; i <  collection.length; i ++) {
          newCollection.push(callback(collection[i]));
        }
      } else {
        for(let key in collection) {
          newCollection.push(callback(collection[key]));
        }
      }
      return newCollection;
    },

    reduce: function(collection, callback, init = 0) {
      let acc = init;
      for (i = 0; i < collection.length; ++i){
         acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (i=0; i < collection.length; ++i){
        if (predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let filtered = [];
      for (i=0; i < collection.length; ++i) {
        if (predicate(collection[i]) === true) {
          filtered.push(collection[i]);
        }
      }
      return filtered;
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },

    first: function(collection, number = 1) {
      if (number === 1) {
        return collection[0];
      } else {
        return collection.slice(0, number);
      }
    },

    last: function(collection, number = 1) {
      if (number === 1) {
        return collection[collection.length - 1];
      } else {
        return collection.slice(collection.length -
          number);
      }
    },

    compact: function(array) {
      // let falsy = [false, null, 0,"", undefined, NaN];
      let new_array = []
      for(let i = 0; i < array.length; i++) {
        if(array[i]) {
          new_array.push(array[i]);
        }
      }
      return new_array;
    },

    sortBy: function(collection, callback) {
      const new_array = [...collection]

      return new_array.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function(array, boolean) {

        let new_array = array.reduce((curr, next) => {
          return curr.concat(next)
        }, []);

        if (boolean) {
          return new_array;
        } else {
          return this.flatten;
        }
    },

    functions: function( ) {
    },


  }
})()

fi.libraryMethod()
