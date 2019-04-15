import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Portrait2 from '../../assets/portrait2.jpg';
import Portrait3 from '../../assets/portrait3.jpg';

const contacts = [
    {
        img: Portrait2,
        name: 'YIN YIN'
    },
    {
        img: Portrait3,
        name: 'SU LI'
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
                    <Text style={{fontSize: 30, color: '#a5a5a5', marginTop: -2.5}}>+</Text>
                </TouchableOpacity>
                <Text style={styles.blockText}>NEW</Text>
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
    width: 60,
    height: 60,
    borderRadius: 30
  },
  add: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#828282',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  blockText:{
    marginTop: 10,
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 0.25
  },
  block: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 25
  }
});