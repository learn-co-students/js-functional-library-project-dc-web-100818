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

    find: function(collection, predicate){
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate){
      let arr = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i]) === true) {
          arr.push(collection[i])
        }
      }
      return arr
    },

    size: function(collection){
      if (Array.isArray(collection) === true) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, n=1){
      if (n === 1){
        return array.slice(0,n)[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n=1){
      if (n === 1) {
        return array.slice(-n)[0]
      } else {
        return array.slice(-n)
      }
    },

    compact: function(array){
      let arr = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i] !== false){
          arr.push(array[i]);
        }
      }
      return arr
    },

    sortBy: function(array, callback){
      let arr = [...array];
      return arr.sort(function(a,b){
        return callback(a) - callback(b);
      })
    },

    uniq: function(array, isSorted, callback = function(x) {return x}){
      let arr = [];
      let valArr = [];
      for (let i = 0; i < array.length; i++){
        if ( !valArr.includes(callback(array[i])) ){
          arr.push(array[i]);
          valArr.push(callback(array[i]));
        }
      }
      return arr
    },

    keys: function(object) {
      let arr = [];
      for (const key in object) {
        arr.push(key);
      }
      return arr;
    },

    values: function(object) {
      let arr = [];
      for (const key in object) {
        arr.push(object[key]);
      }
      return arr;
    },

    functions: function(object) {
      let arr = [];
      for (const key in object) {
        if (typeof object[key] === "function"){
        arr.push(key);
        }
      };

      return arr.sort(function (a, b) {
        return a - b;
      });

    },

    flatten: function(array, shallow = false) {
      const copy = [...array];
      const arr = [];

      if (shallow === true) {
          for (let i = 0; i < copy.length; i++) {
            if (Array.isArray(copy[i]) === false) {
                arr.push(copy[i])
            } else {
                for (let j = 0; j < copy[i].length; j++) {
                  arr.push(copy[i][j]);
                };
            };
          };
          return arr;
        } else {
          while (copy.length) {
            const next = copy.pop();
            if (Array.isArray(next)) {
              copy.push(...next);
            } else {
              arr.push(next);
            };
          };
          return arr.reverse();
      };
    }

  }
})()

fi.libraryMethod()
