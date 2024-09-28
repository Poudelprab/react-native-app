import { StyleSheet,View, Text } from 'react-native'
import {Image} from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import {icons} from '../../constants';

interface TabIconProps {
  icon: any;
  name:string;
  color: string;
  focused: boolean;
}

const TabIcon:React.FC<TabIconProps>=({icon,color,name,focused})=>{
  return(
    <View>
      <Image source={icon}
      resizeMode='contain'
      tintColor={color}
      style={{
        width: 24, // equivalent to w-6
        height: 24, // equivalent to h-6
      }}
      
      />
      <Text
        style={{
          color: color,
          fontWeight: focused ? '600' : '400', // 'font-psemibold' -> 600, 'font-pregular' -> 400
          fontSize: 12, // text-xs equivalent
        }}
      >
        {name}
      </Text>
      
    </View>
  )
}



const _Taabslayout = () => {
  return (
   <>
   <Tabs screenOptions={{
    tabBarShowLabel:false,
    tabBarActiveTintColor:'#FFA001',
    tabBarInactiveTintColor:'#CDCDE0',
    tabBarStyle:{
      backgroundColor: '#161622',
      borderTopWidth:1,
      borderTopColor:'#232533',
      height:84,
    }
   }}>
    <Tabs.Screen name="home" options={
      {
        title:'Home',
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.home}
          color={color}
          name="home"
          focused={focused}/>
        )  
      }
    }  />
     <Tabs.Screen name="bookmark" options={
      {
        title:'Bookmark',
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.bookmark}
          color={color}
          name="Bookmark"
          focused={focused}/>
        )  
      }
    }  />
     <Tabs.Screen name="create" options={
      {
        title:'Create',
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.plus}
          color={color}
          name="Create"
          focused={focused}/>
        )  
      }
    }  />
     <Tabs.Screen name="Profile" options={
      {
        title:'Profile',
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.profile}
          color={color}
          name="Profile"
          focused={focused}/>
        )  
      }
    }  />
   </Tabs>
   </>
  )
}

export default _Taabslayout
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
text:{
  fontSize:30,
  

}
})