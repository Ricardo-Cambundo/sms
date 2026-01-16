import Loading from "@/components/loading"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StackActions, useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
import LottieView from "lottie-react-native"
import { useState } from "react"
import { Alert, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { OtpInput } from "react-native-otp-entry"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Icon from "react-native-vector-icons/Ionicons"

const SignUp2 = ({handleScroll}) => {
    const route = useRoute()
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 65 + insets.top,
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            // backgroundColor: 'white',
            zIndex: 1,
            paddingBottom: 5,
            },
        goBack: {
            width: 40, 
            height: 40, 
            borderRadius: 50,
            backgroundColor: 'white',
            elevation: 10,
            shadowColor: 'black',
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: 0},
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8
            },
        title: {
            marginLeft: '-10%',
            fontSize: 17,
            marginBottom: 10,
            fontWeight: '800',
            opacity: 0
        },
        container: {
            // marginTop: insets.top + 75,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            justifyContent: 'space-between',
        },
        image: {
            width: '100%',
            height: 200,
            resizeMode: 'contain',
            marginVertical: 20
        },
        title1: {
            fontSize: 16,
            fontWeight: '700',
            marginTop: 10,
            paddingHorizontal: 15,
            textAlign: 'center',
            marginBottom: 5
        },
        horizontal: {
            borderTopWidth: 5,
            borderTopColor: '#003a75',
            marginTop: 10,
            width: 90,
            marginHorizontal: 15,
            alignSelf: 'flex-start'
        },
        goBack: {
            width: 40, 
            height: 40, 
            borderRadius: 50,
            backgroundColor: 'white',
            elevation: 10,
            shadowColor: 'black',
            shadowRadius: 4,
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: 0},
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8
        },
        inputsContainer: {
            padding: 15,
            width: '100%',
            borderRadius: 7

        },
        inputContainer: {
            backgroundColor: '#f3f3f3',
            marginVertical: 10,
            padding: 10,
            borderRadius: 25,
            flexDirection: 'row'
        },
        input: {
            fontSize: 15,
            fontWeight: '500'
        },
        icon: {
            transform: [{translateY: 6}],
            marginRight: 7,
            color: '#003a75',
    
        },
        icon2: {
            transform: [{translateY: 9}],
            color: '#003a75',
    
        },
        label: {
            color: 'grey',
            fontSize: 14,
            marginBottom: 2
        },
        change: {
            color: '#2182ED',
            fontSize: 15,
            fontWeight: '600',
            
            alignSelf: 'center'
        },
        
        error: {
            backgroundColor: true ? '#ff3d1f2d': '#fd7864',
            marginVertical: 5,
            paddingHorizontal: 5,
            flexDirection: 'row',
            height: 55,
            paddingTop: 10,
            paddingBottom: 5,
            borderRadius: 10,
            marginBottom: 15
            
        },
        message: {
            width: '90%',
            marginTop: -10,
            alignSelf: 'center'
        },
        forgot: {
            marginBottom: 20
        },
        button: {
            backgroundColor: '#003a75',
            paddingVertical: 16,
            borderRadius: 25,
            marginTop: 10
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '600'
        },
        button1: {
            paddingVertical: 10,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: '#0a9b81',
        },
        text: {
            color: 'grey',
            textAlign: 'center'
        },
        title2: {
            paddingHorizontal: 15,
            fontSize: 13,
            color: 'grey',
            textAlign: 'center'
            
        },
        button3: {
            flexDirection: 'row',
            height: 55,
            alignSelf: 'center',
            paddingHorizontal: 15
        },
        side: {
            backgroundColor: '#0080009d',
            width: 6,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
            
        },
        verified: {
            paddingLeft: 15,
            backgroundColor: !true ? '#4df7562f': '#aaffaf',
            justifyContent: 'center',
            width: '98%',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            flex: 1
        },
        veri: {
            fontWeight: '400',
            fontSize: 14,
            color: 'green',
        },
        button4: {
            backgroundColor: '#003a75',
            paddingVertical: 16,
            borderRadius: 25,
            marginTop: 10,
            marginHorizontal: 15
        }
    })
    const [errors, setError] = useState([])
    const [verified, setVerified] = useState(false)
