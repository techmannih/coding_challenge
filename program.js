function filterList(list) {
    if (list.length % 10 !== 0) {
      throw new Error("List length must be a multiple of 10");
    }
  
    return list.filter((item, index) => {
      // Keep items at positions that are not multiples of 2 or 3
      return (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0;
    });
  }
  const input = prompt("Enter a list of numbers separated by commas:");
  const numbers = input.split(",");
   const myList = numbers.map(Number); // Convert to numbers
  console.log(myList)
  
  // Example usage:
  // const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  try {
    const filteredList = filterList(myList);
    console.log(filteredList); // Output: [1, 5, 7, 11, 13, 17, 19]
  } catch (error) {
    console.error(error.message);
  }
  