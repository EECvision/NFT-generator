import { useReducer, createContext } from 'react';
import { genReducer, INITIAL_STATE } from './gen.reducer';

export const GenContext = createContext();

const GenContextProvider = ({ children }) => {

  const [ state, dispatch] = useReducer(genReducer, INITIAL_STATE)
  
  const  { layers } = state;

  // console.log(layers)
  return (
    <GenContext.Provider value={{ layers, dispatch }}>
      {children}
    </GenContext.Provider>
  )
}

export default GenContextProvider;