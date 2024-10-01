function rotateArray(array, steps) {
    // Comprobar que el array de entrada contiene solo números
    if (!array.every(element => typeof element === 'number')) {
      return 'Error: El array ha de contenir només números.';
    }
  
      const rotatedArray = [];
      const n = array.length;
      for (let i = 0; i < n; i++) {
          const newIndex = (i + steps) % n;
          
          rotatedArray[newIndex] = array[i];
      }
      return rotatedArray;
  }
  
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [10, 20, 30, 40]
  const array3 = [100, 200, 300, 400, 500]
  
  console.log(rotateArray(array1, 2)) // [4, 5, 1, 2, 3]
  console.log(rotateArray(array2, 3)) // [30, 40, 10, 20]
  console.log(rotateArray(array3, 1)) // [500, 100, 200, 300, 400]
