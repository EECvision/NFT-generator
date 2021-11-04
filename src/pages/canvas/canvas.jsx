import classes from './canvas.module.css';

import { createCanvas, loadImage } from'canvas';


const Canvas = () => {

  const canvas = createCanvas(200, 200)
  const ctx = canvas.getContext('2d')
  ctx.font = '30px Impact'
  ctx.rotate(0.1)
  const awesome = ctx.fillText('Awesome!', 50, 100)

  return (
    <div className={classes.container}>
      Canvass
    </div>
  )
}

export default Canvas;