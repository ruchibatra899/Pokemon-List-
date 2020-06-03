import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PokemonList from './src/screens/PokemonList';
import PokemonDetails from './src/screens/PokemonDetails';




const navigator =createStackNavigator(
  {
    List: PokemonList,
    Details:PokemonDetails
   
    
  },
  {
    initialRouteName:'List',
    defaultNavigationOptions:{
      title: 'Pokemon list'
    }
  }
);

export default createAppContainer(navigator);
