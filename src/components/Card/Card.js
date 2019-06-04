import React from 'react';

const Card = props => {
  const { name, weight, sprites } = props.data;

  const spriteList = Object.values(sprites).map(sprite => {
    let result;
    if (sprite) {
      result = <img src={sprite} alt={`${name} sprite`}/>
    }
    return result;
  })

  return (
    <article>
      <ul>
        <li>Name: {name}</li>
        <li>Weight: {weight}</li>
        <li>Sprites: {spriteList}</li>
      </ul>
    </article>
  );
};

export default Card;