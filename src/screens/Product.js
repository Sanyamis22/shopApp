import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
  
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../redux/actions/productAction';
import {fetchCategoryAction} from '../redux/actions/productCategorieAction';
//import {fetchCategoryList} from '../redux/actions/CategoryListAction';


const Product = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, isFetching} = useSelector(state => state.products);
  const categories = useSelector(state => state.ProductCategories);
  //const categoryType = useSelector(state => state.CategoryList)
  

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategoryAction());
    //dispatch(fetchCategoryList());
  }, []);

  const _renderCategoryItem = ({item}) => {
   //console.log('data => ', data)
    return (
      <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('CategoryList',{
        categoryName: item
       // categoryType : item
      })}>
        <Image style={styles.story} source={require('./../assets/tv.png')} />
        <View style={styles.categoriesContainer}>
          <Text>{item}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderLoader = () =>
    isFetching ? <ActivityIndicator size="large" color="#333" /> : null;
  const _renderHeader = () => (
    <View>
      <Text style={styles.heading}> Categories </Text>
      <FlatList
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={_renderCategoryItem}
        keyExtractor={data => data}
      />
      <Text style={styles.heading}> Product </Text>
    </View>
  );

  const _renderProductItem = ({item}) => {
    return (
      <View style={styles.Container2}>
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
    );
  };

  return (
    <View style={styles.Container}>
      <View style={styles.productContainer}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={_renderProductItem}
          keyExtractor={item => item.id}
          ListFooterComponent={_renderLoader}
          ListHeaderComponent={_renderHeader}
          initialNumToRender={10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    fontSize: 20,
    padding: 10,
  },

  img: {
    width: 140,
    height: 240,
    marginBottom: 5,
    resizeMode: 'center',
  },
  productContainer: {
    paddingTop: 20,
    marginBottom: 50,
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
  categoriesContainer: {
    flexDirection: 'row',
    paddingLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  Container: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    marginTop: 20,
    color: 'black',
  },
  story: {
    height: 110,
    width: 110,
    borderRadius: 100,
    flexDirection: 'row',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    paddingTop: 10,
    borderColor: 'black',
    textShadowRadius: 10,
    resizeMode: 'center',
    paddingLeft: 10,
  },
  cate: {
    flexDirection: 'row',
    // backgroundColor: "aliceblue",
    paddingTop: 20,
    paddingLeft: 10,
  },
  Container2: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'column',
    //flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 10,
    paddingTop: 10,
  },
});

export default Product;
