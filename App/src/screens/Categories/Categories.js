import React from 'react'
import { SafeAreaView, StatusBar, FlatList } from 'react-native';

//Estilos
import styles from './Categories.styles';
import { colors } from '../../assets/styles/colors';

//Components
import CategorieButton from '../../components/CategorieButton/CategorieButton';

//Hooks


const data = [
  {id: 1, name: 'Feliz Natal', img: 'https://cdn.awsli.com.br/800x800/1231/1231330/produto/236296656/sub695554---kauan---retangular-feliz-natal-peq-sqosbbj484.jpg'},
  {id: 2, name: 'Bom Dia', img: 'https://static.vecteezy.com/ti/vetor-gratis/p1/6326651-tropical-praia-sundown-horizonte-paisagem-vetor.jpg'},
  {id: 3, name: 'Boa Tarde', img: 'https://cdn.pixabay.com/photo/2020/07/09/01/09/landscape-5385552_1280.jpg'},
  {id: 4, name: 'Boa Noite', img: 'https://img.freepik.com/vetores-premium/noite-linda-paisagem-do-ceu-na-floresta-com-lua-e-estrelas_104785-296.jpg'},
  {id: 5, name: 'Motivacional', img: 'https://i.pinimg.com/736x/4f/a4/22/4fa4220cf8e4f84d2e7515c8261f058d.jpg'},
  {id: 6, name: 'Biblicas', img: 'https://cdn.arquidiocesesorocaba.org.br/wp-content/uploads/2022/09/09132831/inspiracao-biblica.jpg'},
  {id: 7, name: 'Aniversario', img: 'https://www.sorting.com.br/img-upload/images/tema-de-aniversario-infanti%2C-qual-escolher.jpg'},
  {id: 8, name: 'Feriados', img: 'https://harus.ind.br/wp-content/uploads/2023/02/5-praias-brasileiras.jpg'},
  {id: 9, name: 'Pascoa', img: 'https://s2-redeglobo.glbimg.com/iThjt0IulAke7ytva2tXHS1_Yno=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2023/r/U/EbHJFpQEAi04yF5U1C0g/coelho-feliz-com-muitos-ovos-de-pascoa-na-grama-fundo-festivo-para-design-decorativo-1-.jpg'},
  {id: 10, name: 'Ano novo', img: 'https://images.squarespace-cdn.com/content/v1/55b7e44de4b0af4724ac5dd6/ad3872eb-0dbb-4abf-b855-df0c6114ba02/sylvester-g406905444_1920.jpg'},
  
];

const Categories = () => {




  return (
    <SafeAreaView style={styles.container}>
        
        <StatusBar 
        barStyle="light-content" // Ou "dark-content", dependendo do contraste que deseja
        backgroundColor={colors.primary} // Cor da barra (exemplo: verde)
        />

      <FlatList
        contentContainerStyle={styles.body}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategorieButton name={item.name} img={item.img}/>
        )}
        numColumns={2} // Define o número de colunas
      />

        
  
    </SafeAreaView>
  )
}

export default Categories