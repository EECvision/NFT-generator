import classes from './layer.module.css';

const Layer = ({ name, trait }) => {
  return (
    <li className={classes.item}>
      <div className={classes._name}>
        <div className={classes.line}>|</div>
        <div className={classes.icon}></div>
        <p className={classes.name}>{name}</p>
      </div>
      <div className={classes.trait}>{trait}</div>
    </li>
  )
}

export default Layer;