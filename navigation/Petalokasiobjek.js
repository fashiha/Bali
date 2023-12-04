import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import List from '../Listdata';
import Discover from '../Discover';

const Tab = createBottomTabNavigator();

// const webmap = require('../peta.map.html');

// Form Input dari github pages
const forminput = 'https://fashiha.github.io/pgpbl-12-react-native/'

// Form web dari github pages
const webmap = 'https://fashiha.github.io/pgpbl-12-react-native/map.html'

function HomeScreen() {
    return (
        // <View>
        //     <Text style={styles.title}>APLIKASI PERSEBARAN VILLA DI BALI</Text>
        //     <Text style= {{ textAlign: 'center', marginTop: 20 }}>Aplikasi ini dibuat dari jerih payah mahasiswi</Text>
        //     <View style={styles.container}>
        //         <Text>Stack:</Text>
        //         <Text>1. React Native</Text>
        //         <Text>2. HTML</Text>
        //         <Text>3. LeafletJS</Text>
        //         <Text>4. Google Sheets</Text>
        //         <Text>5. App Scripts</Text>
        //         <Text>6. FontAwesome5</Text>
        //         <Text>7. GitHub</Text>
        //     </View>
        // </View>
        <View>
        <Discover />
    </View>
    
    );
}

function MapsScreen() {
    return (
        <WebView
            source={{ uri: webmap }} // karna mengakses url dari online jadi penulisannya spt itu
        />
    );
}
function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput }}
        />
    );
}

function ListDataScreen() {
    return (
        <View>
            <List />
        </View>
    );
}

// function MahasiswaScreen() {
//     return (
//         <View>
//             <Getjsonfile />
//         </View>
//     );
// }

function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}

function MyTabs() {
    return (
        // <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Maps" component={MapsScreen} options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="map-marked-alt" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Add Data" component={AddDataScreen} options={{
                    tabBarLabel: 'Add Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="plus-square" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="List Data" component={ListDataScreen} options={{
                    tabBarLabel: 'List Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="list" color={color} size={size} />
                    ),
                }}
                />
                {/* <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
                    tabBarLabel: 'Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="users" color={color} size={size} />
                    ),
                }}
                /> */}
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user" color={color} size={size} />
                    ),
                }}
                />
            </Tab.Navigator>
        // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'strech'
    },
    listitems: {
        padding: 20,
        alignItems: 'center'
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    container: {
        marginTop: 20,
        marginHorizontal: 10,
        padding: 20,
        backgroundColor: '#fff'
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
});
export default MyTabs
