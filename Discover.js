import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { Image } from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Villa from './screens/Villa';

const Discover = () => {
  const navigation = useNavigation();
  // const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);
  //style={{ flex: 1, backgroundColor: 'white', position:'relative'


  const Gambar = () => {
    return (
      <View style={styles.kategori}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")} >
            <Image source={require('./assets/recommend.png')} style={{ width: 70, height: 70, borderRadius: 50 }}></Image>
          </TouchableOpacity>
          <Text style={{ color: '#00BCC9', fontSize: 13, fontWeight: 'bold', width: 80, textAlign: 'center'}}>Recommend</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity >
            <Image source={require('./assets/promo.png')} style={{ width: 70, height: 70, borderRadius: 50 }}></Image>
          </TouchableOpacity>
          <Text style={{ color: '#00BCC9', fontSize: 13, fontWeight: 'bold', width: 80,  textAlign: 'center' }}>Promo</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={{}} >
            <Image source={require('./assets/unique.png')} style={{ width: 70, height: 70, borderRadius: 50 }}></Image>
          </TouchableOpacity>
          <Text style={{ color: '#00BCC9', fontSize: 13, fontWeight: 'bold',width: 80, textAlign: 'center' }}>Unique</Text>
        </View>

        {/* <View style={{alignItems: 'center', justifyContent: 'space-between'}}></View> */}
      </View>
    );
  };



  return (
    <SafeAreaView  >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 8, marginBottom: 5 }}>
        <View>
          <Text style={{ fontSize: 40, color: '#0B646B', fontWeight: 'bold' }}> Choose </Text>
          <Text style={{ color: '#527283', fontSize: 36 }}> Villas in Bali</Text>
        </View>
        <View style={{}}></View>
        <Image source={require('./assets/avatar.png')} style={{ width: 70, height: 70, borderRadius: 50, resizeMode: 'contain', justifyContent: 'center', marginRight: 5, marginTop: 15 }} ></Image>
      </View>
      <View style={styles.input}>
        {/* <Fontawesome5 name="search" color="#053B50" size={20} /> */}
        <TextInput
          placeholder="Where to?"
          style={{
            flex: 1,
            marginLeft: 8,
            height: 35,
            justifyContent: 'flex-start',
          }}
        />
      </View>

      {/* <View>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 2 }}>
          <View style={{ width: 10, height: 10, borderRadius: 10, shadowOffset: 10, shadowOpacity: 0.3, shadowRadius: 3, elevation: 2 }}>
            
          </View>
          <Text>

          </Text>
        </TouchableOpacity>
      </View> */}
      <Gambar />
    </SafeAreaView>
  )
}

export default Discover

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 50,
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 10,
    marginLeft: 30,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12
  },
  kategori: {
    marginTop: 120,
    marginHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    height: 40,
    width: 40,
    backgroundColor: '#C8DBBE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // width: 80,
    // height: 80,
    // padding: 10,
    // borderRadius: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
})
