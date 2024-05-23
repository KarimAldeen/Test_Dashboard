export const isEmpty = (Type:any) => {
    return !Type || (Array.isArray(Type) && Type.length === 0);
  };