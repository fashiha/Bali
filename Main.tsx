import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import fonts from "./config/fonts";
import Route from './navigation/NativeStack'

const Main = () => {
  return (
    <NavigationContainer>
        <Route/>
    </NavigationContainer>
  )
}

export default Main