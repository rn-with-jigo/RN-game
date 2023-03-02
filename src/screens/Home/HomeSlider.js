import { StyleSheet, Text, View, Animated, Dimensions, FlatList, ImageBackground, Image } from 'react-native'
import React from 'react'
import { AppResource } from '../../../assets/Images'

const HomeSlider = () => {

    const renderBanners = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: "pink",
                width: Dimensions.get("screen").width - 20,
                height: 100,
                borderRadius: 8,
                marginHorizontal: 10,
            }} key={index}>
                <Image source={AppResource.header_bg} style={{
                    width: Dimensions.get("screen").width - 20,
                    height: 100,
                    borderRadius: 8,
                }} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Array(5).fill(1)}
                renderItem={renderBanners}
                horizontal
                pagingEnabled
            />
        </View>
    )
}

export default HomeSlider

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
    }
})