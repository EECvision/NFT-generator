import classes from './collection-menu.module.css';
import ArtCard from '../art-card/art-card';
import { useRef, useContext } from 'react';
import { GenContext } from '../../gen-state/gen.context';
import { addImage } from '../../gen-state/gen.actions';

const CollectionMenu = ({ layer: { name, images } }) => {

  const { dispatch } = useContext(GenContext);

  const fileRef = useRef(null);

  const handleUpload = () => {
    fileRef.current.click();
  }

  const handleFileChange = event => {
    const { files } = event.target;
    let imageFiles = Object.values(files);
    let uniqueImageFile = [...images];
    let filterArr = images.map(image => image.name);

    imageFiles.forEach(imageFile => {
      if (!filterArr.includes(imageFile.name)) {
        uniqueImageFile.push(imageFile)
        filterArr.push(imageFile.name)
      }
    })

    dispatch(addImage({ name, images: uniqueImageFile }))
  }

  return (
    <div className={classes.container}>
      <section className={classes.layer}>
        <h3 className={classes.header}>{name}</h3>
        <div className={classes.wrapper}>
          {
            images.map((image, index) => (
              <ArtCard image={image} key={index} />
            ))
          }
        </div>
        <button onClick={handleUpload} className={classes.uploadBtn}>upload</button>
      </section>

      <input onChange={handleFileChange} ref={fileRef} style={{ display: "none" }} type="file" name="avatar" id="avatar" accept="image/png" multiple />
    </div>
  )
}

export default CollectionMenu;


