const filterUndefinedAndEmpty = (array:any) => {
    return array?.filter((data:any) => data !== undefined && Object.keys(data).length !== 0);
  };
  
  export default filterUndefinedAndEmpty;