fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
        }
      } else {
        for (const key in collection) {
          callback(collection[key], key, collection);
        }
      };
      return collection;
    },

    map: function(collection, callback) {
      let newArr = [];

      if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
          newArr.push(callback(collection[i], i, collection));
        };
      } else {
        for (const key in collection) {
         newArr.push(callback(collection[key], key, collection));
        };
      };

      return newArr;
    },

    reduce: function(collection, callback, acc = 0) {
    
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
