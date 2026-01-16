import { Image } from 'expo-image';
import { FlatList, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from 'react';
import {format} from 'date-fns'

export default function HomeScreen() {
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 125 + insets.top,
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 20,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            backgroundColor: '#003a75',
            zIndex: 1,
            paddingBottom: 55,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            
            },
        goBack: {
            width: 45,
            height: 45,
            borderRadius: 100,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          borderWidth: 1,
          borderColor: '#eeeeee'
            // iOS shadow properties
            // shadowColor: '#000', // Color of the shadow
            // shadowOffset: {
            //     width: 0, // Horizontal offset
            //     height: 2, // Vertical offset
            // },
            // shadowOpacity: 0.25, // Opacity of the shadow
            // shadowRadius: 3.5, // Blur radius of the shadow
            // // Android shadow property
            // elevation: 5, // Controls the shadow depth           
        },
        title: {
            fontSize: 20,
            fontWeight: '800',
            color: "white"
        },
        section: {
          backgroundColor: 'white',
          marginHorizontal: 15,
          padding: 15,
          paddingBlock: 25,
          zIndex: 1000,
          borderRadius: 15 
          
        },
        sectionHeader: {
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderBottomColor: '#e5e5e5',
          paddingBottom: 10,
          marginBottom: 25
        },
        sectionTitle: {
          fontSize: 16,
          fontWeight: '500'
        },
        seeMore: {
          fontSize: 13,
          color: '#007bff',
          fontWeight: '500'
        },
        button: {
            backgroundColor: 'white',
            paddingVertical: 10,
            borderRadius: 25,
            marginTop: 15,
            borderWidth: 1,
            borderColor: '#003a75'
        },
        buttonText: {
            color: '#003a75',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '600'
        },
        messageList: {
          flexDirection: 'column',
        }
  })
  const [messages, setMessages] = useState([
    {
      title: '',
      users: 4,
      date: new Date('2024-06-15')
    },
    {
      title: '',
      users: 1,
      date: new Date('2024-06-10')
    },
    {
      title: '',
      users: 1,
      date: new Date('2024-06-10')
    }
    
  ])
  return (
   <View style={{flex: 1}}>
<View style={styles.header}>
            {/* <Pressable onPress={() => {
                setOpen(false)
            }}>
                <View style={styles.goBack}>
                    <Icon name='close-outline' size={24}/>
                </View>
            </Pressable> */}
            <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
              <Text style={{fontSize: 13, color: 'white', fontWeight: '500'}}>Bom Dia</Text>
              <Text style={[styles.title, {}]}>Carlos B.</Text>
            </View>
            {/* <TouchableOpacity onPress={() => {
                setOpen1(true)
            }} style={styles.input}><Icon name='search' size={20} style={{color: 'orange', alignSelf: 'center', }}/>
            <View style={styles.textInput}>
                <Text style={styles.textInputText}>Pesquise endereço </Text>
            </View>
            </TouchableOpacity> */}
            
            <Pressable onPress={() => {
                    // navigation.dispatch(StackActions.push('notifications'))
                }}>
                    <View style={[styles.goBack, {}]}>
                        <Icon name='notifications-outline' size={24} color={'#003cbe'} />
                    </View>
                </Pressable>
        </View>
        <ScrollView style={{zIndex: 1000}} contentContainerStyle={{paddingTop: 125 + insets.top, zIndex: 1000, gap: 20}}>
          
           <View style={[styles.section, {           marginTop: -20,
}]}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Budget</Text>
              
              {/* <TouchableOpacity>
                <Text style={styles.seeMore}>Ver mais </Text>
              </TouchableOpacity> */}
            </View>
            <View>
                <Text>Crédito total: <Text style={{fontWeight: '700'}}>AOA 35.000,00</Text></Text>
                <View style={{width: '100%', height: 13, backgroundColor: '#e5e5e5', borderRadius: 50, marginVertical: 8, position: 'relative'}}>
                  <View>
                    <View style={{width: '70%', height: '100%', backgroundColor: '#003a75', borderRadius: 50}}></View>
                  </View>
                </View>


                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={{flex: 1, borderRightWidth: 1, borderRightColor: '#e6e6e6'}}>
                    <Text style={{textAlign: 'center'}}>Gasto: </Text>
                    <Text style={{fontWeight: '700', textAlign: 'center'}}>AOA 27.500,00</Text>
                  </View>

                 <View style={{flex: 1,}}>
                    <Text style={{textAlign: 'center'}}>Sobrando: </Text>
                    <Text style={{fontWeight: '700', textAlign: 'center'}}>AOA 7.500,00</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Aumentar crédito</Text>
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.section}>
<View style={[styles.sectionHeader, {borderBottomWidth: 0, marginBottom: 5}]}>
              <Text style={styles.sectionTitle}>Contactos novos</Text>
              <TouchableOpacity>
                <Text style={styles.seeMore}>Ver mais </Text>
              </TouchableOpacity>
            </View>
            <FlatList contentContainerStyle={{
              gap: 7
            }} data={['RH Imogestim', "Dir. ISPAJ", 'Manuel Gaspar', 'Aureo Wizzy', 'Luilson Pereira']} 
            horizontal renderItem={(item: any) => {
              return (
                <View style={{borderWidth: 1, borderColor: '#eeeeee', maxWidth: 130, margin: 0,  borderRadius: 5, alignItems: 'center', padding: 10, justifyContent: 'space-between', width: 130}}>
                  <View style={{backgroundColor: '#eeeeee', width: '80%', aspectRatio: 1/1, borderRadius: 500, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontWeight: '600', fontSize: 20, color: '#003a75'}}>{item?.item[0]}{`${item?.item}`.split(' ')?.[1]?.[0]}</Text></View>

                  <Text numberOfLines={1} ellipsizeMode='tail' style={{marginTop: 5, fontSize: 13}}>{item?.item}</Text>
                  <View style={{backgroundColor: '#003a75', width: '100%', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 5, height: 25}}>
                    <Text style={{color: 'white', fontSize: 12}}>Enviar</Text>
                  </View>
                </View>
              )
            }}/>
            <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Importar contactos</Text>
                </TouchableOpacity>
          </View>


          <View style={styles.section}>
            <View style={[styles.sectionHeader, {borderBottomWidth: 0, marginBottom: 5}]}>
              <Text style={styles.sectionTitle}>Mensagens recentes</Text>
              <TouchableOpacity>
                <Text style={styles.seeMore}>Ver mais </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.messageList}>
              {[...messages.concat(messages)].slice(0, 3).map((message, index) => (
                <View key={index} style={{marginBottom: 15, paddingBottom: 5, marginBottom: 5, paddingBlock: 5, flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <View style={{width: 45, height: 45, backgroundColor: '#eeeeee', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name='paper-plane-outline' color={'#003a75'} size={22} style={{alignSelf: 'center'}}/>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={{fontWeight: '600'}}>{index + 1} minuto(s) atrás</Text>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 14}}>Contacto(s): {message.users > 1 ? `${message.users}`: message.users}</Text>
                    <Text style={{color: 'grey', fontSize: 13}}>{format(new Date(message.date), 'dd/MM/yyyy - hh:mm')}</Text>
                  </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
   </View>
  );
}

