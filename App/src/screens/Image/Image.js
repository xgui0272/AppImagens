import React, {useState} from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';



//estilos
import styles from './Image.styles';


//Components
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ShareModal from '../../components/ShareModal/ShareModal';

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export const Image = () => {

    //States
    const [modalVisible, setModalVisible] = useState(false);




  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerImage}>
            <ImageSlider/>
            <TouchableOpacity style={styles.containerShareButton} onPress={() => {
                setModalVisible(!modalVisible)
            }}>
                <Text  style={styles.containerShareButtonText}>Enviar Grátis!</Text>
                <FontAwesome name='share-alt' color='white' size={25}/>
            </TouchableOpacity>
        </View>
        <ShareModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>


    </SafeAreaView>
  )
};

export default Image;
