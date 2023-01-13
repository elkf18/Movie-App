import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  TextInput,
} from 'react-native';
import BackButton from '../Components/GoBackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from '@expo/vector-icons';
import axios from 'axios';
import styles from '../screens/styles';

const Watchlist = ({navigation}) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(['']);
  const [searchFilter, setSearchFilter] = useState([]);

  const getDatabase = async () => {
    try {
      let value = await AsyncStorage.getItem('@dbMovie');
      value = JSON.parse(value);
      if (value !== null) {
        setData(value);
        setSearchFilter(value);
      } else {
        console.log('empty');
      }
    } catch (err) {
      console.log('Get Data Error', err);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={{marginHorizontal: 5, marginVertical: 5}}>
          {console.log('sukses: ' + item.title)}
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

  

  const fungsicari = text => {
    if (text) {
      const newData = data.filter(item => {
        const dataItem = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return dataItem.indexOf(textData) > -1;
      });
      setSearchFilter(newData);
      setSearchTerm(text);
    } else {
      setSearchFilter(data);
      setSearchTerm(text);
    }
  };

  useEffect(() => {
    getDatabase();
    return () => {};
  }, []);

  return (
    <>
      <View style={{ backgroundColor: '#212121',paddingBottom:300}}>
        <View style={{flexDirection: 'row'}}>
        <BackButton navigation={navigation} />
          <View style={styles.input}>
            <TextInput
              placeholder={'search movies'}
              onChangeText={text => {
                fungsicari(text);
              }}
              value={searchTerm}
              style={{color:'white',outline:'none',marginLeft:10}}
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
        <FlatList
          data={searchFilter}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={item => '' + item.id}
        />
        
      </View>
    </>
  );
};

export default Watchlist;
