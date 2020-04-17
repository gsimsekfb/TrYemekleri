
const db = new Map([
  ['adana', {
      image:"https://i.pinimg.com/originals/f5/87/a8/f587a8486a11272b8d9854d7830e95bf.jpg",
      foods: [
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
      ],
    }
  ],
  ['ankara', {
      image:"https://lezzetler.com/images/yuklenen4/beypazari-guveci-145600.jpg",
      foods: [
        {
          key:'Beypazarı Güveci', 
          desc:'xyz asdasd asdasdsada sad asda sdas dasdasd asd asd asd asda sdas dasd asd', 
          image: require('./src/images/ankara/beypazari-guveci.jpg')
        },
        { 
          key:'Tava', 
          desc:'asdasd asdasdad adsas dasdasd asdasd asd adsa sd asdas dadsasdasdasd sadsadas dasdasd ', 
          image: require('./src/images/ankara/tava.jpg')
        }    
      ]
    }
  ],
]);
  
