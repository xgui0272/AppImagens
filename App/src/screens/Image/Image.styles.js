import {StyleSheet} from 'react-native';
import { colors } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,


    },
    containerShare: {
        

    },
    containerShareButton: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        marginTop: 20,
        padding: 10,
        
    },
    containerShareButtonText: {
        color: colors.white,
        fontSize: 25,
        

    },

    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },

    modalContent: {
        textAlign: 'center',
        alignItems: 'center',
        height: 130,
        backgroundColor: colors.white,
        width: '100%',
        padding: 10,
        justifyContent: 'space-around',
        position: 'relative'
    },
    modalCloseButton: {
        position: 'absolute',
        right: 8,
        top: 6
    },

    textModalContent: {
        fontSize: 20
    },

    modalContainerIcons: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        
        
    },

    iconContainer: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between'
        
    }
    



});



export default styles;