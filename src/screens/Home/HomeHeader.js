import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AppIcons, AppResource } from '../../../assets/Images'

const HomeHeader = () => {
    const fadeAnim = useRef(new Animated.Value(0.8)).current;

    const [selectedOp, setSelectedOption] = useState(0);

    const scaleFont = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    useEffect(() => {
        scaleFont();
    }, [selectedOp])


    return (
        <ImageBackground source={AppResource.header_bg_1} style={{
            height: 70, width: "100%"
        }}>
            <View style={{
                marginTop: 20, alignItems: "center",
                flex: 1,
                // backgroundColor: "pink",
                paddingHorizontal: 4,
                flexDirection: "row"
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: "row",

                }}>
                    {Array(4).fill(1).map((itm, ind) => {
                        return (
                            <TouchableOpacity key={ind} style={{
                                flex: 1,
                            }}
                                onPress={() => {
                                    setSelectedOption(ind)
                                    // scaleFont()
                                }}
                            >
                                <Animated.Text style={{
                                    fontWeight: "700",
                                    fontSize: 18,
                                    color: (selectedOp == ind) ? "#fff" : "#fafafa",
                                    transform: [
                                        { scale: (selectedOp == ind) ? fadeAnim : 0.8 }
                                    ]
                                }}>Item {ind + 1}</Animated.Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={{
                    // backgroundColor: "green",
                    padding: 4,
                    flexDirection: "row",
                    columnGap: 10
                }}>
                    <TouchableOpacity>
                        <Image source={AppIcons.serach_ic} style={{
                            height: 25, width: 25,
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={AppIcons.cup_ic} style={{
                            height: 25, width: 25,
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default HomeHeader

const styles = StyleSheet.create({})