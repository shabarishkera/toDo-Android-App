import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View,Image } from 'react-native';

export default function App() {
  const [text, settext] = useState('');
  const handleChange = (text) => {
    settext(text);
  }
  const handlepress = () => {
    console.log(" button pressed");
  }
  const [list, setlist] = useState([]);
  const input = useRef();
  const handleAdd = () => {
    setlist([...list, text]);
    setvisible(false);
  }
  const enableModal = () => {
    setvisible(true)
  }
  const disableModal = () => {
    setvisible(false);

  }
  const deleteitem = () => {
    console.log("ITEM IS tapped")
  }
  const [isvisible, setvisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 32, marginBottom: 50 ,marginTop:30,fontFamily:'monospace',fontWeight:'bold'}}>toDo -Android</Text>
        <StatusBar style="light" />
        {!isvisible && <Button title='add a note' onPress={enableModal}></Button>}
        <Modal style={styles.modal} animationType='slide' visible={isvisible}>
          <View style={styles.inputcontainer}>
            <Image style={styles.image} source={require('./assets/note.png')} /> 
            <TextInput ref={input} onChangeText={handleChange} style={{ height: 40, fontSize: 19,borderRadius:7,textAlign:'center', marginBottom: 20 ,backgroundColor:'lightgray'}} placeholder='type something ...'></TextInput>
            <Button title='ADD' disabled={!text.length > 0} onPress={handleAdd}></Button>
            <Button title='Close' color={'red'} onPress={disableModal}></Button>
          </View>
        </Modal>
        <View style={styles.listcontainer}>
          <ScrollView>
            {list.map((item, index) => {
              return <View style={styles.listitems} key={Math.random().toString()}><Pressable style={styles.pressable} onPress={deleteitem}><Text style={styles.listtext} key={index}>{item}</Text></Pressable></View>
            })}

          </ScrollView>

        </View>

      </View>

    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 30,
    fontSize: 32,
    fontFamily: "monospace"
  },
  image:{
    height:150,
    width:150,
    alignSelf:'center'
  

  },
  inputcontainer: {
    flex: 2,
    backgroundColor: 'gray',
    justifyContent: 'center',
    padding: 20,
    gap: 20
  },
  listcontainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: 'white',
    alignContent: 'center',

  },
  pressable: {
    width: '100%',
    verticalAlign: 'middle',
    color: 'white',
    textAlign: 'center',
  },
  listitems: {
    margin: 10,
    width: 280,
    height: 33,
    flexWrap: "wrap",
    backgroundColor: '#5e0acc',
    color: 'white',
    textAlign: 'center',
    borderRadius: 7,
    verticalAlign: 'middle'

  },
  listtext: {
    width: '100%',
    height: '100%',
    flexWrap: "wrap",
    color: 'white',
    textAlign: 'center',
    borderRadius: 7,
    verticalAlign: 'middle',
    fontSize: 18
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: 280,
    height: 400,
    margin: 30
  }
});
