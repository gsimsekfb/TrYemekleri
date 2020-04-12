import React, { Component } from 'react';
import { 
  StyleSheet, Text, View, TouchableOpacity, Image, SectionList, BackHandler,
  Dimensions,  
} from 'react-native';

export default class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
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
                <Text style={styles.itemTitle}>{item.key}</Text>
                <Text style={styles.itemDesc}>{item.desc}</Text>
                <Image style={styles.itemImage} width={200} source={{uri: item.image}}/>
              </TouchableOpacity>
            )
          }}
          ItemSeparatorComponent={ () => 
              <View style={{height: 6, width: '100%', backgroundColor: '#C8C8C8'}}/>
           }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: "#fff2cc"
  },  
  titleContainer:{
    backgroundColor:"#cc9900",
    padding:10
  },
  title:{
    fontSize:25,
    color:"white"
  },
  itemContainer: {    
    marginVertical: 4,
    padding: 10,
    alignItems: 'flex-start',
    // backgroundColor: '#fff2cc'
  },    
  itemImage:{
    width: '100%',
    height: 300,
    borderRadius:4,
  },  
  itemTitle: {
    textAlignVertical: 'center',
    fontSize:16,
    fontWeight:"bold",
  },  
  itemDesc: {
    textAlignVertical: 'center',
    fontSize:16,
  },
});
 
const DATA = [
  {
    title:"ADANA", 
    data:[
      {
        key:'Adana Kebab', 
        desc:'xyz asdasd asdasdsada sad asda sdas dasdasd asd asd asd asda sdas dasd asd', 
        image:"https://i.pinimg.com/originals/f5/87/a8/f587a8486a11272b8d9854d7830e95bf.jpg"
      },
      { 
        key:'yy', 
        desc:'Adana Kebab', 
        image:"https://lezzetler.com/images/yuklenen4/beypazari-guveci-145600.jpg"
      }      
    ]
  },
];