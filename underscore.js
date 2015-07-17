var _ = {
    //1
    average: function(array) {
        var sum = 0; avg = 0;
        for (var i = 0; i < array.length; i++) {
            sum +=array[i];
            avg = sum / array.length;
        }
        return avg;
    },

    //2
    contains: function(array,checkInArray) {
        if (array.indexOf(checkInArray) != -1) {
            return true;
        } else {
            return false;
        }
    },

    //3
    first: function(firstIndex) {
        return firstIndex[0];
    },

    //4
    last: function(lastIndex) {
        return lastIndex[lastIndex - 1];
    },

    //5
    max: function(array) {
        var max = 0;
        for (var i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    },

    //6
    min: function(array) {
        var min = array[0];
        for (var i = 0; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    },

    //7
    shuffle: function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var randomKey = Math.floor(Math.random() * (i + 1));
            var placeholder = array[i];
            array[i] = array[randomKey];
            array[randomKey] = placeholder;
        }
        return array;
    },

    //7 alt
    shuffle_alt: function(array) {
      var arrayCopy = array, shuffled = [];
      while (arrayCopy > 0) {
        var randomKey = Math.floor(Math.random() * (arrayCopy.length + 1));
        shuffled.push(arrayCopy[randomKey]);
        arrayCopy.splice(randomKey, 1);
      }
      return shuffled;
    },

    //8
    sample: function(array,quantity) {
        var randomKey = Math.floor(Math.random() * (array.length + 1));
        var sample = array[randomKey];
        if (quantity === undefined) {
            quantity = 1;
            return sample;
        } else {
            var newArray = [];
            for (var i = 1; i <= quantity; i++) {
                newArray.push(sample++);
            }
            return newArray;
          }
        }
      };
