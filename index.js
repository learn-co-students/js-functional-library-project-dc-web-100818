fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection) === true) {
        for(let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
      } else if (typeof(collection) === 'object') {
        for(const key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newArr = []
      if (Array.isArray(collection) === true) {
        for(let i = 0; i < collection.length; i++) {
          newArr.push(callback(collection[i]))
        }
      } else if (typeof(collection) === 'object') {
        for(const key in collection) {
          newArr.push(callback(collection[key], key, collection))
        }
      }
      return newArr
    },

    reduce: function(collection, callback, acc=0) {
      let sum = acc
      for(const el of collection) {
        sum = callback(sum, el, collection)
      }
      return sum
    },

    find: function(collection, predicate) {
      let returnedEl
      for(const el of collection) {
        if (predicate(el)) {
          return returnedEl = el
        }
      }
    },

    filter: function(collection, predicate) {
      let returnedArr = []
      for(const el of collection) {
        if (predicate(el)) {
          returnedArr.push(el)
        }
      }
      return returnedArr
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n=1) {
      if (n === 1) {
        return collection.slice(0, n)[0]
      } else {
        return collection.slice(0, n)
      }
    },

    last: function(collection, n=-1) {
      if (n === -1 ) {
        return collection.slice(n)[0]
      } else {
        return collection.slice(-n)
      }
    },

    compact: function(array) {
      let newArr = []
      for(const el of array) {
        if (!!el) {
          newArr.push(el)
        }
      }
      return newArr
    },

    sortBy: function(array, callback) {
      let newArr = array.slice()
      newArr.sort(function(a, b){
        return callback(a) - callback(b)
      })
      return newArr
    },

    uniq: function(array, isSorted, callback) {
      let newArr = []
      let results = []
      if (callback) {
        for(const el of array) {
          if (!results.includes(callback(el))) {
            results.push(callback(el))
            newArr.push(el)
          }
        }
      } else {
        for(const el of array) {
          if (!newArr.includes(el)) {
            newArr.push(el)
          }
        }
      }
      return newArr
    },

    keys: function(object) {
      let newArr = []
      for(const key in object) {
        newArr.push(key)
      }
      return newArr
    },

    values: function(object) {
      let newArr = []
      for(const key in object) {
        newArr.push(object[key])
      }
      return newArr
    },

    functions: function(object) {
      let newArr = []
      for(const key in object) {
        if (typeof(object[key]) === 'function') {
          newArr.push(key)

        }
        // debugger
      }
      return newArr
    },


  }
})()

fi.libraryMethod()
