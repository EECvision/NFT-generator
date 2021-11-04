import classes from './layerorders.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useContext, useState } from 'react';
import { GenContext } from '../../gen-state/gen.context';
import { addLayer, orderLayers } from '../../gen-state/gen.actions';
import { removeLayer } from '../../gen-state/gen.actions';
import Layer from '../layer/layer';
import Prompt from '../prompt/prompt';
import { v4 as uuid } from 'uuid';

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  marginBottom: 8,
  // background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  width: "100%"
});

const LayerOrders = () => {

  const { layers, dispatch } = useContext(GenContext);
  const [prompt, setPrompt] = useState(false);

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return
    const newList = [...layers];
    const [removed] = newList.splice(source.index, 1);
    newList.splice(destination.index, 0, removed);
    dispatch(orderLayers(newList));
  }

  const handleAddLayer = res => {
    dispatch(addLayer({ "id": uuid(), "trait": res.trait, "name": res.name, images: [] }));
  }

  const handleRemoveLayer = layer => {
    dispatch(removeLayer(layer))
  }

  return (
    <div className={classes.container}>
      <section className={classes.collectionName}>
        <h2 className={classes.nameHeader}>Collection Name</h2>
        <div className={classes.layerorder}>
          <div className={classes.layerorderHeader}>Layer Orders</div>
          <div className={classes.layer_trait}>
            <div className={classes.layerHeader}>layer</div>
            <div className={classes.traitHeader}>trait</div>
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  className={classes.list}
                >
                  {layers.map((item, index) => (
                    <Draggable key={index} draggableId={index + ''} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <Layer name={item.name} trait={`trait ${item.trait}`} />
                          <button onClick={() => handleRemoveLayer(item)}>remove layer</button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          {
            prompt
              ? <div className={classes.promptWrapper}>
                <Prompt handleAddLayer={handleAddLayer} setPrompt={setPrompt} />
              </div> : null
          }

          <button onClick={() => setPrompt(true)}>add layer</button>
        </div>
      </section>
    </div>
  )
}

export default LayerOrders;



