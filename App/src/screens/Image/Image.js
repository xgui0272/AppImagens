import React, {useState} from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';



//estilos
import styles from './Image.styles';


//Components
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ShareModal from '../../components/ShareModal/ShareModal';

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export const Image = ({route}) => {
    
    const {data} = route.params
    const [modalVisible, setModalVisible] = useState(false);
    
    /*
    State para o componente filho "ImageSlider" mandar devolda
    qual index da imagem atual para ser enviada para o componente
    responsavel de baixar a imagem
    */
    const [currentIndexSlider, setCurrentIndexSlider] = useState(data.currentIndex);

    



  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerImage}>
            <ImageSlider data={data} setCurrentIndexSlider={setCurrentIndexSlider}/>
            <TouchableOpacity style={styles.containerShareButton} onPress={() => {
                setModalVisible(!modalVisible)
            }}>
                <Text  style={styles.containerShareButtonText}>Enviar Grátis!</Text>
                <FontAwesome name='share-alt' color='white' size={25}/>
            </TouchableOpacity>
        </View>
        <ShareModal modalVisible={modalVisible} setModalVisible={setModalVisible} linkImg={data.images[currentIndexSlider].imgLink}/>


    </SafeAreaView>
  )
};

export default Image;
