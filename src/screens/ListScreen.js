import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'John'},
        {name: 'Bill'},
        {name: 'Ted'},
        {name: 'Cyndi'},
        {name: 'Fred'}
    ]
    return (
        <FlatList 
            //horizontal prop will change it from a column to a roll. Scroll left to right instead of up and down
            horizontal
            //hides the scroll bar while scrolling left to right 
            showsHorizontalScrollIndicator={false}
            //Use id in the future since it is unique. Similar to ReactJS key prop during NSS
            keyExtractor={(friends) => friends.name}
            data={friends} 
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }} 
        />
    )
}

//styling for the 
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginLeft: 20
    }
})

export default ListScreen