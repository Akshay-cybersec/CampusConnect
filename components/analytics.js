import { View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { COLORS } from '../universal/color'
import logo from '../images/logo.png'
import { TextInput as MyInput, DefaultTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toptitlebar from './toptitlebar';
import axios from "axios"

const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0C353C',
        background: 'rgba(12, 53, 60, 0.3)',
    },
};

const Analytics = ({ navigation }) => {
    const [appscreen, Setappscreen] = useState(false);
    const Branch = () => {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.appcol }}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                />
                <Toptitlebar/>
                <View style={{ flex: 5, backgroundColor: 'white', borderTopRightRadius: 17, borderTopLeftRadius: 17, paddingHorizontal: 15, alignItems: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', textAlign: 'center' }}>Analytics</Text>
                    </View>
                    <View style={{ width: '85%', flex: 3, }}>
                        <View style={{ flex: 0 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Enter Branch :</Text>
                            <Text>(for ex: tyco1, tyco2, etc)</Text>
                        </View>
                        <MyInput
                            placeholder='Enter the branch for attendance'
                            mode="outlined"
                            theme={customTheme}
                            style={style.input}
                        />
                        <View style={{ flex: 2 ,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{width:'90%',fontSize:15}}>Get a comprehensive list of <Text style={{fontWeight:'bold'}}>top - performing students.</Text></Text>
                        </View>
                    </View>
                    <View style={{ width: '80%', flex: 1 }}>
                        <TouchableOpacity style={style.buttonstyle} onPress={() => Setappscreen(true)}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Get Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    const BranchResult = () => {
        const [data, Setdata] = useState(null);
        const fetchapi = async () => {
            url = "https://good-amazingly-starling.ngrok-free.app/api/v1/campusconnectapi/count_records/?branch=TYCO2"
            const response = await axios.get(url);
            Setdata(JSON.parse(JSON.stringify(response.data)));
        }
        useEffect(() => {
            fetchapi();
        }, [])
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.appcol }}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                />
                <Toptitlebar/>
                <View style={{ flex: 5, backgroundColor: 'white', borderTopRightRadius: 17, borderTopLeftRadius: 17, paddingHorizontal: 15, alignItems: 'center' }}>
                    <View style={{ width: '85%', flex: 0.5 }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={style.info}>Branch : </Text>
                            <Text style={style.info}>TYCO-2</Text>
                        </View>
                    </View>
                    <View style={{ flex: 5, width: '90%' }}>
                        <View style={{ flex: 1.7, alignContent: 'flex-start' }}>
                            <Text style={style.info}>Toppers:</Text>
                            <View style={style.infoalign}>
                                <MaterialCommunityIcons name='crown' size={28} color='black' style={{ paddingRight: 12 }} />
                                <Text style={style.info}>94% - </Text>
                                <Text style={style.info}>Akshay Jadhav</Text>
                            </View>
                            <View style={style.infoalign}>
                                <MaterialCommunityIcons name='crown' size={28} color='black' style={{ paddingRight: 12 }} />
                                <Text style={style.info}>94% - </Text>
                                <Text style={style.info}>Akshay Jadhav</Text>
                            </View>
                            <View style={style.infoalign}>
                                <MaterialCommunityIcons name='crown' size={28} color='black' style={{ paddingRight: 12 }} />
                                <Text style={style.info}>94% - </Text>
                                <Text style={style.info}>Akshay Jadhav</Text>
                            </View>
                            <View style={style.infoalign}>
                                <Text style={style.info}>Total students appeared :   </Text>
                                <Text style={style.info}>120</Text>
                            </View>
                            <View style={style.infoalign}>
                                <Text style={style.info}>Number of students who passed :   </Text>
                                <Text style={style.info}>90</Text>
                            </View>
                            <View style={style.infoalign}>
                                <Text style={style.info}>Number of students who received KT:   </Text>
                                <Text style={style.info}>30</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', paddingTop: 25 }}>
                            <View style={{ width: '80%', flex: 1 }}>
                                <Text style={{ fontWeight: 'bold' }}>Name of students who received KT:</Text>
                                <ScrollView style={{borderWidth:1,paddingVertical:5,paddingHorizontal:5}} persistentScrollbar={true}>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    <Text><Icon name="dot-circle-o" size={15} color="black" /> 1857 - Peter Pan</Text>
                                    
                                </ScrollView>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{ flex: 1 ,justifyContent:'center',width:'80%'}}>
                            <View style={{ }}>
                                <TouchableOpacity style={style.buttonstyle} onPress={() => Setappscreen(false)}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Search For Another Branch</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>
        );
    }

    return (
        appscreen ? <BranchResult /> : <Branch />
    )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 0.1,
        fontSize: 14,
        paddingHorizontal: 8,
        marginTop: 10,
        paddingVertical: 2,
    },
    buttonstyle: {
        backgroundColor: '#F6AC3F',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 7,
        borderWidth: 1
    },
    info: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    infoalign: {
        flexDirection: 'row',
        paddingTop: 13,
        alignItems: 'center'
    }
})





export default Analytics