import {StyleSheet} from 'react-native';
import { colors } from '../../assets/styles/colors';



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        elevation: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10, 
        paddingLeft: 20,
        paddingRight: 20, 
        paddingTop: 10, 
        shadowColor: colors.black, 
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9, 
        shadowRadius: 10,
        width: '100%', 

    },
    logo: {
        color: colors.white,
        fontSize: 18,
        
    }


});


export default styles;