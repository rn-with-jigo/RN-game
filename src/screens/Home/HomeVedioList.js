import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppIcons, AppImageURL } from '../../../assets/Images'

const HomeVedioList = () => {

    const renderVedioList = ({ item, index }) => {
        return (
            <View key={index}
                style={{
                    height: 200,
                    width: "48%",
                    backgroundColor: "pink",
                    // marginHorizontal: 10,
                    margin: 4,
                    borderRadius: 8,
                }}
            >
                <ImageBackground
                    style={{
                        flex: 1,
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                    }}
                    source={{
                        uri: AppImageURL.img1
                    }}
                    borderRadius={8}
                >
                    <View style={{
                        backgroundColor: "#00000088",
                        height: 20,
                        width: 70,
                        borderRadius: 30,
                        alignItems: "center",
                        flexDirection: "row",
                        paddingHorizontal: 4,
                        columnGap:4,
                    }}>
                        <Image
                            source={AppIcons.graph_ic}
                            style={{
                                height: 15,
                                width: 15,
                            }}
                        />
                        <Text style={{
                            color: "#fff",
                            fontSize: 11,
                        }}>2.5 likes</Text>
                    </View>
                    <View style={{ flex: 1, }} />
                    <View style={{
                    }}>
                        <Text style={{
                            fontWeight: "700",
                            fontSize: 16,
                            color: "#fff",
                        }}>Ambika Rose</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    return (
        <View style={{
            paddingHorizontal: 8,
            flex: 1,
        }}>
            <FlatList
                data={Array(10).fill(1)}
                renderItem={renderVedioList}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            // contentContainerStyle={{
            //     gap: 6,
            // }}
            />
        </View>
    )
}

export default HomeVedioList

const styles = StyleSheet.create({})