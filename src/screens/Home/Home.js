import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { AppIcons, AppResource } from '../../../assets/Images'
import HomeHeader from './HomeHeader'
import HomeSlider from './HomeSlider'
import Homecategories from './Homecategories'
import HomeVedioList from './HomeVedioList'
import HomeFooter from './HomeFooter'

const Home = () => {


    return (
        <View style={{
            flex: 1,
        }}>
            <HomeHeader />
            <HomeSlider />
            <Homecategories />
            <HomeVedioList />
            <HomeFooter />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})