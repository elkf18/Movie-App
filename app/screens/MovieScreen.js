import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import axios from 'axios';
import styles from '../screens/styles'
import BackButton from '../Components/GoBackButton';
import AddWatchlist from '../Components/AddWatchlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeleteWatchlist from '../Components/DeleteWatchlist';

export default function Detail({navigation, route}) {
  const [data, setData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(Boolean);
  let idmovies = route.params.id;

  const API_KEY = 'c03f9dd1a0b1ae5bc3bb5b636c8d6966';

  const getDatabase = async () => {
    try {
      let value = await AsyncStorage.getItem('@dbMovie');
      value = JSON.parse(value);

      if (value !== null) {
        setSavedData(value);
        //console.log(value);
      } else {
        console.log('Kosong');
      }
      setIsLoading(false);
    } catch (err) {
      console.log('Get Data Error', err);
    }
    getData();
  };

  const getData = () => {
    //console.log(idmovies);
    console.log('get berhasil :' + idmovies);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idmovies}?api_key=${API_KEY}`,
      )
      .then(res => {
        setData(res.data);
      });
    cekData();
  };

  const add = data => {
    let currentData = savedData;
    currentData.push({
      id: data.id,
      title: data.title,
      poster_path: data.poster_path,
    });

    setSavedData({currentData});
    saveData(currentData);
  };

  const deleteData = data => {
    let currentData = savedData;
    let index = currentData.findIndex(item => item.id === idmovies);
    currentData.splice(index, 1);
    setSavedData({currentData});
    saveData(currentData);
  };

  const cekData = () => {
    if (savedData !== null) {
      for (let i = 0; i < savedData.length; i++) {
        if (savedData[i].id === idmovies) {
          setIsAdded(true);
          break;
        } else {
          setIsAdded(false);
        }
      }
    } else {
      setIsAdded(false);
    }
  };

  const saveData = async data => {
    try {
      await AsyncStorage.setItem('@dbMovie', JSON.stringify(data));
      setIsLoading(true);
      console.log('save data berhasil :' + data);
    } catch (err) {
      console.log('Save Error', err);
    }
  };

  useEffect(() => {
    isLoading ? getDatabase() : null;
  });

  return (
    <View style={styles.container2}>
      <BackButton navigation={navigation} />
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w780/${data.backdrop_path}`}}
        style={styles.banner}
      />
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w780/${data.poster_path}`}}
          style={styles.gambar}
        />
      </View>
      <View style={styles.infoCard}>
        <View style={styles.textInfo}>
          <Text style={styles.title}>{data.original_title}</Text>
          <Text style={styles.description}>About Movie :</Text>
          <Text style={styles.textTitle}>Overviews</Text>
          <Text style={styles.textRender}>Overview
            {data.overview}
          </Text>
          <Text style={styles.textTitle}>Release Date</Text>
          <Text style={styles.textRender}>
            {data.release_date}
          </Text>
          <Text style={styles.textTitle}>Average Rating</Text>
          <Text style={styles.textRender}>
            {data.vote_average}
          </Text>
          <Text style={styles.textTitle}>Rate Count</Text>
           <Text style={styles.textRender}>
            {data.vote_count}
          </Text>
          <Text style={styles.textTitle}>Popularity</Text>
          <Text style={styles.textRender}>
            {data.popularity}
          </Text>
        </View> 
      </View>
      <View style={{padding: 8, borderRadius:5}}>
        <TouchableOpacity
          style={styles.newNoteButton2}
          onPress={() => {
            isAdded ? deleteData(data) : add(data);
          }}>
          {isAdded ? <DeleteWatchlist /> : <AddWatchlist />}
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
