import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SpinWheel from './SpinWheel'

const Spin = () => {
    return (
        <View style={{
            marginTop: 30,
            flex:1,
        }}>
            <SpinWheel />
        </View>
    )
}

export default Spin

const styles = StyleSheet.create({})