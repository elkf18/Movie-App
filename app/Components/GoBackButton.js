import React from "react";
import { TouchableOpacity,View,StyleSheet,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const BackButton = ({ navigation }) => {
    return (
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.pop()}>
        <Ionicons name="md-arrow-back" size={15} color="white" />
        <Text style={{color:'white',fontSize:15}}>Back</Text>
      </TouchableOpacity>
    );
};
export default BackButton;

const styles =StyleSheet.create({
    backBtn:{
        position: 'fixed',
        left: 7,
        // top: 5,
        zIndex: 100,
        bottom: 15,
        width: 80,
        height: 35,
        backgroundColor: '#3A3F47',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    }
})

