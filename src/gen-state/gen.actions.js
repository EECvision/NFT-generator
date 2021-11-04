import genActionTypes from './gen.types';

export const orderLayers = layers => ({
  type: genActionTypes.ORDER_LAYERS,
  payload: layers
});

export const addLayer = layer => ({
  type: genActionTypes.ADD_LAYER,
  payload: layer
});

export const removeLayer = layer => ({
  type: genActionTypes.REMOVE_LAYER,
  payload: layer
});

export const addImage = image => ({
  type: genActionTypes.ADD_IMAGE,
  payload: image
})