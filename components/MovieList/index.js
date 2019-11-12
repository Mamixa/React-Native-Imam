import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  posterImage: {
    backgroundColor: 'transparent',
    height: 54,
    width: 96
  }
})

export default class MovieList extends Component {
  //Pengaturan Header MovieList
  static navigationOptions = {
    title: 'Movie List',
    headerStyle: { backgroundColor: '#01d277' },
    headerTintColor: '#081c24',
    headerTitleStyle: { fontWeight: 'bold' }
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true }
  }

  //Fetch API Themoviedb untuk "Movie paling populer yang dirilis pada 2019"
  componentDidMount(){
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=850f9e634699d17510dc7dc9c066f762&primary_release_year=2019&sort_by=popularity.desc')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        },
        function(){});
      }).catch((error) =>{
        console.error(error);
      });
  }

  renderListItem = ({ item }) => (
    <TouchableOpacity style = {{ backgroundColor: 'transparent' }}
    onPress={() => this.props.navigation.navigate('MoviePage', { title: item.title, poster: item.poster_path, overview: item.overview, release: item.release_date, votec: item.vote_count, votea: item.vote_average })}>
      <View style = { styles.listItemContainer }>
        <Text style = {{ alignSelf: 'center'}}>{ item.title }</Text>
        <Image source = {{ uri: 'https://image.tmdb.org/t/p/original' + item.backdrop_path }} style = { styles.posterImage }/>
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style = {{ flex: 1 }}>
        <FlatList
          data={ this.state.dataSource }
          renderItem={ this.renderListItem }
          keyExtractor={ (item) => item.title } 
        />
      </View>
    );
  }
}