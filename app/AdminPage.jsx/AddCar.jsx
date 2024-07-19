import { TextInput,StyleSheet, Text, View, Alert } from 'react-native'
import React , { useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { AddCara } from '../appSlice/appSlices'
import { Modal } from 'react-native'
import { Button } from 'react-native'
import { RemoveCar } from '../appSlice/appSlices'


function AddCar  () {
  
  const [searchText, setSearchText] = useState('');
  const cars = useSelector(state=>state.cars)
  const [visible, setVisible] = useState(false);
  const [start,setStart]= useState('')
  const [end,setEnd] = useState('')
  const [time,setTime] = useState('')
  const [cost,setCost] = useState()
   const dispatch = useDispatch()

   const HandleAdd = (e)=>{
    e.preventDefault()
    dispatch(AddCara(start, end , time, cost))
    setCost('')
    setEnd('')
    setStart('')
    setTime('')
    Alert.alert('Adding car','Car added successfully')
}

  return (
    
 <>
  <View className='w-full justify-center items-center h-full px-4' style={{justifyContent:'center',backgroundColor:'#032B44',height: Dimensions.get('screen').height * 0.12,alignItems:'center'}}>
          <Text style={{color:'white',fontSize:27,fontWeight:'900'}}>
            Cars
          </Text>
      </View>
    <SafeAreaView className='bg-white h-full'>
      <View className='w-full  items-center  px-4'>
      <View style={styles.searchBarContainer}>
      <View style={styles.searchIcon}>
        <Feather name="search" size={24} color="#666" />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="    Enter car orgin..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        underlineColorAndroid="transparent"
      />

    </View>
    <View className='mt-3 mb-5'>
    <TouchableOpacity onPress={()=>setVisible(!visible)}>
    <MaterialCommunityIcons name="plus-circle" size={33}  color={`#1A1D23`}  />
    </TouchableOpacity>
    </View>
      </View>
     <ScrollView contentContainerStyle={{ height: Dimensions.get('window').height * 5.3 }} style={{flex:1}} >
      
     <Modal visible={visible} transparent={true} >
      <View
        style={{
          height: '65%',
          padding: 20,
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#E5EDF0',
          borderRadius:12,
          position:'absolute',
          top:'15%'
         
        }}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{justifyContent:'center',color:'#032B44',fontSize:30,fontWeight:'900',paddingTop:'1%',paddingBottom:25}}>Add car</Text>
      </View>
      <View>
      <TextInput
            className='mb-5'
            placeholder="Start point"
            value={start}
            onChangeText={(text)=>setStart(text)}
            style={styles.input}
          />
          <TextInput
            className='mb-5'
            placeholder="End point"
            value={end}
            onChangeText={(text)=>setEnd(text)}
            style={styles.input}
          />
            <TextInput
            className='mb-5'
            placeholder="Time"
            value={time}
            onChangeText={(text)=>setTime(text)}
            style={styles.input}
          />
            <TextInput
            className='mb-5'
            placeholder="Cost"
            value={cost}
            onChangeText={(text)=>setCost(text)}
            style={styles.input}
          />
            
      </View>
      <View style={{justifyContent:'center',alignItems:'center',paddingBottom:'10%'}}>
      <TouchableOpacity className='mt-7' onPress={HandleAdd}>
              <View   style={{alignItems:'center',height: Dimensions.get('screen').height * 0.05, width:Dimensions.get('screen').width * 0.55,borderRadius:10,  backgroundColor:'#032B44',paddingTop:9}} >
                
                <Text style={{color:'white',fontSize:20,fontWeight:'7000'}}>Add car</Text>
                </View> 
                </TouchableOpacity>
      </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Button title="close" color={'#032B44'} onPress={()=>setVisible(!visible)} />
        </View>
      </View>
    </Modal>
      <View className='w-full  items-center h-full px-4'>
        {
          cars.map((car)=>(
            
            <View style={{paddingTop:'13%'}} key={car.id}>
            <View style={{
                 
                 justifyContent:'start',
                 width: Dimensions.get('screen').width * 0.87,
                 height: Dimensions.get('screen').height * 0.43,
                 backgroundColor: '#E5EDF0',
                 borderRadius: 20,
                 alignItems: 'center',
                 paddingTop:'2%',
                 
            }}>
              <View>
              <Text  className='mt-2' style={{justifyContent:'center',color:'#032B44',fontSize:20,fontWeight:'bold',paddingTop:'1%',paddingBottom:25}}>
               Horizon
             </Text>
             </View>
            <View>
              <View style={{backgroundColor:'white',height: Dimensions.get('screen').height * 0.06, width:Dimensions.get('screen').width * 0.60,borderRadius:5,justifyContent:'center'}}>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold'}} className='mt-4 '>Start point :</Text>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold',position:'relative',left:'40%',top:'-47%'}}>{car.start}</Text>

              </View>
              <View style={{backgroundColor:'white',height: Dimensions.get('screen').height * 0.06, width:Dimensions.get('screen').width * 0.60,borderRadius:5,justifyContent:'center'}} className='mt-3'>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold'}} className='mt-4 '>End point :</Text>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold',position:'relative',left:'40%',top:'-47%'}}>{car.end}</Text>
              </View>
              <View style={{backgroundColor:'white',height: Dimensions.get('screen').height * 0.06, width:Dimensions.get('screen').width * 0.60,borderRadius:5,justifyContent:'center'}} className='mt-3'>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold'}} className='mt-4 '>Time :</Text>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold',position:'relative',left:'40%',top:'-47%'}}>{car.time}</Text>
              </View>
              <View style={{backgroundColor:'white',height: Dimensions.get('screen').height * 0.06, width:Dimensions.get('screen').width * 0.60,borderRadius:5,justifyContent:'center'}} className='mt-3'>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold'}} className='mt-4 '>Cost :</Text>
                <Text style={{justifyContent:'center',color:'#032B44',fontSize:16,fontWeight:'bold',position:'relative',left:'40%',top:'-47%'}}>{car.cost}</Text>
              </View>
            </View>
          <TouchableOpacity className='mt-7' onPress={()=> dispatch(RemoveCar(car.id))}>
              <View   style={{alignItems:'center',height: Dimensions.get('screen').height * 0.06, width:Dimensions.get('screen').width * 0.55,borderRadius:15,  borderWidth: 1,backgroundColor:'#032B44',paddingTop:14}} >
                
                <Text style={{color:'white',fontSize:20,fontWeight:'7000'}}>Remove car</Text>
                </View> 
                </TouchableOpacity>
              </View>
             
           </View>
          ))


     }
      </View>
      </ScrollView>
    </SafeAreaView>
 </>
  )
}

export default AddCar

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#F7F7F7',
    height: Dimensions.get('screen').height * 0.07,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 10,
    justifyContent:'center',
    
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    position:'relative',
    top:'-20%'
  },
  searchIcon:{
    position:'relative',
    left:'90%',
    top:'20%'
  },
  input: {
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'white'
    
  },
})