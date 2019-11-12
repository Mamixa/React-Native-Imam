import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
    aspectRatio: 0.65
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black'
  },
  col1: {
    flex: 1,
    padding: 5
  },
  col2: {
    flex: 3,
    padding: 5
  }
})

export default class MoviePage extends Component {
  //Pengaturan Header MoviePage
  static navigationOptions = {
    title: 'Movie',
    headerStyle: { backgroundColor: '#081c24' },
    headerTintColor: '#01d277',
    headerTitleStyle: { fontWeight: 'bold' }
  };
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  
  //Coba looping Components dengan mapping
  /*initialObj = [
    {
      rown: 'Title',
      paramn: 'title'
    },
    {
      rown: 'Release',
      paramn: 'release'
    },
    {
      rown: 'Overview',
      paramn: 'overview'
    },
    {
      rown: 'Total Vote',
      paramn: 'votec'
    },
    {
      rown: 'Vote Average',
      paramn: 'votea'
    }
  ]
  
  viewListArr = initialObj.map(viewInfo => (
    <View style = { styles.row }>
      <View style = { styles.col1 }>
        <Text style = {{ fontSize: 15 }}>{ viewInfo.rown }</Text>
      </View>
      <View style = { styles.col2 }>
        <Text style = {{ fontSize: 15 }}>{ navigation.getParam( viewInfo.paramn, '') }</Text>
      </View>
    </View>
  ));*/

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style = {{ flex: 1 }}>
          <Image source = {{ uri: 'https://image.tmdb.org/t/p/original' + navigation.getParam('poster', '') }} style = { styles.posterImage }/>
        </View>
        <View style = { styles.row }>
          <View style = { styles.col1 }>
            <Text style = {{ fontSize: 15 }}>Title</Text>
          </View>
          <View style = { styles.col2 }>
            <Text style = {{ fontSize: 15 }}>{ navigation.getParam('title', '') }</Text>
          </View>
        </View>
        <View style = { styles.row }>
          <View style = { styles.col1 }>
            <Text style = {{ fontSize: 15 }}>Release</Text>
          </View>
          <View style = { styles.col2 }>
            <Text style = {{ fontSize: 15 }}>{ navigation.getParam('release', '') }</Text>
          </View>
        </View>
        <View style = { styles.row }>
          <View style = { styles.col1 }>
            <Text style = {{ fontSize: 15 }}>Overview</Text>
          </View>
          <View style = { styles.col2 }>
            <Text style = {{ fontSize: 15 }}>{ navigation.getParam('overview', '') }</Text>
          </View>
        </View>
        <View style = { styles.row }>
          <View style = { styles.col1 }>
            <Text style = {{ fontSize: 15 }}>Total Vote</Text>
          </View>
          <View style = { styles.col2 }>
            <Text style = {{ fontSize: 15 }}>{ navigation.getParam('votec', '') }</Text>
          </View>
        </View>
        <View style = { styles.row }>
          <View style = { styles.col1 }>
            <Text style = {{ fontSize: 15 }}>Vote Average</Text>
          </View>
          <View style = { styles.col2 }>
            <Text style = {{ fontSize: 15 }}>{ navigation.getParam('votea', '') }</Text>
          </View>
        </View>
      </ScrollView>      
    );
  }
}