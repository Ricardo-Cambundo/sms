import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const CourierSlider = ({ setReady }: {setReady: any}) => {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      resizeMode: "cover",
      width: "100%",
      zIndex: 0,
    },
    bottomSection: {
      height: 250,
      backgroundColor: "#003a75",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 35,
      paddingBottom: 20 + insets.bottom,
      justifyContent: "space-between",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
      paddingHorizontal: 10,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      marginBottom: 0,

      // backgroundColor: 'red',
      zIndex: 1,
      paddingBottom: 5,

      marginHorizontal: 15,
      borderRadius: 100,
      height: 50,
      marginTop: 15 + insets.top,
      justifyContent: "space-between",
    },
    dots: {
      // backgroundColor: 'red',
      padding: 5,
      alignSelf: "center",
      gap: 2.5,
      flexDirection: "row",
    //   marginRight: "-13%",
    },
    activeDot: {
      width: 50,
      height: 6,
      borderRadius: 10000,
      backgroundColor: "#003a75",
    },
    dot: {
      width: 10,
      height: 6,
      borderRadius: 10000,
      backgroundColor: "#e3e3e3",
    },
    skip: {
      color: "#bdbdbd",
      fontWeight: "800",
      fontSize: 14,
    },
    bottomTitle: {
      color: "white",
      textAlign: "center",
      fontSize: 24,
      fontWeight: "700",
    },
    bottomDescription: {
      color: "white",
      marginTop: 20,
      textAlign: "center",
      fontWeight: "500",
    },
  });
  const scrollRef = useRef<any>(null);

  const handleScroll = (index: any) => {
    if (scrollRef != null) {
      scrollRef.current.scrollTo({
        x: index * Dimensions.get("window").width,
        animated: true,
      });
    }
  };
  return (
    <Animated.ScrollView
      keyboardShouldPersistTaps="handled" 
      scrollEnabled={false}
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ flex: 1 }}
      pagingEnabled={true}
      contentContainerStyle={{ backgroundColor: "white" }}
    >
      <View style={{ flex: 1, width: Dimensions.get("window").width }}>
        <View style={styles.header}>
          <View></View>

          <View style={styles.dots}>
            {/* <View style={styles.dot}></View> */}
            <View style={styles.activeDot}></View>
            {/* <View style={styles.dot}></View> */}
            {/* <View style={styles.dot}></View> */}
            {/* <View style={styles.dot}></View> */}
          </View>
          <View></View>

          {/* <TouchableOpacity
            onPress={() => {
              setReady(false);
            }}
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
          >
            <Text style={styles.skip}>Pular</Text>
            <Icon name="arrow-forward-outline" color={"#bdbdbd"} size={16} />
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: '100%',
              maxHeight: 320,
              aspectRatio: 4/4,
              marginHorizontal: 100,
              alignSelf: "center",
              backgroundColor: '#eeeeee',
              borderRadius: 20,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
             <Image style={{zIndex: 10, position: 'absolute', top: 0, right: 20, width: 50, height: 50, borderRadius: 10, borderTopRightRadius: 0, borderTopLeftRadius: 0}} source={require('@/assets/images/adaptive-icon.png')}/>
            <LottieView
              autoPlay={true}
              speed={1.5}
              style={{
                width: "100%",
                height: "100%",
                alignSelf: "center",
                objectFit: "contain",
                transform: [{ scale: 2 }],
                marginLeft: '-25%'
              }}
              source={require("@/assets/lotties/slider1.json")}
            />
          </View>
          {/* <Image style={{ width: 300, height: 300, objectFit: 'contain', alignSelf: 'center', marginTop: 20, marginHorizontal: 15, transform: [{ scale: 1 }] }} source={require('../assets/adaptive-icon.png')} /> */}
        </View>
        <View style={styles.bottomSection}>
          <View>
            <Text style={styles.bottomTitle}>NaVIA pega por si</Text>
            <Text style={styles.bottomDescription}>
              Onde quer que seu pacote esteja, nós o entregaremos a você — entrega rápida e confiável do início ao fim.

              Veja em tempo real onde está o seu pacote e quando ele chegará.
            </Text>
            <Text style={[styles.bottomDescription, {marginTop: 10, fontFamily: '700'}]}> Fique relaxado enquanto nós cuidamos do resto.</Text>

          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
           <View></View>
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.setItem("seenCourierSlider", "true");
                setReady(true);
              }}
              style={{
                backgroundColor: "white",
                width: 45,
                height: 45,
                borderRadius: 500,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
              }}
            >
              <Icon
                name="arrow-forward-outline"
                size={22}
                style={{ textAlign: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* third */}
      {/* <View style={{ flex: 1, flex: 1, width: Dimensions.get('window').width }}>
                <View style={styles.header}>
                    <View></View>

                    <View style={styles.dots}>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.activeDot}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>

                    </View>

                    <TouchableOpacity onPress={() => {
                        setReady(false)
                    }} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Text style={styles.skip}>Pular</Text>
                        <Icon name="arrow-forward-outline" color={'#bdbdbd'} size={16} />
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1, width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{ width: 300, height: 300, objectFit: 'contain', alignSelf: 'center', marginTop: 20, marginHorizontal: 15, transform: [{ scale: 1 }] }} source={require('../assets/adaptive-icon3.png')} />
                </View>
                <View style={styles.bottomSection}>
                    <View>
                        <Text style={styles.bottomTitle}>Compra Fácil de Bilhetes</Text>
                        <Text style={styles.bottomDescription}>
                            Em breve poderás comprar seus bilhetes para viagens Interprovinciais com apenas alguns cliques. Rápido e seguro!
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => {
                            handleScroll(1)
                        }} style={{ backgroundColor: 'white', width: 45, height: 45, borderRadius: 500, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' }}>
                            <Icon name="arrow-back-outline" size={22} style={{ textAlign: 'center' }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            handleScroll(3)
                        }} style={{ backgroundColor: 'white', width: 45, height: 45, borderRadius: 500, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' }}>
                            <Icon name="arrow-forward-outline" size={22} style={{ textAlign: 'center' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}

      {/* fourth */}

     
    </Animated.ScrollView>
  );
};
export default CourierSlider;
