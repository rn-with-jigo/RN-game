import {
  Image, ImageBackground, StatusBar, StyleSheet, Text,
  TouchableOpacity, View, Animated, Dimensions, Button
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ScreenWrapper from './src/components/ScreenWrapper'
import { AppIcons, AppResource } from './assets/Images'
// import Home from './src/screens/Home/Home'
// import Spin from './src/screens/Other/Spin'
// import SpingWheelMAker from './src/screens/SpingWheelMAker'
import Svg, { Circle, G, Path, Image as SVGImage, Line, Rect, Ellipse } from "react-native-svg";
import * as d3shape from "d3-shape";
import SpingWheelMAker from './src/screens/SpingWheelMAker';

const { width } = Dimensions.get("screen")

const App = () => {

  let winnName = useRef("").current

  const [win, setWin] = useState("")
  return (
    <ScreenWrapper>
      <StatusBar backgroundColor={"transparent"} translucent={true} barStyle={"dark-content"} />
      {/* <Home /> */}
      <View style={{
        flex: 1,
        padding: 4,
        overflow: "hidden",
        marginTop: 30,
      }}>

        <View style={{
          height: 400,
        }}>
          <SpingWheelMAker getWinner={(winName) => {
            console.log("winName => ", winName);
            // winnName = winName
            setWin(winName)
          }} />
        </View>
        
        <Text>Winner : {win}</Text>
      </View>
    </ScreenWrapper>
  )
}

export default App

const styles = StyleSheet.create({})