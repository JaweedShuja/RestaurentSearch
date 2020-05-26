import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = (props) => {
  return(
    <View style={styles.container}>
      <SearchBar/>  
      <Text>This is Search Screen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})