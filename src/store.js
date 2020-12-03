import React, {createContext, useReducer} from 'react';

const initialState = {
    emailAddress:'test',
    vCard : {
      name: "",
      contact: "",
      email: "",
      company: "",
      jobTitle: "",
      city: "",
      websiteAddress: "",
    },
    text:'',
    emailContent:{},
    wifiInfo : {},
    bitCoinInfo:{}
    
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'ADD_EMAIL':
        
        return {
            ...state,
            emailAddress: action.payload
        }
      case 'ADD_TEXT':
        return {
            ...state,
            text: action.payload
        }
      case 'ADD_VCARD':
        return{
          ...state,
          vCard: action.payload
        }  
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
