import CollectionMenu from '../menu/collection-menu';
import classes from './collection-overview.module.css';
import { useContext } from 'react';
import { GenContext } from '../../gen-state/gen.context';

const CollectionOverview = () => {
  const { layers } = useContext(GenContext);
  return (
    <div className={classes.container}>
      {
        layers.map(layer => (
          <CollectionMenu key={layer.id} layer={layer}/>
        ))
      }
    </div>
  )
}

export default CollectionOverview;