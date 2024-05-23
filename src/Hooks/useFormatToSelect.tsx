const useFormatToSelect = (Data : any) => {
    const format = (data :any) => {
      if (!data) return [];
      const language = localStorage.getItem("language") ?? "en";

      return data.map((item :any) => ({
        value: item?.id,
        label: item?.name[language],
      }));
    };
  
    return format(Data);
  };
  
  export default useFormatToSelect;
  