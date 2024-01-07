import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'

const Input = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = () => {
        console.log('Name :', name)
        console.log('Email :', email)
        console.log('Age :', age)
    }
  return (
    
    <SafeAreaView style = {styles.contanier}>

        <Text style = {styles.txt}>
            Form
        </Text>

        <View style = {styles.inputOut}>
            <TextInput style = {styles.input}
               placeholder = 'Name'
               onChangeText  = {(name: string) => setName(name)}              
            />
        </View>

        <View style = {styles.inputOut}>
            <TextInput style = {styles.input}
               placeholder = 'Email'
               onChangeText = {(email: string) => setEmail(email)}              
            />
        </View>

        <View style = {styles.inputOut}>
            <TextInput style = {styles.input}
               placeholder = 'Age' 
               onChangeText = {(age: string) => setAge(age)}             
            />
        </View>

        <TouchableOpacity style = {styles.inputBtn}
          onPress = { handleSubmit }
        >
            <Text style = {styles.btnTxt}> Submit </Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Input

