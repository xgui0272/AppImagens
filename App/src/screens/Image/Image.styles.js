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
        

    }
    



});



export default styles;