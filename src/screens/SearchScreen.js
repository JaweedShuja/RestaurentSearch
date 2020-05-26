import React, {useState} from 'react'
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.restaurant.price_range === price;
    });
  };

  console.log(results)
  return(
    <View style={{backgroundColor:'white', flex:1,}}>
      <SearchBar 
        term={term} 
        // onSetTerm={value => setTerm(value)}
        onSetTerm={setTerm}
        onDoneEditing={() => searchApi(term)}
      />  
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
      <ResultsList results={filterResultsByPrice(2)} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice(3)} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice(4)} title="Big Spender" />
      </ScrollView>
      </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    
})