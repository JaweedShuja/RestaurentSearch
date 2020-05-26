import React from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import ResultsDetail from './ResultsDetail'


const ResultsList = ({title, results}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results: {results.length}</Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                // keyExtractor={result = results.restaurant.name}
                renderItem={({item}) => {
                    return (
                        <ResultsDetail result={item.restaurant} />
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
    },
    container:{
        marginBottom:10,
    }
})

export default ResultsList