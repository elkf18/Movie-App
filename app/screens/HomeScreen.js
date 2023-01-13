import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,TextInput
} from 'react-native';
import axios from 'axios';
import styles from '../screens/styles'
import {MaterialIcons} from '@expo/vector-icons';

const movies = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const API_KEY = 'c03f9dd1a0b1ae5bc3bb5b636c8d6966';
  const getData = async (search) => {
    if (!search){
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${currentPage}`,
        )
        .then(res => {
          setMovies([...movies, ...res.data.results]);
          console.log(currentPage,'berhasil')
        });
    }
    else{
      axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`,
      )
      .then(res => {
        setMovies([...searchTerm, ...res.data.results]);
        console.log(search,'halohalo')
      });
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={{marginHorizontal: 5, marginVertical: 5}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MovieScreen', {id: item.id});
            }}>
            <View style={styles.movieCard}>
              <Image style={styles.MovieImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w780/${item.poster_path}`,
                }}
              />
              <Text style={{fontSize:10, color:'white',marginTop:5}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };



  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
  };
  const fungsicari = (text) => {
    setSearchTerm(text);
    console.log(text)
  };

  useEffect(() => {
    getData(searchTerm);
  }, [currentPage, searchTerm]);

  return (
    <>
      {console.log(movies)}
      <View style={{backgroundColor: '#242A32', flex: 1}}>
        <View >
          <Text style={styles.TextTitle} >Popular Movies</Text>
          <View style={{flexDirection:'row'}}>
            <View style={styles.input}>
              <TextInput
                placeholder={'search movies'}
                onChangeText={text => {
                fungsicari(text);
                }}
                value={searchTerm}
                // value={searchTerm}
                // onChangeText={(text) => setSearchTerm(text)}
                // onChange={()=>setSearchNow(!searchNow)}
                style={{color:'white', outline:'none', marginLeft:10}}
              />
            </View>
            <View style={styles.input2}>
              <MaterialIcons
                  name={'search'}
                  size={20}
                  color="white"
                  style={{ alignSelf: 'center', marginHorizontal: 20 }}
                />
                </View>
          </View>
        </View>
        <FlatList
          numColumns={3}
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => '_' + item.id}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={1}
        />
        <View>
          <TouchableOpacity style={styles.newNoteButton}  onPress={() => {
            navigation.navigate('WatchScreen');}}>
              <View style={{padding: 12, width:140, borderRadius:8}}>
                <View style={{backgroundColor:'#4FCCA3', paddingVertical:6, borderRadius:20, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontSize:14}}>Watch List</Text>
                  <MaterialIcons name={'bookmark'} size={32} color={'black'}/>
                </View>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default movies;
