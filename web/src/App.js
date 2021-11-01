import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header';
import { getCheapestAxies } from './helpers/firHelpers';
import AxieDisplay from './components/AxieDisplay/AxieDisplay';
import AxiesTable from './components/AxiesTable/AxiesTable'


function App() {
  const [data, setData] = useState([])
  var list = []
 

  list = data.map((axie) =>
    <AxieDisplay
        imgURL={axie.image}
        currentPriceUSD={axie.currentPriceUSD}
        axieClass={axie.class}
        playerRank={axie.player_rank} />
  );

  useEffect(() => {
    getCheapestAxies
      .then((res) => {
        setData(res)
    }).catch((err) => {console.log(err)});
    
  }, []);
  console.log(data);
  return (
    <div className="App" >
      <Header />
      <div style={{width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: '50px'}}>
        <h1>cheapestAxies</h1>
        <AxiesTable data={data}></AxiesTable>
      </div>
      
      
      
    </div>
  );
}

export default App;
