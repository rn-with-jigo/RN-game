import { Dimensions, Image as RNImage, StyleSheet, Text as RNText, View, Animated, Button } from 'react-native'
import React, { useRef } from 'react'
import SVG, {
    Path,
    Circle,
    G,
    Text,
    Image
} from "react-native-svg";
import * as d3shape from "d3-shape";
import color from "randomcolor";
import { AppIcons } from '../../../assets/Images';
const { width } = Dimensions.get("screen")

const numberOfWheel = 6;
const wheelSize = width * 0.9;
const fontSize = 20;
const onTrun = 360;
const angelBySegment = onTrun / numberOfWheel;
const angleByOffset = angelBySegment / 2

const images_list = [AppIcons.cup_ic, AppIcons.home_fic, AppIcons.notify_fic, AppIcons.cup_ic, AppIcons.home_fic, AppIcons.notify_fic]
const makeWheel = () => {
    const data = Array.from({ length: numberOfWheel }).fill(1)
    const arcs = d3shape.pie()(data);
    const colors = color({
        luninosity: "dark",
        count: numberOfWheel,
    })

    return arcs.map((arc, index) => {
        const instance = d3shape
            .arc()
            .padAngle(0.01)
            .outerRadius(width / 2)
            .innerRadius(20)
        // .outerRaduis(width / 2)
        // .innerRaduis(20)

        return {
            path: instance(arc),
            color: colors[index],
            value: Math.round(Math.random() * 10 + 1) * 200,
            centroid: instance.centroid(arc),

        }
    })
}

const SpinWheel = () => {

    const wheelPaths = makeWheel();

    const RotateAnimated = useRef(new Animated.Value(1)).current;

    const MoveTheWell = () => {
        Animated.decay(RotateAnimated, {
            velocity:  1.5,
            deceleration: 0.999,
            useNativeDriver: true,
        }).start({
            // do somthing here
        })
    }

    return (
        <View style={{
            flex: 1,
        }}>
            <Animated.View
                style={{
                    height: 500,

                    justifyContent: "center",
                    alignItems: "center",
                    transform: [
                        {
                            rotate: RotateAnimated.interpolate({
                                inputRange: [-onTrun, 0, onTrun],
                                outputRange: [`-${onTrun}deg`, '0deg', `${onTrun}deg`]
                            })
                        }
                    ]
                }}
            >
                <SVG
                    height={wheelSize}
                    width={wheelSize}
                    viewBox={`0 0 ${width} ${width}`}
                >
                    {/* <Circle
                cx={"50"}
                cy={"50"}
                r={"45"}
                stroke={"blue"}
                strokeWidth={"2.5"}
                fill={"none"}
            >

            </Circle> */}
                    <G x={width / 2} y={width / 2}>
                        {wheelPaths.map((arc, i) => {
                            const [x, y] = arc.centroid;

                            return (
                                <G
                                    key={`acr-${i}`}
                                >
                                    <Path d={arc.path} fill={arc.color} />
                                    <G
                                        rotation={(i * onTrun) / numberOfWheel * angleByOffset}
                                        origin={`${x}, ${y}`}
                                    >
                                        <Image
                                            x={x - 10}
                                            y={y}
                                            href={images_list[i]}
                                            height={30}
                                            width={30}
                                        />
                                    </G>
                                </G>
                            )
                        })}
                    </G>
                </SVG>
            </Animated.View>
            <Button
                title='Rotate it'
                onPress={() => {
                    MoveTheWell();

                }}
            />
        </View>
    )
}

export default SpinWheel

const styles = StyleSheet.create({
    circle: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        borderWidth: 2,
        overflow: 'hidden',
        borderColor: '#ced4da',
    },
    cirle_row: {
        width: "100%",
        height: "50%",
        flexDirection: "row",
    },
    pizza: {
        width: '35%', height: '100%'
    },
    part_1: {
        backgroundColor: '#ce4257'
    },
    part_2: { backgroundColor: '#4361ee' },
    part_3: { backgroundColor: '#0b4bb3' },
    part_4: { backgroundColor: '#06d6a0' },
    part_5: { backgroundColor: '#fee440' },
    part_6: { backgroundColor: '#2fc260' },
})