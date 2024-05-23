export function convertToObject(obj:any) {
  const newObj = {} as any;
  for (const key in obj) {
      if (key.includes('.Key')) {
          const newKey = obj[key];
          const valueKey = key.replace('.Key', '.Description');
          const value = obj[valueKey];
          newObj[newKey] = value;
      }
  }
  return newObj;
}