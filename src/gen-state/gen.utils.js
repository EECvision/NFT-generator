export const addLayer = (layers, layerToAdd) => {
  let result = layers.find(layer => layer.name.toLowerCase() === layerToAdd.name.toLowerCase())
  if (result) return layers;
  return [...layers, layerToAdd];
}

export const removeLayer = (layers, layerToRemove) => {
  return layers.filter(layer => layer.name.toLowerCase() !== layerToRemove.name.toLowerCase())
}

export const addImage = (layers, imageObj) => {
  let newLayers = layers.map(layer => {
    if (layer.name.toLowerCase() === imageObj.name.toLowerCase()) {
      return {...layer, images: imageObj.images}
    }else {
      return layer
    }
  })
  return newLayers
}