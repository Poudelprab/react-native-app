import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>home</Text>
    </View>
  )
}

export default home
const styles=StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',

  },
  text: {
    fontSize: 30,
  },
});