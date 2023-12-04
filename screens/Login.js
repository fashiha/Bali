import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ImageBackground, StyleSheet, SafeAreaView, Image } from 'react-native'
import Font from '../Font'

const page_bg = require('../screens/assets/pagevilla.jpg')


const Login = () => {
    const navigation = useNavigation()
    const navigateHome = () => {
        navigation.navigate('Petalokasi');
    };
    const navigateRegister = () => {
        navigation.navigate('Register');
    };
    return (
        <ImageBackground
            source={page_bg}
            resizeMode='cover'
            style={styles.image}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.titleBox}>
                    {/* <Font
                        source={require('../assets/fonts/Poppins-Bold.ttf')}
                        className="poppins-bold"
                     */}
                    {/* <Text style={styles.titleText}> Menuju ke villa impian anda</Text> */}

                </View>

                <View style={styles.formBox}>
                    <Text style={styles.formTitle}> Sign In</Text>
                    <View style={styles.inputBox} >
                        <TextInput style={styles.inputText} placeholder="Email" />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.inputText} secureTextEntry={true} placeholder="Password" />
                    </View>
                    <TouchableOpacity onPress={{}} style={{ alignItems: 'flex-end' }}>
                        <Text style={{ padding: 0, marginTop: 0, marginRight: 10, fontSize: 13 }}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateHome} >
                        <View style={styles.formButton}>
                            <Text >Login</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => {
                            navigation.navigate('Petalokasi')
                        }} style={styles.formButtonText}>
                            <Text >Login</Text>
                        </TouchableOpacity> */}

                    {/* <View style={styles.seperator}></View> */}

                    <TouchableOpacity onPress={navigateRegister}>
                        <Text style={styles.signInText}>
                            Don’t you have an account?
                            <Text style={{ fontWeight: '600', color: 'black' }}> Sign up</Text>
                        </Text>
                    </TouchableOpacity>

                </View>



                {/* <View style={{ height: "100%" }}>
                    <View style={{ marginTop: 10, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Email</Text>
                        <TextInput placeholder='Enter your username' style={{ borderWidth: 1, marginRight: 10, marginLeft: 10, marginBottom: 10 }} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Password</Text>
                        <TextInput secureTextEntry={true} placeholder='Enter your password' style={{ borderWidth: 1, marginRight: 10, marginLeft: 10 }} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Petalokasi')
                        }} style={{ marginRight: 10, marginLeft: 10, backgroundColor: 'green', width: 350, height: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </SafeAreaView>
        </ImageBackground >
    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titleBox: {
        width: 250,
        marginTop: 40
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        // fontFamily: Font["poppins-bold"],

        fontFamily: 'serif',
        borderBottomColor: 'white',
        borderBottomColor: "#1f41bb"

    },
    formBox: {
        marginTop: 10,
        width: '80%',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 20,
        marginTop: 100,
        justifyContent: "space-between"

    },
    formTitle: {
        fontSize: 33,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'black',
        textAlign: 'center'
    },
    inputBox: {
        // height: 40,
        // borderRadius: 20,
        // padding: 10,
        // backgroundColor: '#f5f5f5',
        // marginBottom: 20,

        // borderWidth: 1, marginRight: 10, marginLeft: 10, marginBottom: 10
    },
    inputText: {
        height: 40,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#f5f5f5',
        marginBottom: 20,
    },
    formButton: {
        backgroundColor: '#8359E3',
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        marginTop: 10,
        marginBottom: 20
        // marginLeft: 10,
        // marginTop: 10,
        // marginRight: 10, marginLeft: 10, width: 350, height: 30, borderRadius: 10,
    },
    formButtonText: {
        fontSize: 17,
        color: 'white',
        fontWeight: '500',
        width: '100%',
        padding: 20,
    },
    seperator: {
        height: 1,
        backgroundColor: 'black',
        marginBottom: 20,
    },
    signInText: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center'
    }
});