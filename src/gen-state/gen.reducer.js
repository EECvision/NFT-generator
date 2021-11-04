import genActionTypes from './gen.types';
import { addLayer, removeLayer, addImage } from './gen.utils';

export const INITIAL_STATE = {
  layers: [],
}

export const genReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case genActionTypes.ORDER_LAYERS:
      return {
        ...state,
        layers: action.payload
      }
    case genActionTypes.ADD_LAYER:
      return {
        ...state,
        layers: addLayer(state.layers, action.payload)
      }
    case genActionTypes.REMOVE_LAYER:
      return {
        ...state,
        layers: removeLayer(state.layers, action.payload)
      }
    case genActionTypes.ADD_IMAGE:
      return {
        ...state,
        layers: addImage(state.layers, action.payload)
      }
    default:
      return state;
  }
}