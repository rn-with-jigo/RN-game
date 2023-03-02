import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenWrapper = ({ children }) => {
    return (
        <View style={styles.contianer}>
            {children}
        </View>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
    }
})