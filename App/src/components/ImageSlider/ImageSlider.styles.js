import {StyleSheet} from 'react-native';
//import { colors } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    arrowLeft: {
        left: 10,
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: -15 }],
        zIndex: 2,
    },
    arrowRight: {
        padding: 10,
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -15 }],
        zIndex: 2,
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageContainer: (width) => ( {
        width,
        height: 200,
    }),
    sliderContainer: {
        position: 'relative',
        width: '100%',

    },



});



export default styles;