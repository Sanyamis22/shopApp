import {StyleSheet, Text, View, Image, ScrollView, FlatList, Pressable} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../redux/actions/productAction';
import {fetchProductCategories} from '../redux/actions/productCategorieAction';


const ProductCategories = ({navigation}) => {
  
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const Categories = useSelector(state => state.ProductCategories);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductCategories());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.productContainer}>
       <Pressable onPress={() =>
            navigation.navigate('ProductDetails', {
              id: item.id,
            })
          } >
        <Image
          resizeMode={'center'}
          style={styles.img}
          source={{uri: item.image}}
        />
        </Pressable>

        <Pressable onPress={() =>
            navigation.navigate('ProductDetails', {
              id: item.id,
            })
          }>
        <Text numberOfLines={3} style={styles.title}>
          {item.title}
        </Text>
        </Pressable>
        
        <Pressable onPress={() =>
            navigation.navigate('ProductDetails', {
              id: item.id,
            })
          }>
        <Text numberOfLines={2} style={styles.desc}>
          {item.description}
        </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate('ProductDetails', {
              id: item.id,
            })
          }
          style={{color: '#000'}}>
          <Text> View Details </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.heading}> Categories </Text>
      <ScrollView horizontal={true} >
        <View style={styles.categoriesContainer}>
          <View style={styles.storycaption}>
          <Pressable>
            <Image
              style={styles.story}
              source={require('./../assets/womens.png')}
            />
            {Categories.heading}
            </Pressable>
          </View>

          <View style={styles.storycaption}>
          <Pressable>
            <Image
              style={styles.story}
              source={require('./../assets/mens.png')}
            />
            <Text style={styles.text}> Mens</Text>
            </Pressable>
          </View>

          <View style={styles.storycaption}>
          <Pressable>
            <Image
              style={styles.story}
              source={require('./../assets/tv.png')}
            />
            <Text style={styles.text}> Electronics </Text>
            </Pressable>
          </View>
          <View style={styles.storycaption} >
          <Pressable>
          <Image
              style={styles.story}
              source={require('./../assets/on.png')}
            />
            <Text style={styles.text}> Jwellery </Text>
            </Pressable>

          </View>
        </View>
      </ScrollView>

      <Text style={styles.Heading2}> Products </Text>
      <View style={styles.container2}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
     
    </View>
  );
};

return (
  <View>
  <FlatList
    data={Categories}
    horizontal={1}
    renderItem={renderItem}
    keyExtractor={item = item.id}
    />
  </View> 
)

export default ProductCategories;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#dcdcdc'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    marginTop: 60,
    color: 'black',
  },
  story: {
    height: 110,
    width: 110,
    borderRadius: 100,
    // flexDirection: "row",
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    paddingTop: 10,
    borderColor: 'black',
    textShadowRadius: 10,
    resizeMode: 'center',
    paddingLeft: 10,
  },

  categoriesContainer: {
    flexDirection: 'row',
    // backgroundColor: "aliceblue",
    paddingTop: 20,
    paddingLeft: 10,
  },
  text: {
    flexDirection: 'column',
    fontWeight: 'bold',
    paddingLeft: 25,
  },
  storycaption: {
    flexDirection: 'column',
  },
  allproduct: {
    flex: 7,
  },
  Heading2: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    // marginTop: 60,
    color: 'black',
  },
  img: {
    height: 200,
    width : 200,
    resizeMode: 'center',
    borderRadius: 2,

    width: 140,
    height: 240,
    marginBottom: 5,
    resizeMode: 'center',
   
  },
  productContainer: {
    
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 10,
    
    // padding: 40,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
   // borderWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  desc: {
    color: '#a1a1a1',
    marginBottom: 5,
    fontSize: 12,
  },
  container2 :{
    flex: 8,
    
  }
});



screenContainer: {
    
  // backgroundColor: '#dcdcdc',
 },
 heading: {
   fontWeight: 'bold',
   fontSize: 30,
   textAlign: 'left',
   marginTop: 60,
   color: 'black',
 },
 story: {
   height: 110,
   width: 110,
   borderRadius: 100,
   // flexDirection: "row",
   flexDirection: 'row',
   flexWrap: 'wrap',
   alignContent: 'space-around',
   paddingTop: 10,
   borderColor: 'black',
   textShadowRadius: 10,
   resizeMode: 'center',
   paddingLeft: 10,
 },

 categoriesContainer: {
   flexDirection: 'row',
   // backgroundColor: "aliceblue",
   paddingTop: 20,
   paddingLeft: 10,
 },
 text: {
   flexDirection: 'column',
   fontWeight: 'bold',
   paddingLeft: 25,
 },
 storycaption: {
   flexDirection: 'column',
 },
 allproduct: {
   
 },
 Heading2: {
   fontWeight: 'bold',
   fontSize: 30,
   textAlign: 'left',
   // marginTop: 60,
   color: 'black',
 },
 img: {
   height: 200,
   width: 200,
   resizeMode: 'center',
   borderRadius: 2,

   width: 140,
   height: 240,
   marginBottom: 5,
   resizeMode: 'center',
 },
 productContainer: {
   backgroundColor: 'white',
   padding: 10,
   flex: 2,
   alignItems: 'center',
   justifyContent: 'center',
   margin: 4,
   borderRadius: 10,

   
 },
 title: {
   fontWeight: 'bold',
   marginBottom: 5,
   color: 'black',
 },
 desc: {
   color: '#a1a1a1',
   marginBottom: 5,
   fontSize: 12,
 },
 container2: {
   flex: 8,
 },
 Container: {},
 categoryContainer:{
   padding:10,
   flex : 1,
   backgroundColor: 'red',
 },
 mainContainer: {
   //flex: 1,
   backgroundColor: 'grey',
 }
