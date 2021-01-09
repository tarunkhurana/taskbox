import * as React from 'react';
import { useReducer, createContext } from 'react';
import { IState, IAction } from './types/interface';

const initialState: IState = {
  episodes: [],
  favourites: [],
};
export const StoreContext = createContext<IState | any>(initialState);
const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    // Add the `ADD_FAV` action..
    case 'ADD_FAV':
      return { ...state, favourites: [...state.favourites, action.payload] };
    // ADD REMOVE FAV
    case 'REMOVE_FAV':
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
};
export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
// second way

// export const StoreProvider: React.FC<{ children: JSX.Element }> = ({
//   children,
// }) => {
//   const [state, dispatch] = useReducer<(r: IState, action: any) => IState>(
//     reducer,
//     initialState
//   );
//   const value: { state: IState; dispatch: React.Dispatch<any> } = {
//     state,
//     dispatch,
//   };
//   return (
//     <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
//   );
// };
