import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppIcons, AppResource } from '../../../assets/Images'

const HomeFooter = () => {
    return (
        <View
            style={{
                height: 45,
                width: "100%",
                borderTopWidth: 3,
                borderTopColor: "#00000011"
            }}
        >
            <ImageBackground
                source={AppResource.header_bg}
                style={{
                    flex: 1,
                    flexDirection: "row",
                }}
            >
                {/* home */}
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image
                        source={AppIcons.home_fic}
                        style={{ height: 25, width: 25 }}
                    />
                </TouchableOpacity>

                {/* like */}
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image
                        source={AppIcons.like_fic}
                        style={{ height: 25, width: 25 }}
                    />
                </TouchableOpacity>

                {/* more */}
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image
                        source={AppIcons.more_fic}
                        style={{
                            height: 40, width: 40,
                            transform: [
                                { translateY: -10, }
                            ]
                        }}
                    />
                </TouchableOpacity>

                {/* notify */}
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image
                        source={AppIcons.notify_fic}
                        style={{ height: 25, width: 25 }}
                    />
                </TouchableOpacity>

                {/* settings */}
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image
                        source={AppIcons.setting_fic}
                        style={{ height: 25, width: 25 }}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default HomeFooter

const styles = StyleSheet.create({})