import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

//Hooks
import Share from 'react-native-share';
import RNSF from 'react-native-fs';


//estilos
import styles from './Image.styles';

//Components
import ImageSlider from '../../components/ImageSlider/ImageSlider';

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export const Image = () => {

    const shareImage = async () => {
        try {
            //Caminho temporario da imagem
            const localPath = `${RNSF.CachesDirectoryPath}/temp_image.jpg`;

            //Função para baixar a imagem
            const downloadResult = await RNSF.downloadFile({
                fromUrl: 'https://cdn.awsli.com.br/800x800/1231/1231330/produto/236296656/sub695554---kauan---retangular-feliz-natal-peq-sqosbbj484.jpg',
                toFile: localPath
            }).promise;

            if(downloadResult.statusCode === 200) {
                //Compartilhar a imagem
                await Share.open({
                    url: `file://${localPath}`,
                    type: 'image/jpg',
                    message: 'Veja esta imagem incrível!',
                    
                });

                //Remover imagem 
                await RNSF.unlink(localPath)
            } else {
                console.error("Error ao baixar a imagem:", downloadResult);
            }

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerImage}>
            <ImageSlider/>
            <TouchableOpacity style={styles.containerShareButton} onPress={shareImage}>
                <Text  style={styles.containerShareButtonText}>Enviar Grátis!</Text>
                <FontAwesome name='share-alt' color='white' size={25}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
};

export default Image;
