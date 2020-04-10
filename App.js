import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SectionList } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          renderSectionHeader={({section}) => {
            return (
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {section.title}
                </Text>
              </View>
            )
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
                <Image style={styles.itemImage} source={{uri: item.image}}/>
                <Text style={styles.itemText}>{item.key}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root:{
    marginTop:20,
    padding:10,
  },
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },  
  titleContainer:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"#DCDCDC",
    padding:10
  },
  title:{
    fontSize:25,
    color:"#000000"
  },
  itemContainer: {    
    height:90,
    margin: 4,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    // backgroundColor: 'yellow'
  },    
  itemImage:{
    width:80,
    height:80,
    borderRadius:4,
    marginLeft:20,
  },  
  itemText: {
    textAlignVertical: 'center',
    height:80,
    marginLeft: 16,    
    fontSize:16,
    fontWeight:"bold",
    // backgroundColor: 'red',
  },
});
 
const DATA = [
  {
    title:"A", 
    data:[
      {key:'Adana', image:"https://i.pinimg.com/originals/f5/87/a8/f587a8486a11272b8d9854d7830e95bf.jpg"},
      {key:'Ankara', image:"https://lezzetler.com/images/yuklenen4/beypazari-guveci-145600.jpg"},
      {key:'Aydin', image:"https://cdn.yemek.com/uploads/2016/05/keskek-aydin.jpg"},
    ]
  },
  {
    title:"B", 
    data:[
      {key:'User 1', image:"https://bootdey.com/img/Content/avatar/avatar3.png"},
      {key:'User 2', image:"https://bootdey.com/img/Content/avatar/avatar4.png"},
    ]
  },
  {
    title:"C", 
    data:[
      {key:'User 1', image:"https://bootdey.com/img/Content/avatar/avatar5.png"},
    ]
  },
  {
    title:"D", 
    data:[
      {key:'User 1', image:"https://bootdey.com/img/Content/avatar/avatar2.png"},
    ]
  },
];