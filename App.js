import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MovieList from './components/MovieList';
import MoviePage from './components/MoviePage';

//Pengaturan Stack Navigator dan halaman pertama yang akan muncul
const AppNavigator = createStackNavigator({
  MovieList: { screen: MovieList },
  MoviePage: { screen: MoviePage }
},
{ initialRouteName: 'MovieList' })

export default createAppContainer(AppNavigator);