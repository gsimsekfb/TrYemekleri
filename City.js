import React, { Component } from 'react';
import { 
  StyleSheet, View, Text, TouchableOpacity, Image, FlatList,
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
    // console.log('--- iii: ');
    // console.log(this.props.route.params);

    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={ () => 
            <View style={{height: 6, width: '100%', backgroundColor: '#C8C8C8'}}/>
          }
          renderItem={({item}) => 
            <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
              <Text style={styles.itemTitle}>{item.key}</Text>
              <Text style={styles.itemDesc}>{item.desc}</Text>
              <Image style={styles.itemImage} source={item.image} />
            </TouchableOpacity>          
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
    // alignItems: 'flex-start',
    // backgroundColor: '#fff2cc'
  },    
  itemImage:{
    resizeMode: 'contain',    
    width: 400,
    height: 280,
    borderRadius: 4,
    marginVertical: 4,
    // backgroundColor: 'red'
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
    key:'Adana Kebab', 
    desc:'xyz asdasd asdasdsada sad asda sdas dasdasd asd asd asd asda sdas dasd asd', 
    image: require('./src/images/adana/kebap.jpg')
  },
  { 
    key:'Kofte', 
    desc:'asdasd asdasdad adsas dasdasd asdasd asd adsa sd asdas dadsasdasdasd sadsadas dasdasd ', 
    image: require('./src/images/adana/kofte.jpg')
  }      
  // {
  //   title:"Ankara", 
  //   data:[
  //     {
  //       key:'Beypazarı Güveci', 
  //       desc:'xyz asdasd asdasdsada sad asda sdas dasdasd asd asd asd asda sdas dasd asd', 
  //       image: require('./src/images/ankara/beypazari-guveci.jpg')
  //     },
  //     { 
  //       key:'Tava', 
  //       desc:'asdasd asdasdad adsas dasdasd asdasd asd adsa sd asdas dadsasdasdasd sadsadas dasdasd ', 
  //       image: require('./src/images/ankara/tava.jpg')
  //     }      
  //   ]
  // },  
];