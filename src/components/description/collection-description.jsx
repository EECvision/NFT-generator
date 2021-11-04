import Button from '../button/button';
import CollectionDetails from '../details/collection-details';
import CollectionPreview from '../preview/collection-preview';
import classes from './collection-description.module.css';

const CollectionDescription = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.connectWrapper}>
          <Button>connect-wallet</Button>
        </div>
        <div className={classes.previewWrapper}>
          <CollectionPreview />
        </div>
        <div className={classes.detailsWrapper}>
          <CollectionDetails />
        </div>
        <div className={classes.btnWrapper}>
          <Button>download zip</Button>
        </div>
        <div className={classes.btnWrapper}>
          <Button>mint 10,000</Button>
        </div>

      </div>
      <div className={classes.input}>
        <div className={classes.action}>
          <label htmlFor="mint amout">Mint Amout</label>
          <input type="number" min="0" />
        </div>
        <div className={classes.action}>
          <label htmlFor="combinations">Combinations</label>
          <input type="number" min="0" />
        </div>
      </div>
    </div>
  )
}

export default CollectionDescription;