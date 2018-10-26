import React from 'react';
import {TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({label, value, onChangeText}) => {

  const { inputStyle, labelStyle, containerStyle} = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput 
          style={inputStyle}
          onChangeText={onChangeText}
          value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20, 
    width: 100
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40, 
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export { Input };