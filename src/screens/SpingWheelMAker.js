import { Animated, Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import SVG, { G, Path, Image as SVGImage, Text as SVGText } from "react-native-svg";
import * as d3shape from "d3-shape"
import { AppIcons } from '../../assets/Images';
import { snap } from "@popmotion/popcorn"

const { width } = Dimensions.get("screen")

const SpingWheelMAker = (props) => {

    const wheelSize = width;
    const numberOfWheel = 6;
    const onTrun = 360;
    const angelBySegment = onTrun / numberOfWheel;
    const angleByOffset = angelBySegment / 2;

    const RotateAnimated = useRef(new Animated.Value(0)).current
    // const angle = useRef(new Animated.Value(0)).current
    let angle = 0;

    const moveWheel = () => {
        Animated.decay(RotateAnimated, {
            // velocity: Math.round(Math.random() * 10 + 1) * 2, // set the time for moving in direction
            velocity: 1.5,
            deceleration: 0.997,
            useNativeDriver: true,
        })
            .start(() => {
                RotateAnimated.setValue(angle % onTrun)
                // const snapTo = snap((onTrun / numberOfWheel))
                // console.log("snapTo => ", snapTo(angle));
                // Animated.timing(RotateAnimated, {
                //     toValue: snapTo(angle),
                //     duration: 300,
                //     useNativeDriver: true,
                // })
                //     // .start();
                //     .start(() => {

                console.log("finished Animation");
                const winnerIndex = getWinner();
                console.log("winnerIndex => ", wheelsPaths[winnerIndex].value);
                props.getWinner(wheelsPaths[winnerIndex].value)
                // })
            });
    }

    // this for the making a wheels
    const wheelMaker = () => {
        const data = Array.from({ length: numberOfWheel }).fill(1);
        const arcs = d3shape.pie()(data);
        const color = ["red", "green", "blue", "pink", "gray", "orange"]

        return arcs.map((arc, index) => {
            const instance = d3shape
                .arc()
                .padAngle(0.01)
                .outerRadius(width / 2)
                .innerRadius(20)

            return {
                path: instance(arc),
                color: color[index],
                value: color[index],
                centroid: instance.centroid(arc),
            }
        })
    }

    const wheelsPaths = wheelMaker();

    // console.log("wheelsPaths => ", wheelsPaths);

    useEffect(() => {
        const subsciber = RotateAnimated.addListener((event) => {
            angle = event.value;
        })
        return () => subsciber;
    }, [])

    // get the winner things
    const getWinner = () => {
        console.log("angle => ", angle, " onTrun => ", onTrun);
        const deg = Math.abs(Math.round(angle - onTrun))
        console.log("deg => ", deg);
        console.log("Math.floor(deg / angelBySegment) => ", Math.floor(deg / angelBySegment));
        return Math.floor(deg / angelBySegment)

        // const deg = Math.abs(Math.round(RotateAnimated % onTrun));
        // if (RotateAnimated < 0) {
        //     return Math.floor(deg / angelBySegment)
        // }
        // return (numberOfWheel - Math.floor(deg / angelBySegment)) % numberOfWheel
    }

    return (
        <View style={{
            marginTop: 30,
            flex: 1,
            backgroundColor: "#00000033",
            alignItems: "center",
            overflow: "hidden"
        }}>
            <Animated.View
                style={{
                    transform: [
                        {
                            rotate: RotateAnimated.interpolate({
                                inputRange: [-onTrun, 0, onTrun],
                                outputRange: [`-${onTrun}deg`, '0deg', `${onTrun}deg`]
                            })
                        },
                        // {translateY: 100}
                    ],
                    // height:100,
                    overflow: 'hidden',
                }}
            >

                <SVG
                    height={wheelSize * 0.6}
                    width={wheelSize * 0.6}
                    viewBox={`0 0 ${width} ${width}`}
                // origin={"10, 10"}
                // originX={"20"}
                >
                    <G
                        x={width / 2}
                        // y={20}
                        y={width / 2} // y=20
                    // origin={"120, 120"}
                    >
                        {wheelsPaths.map((arc, i) => {

                            const [x, y] = arc.centroid;

                            return (
                                <G key={`arc-${i}`}>
                                    <Path d={arc.path} fill={arc.color} />
                                    <G
                                        rotation={(i * onTrun) / numberOfWheel}
                                        origin={`${x}, ${y}`}
                                    >
                                        <SVGImage
                                            href={AppIcons.fruit_1_ic}
                                            height={80}
                                            width={80}
                                            x={x - 30}
                                            y={y - 60}
                                        />
                                    </G>
                                </G>
                            )
                        })}
                    </G>
                </SVG>
            </Animated.View>
            <View
                style={{
                    marginTop: 24
                }}
            >

            </View>
            <Button
                title='Clicl to Rotate'
                onPress={() => {
                    moveWheel();
                }}
            />
        </View >
    )
}

export default SpingWheelMAker

const styles = StyleSheet.create({})