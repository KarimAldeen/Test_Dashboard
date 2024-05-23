export function objectToArray(obj:any) {
    // Initialize an empty array to store the result
    const result = [] as any  ;
  
    // Iterate over the keys of the object
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Extract the index from the key
        const index = parseInt(key.split('.')[0]);
  
        // Get the attribute name from the key
        const attributeName = key.split('.')[1];
  
        // If the index does not exist in the result array, create a new object
        if (!result[index]) {
          result[index] = {};
        }
        
  
        // Set the attribute value in the result object
        result[index][attributeName] = obj[key];
      }
    }
  
    return result;
  }