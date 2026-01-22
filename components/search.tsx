import LottieView from "lottie-react-native"
import { useEffect, useRef, useState } from "react"
import { Dimensions, Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/Ionicons'
const Search = ({open, setOpen}:{open: any, setOpen: any}) => {
    const insets = useSafeAreaInsets()
    
    const [search, setSearch] = useState('')
    const searchRef = useRef<any>(null)
    const messages = [
  {
    "name": "João Silva",
    "phone_number": "+351912345678",
    "message": {
      "text": "Vamos nos encontrar amanhã para discutir os detalhes do projeto que estamos a desenvolver há meses? É importante alinharmos as próximas etapas e definirmos quem fará o quê.",
      "date": "2024-04-26T18:30:00"
    },
    "viewed": false
  },
  {
    "name": "Maria Oliveira",
    "phone_number": "+351987654321",
    "message": {
      "text": "Não te esqueças da reunião amanhã às 10h. Precisamos revisar os relatórios finais e preparar a apresentação para o cliente. É fundamental que todos estejam alinhados e prontos para discutir os pontos principais.",
      "date": "2024-04-25T09:15:00"
    },
    "viewed": true
  },
  {
    "name": "Carlos Pereira",
    "phone_number": "+351912398765",
    "message": {
      "text": "Podes enviar o relatório atualizado até o final do dia? Precisamos dele para a reunião de amanhã à tarde, e é importante que todas as informações estejam corretas e completas.",
      "date": "2024-04-24T14:45:00"
    },
    "viewed": false
  },
  {
    "name": "Ana Costa",
    "phone_number": "+351912345679",
    "message": {
      "text": "Vamos ao cinema às 8? Estava pensando em um filme novo que saiu na semana passada. Vai ser uma boa oportunidade para relaxar depois de uma semana cheia de trabalho e tarefas pendentes.",
      "date": "2024-04-26T17:45:00"
    },
    "viewed": true
  },
  {
    "name": "Pedro Santos",
    "phone_number": "+351912345680",
    "message": {
      "text": "Preciso falar contigo mais tarde, é algo importante sobre a sua situação no trabalho que precisamos resolver o quanto antes. Quando estiveres disponível, me avisa.",
      "date": "2024-04-25T20:10:00"
    },
    "viewed": false
  },
  {
    "name": "Luísa Martins",
    "phone_number": "+351912345681",
    "message": {
      "text": "Compraste o presente que tinhamos combinado para o aniversário do teu irmão? Lembra-te que é importante não esquecer esses detalhes, especialmente porque ele gosta de surpresas e coisas especiais.",
      "date": "2024-04-25T16:30:00"
    },
    "viewed": true
  },
  {
    "name": "Rui Fernandes",
    "phone_number": "+351912345682",
    "message": {
      "text": "Vou chegar em 10 minutos, estou a caminho. Tinha um trânsito complicado, mas estou a fazer o possível para não atrasar muito.",
      "date": "2024-04-26T18:00:00"
    },
    "viewed": false
  },
  {
    "name": "Sofia Gomes",
    "phone_number": "+351912345683",
    "message": {
      "text": "Confirma a tua presença na reunião de amanhã às 10h, por favor. Precisamos da tua opinião sobre o projeto e também de algumas sugestões que só tu podes dar para melhorar o resultado final.",
      "date": "2024-04-25T21:00:00"
    },
    "viewed": true
  },
  {
    "name": "Miguel Lopes",
    "phone_number": "+351912345684",
    "message": {
      "text": "Vamos fazer uma pausa para o café? Preciso de um momento para descansar e recarregar as energias antes de continuar com as tarefas do dia.",
      "date": "2024-04-25T15:00:00"
    },
    "viewed": false
  },
  {
    "name": "Inês Almeida",
    "phone_number": "+351912345685",
    "message": {
      "text": "Já viste o email que enviei ontem? Era importante que confirmasses o recebimento e a leitura, pois há informações essenciais para a nossa próxima reunião de equipe.",
      "date": "2024-04-24T10:20:00"
    },
    "viewed": true
  },
  {
    "name": "Fábio Costa",
    "phone_number": "+351912345686",
    "message": {
      "text": "Confirmas a reunião na sexta-feira às 3 da tarde? Precisamos alinhar as estratégias finais e decidir quem ficará responsável por cada tarefa para garantir o sucesso do projeto.",
      "date": "2024-04-26T09:00:00"
    },
    "viewed": false
  },
  {
    "name": "Beatriz Ribeiro",
    "phone_number": "+351912345687",
    "message": {
      "text": "Vamos jantar fora na sexta-feira à noite? Estava pensando em um restaurante novo que abriu na cidade e que parece ser muito bom. Vai ser uma ótima oportunidade para conversarmos e relaxarmos.",
      "date": "2024-04-25T19:30:00"
    },
    "viewed": true
  },
  {
    "name": "Vítor Carvalho",
    "phone_number": "+351912345688",
    "message": {
      "text": "Precisamos falar sobre o projeto que estamos a desenvolver e definir as próximas etapas. É importante que tenhas tempo para uma reunião esta semana, pois há muitos detalhes a serem ajustados.",
      "date": "2024-04-24T17:45:00"
    },
    "viewed": false
  },
  {
    "name": "Clara Nunes",
    "phone_number": "+351912345689",
    "message": {
      "text": "Está tudo pronto para a apresentação de amanhã? Já revisaste todos os slides e o roteiro? É fundamental que tudo esteja perfeito para causar uma boa impressão.",
      "date": "2024-04-26T16:00:00"
    },
    "viewed": true
  },
  {
    "name": "Daniela Pinto",
    "phone_number": "+351912345690",
    "message": {
      "text": "Não te preocupes com isso. Eu já tratei de todos os detalhes, desde a organização até os documentos necessários. Podes ficar descansado que tudo estará sob controlo.",
      "date": "2024-04-25T13:50:00"
    },
    "viewed": false
  },
  {
    "name": "Ricardo Matos",
    "phone_number": "+351912345691",
    "message": {
      "text": "Vamos fazer uma pausa para o café? Preciso de um momento para descansar e refletir sobre os próximos passos do projeto.",
      "date": "2024-04-25T14:30:00"
    },
    "viewed": true
  },
  {
    "name": "Sara Teixeira",
    "phone_number": "+351912345692",
    "message": {
      "text": "Levaste o livro que te pedi? Preciso dele para a aula de amanhã, e seria ótimo se pudesses trazê-lo ainda hoje.",
      "date": "2024-04-24T11:45:00"
    },
    "viewed": false
  },
  {
    "name": "Nuno Costa",
    "phone_number": "+351912345693",
    "message": {
      "text": "A reunião foi adiada para a próxima semana, assim que tiverem a nova data aviso-te. Preciso reorganizar a minha agenda para poder participar.",
      "date": "2024-04-26T10:00:00"
    },
    "viewed": true
  },
  {
    "name": "Filipa Ramos",
    "phone_number": "+351912345694",
    "message": {
      "text": "Vamos ao parque amanhã? Podemos levar as crianças, fazer um piquenique e aproveitar o dia ao ar livre para descansar um pouco da rotina diária.",
      "date": "2024-04-25T08:30:00"
    },
    "viewed": false
  },
  {
    "name": "Hugo Marques",
    "phone_number": "+351912345695",
    "message": {
      "text": "Preciso de ajuda com a mudança de casa. Podes vir ajudar no sábado? Tenho muitas caixas para carregar e preciso de mãos extras para agilizar tudo.",
      "date": "2024-04-24T16:10:00"
    },
    "viewed": true
  }
]   
const [filter, setFilter] = useState([])
const [finished, setFinished] = useState(false)
const [searched, setSearched] = useState(null)
const styles = StyleSheet.create({
        header: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 55,
      alignItems: "flex-end",
      paddingHorizontal: 15,
      position: "absolute",
      top: insets.top,
      left: 0,
      right: 0,
      marginBottom: 0,
      backgroundColor: "white",
      zIndex: 1,
      paddingBottom: 7,
      // transform: [{translateY: diffClampScroll}],
    },
    input: {
      flex: 1,
      width: "95%",
      backgroundColor: "#dbdbdb44",
      height: 40,
      borderRadius: 5,
      flexDirection: "row",
      paddingHorizontal: 7,
    },
    textInput: {
      flex: 1,
      fontSize: 15,
      borderWidth: 0,
      paddingLeft: 5,
      alignSelf: "center",
      // color: '#a8a8a8',
      color: searched ? '#129e00' : 'black',
      fontWeight: searched ? '700' : '400'
    },
    textInput1: {
      flex: 1,
      fontSize: 15,
      borderWidth: 0,
      paddingLeft: 5,
      alignSelf: "center",
      // color: '#a8a8a8',
      
    },
    cancel: {
      fontWeight: "700",
      // color: '#007bee',
      color: "#003a75",
      alignSelf: "center",
      marginTop: 8,
      marginLeft: 10,
    },
    title: {
      color: 'grey',
      fontWeight: "500",
      fontSize: 13,
    },
    history: {
      backgroundColor: "#dbdbdb44",
      paddingHorizontal: 10,
      paddingVertical: 7,
      margin: 5,
      marginRight: 7,
      marginLeft: 0,
    },
    histories: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flex: 1,
    },
    historyText: {
      color: "grey",
      fontSize: 13,
    },
    recomendations: {
      flexDirection: "column",
    },
    recommendationText: {
      fontSize: 14,
      fontWeight: "300",
    },
    recommendation: {
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#dbdbdb67",
      gap: 5,
      paddingBottom: 8,
    },
    prodReview: {
      flexDirection: "row",
      gap: 3,
      alignItems: "baseline",
    },
    prodReviewText: {
      fontSize: 12,
      color: "#007bee",
    },
    numReviews: {
      color: "grey",
      fontSize: 12,
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
                        marginTop: 10

        },
        buttonText1: {
            color: '#003a75',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '600'
        },
        tags: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 15,
          marginTop: 10
        },
        tag1: {
          backgroundColor: "#003a75",
          paddingHorizontal: 25,
          paddingVertical: 6,
          borderRadius: 500
          
        },
        tagText1: {
          color: 'white',
        },
        tag: {
          backgroundColor: "white",
          paddingHorizontal: 25,
          paddingVertical: 6,
          borderRadius: 500,
          borderWidth: 1,
          borderColor: '#003a75'
          
        },
        tagText: {
          color: '#003a75',
        },
        modalView: {
          height: 300,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        modalTitle: {
          textAlign: 'center',
          fontWeight: '500',
          fontSize: 14
        },
        modalButtons: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        
       
        button2: {
          flex: 1,
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
          justifyContent: 'center'
        },
        button2Text: {
          fontSize: 13,
          color: '#f39e00',
          fontWeight: '600'
        },
        
    })
    const [message, setMessage] = useState('')
    const [load, setLoad] = useState(false)
    const [done, setDone] = useState(false)
    const [destination, setDestination] = useState("Todos")
    const [focused, setFocused] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const send = () => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
            setOpenModal(true)
        }, 1000)
    }
    useEffect(() => {
      if (search.length > 0 && !searched) {
        setFocused(true)
      }
    }, [search])
    
    return (
        <View style={{flex: 1}}>
          <Modal style={{margin: 0, justifyContent: 'center', marginHorizontal: 40}}
            // animationIn={'zoomIn'}
            
            // animationOut={'bounceOutRight'}
            // onBackdropPress={() => {
                
            //     setOpen(false)
            // }} 
            visible={openModal}
            animationType="fade"
            backdropColor={'rgba(0, 0, 0, 0.63)'}
            presentationStyle="overFullScreen"

            // onSwipeComplete={() => {
            //     setOpen(false)
            // }}
            // propagateSwipe
            >
            <View style={[styles.modalView, { margin: 'auto', width: '95%' }]}>
              <Text style={[styles.modalTitle, {color: 'green'}]}>Mensagem enviada com sucesso</Text>
              <LottieView 
                autoPlay={true}
                speed={1}
                
                style={{width: '100%', height: '70%', transform: [{scale: 1.5}]}}
                source={require('@/assets/lotties/loading1.json')}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity style={[styles.button1, {flex: 1, borderRadius: 5, borderColor: '#003a75'}]} onPress={() => {
                    setOpenModal(false)
                    // navigation.dispatch(StackActions.push('cart', {
                    //   noBottomTabs: true
                    // }))
                    setTimeout(() => {
                                          setOpen(false)

                    }, 500)

                  }}>
                    <Text style={styles.buttonText1}>Ver historial</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button2, {flex: 1}]} onPress={() => {
                    setOpenModal(false)
                  }}>
                    <Text style={[styles.button2Text, {color: '#003a75'}]}>Fechar</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </Modal>
            <TouchableWithoutFeedback onPress={()=> {
              Keyboard.dismiss()
            }}>
              <View style={styles.header}>
                <View></View>
                        
                        <TouchableOpacity
              style={{}}
              onPress={() => {
                setOpen(false);
                setSearch("");
              }}
                        >
              <View style={{ alignSelf: "center", height: 38 }}>
                <Text style={styles.cancel}>Cancelar</Text>
              </View>
                        </TouchableOpacity>
                      </View>
            </TouchableWithoutFeedback>
        <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, marginTop: 65 + insets.top }}
