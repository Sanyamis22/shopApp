import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../redux/actions/productAction';
import {fetchProductCategories} from '../redux/actions/productCategorieAction';

const Product = ({navigation}) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const Categories = useSelector(state => state.Categories);

  useEffect(() => {
    dispatch(fetchProducts());
    //dispatch(fetchProductCategories());

  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        
     
      <View style={styles.productContainer}>
      
        <View style={styles.allProduct}>
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
      </View>
       </View>
      
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '',
  },
  productContainer: {
    // padding: 10,
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
  img: {
    width: 70,
    height: 70,
    marginBottom: 5,
    resizeMode: 'center',
  },
  Desc1: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
  },
  img1: {
    height: 300,
    width: 300,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'center',
  },

  container2: {
    backgroundColor: '#808080',
    flex: 2,
    padding: 10,
    margin: 30,
    borderRadius: 10,
    borderColor: 'black',
  },
  title1: {
    fontSize: 20,
    padding: 20,
    alignSelf: 'center',
    color: 'black',
  },
  txt: {
    height: 20,
    width: 50,
    backgroundColor: '#696969',
    alignSelf: 'center',
    color: 'black',
    marginTop: 20,
    border: 10,
  },
  allProduct : {

  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    marginTop: 60,
    color: 'black',
  },
  mainContainer: {
    backgroundColor: 'white',
    padding: 10,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 10,
  }
});
