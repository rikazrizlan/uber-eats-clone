import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
            <View
                style={{
                    marginTop: 10,
                    padding: 15,
                    backgroundColor: "white"
                }}
            >
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
}

const RestaurantImage = () => (
        <>
            <Image 
                source={{uri: "https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM="}} 
                style={{
                width: "100%",
                height: 180,
                }}
            />
            <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"  />
            </TouchableOpacity>
        </>
    )

const RestaurantInfo = () => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }}>
        <View>
            <Text 
                style={{fontSize: 15, fontWeight: "bold"}}
            >
                Burger King
            </Text>
            <Text
                style={{fontSize: 13, color: "gray"}}
            >
                30-35 min
            </Text>
        </View>
        <View 
            style={{ 
                backgroundColor: "#eee", 
                height: 30, 
                width: 30, 
                borderRadius: 15, 
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>4</Text>
        </View>
    </View>
    )
