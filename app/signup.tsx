import Loading from "@/components/loading"
import { StackActions, useNavigation } from "@react-navigation/native"
import { useEffect, useRef, useState } from "react"
import { Dimensions, FlatList, Image, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Icon from "react-native-vector-icons/Ionicons"

const SignUp = ({handleScroll}) => {
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
            borderRadius: 30,
        },
        image: {
            width: '100%',
            height: 230,
            resizeMode: 'contain',
        },
        title1: {
            fontSize: 17,
            fontWeight: '700',
            marginTop: 10,
            color: '#adadad',
            paddingHorizontal: 15,
            alignSelf: 'flex-start'
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
            borderRadius: 7,
            gap: 20

        },
        inputContainer: {
            backgroundColor: '#f3f3f3',
            padding: 10,
            borderRadius: 25,
            flexDirection: 'row'
        },
        input: {
            fontSize: 15,
            fontWeight: '500',
            paddingVertical: 0,
            margin: 0
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
            borderColor: '#003a75',
        },
    })
    const [fullname, setFullName] = useState('')
    const fullRef = useRef(null)
    const [email, setEmail] = useState('')
    const emailRef = useRef(null)
    const [password, setPassword] = useState('')
    const pass = useRef(null)
    const [seePass, setSeePass] = useState(false)
    const [seePass1, setSeePass1] = useState(false)
    const [confirm, setConfirm] = useState('')
    const confirmRef = useRef(null)
    const [errors, setError] = useState([])
    const [phone, setPhone] = useState('')
    const [fullError, setFullError] = useState('x')
    const [usernameError, setUsernameError] = useState('x')
    const [emailError, setEmailError] = useState('x')
    const [phoneEror, setPhoneError] = useState('x')
    const [passwordError, setPasswordError] = useState('x')
    const [confirmError, setConfirmError] = useState('x')
    const phoneRef = useRef(null)
    const validateFull = () => {
        return new Promise((resolve) => {
            if (fullname === '') {
                setFullError('Primeiro e último nome necessários.');
                resolve(false);
            } else if (fullname.split(/\s(?=\S)/ig).length < 2) {
                setFullError('Segundo nome necessário');
                resolve(false);
            } else if (fullname.split(/\s(?=\S)/ig).length > 2) {
                setFullError('Só o primeiro e último nome são necessários.');
                resolve(false);
            } else {
                setFullError('');
                resolve(true);
            }
        });
    };
    
    const validateEmail = () => {
        return new Promise((resolve) => {
            const r = /^[^\s]*@[a-z0-9.-]*\.[a-z]{2,6}$/;
            if (email === '') {
                setEmailError('Email é necessário.');
                resolve(false);
            } else if (!r.test(email)) {
                setEmailError('Formato de email inválido.');
                resolve(false);
            } else {
                setEmailError('');
                resolve(true);
            }
        });
    };
    
    const validatePassword = () => {
        return new Promise((resolve) => {
            if (password === '') {
                setPasswordError('Senha é necessária.');
                resolve(false);
            } else if (password.length < 8) {
                setPasswordError('A senha precisa de pelo menos 8 caractéres');
                resolve(false);
            } else {
                setPasswordError('');
                resolve(true);
            }
        });
    };
    
    const validateConfirm = () => {
        return new Promise((resolve) => {
            if (confirm !== password) {
                setConfirmError('A senha não corresponde à senha de confirmação.');
                resolve(false);
            } else {
                setConfirmError('');
                resolve(true);
            }
        });
    };
    
    const validatePhone = () => {
        return new Promise((resolve) => {
            if (phone === '') {
                setPhoneError('Número de telefone é necessário.');
                resolve(false);
            } else if (phone.length < 9) {
                setPhoneError('Número de telefone inválido.');
                resolve(false);
            } else {
                setPhoneError('');
                resolve(true);
            }
        });
    };
    const [p, setP] = useState(false)
    
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setP(phoneEror == '' && emailError == '' && passwordError == '' && confirmError == '' && fullError == '')
    })
    const next = async () => {
        Keyboard.dismiss();
        setError([]);
    
        const validations = await Promise.all([
            validateFull(),
            // validateEmail(),
            validatePhone(),
            validatePassword(),
            validateConfirm()
        ]);
        
        // If any validation returned false, skip the API call
        if (validations.every(v => v === true)) {
            console.log('next', email)

            let words = fullname.split(' ');
            let caps = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
            let fname = caps.join(' ');

            setLoading(true)
            setTimeout(() => {
    navigation.dispatch(StackActions.push('signup2', { 'id': 1, 'phone': phone, code: 123456, 'password': password}))                
    setLoading(false)
            }, 2000)
                // api.post(`addUser`, {
                //     email: email,
                //     nome: fname,
                //     telefone: phone,
                //     password: password
                // })
                // .then(res => {

                //     console.log('res', res.data)
                //     setLoading(false)
                //     navigation.dispatch(StackActions.push('signup2', {'email': email, 'id': res.data.data, 'phone': phone, code: res.data?.codigo, 'password': password}))
    
                // })
                // .catch(err => {
                //     console.log('err')
                //     setLoading(false)
                //     console.log('signup error', err.response.data)
                //     setError([err.response.data.message])
    
                // })
        } 
        else {
            console.log('error')
        }
    };
    const animationRef = useRef(null)
    useEffect(() => {
        animationRef.current?.play(30, 120);
    }, [])
    
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" style={{flex: 1, height: '100%', backgroundColor: '#003a75', }}>
            <Loading open={loading}/>
            <View style={{flex: 1, backgroundColor: '#003a75', width: Dimensions.get('window').width,}} >
            <View style={[styles.header]}>
                                <TouchableOpacity onPress={()=>{
                                    console.log('carlos')
                                    // navigation.goBack()
                                    }}>
                                    <View style={[styles.goBack, {opacity: 0}]}>
                                        <Icon name='arrow-back' size={23}/>
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.title}>Login</Text>
            
                               <View></View>
                </View>
                <View keyboardShouldPersistTaps="handled"  style={[styles.container, {flex: 1, marginTop: 75 + insets.top, overflow: 'hidden'}]} >
                <ScrollView keyboardShouldPersistTaps="handled" style={{flex: 1}} scrollEnabled={false}>
                    <Image style={{opacity: 0,width: 70, height: 50, objectFit: 'contain', alignSelf: 'flex-start', marginTop: 20,marginHorizontal: 15, transform: [{scale: 2}]}} source={require('@/assets/images/icon.png')}/>
                    <Text style={styles.title1}>Criar Conta</Text>
                                <View style={styles.horizontal}></View>
                                <View style={styles.inputsContainer}>
            
                                <Pressable onPress={()=> {
                                            fullRef.current.focus()
                                        }}>
                                    <View style={styles.inputContainer}>
                                                <Icon style={styles.icon} name='person-outline' size={18}/><View style={{
                                                    flexDirection: 'column',
                                                    height: 40,
                                                    borderLeftWidth: 1,
                                                    borderLeftColor: '#e3e3e3',
                                                    paddingLeft: 7,
                                                    flex: 1
                                                }}>
                                                    <Text style={styles.label}>Primeiro e Último Nome</Text>
                                                    <TextInput ref={fullRef} style={styles.input} value={fullname} onChangeText={(value)=>setFullName(value)}/>
                                                </View>
                                            </View>
                                </Pressable>
                                <Pressable onPress={()=> {
                                            phoneRef.current.focus()
                                        }}>
                                    <View style={styles.inputContainer}>
                                                <Icon style={styles.icon} name='person-outline' size={18}/><View style={{
                                                    flexDirection: 'column',
                                                    height: 40,
                                                    borderLeftWidth: 1,
                                                    borderLeftColor: '#e3e3e3',
                                                    paddingLeft: 7,
                                                    flex: 1
                                                }}>
                                                    <Text style={styles.label}>Telemóvel (+244)</Text>
                                                    <TextInput maxLength={9} keyboardType="phone-pad" ref={phoneRef} style={styles.input} value={phone} onChangeText={(value)=>setPhone(value)}/>
                                                </View>
                                            </View>
                                </Pressable>
                               
                                {/* usando refencia para o input da senha de acesso, focamos no input assim que clicar na caixa de input para senha de acesso */}
                                 <Pressable onPress={()=> {
                                        pass.current.focus()
                                    }}>
                                        <View style={styles.inputContainer}>
                                            <Icon style={styles.icon} name='lock-closed-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Senha</Text><TextInput ref={pass} secureTextEntry={!seePass} underlineColorAndroid={'transparent'}  style={[styles.input, {flex: 3}]} value={password} onChangeText={(value) => setPassword(value)}/>
                                                </View>
                                                <TouchableOpacity onPress={() => {
                                                    setSeePass(!seePass)
                                                }} style={{flexDirection: 'row'}}>
                                                    <View style={{
                                                    flexDirection: 'column',
                                                    height: 40,
                                                    borderLeftWidth: 1,
                                                    borderLeftColor: '#e3e3e3',
                                                    paddingLeft: 7,
                                                    }}></View>
                                                    <Icon style={styles.icon2} name={seePass ? 'eye-off-outline' : 'eye-outline'} size={20}/>
                                                </TouchableOpacity>
                                        </View>
                                </Pressable>
                                <Pressable onPress={()=> {
                                        confirmRef.current.focus()
                                    }}>
                                        <View style={styles.inputContainer}>
                                            <Icon style={styles.icon} name='lock-closed-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Confirma Senha</Text><TextInput ref={confirmRef} secureTextEntry={!seePass1}   style={[styles.input, {flex: 3}]} value={confirm} underlineColorAndroid={'transparent'} onChangeText={(value) => setConfirm(value)}/>
                                                </View>
                                                <TouchableOpacity onPress={() => {
                                                    setSeePass1(!seePass1)
                                                }} style={{flexDirection: 'row'}}>
                                                    <View style={{
                                                    flexDirection: 'column',
                                                    height: 40,
                                                    borderLeftWidth: 1,
                                                    borderLeftColor: '#e3e3e3',
                                                    paddingLeft: 7,
                                                    }}></View>
                                                    <Icon style={styles.icon2} name={seePass1 ? 'eye-off-outline' : 'eye-outline'} size={20}/>
                                                </TouchableOpacity>
                                        </View>
                                </Pressable>
            
                                <View style={styles.errors}>
                                {fullError.length > 2 && <View style={styles.error}><Pressable onPress={() => setFullError('')}><Icon
                                            size={30} style={{
                                                marginRight: 5
                                            }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{fullError}</Text></View>}
                                    {phoneEror.length > 2 && <View style={styles.error}><Pressable onPress={() => setPhoneError('')}><Icon
                                            size={30} style={{
                                                marginRight: 5
                                            }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{phoneEror}</Text></View>}
                                        {emailError.length > 2 && <View style={styles.error}><Pressable onPress={() => setEmailError('')}><Icon
                                            size={30} style={{
                                                marginRight: 5
                                            }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{emailError}</Text></View>}
                                            {passwordError.length > 2 && <View style={styles.error}><Pressable onPress={() => setPasswordError('')}><Icon
                                            size={30} style={{
                                                marginRight: 5
                                            }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{passwordError}</Text></View>}
                                            {confirmError.length > 2 && <View style={styles.error}><Pressable onPress={() => setConfirmError('')}><Icon
                                            size={30} style={{
                                                marginRight: 5
                                            }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{confirmError}</Text></View>}
                                                {/* renderizar lista de erros */}
                                                <FlatList data={errors} renderItem={(item) => {
                                return (
                                <View style={styles.error}>
                                    {/* botao para remover erros da tela */}
                                    <Pressable onPress={() => setError(errors.filter((err) => err != item.item))}><Icon
                                size={30} style={{
                                    marginRight: 5
                                }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{item.item}</Text></View>
                                )
                                                }} />
                                </View>
                                {/* <View style={{display: loading ? 'flex': 'none'}}>
                                    <Text style={{textAlign: 'center', alignSelf: 'center', color: 'grey'}}>Processando, aguarde...</Text>
                                    <LottieView
                                    autoPlay={true}
                                    speed={1.5}
            
                                    style={{width: Dimensions.get('window').width - 30, height: 200}}
                                    source={require('../assets/loading.json')}
                                    />
                                </View> */}
                                    {!loading && <TouchableOpacity style={[styles.button, {marginBottom: 20 + insets.bottom}]} onPress={() => {
                                        next()
                                    }}>
                                            <Text style={styles.buttonText}>Continuar</Text>
                                    </TouchableOpacity>}
            
            
            
            
                                 </View>
                                 </ScrollView>
                                 </View>
                </View>
        </KeyboardAwareScrollView>
            
    )
}
export default SignUp
