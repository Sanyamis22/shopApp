import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
//import {fetchProducts} from '../redux/actions/productAction';
//import {fetchCategoryAction} from '../redux/actions/productCategorieAction';
import {fetchCategoryListAction} from '../redux/actions/CategoryListAction';

const CategoryList = ({route, navigation}) => {
  const {categoryName} = route.params;

  const dispatch = useDispatch();

  const CategoryList = useSelector(state => state.CategoryList);

  useEffect(() => {
    dispatch(fetchCategoryListAction(categoryName));
  }, []);
  const _renderHeader = () => (
    <View>
      <Text style={styles.heading}> {categoryName} </Text>
    </View>
  );
  const _renderProductItem = ({item}) => {
    return (
      <View style={styles.Container2} >
        
        <View >
        <Pressable
          onPress={() =>
            navigation.navigate('ProductDetails', {
              id: item.id,
            })
          }>
          <Image
            resizeMode={'center'}
            style={styles.img}
            source={{uri: item.image}}
          />
          </Pressable>

          <Pressable
          onPress={() =>
            navigation.navigate('ProductDetails', {
              id: item.id,
            })
          }>
          <Text numberOfLines={3} style={styles.title}>
            {item.title}
          </Text>
          </Pressable>


          <Pressable
          onPress={() =>
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

        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Text style={styles.text}> Back </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    
    <View style={styles.Container}>
      <View style={styles.productContainer}>
        <FlatList
          data={CategoryList}
          numColumns={2}
          renderItem={_renderProductItem}
          keyExtractor={item => item.id}
          //ListFooterComponent={_renderLoader}
          ListHeaderComponent={_renderHeader}
          // initialNumToRender={10}
        />
      </View>
      </View>
    
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 20,
    color: 'black',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    marginTop: 10,
    color: 'black',
    paddingBottom: 10,
  },

  img: {
    width: 140,
    height: 240,
    marginBottom: 5,
    resizeMode: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 16,
    color: 'black',
    padding: 10,
  },
  desc: {
    color: '#a1a1a1',
    marginBottom: 5,
    fontSize: 13,
  },
  productContainer: {
     paddingTop: 20,
     marginBottom: 20,
     //flex:1,
     //backgroundColor: 'red',
  },
  Container2: {
   flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
     alignItems: 'flex-start',
     backgroundColor: 'white',
     padding: 10,
     flexDirection: 'column',
  //   //flex : 1,
    alignItems: 'center',
     justifyContent: 'center',
     margin: 4,
    borderRadius: 10,
    paddingTop: 10,
    
  },
  Container: {
    flex:1,
  }
});
