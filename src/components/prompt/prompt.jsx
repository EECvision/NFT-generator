import { useState } from 'react';
import classes from './prompt.module.css';

const Prompt = ({handleAddLayer, setPrompt}) => {
  const [name, setName] = useState('');
  const [trait, setTrait] = useState('');

  const handlePromptChange = event => {
    const {name, value} = event.target;
    switch (name) {
      case "name":
        setName(value)
        break;
      case "trait": 
        setTrait(value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    handleAddLayer({name, trait});
    setPrompt(false)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="layer">Layer name</label>
      <input onChange={handlePromptChange} name="name" type="text" value={name} />
      <br />
      <label htmlFor="trait">Trait</label>
      <input type="number" min="0" name="trait" value={trait} onChange={handlePromptChange} />
      <button>add</button>
    </form>
  )
}

export default Prompt;