//     Alert.alert(
//         'Email Reenviado',
//         'Um novo email de verifação foi mandado.',
//         [
//             {
//                 text: 'OK',
//                 onPress: () => {
                    
//                 }
//             }
//         ]
//     )
// })
    const [done, setDone] = useState(false)
    
    
    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(false)
    const isFocused = useIsFocused()
    const resend = () => {
        setLoading(true)
        setTimeout(() => {
// isFocused && navigation.setParams({code: res.data?.codigo})
            
            setLoading(false)
            Alert.alert(
                'Código Reenviado',
                'Um novo código de verifação foi mandado.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            
                            
                        }
                    }
                ]
            )
        }, 1000)
        // api.get(`resendCode/${route.params?.id}/`)
        // .then(res => {
        //     isFocused && navigation.setParams({code: res.data?.codigo})
        //     console.log('res', res.data?.codigo, route.params.codigo)
            
        //     setLoading(false)
        //     Alert.alert(
        //         'Código Reenviado',
        //         'Um novo código de verifação foi mandado.',
        //         [
        //             {
        //                 text: 'OK',
        //                 onPress: () => {
                            
                            
        //                 }
        //             }
        //         ]
        //     )
        // })
        // .catch(err => {
        //     console.log('error', err.response.data.message)
        //     setLoading(false)

        //     Alert.alert(
        //         'Erro ao reenviar código',
        //         `${err.response.data.message}`,
        //         [
        //             {
        //                 text: 'OK',
        //                 onPress: () => {
                            
        //                 }
        //             }
        //         ]
        //     )

        // })
    }
    const [wrong, setWrong] = useState(false)
    const [otp, setOtp] = useState('')
    return (
        <View style={{flex: 1, backgroundColor: '#003a75', width: Dimensions.get('window').width,}}>
            <Loading open={load||loading}/>
        <View style={[styles.header]}>
                            <TouchableOpacity onPress={()=>{
                                // console.log('carlos')
                                
                                navigation.goBack()
                                }}>
                                <View style={[styles.goBack, {opacity: loading ? 0.5 : 1}]}>
                                    <Icon name='arrow-back' size={23}/>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.title}>Login</Text>
        
                           <View></View>

            </View>
            <View  style={[styles.container, {flex: 1, marginTop: 75 + insets.top, overflow: 'hidden'}]} >

            <ScrollView keyboardShouldPersistTaps="handled" style={{flex: 1}}>
                <Image style={{opacity:  0, width: 100, height: 50, objectFit: 'contain', alignSelf: 'flex-start', marginTop: 20,marginHorizontal: 0, transform: [{scale: 1.5}]}} source={require('@/assets/images/icon.png')}/>

                <Text style={styles.title1}>Verificação de telefone</Text>
                <Text style={styles.title2}>Você precisa verificar o seu telefone para completar o cadastro</Text>
                <View style={{paddingHorizontal: 15, marginVertical: 30}}>
                    {!done ? <OtpInput 

                        numberOfDigits={6}
                        focusColor={wrong ? 'red' : "#003a75"}
                        onTextChange={text => {
                            setOtp(text)
                            if (text == 
                                (route.params?.code)){
                                setLoad(true)
                                setTimeout(() => {
AsyncStorage.setItem('token', JSON.stringify("carlos")).then()
                                    AsyncStorage.setItem('password', JSON.stringify('123456')).then()
                                    AsyncStorage.setItem('user', JSON.stringify({
                                        name: "Carlos Bastos"
                                    })).then()
                                    setLoad(false)
                                    setDone(true)
                                }, 1000)
                                // api.post(`activateUser/${route.params?.id}`, {
                                //     telefone: route.params?.phone,
                                //     password: route.params?.password
                                // })
                                // .then(res => {
                                //     console.log('res', res.data)
                                //     AsyncStorage.setItem('token', JSON.stringify(res.data.access_token?.token)).then()
                                //     AsyncStorage.setItem('password', JSON.stringify(route.params?.password)).then()
                                //     AsyncStorage.setItem('user', JSON.stringify({
                                //         ...res.data?.access_token?.user,
                                //     })).then()
                                //     setLoad(false)
                                //     setDone(true)
                                // })
                                // .catch(err => {
                                //     setLoad(false)
                                // })
                                setWrong(false)
                            }else if (text.length == 6 && text != 
                                (route.params?.code)) {
                                setWrong(true)
                            }else {
                                setWrong(false)
                            }
                        }}
                        inputsContainerStyle={styles.inputsContainer}
                        pinCodeContainerStyle={styles.pinCodeContainer}
                        pinCodeTextStyle={styles.pinCodeText}
                        focusStickStyle={styles.focusStick}
                        focusStickBlinkingDuration={500}
                    />
                :
                <OtpInput 
disabled
                        numberOfDigits={6}
                        focusColor={wrong ? 'red' : "#003a75"}
                        onTextChange={text => {
                            setOtp(text)
                            if (text == 
                                (route.params?.code)){
                                setLoad(true)
                                setTimeout(() => {
AsyncStorage.setItem('token', JSON.stringify("carlos")).then()
                                    AsyncStorage.setItem('password', JSON.stringify('123456')).then()
                                    AsyncStorage.setItem('user', JSON.stringify({
                                        name: "Carlos Bastos"
                                    })).then()
                                    setLoad(false)
                                    setDone(true)
                                }, 1000)
                                setWrong(false)
                            }else if (text.length == 6 && text != route.params?.code) {
                                setWrong(true)
                            }else {
                                setWrong(false)
                            }
                        }}
                        inputsContainerStyle={styles.inputsContainer}
                        pinCodeContainerStyle={styles.pinCodeContainer}
                        pinCodeTextStyle={styles.pinCodeText}
                        focusStickStyle={styles.focusStick}
                        focusStickBlinkingDuration={500}
                    />}
                    {wrong && <Text style={{color: 'red', fontWeight: '500', marginTop: 20, textAlign: 'center'}}>Código incorreto, tente novamente.</Text>}
                </View>
            {(!(otp.length == 6 && !wrong) && !done) ? 
            <View style={{paddingHorizontal: 15}}>
            <Text style={styles.text}>Foi enviado um código de 6 dígitos para <Text style={{fontWeight: '700'}}>+244 {route.params?.phone}</Text> para verificar sua conta. Se você não recebeu o código depois de alguns minutos, você pode pressionar "Reenviar código".
            <Text style={{fontWeight: '700'}}>Se você sair desta tela sem concluir a verificação, você terá que criar um novo usuário novamente.</Text></Text>
            <View style={styles.buttons}>
            {!loading ? <TouchableOpacity onPress={()=>resend()}>
                <View style={styles.button}><Text style={styles.buttonText}>Reenviar Código</Text></View>
            </TouchableOpacity>:  <LottieView 
                                autoPlay={true}
                                speed={1.5}
                                
                                style={{width: Dimensions.get('window').width - 30, height: 170, marginVertical: -50}}
                                source={require('@/assets/lotties/loading2.json')}
                                />}
    
                        </View>
            </View>
            :
            <View>
        <View style={styles.button3}><View style={styles.side}></View><View style={[styles.verified, {flex: 1, paddingRight: 5, justifyContent: 'center',}]}><Text style={[styles.veri, {}]}>O seu telefone foi verificado com sucesso e a sua conta foi ativada.</Text></View></View>
        <Pressable onPress={()=>{

                navigation.dispatch(StackActions.push('signup3', {...route.params}))                


            }}>
            <View style={styles.button4}><Text style={styles.buttonText}>Continuar</Text></View>
        </Pressable>
    </View>}
            
                            
                                
                                
                                

                            
                            
                             </ScrollView>

                             </View>
            </View>
            
    )
}
export default SignUp2
