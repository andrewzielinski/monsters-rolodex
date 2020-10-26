import React from 'react';
import './cardlist.styles.css'
import {Card} from "./Card"

export const CardList = ({monsters}) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => <Card key={monster.id} monster={monster}/>)}
    </div>
  );
};

