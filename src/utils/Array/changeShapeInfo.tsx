export function changeShapeInfo(originalObject: any) {
  const transformedObject: any = {};

  for (const key in originalObject) {
    if (originalObject.hasOwnProperty(key)) {
      const index = key.split('.')[0]; // Extract index from key
      const attribute = key.split('.')[1]; // Extract attribute from key

      transformedObject[originalObject[`${index}.key`]] = originalObject[`${index}.Description`];
    }
  }

  return transformedObject
}