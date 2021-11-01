import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AxieDisplay(props) {
    console.log(props);
    return (<div>
            <h1>Player Rank: {props.playerRank}</h1>
            <h3>${props.currentPriceUSD}</h3>
            <p1>{props.axieClass}</p1>
            <img style={{width: "128px", height: "128px"}} src={props.imgURL}/>
      </div>
  );

}