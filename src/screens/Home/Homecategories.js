import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppResource } from '../../../assets/Images'

const Homecategories = () => {

    const renderCategories = ({ item, index }) => {
        return (
            <TouchableOpacity key={index}
                style={{
                    justifyContent: "center",
                    alignItems: "center",

                }}
            >
                <View style={{
                    padding: 4,
                    backgroundColor: "#00000022",
                    borderRadius: 30,
                }}>
                    <Image source={AppResource.house_bg}
                        style={{
                            height: 30, width: 30,
                        }} />
                </View>
                <Text>Item cat {index + 1}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            padding: 8,
        }}>
            <FlatList
                data={Array(5).fill(1)}
                renderItem={renderCategories}
                horizontal
                contentContainerStyle={{
                    // flex: 1,
                    gap: 30,
                    padding: 4,
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Homecategories

const styles = StyleSheet.create({})