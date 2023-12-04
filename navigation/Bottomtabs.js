import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();

// const webmap = require('../peta.map.html');

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}> My Maps </Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta1.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Curah Hujan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta2.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Penggunaan Lahan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta1.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Curah Hujan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta1.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Curah Hujan</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/peta1.jpg')} style={styles.image} />
                <Text style={styles.caption}>Peta Curah Hujan</Text>
            </View>
        </ScrollView>
    );
}

function SettingsScreen() {
    return (
        <View>
        <Portofolio />
    </View>
    );
}

function MahasiswaScreen() {
    return (
        <View>
        <Getjsonfile />
    </View>
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Settings" component={SettingsScreen} options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="cogs" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
                    tabBarLabel: 'Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="users" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user" color={color} size={size} />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

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
    }
});