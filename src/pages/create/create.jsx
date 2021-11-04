import LayerOrders from '../../components/layerorders/layerorders';
import CollectionDescription from '../../components/description/collection-description';
import CollectionOverview from '../../components/overview/collection-overview';
import classes from './create.module.css';

const Create = () => {
  return (
    <div className={classes.container}>
      <LayerOrders/>
      <CollectionOverview/>
      <CollectionDescription/>
    </div>
  )
}

export default Create;