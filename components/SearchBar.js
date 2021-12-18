import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
    return (
        <View style={{marginTop: 15, flexDirection: 'row'}}>
            <GooglePlacesAutocomplete 
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        fontWeight: 700,
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => (
                    <View style={{marginLeft: 10}}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 8,
                            backgroundColor: 'white',
                            padding: 9
                        }}
                    >
                        <AntDesign style={{marginRight: 6}} name='clockcircle' size='11' />
                        <Text>
                            Search
                        </Text>
                    </View>
                )} 
            />
        </View>
    )
}
