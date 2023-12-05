const formReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'update_field':
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  };
  
  export default formReducer;