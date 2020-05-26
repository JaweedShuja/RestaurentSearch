import React from 'react'
import {View, TextInput, StyleSheet, Image} from 'react-native'
import SearhIcon from '../images/searchIcon.png'

const SearchBar = () => {
    return(
        <View style={styles.backgroundStyle}>
            <Image source={SearhIcon} style={styles.iconStyle}/>
            <TextInput  style={styles.inputStyle} placeholder="Search"/>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10,
    },
    iconStyle:{
        height:35,
        width:35,
        alignSelf:'center',
        marginHorizontal:15
    },
    inputStyle:{
        flex:1,
        fontSize:18,
    }
})

export default SearchBar