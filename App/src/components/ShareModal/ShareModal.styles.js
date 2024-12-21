import {StyleSheet} from 'react-native';
import { colors } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between'
        
    },
    modalBackground: {
        alignItems: 'center',
        backgroundColor: colors.overlay,
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalCloseButton: {
        position: 'absolute',
        right: 8,
        top: 6
    },
    modalContainerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        width: '100%',
        
        
    },
    modalContent: {
        alignItems: 'center',
        backgroundColor: colors.white,
        height: 130,
        justifyContent: 'space-around',
        padding: 10,
        position: 'relative',
        textAlign: 'center',
        width: '100%',
    },
    textModalContent: {
        fontSize: 20
    },

    



});



export default styles;