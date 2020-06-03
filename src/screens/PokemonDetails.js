import React, { useState ,useEffect} from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import axios from 'axios'


const PokemonDetails = ({navigation}) => {
  const name=navigation.getParam('name');
  const [result,setResult]=useState('');
  

  const getResult=async(name)=>{
    const response =await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setResult(response.data);
  }
  useEffect(()=>{
    getResult(name);
  },[]);

  


 console.log(result.abilities);
  return (
   
    <View style={styles.container}>
      <View style={styles.cardStyle}>
      <Text style={styles.textStyle}>Height - {result.height}</Text>
      </View>
      <View style={styles.cardStyle}>
      <Text style={styles.textStyle}>Abilities of {name}</Text>
      
      <FlatList
          data={result.abilities}
          showsVerticalScrollIndicator={false}
          keyExtractor={(result)=>result.id}
          renderItem={({item})=>{
          return( 
            
                <Text style={styles.abilityStyle}>{item.ability.name}</Text>
             
          )
          }}
        />
        </View>
    
</View>
  
  );
};

const styles = StyleSheet.create({
  cardStyle:{
    borderWidth:1,
    borderRadius:2,
    borderColor:'#ddd',
    borderBottomWidth:0,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:2,
    elevation:1,
    marginLeft:5,
    marginRight:5,
    marginTop:10


  },
  container:{
    margin:5
  },
  textStyle:{
    fontSize:25,

  },
  abilityStyle:{
    fontSize:20,
    marginLeft:5

  }
});

export default PokemonDetails;
