import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'

const States = () => {
    const [name, setName] = useState<string>('kamal');
    const [age, setAge] = useState<number>(20);
    const [person, setPerson] = useState({name: "vimal", age: 25});

    const [count, setCount] = useState<number>(0);

    const increment = () => {
      setCount(count + 1)
    } 

    const decrement = () => {
      setCount(count - 1)
    } 

    useEffect(() => {
      console.log('Limit Number')
    }, [count == 15, count == 0])

  return (

    <View style = {styles.container}>
      <Text style = {styles.txt}>useState</Text>

      <Text style = {styles.name}>Name : {name}</Text>
      <Text style = {styles.name}>Age : {age}</Text>

      <Text style = {styles.obj}> I am {person.name} age is {person.age}</Text>

      <Text style = {styles.cout}> {count} </Text>

      <TouchableOpacity style = {styles.btn}
        onPress = {increment} >
          <Text style = {styles.in}> Increase </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.btn}
        onPress = {decrement} >
          <Text style = {styles.de}> Decrease </Text>
      </TouchableOpacity>

    </View>

  )
}

export default States

