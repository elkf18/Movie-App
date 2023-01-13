import {StyleSheet} from 'react-native';

export default StyleSheet.create({
   container: {
    // flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor:'#242A32'
  },
  MovieImage: {  
    // flex:10 ,
    // marginHorizontal: 10,
        // width:window.width ,
    borderRadius:10,
    height: 80,
    width: 80,
    // height: window.height,
  },
  TextTitle:{
    fontSize:15,
    paddingHorizontal: 30,
    paddingTop: 20,
    color:'white'
  },
  inputCard: {
    position: 'absolute',
    margin: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
    
  },
  input: {
    padding: 10,
    flex: 1,
    margin: 20,
    left: 10,
    right: 5,
    flexDirection: 'row',
    backgroundColor: '#3A3F47',
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 100,
    marginBottom:10,
    width:50,
    outline:'none',
    color:'white',
  },
  input2: {
      padding: 10,
      margin: 20,
      backgroundColor: '#3A3F47',
      alignItems: 'center',
      borderRadius:20,
      zIndex: 100,
      marginBottom:10,
    },
  movieCard: {
    backgroundColor: '#212121',
    borderColor: '#212121',
    // flex:1,
    alignItems:'center',
    margin: 5,
    borderRadius:10,
    flexDirection: 'col',
    borderWidth: 5,
    width:90,
    height:140,
    
  },
  movieListCard: {
    // top: screen.height * 0.10,
  },
   newNoteButton:{
        position:'fixed',
        bottom:5,
        right:15,
  }, 

  banner: { width: window.width, height: 200},
  gambar:{
    height:120,
    width:120,
    position:'absolute',
    left:10,
    bottom:1.5,
    borderRadius:20,
  },
  container2: {
    flex:1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#212121',
    // position:'fixed',
    paddingBottom:800,

  },
  infoCard: {
    left:-10,
    top: 10,
    paddingHorizontal:15,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInfo: {
    left: 10,
    right: 10,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  description:{
    marginTop:5,
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  textTitle:{
    color:'white',
    fontWeight:'500',
    fontSize: 15,
    marginTop:10,
  },
  rating:{
    marginTop:5,
    fontSize:20,
    color: 'white',
    fontWeight: 'bold'
  },
  newNoteButton2:{
      position:'fixed',
      bottom:9,
      right:15,
      backgroundColor:'#4FCCA3', paddingVertical:4, borderRadius:10, justifyContent:'center'
    },
  textRender:{
    color: 'white', fontSize: 14 
  },
})