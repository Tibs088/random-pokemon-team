import React from 'react';

const List = (props) => {
  return (
    <div className="team">
      {props.pokemons.map(({ id, name, img }) => {
        return (
          <div key={id}>
            <img src={img} alt={name} />
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default List;
