import React from 'react';

import { Card } from '../card/card';
import './card.style.css';

export const Cardlist = props => {
    // console.log(props)
   return <div className='Card-list'> {props.monstor.map(monstor => (<Card key={monstor.id} monstor={monstor}/>))}</div>;
}
 