>
            
            { <View style={{paddingHorizontal: 20}}>
                <Text style={[styles.title, {display: focused ? 'none' : 'flex'}]}>Mensagem</Text>
                <TextInput style={[styles.textInput1, {
                    backgroundColor: '#f2f2f2f3',
                    marginTop: 20,
                    width: '100%',padding: 10,
                    height: 100,
                    borderRadius: 5,
                    display: focused ? 'none' : 'flex'
                    
                }]} multiline={true} numberOfLines={5} 
                value={message} onChangeText={(val) => {
                    setMessage(val)
                }} placeholder="Digite a sua mensagem..."/>
                <View style={{marginTop: 25, display: focused ? 'none' : 'flex'}}></View>
                <Text style={[styles.title, {display: focused ? 'none' : 'flex'}]}>Destinatário</Text>
                <View style={[styles.tags, {display: focused ? 'none' : 'flex'}]}>
                  {['Todos', 'Contacto Específico'].map((item: any, index: number) => {
                    return (
                      <TouchableOpacity key={index} style={item == destination ? styles.tag1: styles.tag} onPress={() => {
                        setDestination(item)
                      }}>
                        <Text style={item == destination ? styles.tagText1: styles.tagText}>{item}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>

                {destination != 'Todos' && <View style={{ paddingTop: 25, }}>
                  <Text style={[styles.title,]}>
                    Seleccione um contacto
                  </Text>
                  <View style={[styles.input, {
                    marginTop: 10
                  }]}>
            <Icon
              name="search"
              size={20}
              style={{ color: "#003a75", alignSelf: "center" }}
            />
            <TextInput
              returnKeyType="search"
              onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
              onSubmitEditing={() => {
                // api.get(`products?q=${search}`).then((res) => {
                //   setOpen(false);
                  
                //   setFilter([...res.data]);
                //   setList([...res.data]);
                // });
                setFilter(messages.filter((item: any) => `${item?.name}`.toLowerCase().includes(search)))
                setFinished(true)
              }}
              value={search}
              style={{color: searched && '#0064c8'}}
              onChangeText={(val) => {
                console.log('serch', search, search.toLowerCase().includes('todos'))
                if (search.toLowerCase().includes('todos')){
                    
                    setSearch("")
                    setSearched(null)
                    return;
                }
                else if (searched) {
                    setSearched(null)
                }
                
                setFinished(false);
                // api
                //   .get(`products?q=${val}`)
                //   .then((res) => {
                //     setFilter([...res.data]);
                //     setFinished(true);
                //   })
                //   .catch((err) => {
                //     setFinished(true);
                //   });
                                setFilter(messages.filter((item: any) => `${item?.name}`.toLowerCase().includes(val.toLowerCase())))
                                setFinished(true)
                setSearch(val);
              }}
              ref={searchRef}
              placeholderTextColor={"grey"}
              placeholder="Pesquise por algum contacto..."
              style={styles.textInput}
            />
          </View>
          {`${search}`.length > 0 && !searched && (
                <View style={{ flex: 1 }}>
                  {filter.length > 0 ? (
                    <View style={{marginTop: 25}}>
                      <Text style={styles.title}>Recomendações</Text>
                      <View style={styles.recomendations}>
                        {(filter.concat([])).map((item: any, index: any) => {
            
                          return (
                            <TouchableOpacity
                              key={index}
                              onPress={() => {
                                // setOpen(false);
                                setSearch(item?.name)
                                setSearched(item)
                                Keyboard.dismiss()
                                
                              }}
                            >
                              <View style={styles.recommendation}>
                                <Text style={styles.recommendationText}>
                                  {item?.name}
                                </Text>
                                <View
                                  style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 6,
                                  }}
                                >
                                  <View
                                    style={{
                                      width: 35,
                                      height: 35,
                                      borderRadius: 500,
                                      backgroundColor: "#003a75",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      overflow: "hidden",
                                    }}
                                  >
                                    {
                                      <Text
                                        style={{
                                          color: "white",
                                          fontSize: 12,
                                          fontWeight: "600",
                                        }}
                                      >
                                        {item?.name[0]}{`${item?.name}`.split(' ')?.[1]?.[0]}
                                      </Text>
                                    }
                                  </View>
                                  <View>
                                    <Text
                                      style={{ fontSize: 11, fontWeight: "500" }}
                                    >
                                      {item?.name}
                                    </Text>
                                    
                                  </View>
                                </View>
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                  ) : (
                    <View style={{ display: finished ? "flex" : "none" }}>
                      <Text>Nenhum resultado para "{search}".</Text>
                    </View>
                  )}
                </View>
              )}

                  </View>}
                   
                   {!load ? <View style={{marginTop: 25}}>
                       {(message.length > 0 && ((destination != 'Todos' && searched) || destination == 'Todos')) ? <TouchableOpacity onPress={() => {
                        send()
                                        }} style={styles.button}>
                        <Text style={styles.buttonText}>Enviar</Text>
                                       </TouchableOpacity>: 
                                        <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText1}>Enviar</Text>
                                       </TouchableOpacity>}
                   </View>: <LottieView
                                                autoPlay={true}
                                                speed={1.5}
                                                
                                                style={{width: Dimensions.get('window').width - 30, height: 170, marginVertical: -50}}
                                                source={require('@/assets/lotties/loading2.json')}
                                                />}

                

                
                </View>}
        </ScrollView>
        </View>
    )
}
export default Search