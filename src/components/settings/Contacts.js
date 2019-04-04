import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Portrait2 from '../../assets/portrait2.jpg';
import Portrait3 from '../../assets/portrait3.jpg';

const contacts = [
    {
        img: Portrait2,
        name: 'Yin'
    },
    {
        img: Portrait3,
        name: 'Su'
    },
]

export default class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contacts}>
            {
                contacts.map((c, key) => 
                    <View style={styles.block} key={key}>
                        <Image style={styles.portrait} source={c.img}/> 
                        <Text style={styles.blockText}>{c.name}</Text>
                    </View>
                )
            }
            <View style={styles.block}>
                <TouchableOpacity style={styles.add}>
                    <Text style={{fontSize: 40, color: '#a5a5a5', marginTop: -2.5}}>+</Text>
                </TouchableOpacity>
                <Text style={styles.blockText}>New</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contacts: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  portrait:{
    width: 70,
    height: 70,
    borderRadius: 35
  },
  add: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blockText:{
    marginTop: 5,
    textAlign: 'center'
  },
  block: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 25
  }
});