import React ,{ FunctionComponent, useEffect, useState } from 'react';
import pokemon from './models/pokemon'   //pour typé les variables 
import POKEMONS from './models/mock-pokemon'  //List des pokemens


const App: FunctionComponent = () => {    //Function Component 

//const [name, setName] = useState<String>('React preparation site');
const [pokemons, setPokemons] =useState<pokemon[]>([])

useEffect(()=>{
    setPokemons(POKEMONS);
    },[]);
 return (
     <div className="container">
         <div className="row center-align">
             <h4 >List des pokemons</h4>
            {pokemons.map(({id,picture,name,created}) =>
        
            <div className="col s6 m4" key={id}>
            <div className="card horizontal">
                <div className="card-image"> 
                <img src={picture} alt={pokemon.name}/>
                </div>
                <div className="card-stacked">
                <div className="card-content">
                    <p>{pokemon.name}</p>
                    <p><small>{created.toString()}</small></p>
                </div>
                </div>
            </div> 
            </div>
        
            )}
          
        </div>
    </div>
 )

}
  
export default App;