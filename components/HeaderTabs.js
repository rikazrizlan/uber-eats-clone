import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <View style={{flexDirection: "row", alignSelf: "center"}}>
            <HeaderButton id={0} title="Deivery" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton id={1} title="Pickup" activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    )
}

const HeaderButton = ({id, title, activeTab, setActiveTab}) => (
        <TouchableOpacity 
            onPress={() => setActiveTab(id)}
            style={{
                backgroundColor: activeTab === id ? "black" : "white",
                paddingVertical: 6,
                paddingHorizontal: 30,
                borderRadius: 30
            }}
        >
            <Text style={{color: activeTab === id? "white": "black", fontSize: 15, fontWeight: 900}}>{title}</Text>
        </TouchableOpacity>
);