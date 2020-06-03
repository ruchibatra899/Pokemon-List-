import React, { useState ,useEffect} from 'react';
import { View, Text,FlatList,StyleSheet,TouchableOpacity,Image } from 'react-native';
import axios from 'axios'

const PokemonList = ({navigation}) => {
  const [result,setResult]=useState('');
  console.log(2)
  console.log(result);
  const getResult=async ()=>{
    const response =await axios.get('https://pokeapi.co/api/v2/pokemon');
    setResult(response.data.results);
  }

  useEffect(()=>{
    getResult();
  },[])

  
  


  
  return (
    <View style={styles.container}>
    
    <FlatList
          data={result}
          showsVerticalScrollIndicator={false}
          keyExtractor={(result)=>result.name}
          renderItem={({item})=>{
          return( 
            <TouchableOpacity onPress={()=>{
              navigation.navigate('Details',{name:item.name})
            }}>
              <View style={styles.cardStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
              </View>
          </TouchableOpacity>
          )
          }}
        />
</View>
  
  );
};

const styles = StyleSheet.create({
 
    image:{
      height:200,
      width:300,
      marginVertical:10,
      marginHorizontal:10
  },
  container:{
      margin:5

  },
  textStyle:{
  fontSize:25
  },
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


  }
});

export default PokemonList;
