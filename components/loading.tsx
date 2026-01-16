import LottieView from "lottie-react-native"
import { View, Modal, StyleSheet } from "react-native"

const Loading = ({open}: {open: any}) => {
    const styles = StyleSheet.create({
        modalView: {
            height: 300,
            width: '100%',
            // backgroundColor: 'white',
            borderRadius: 15,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
            margin: 'auto'
          },
    })
    return (
        <Modal style={{margin: 0, justifyContent: 'center', marginHorizontal: 40, alignItems: 'center'}}
                    presentationStyle="overFullScreen"

            animationType="fade"
            visible={open}
            backdropColor={'rgba(0, 0, 0, 0.74)'}
            >
            <View style={styles.modalView}>
              
              <LottieView
              autoPlay={true}
              speed={1.5}
              
              style={{width: '100%', height: '100%'}}
              source={require('@/assets/lotties/loading4.json')}
              />
              
            </View>
          </Modal>
        
    )
}
export default Loading