import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text,settext]=useState('');
  const handleChange=(text)=>{
settext(text);
  }
  const [list,setlist]=useState([]);
  const input=useRef();
  const handleAdd=()=>{
   
setlist([...list,text]);
  }
  return (
    <>
    <View style={styles.container}>
      <Text style={{fontSize:32}}>toDo -Android</Text>
      <StatusBar style="auto" />
    
    <View style={styles.inputcontainer}>
      <TextInput ref={input} onChangeText={handleChange} style={{height:20,fontSize:19,marginBottom:20}} placeholder='type something ...'></TextInput>
      <Button title='ADD' onPress={handleAdd}></Button>
    </View>
    <View style={styles.listcontainer}>
    
      <ScrollView>
      {list.map((item,index)=>{
        return <View style={styles.listitems} key={Math.random().toString()}><Text style={styles.listtext} key={index}>{item}</Text></View> 
      })}
      </ScrollView>
      </View>
      </View>
  
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    padding:30,
    marginTop:70,
    borderRadius:40,
    fontSize:32,
    fontFamily:"monospace"
  },
  inputcontainer:{
flex:1,
marginTop:50
  },
  listcontainer:{
    flex:3,
flexDirection:"row",
justifyContent:'center',
flexWrap:'wrap',
color:'white',
alignContent:'center',

 },
  listitems:{
margin:10,
width:280,
height:33,
flexWrap:"wrap",
backgroundColor:'#5e0acc',
color:'white',
textAlign:'center',
verticalAlign:'middle',
borderRadius:7,

  },
  listtext:{
    width:'100%',
    height:'100%',
    flexWrap:"wrap",
       color:'white',
    textAlign:'center',
    verticalAlign:'middle',
    borderRadius:7,

  }
});
