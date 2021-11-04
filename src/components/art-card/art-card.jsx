import classes from './art-card.module.css';

const ArtCard = ({image}) => {
  return (
    <div className={classes.container}>
        <img className={classes.image} src={URL.createObjectURL(image)} alt="avatar" />
    </div>
  )
}

export default ArtCard;