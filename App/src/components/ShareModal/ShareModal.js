import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

//Estilos
import styles from './ShareModal.styles';
import { colors } from '../../assets/styles/colors';

//Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Hooks
import Share from 'react-native-share';
import RNSF from 'react-native-fs';

const ShareModal = ({modalVisible, setModalVisible, linkImg}) => {

    const shareImage = async () => {
        try {
            //Caminho temporario da imagem
            const localPath = `${RNSF.CachesDirectoryPath}/temp_image.jpg`;

            //Função para baixar a imagem
            const downloadResult = await RNSF.downloadFile({
                fromUrl: linkImg,
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

  
    const shareImageApps = async (app) => {
        try {
            //Caminho temporario da imagem
            const localPath = `${RNSF.CachesDirectoryPath}/temp_image.jpg`;

            //Função para baixar a imagem
            const downloadResult = await RNSF.downloadFile({
                fromUrl: linkImg,
                toFile: localPath
            }).promise;

            if(downloadResult.statusCode === 200) {
                //Compartilhar a imagem
                await Share.shareSingle({
                    url: `file://${localPath}`,
                    //message: 'Veja esta imagem incrível!',
                    social: Share.Social[app.toUpperCase()],
                    type: 'image/jpeg'
                });

                //Remover imagem 
                setTimeout(async () => {
                    await RNSF.unlink(localPath)
                }, 10000)
            } else {
                console.error("Error ao baixar a imagem:", downloadResult);
            }

        } catch (error) {
            console.log(error)
        }
    }



  return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false)
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
                        <FontAwesome name='close' color={colors.primary} size={25}/>
                    </TouchableOpacity>
                    <Text style={styles.textModalContent}>Compartilhar imagem com</Text>
                    <View style={styles.modalContainerIcons}>
                        <TouchableOpacity style={styles.iconContainer} onPress={() => shareImageApps('WHATSAPP')}>
                            <Icon name='whatsapp-square' color={colors.primary} size={25}/>
                            <Text>WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconContainer} onPress={() => shareImageApps('INSTAGRAM')}>
                            <Icon name='instagram-square' color={colors.primary} size={25}/>
                            <Text>Instagram</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconContainer} onPress={() => shareImageApps('MESSENGER')}>
                            <Icon name='facebook' color={colors.primary} size={25}/>
                            <Text>Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconContainer} onPress={() => shareImageApps('MESSENGER')}>
                            <Icon name='facebook-messenger' color={colors.primary} size={25}/>
                            <Text>Messenger</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconContainer} onPress={shareImage}>
                            <FontAwesome name='share-alt' color={colors.primary} size={25}/>
                            <Text>Outros</Text>
                        </TouchableOpacity>
                        
                        
                        
                    </View>
                </View>
            </View>
        </Modal>
  )
}

export default ShareModal;