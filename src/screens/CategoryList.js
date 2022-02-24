import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {fetchCategoryListAction} from '../redux/actions/CategoryListAction';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProductsCard from '../components/molecule/ProductsCard';

const CategoryList = ({route, navigation}) => {
  const {categoryName} = route.params;

  const dispatch = useDispatch();

  const {products, isFetching} = useSelector(state => state.CategoryList);
  console.log('CategoryList==>', CategoryList);

  useEffect(() => {
    dispatch(fetchCategoryListAction(categoryName));
  }, []);

  const _renderLoader = () =>
    isFetching ? <ActivityIndicator size="large" color="#333" /> : null;
    
  const _renderHeader = () => (
    <View>
      <Text style={styles.heading}> {categoryName} </Text>
    </View>
  );
  const _renderProductItem = ({item}) => {
    return  <ProductsCard navigation={navigation} item={item} />;
     
     
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
          
        />
      </View>
    </View>
  );
};

export default CategoryList;

const styles = EStyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 20,
    color: '$extraDark',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    marginTop: 10,
    color: '$extraDark',
    paddingBottom: 10,
  },

  img: {
    width: 140,
    height: 140,
    marginBottom: 10,
    borderRadius: 10,
    
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 16,
    color: '$extraDark',
    //padding: 10,
  },
  desc: {
    color: '$Dark',
    marginBottom: 6,
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
    backgroundColor: '$lightDark',
    padding: 10,
    flexDirection: 'column',
    //   //flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 10,
    paddingTop: 20,
  },
  Container: {
    flex: 1,
    backgroundColor: '$light'
  },
  viewDetails :{
    color: '$light',
    alignItems: 'center',

  },
  viewBttn: {
    padding: 10,
    backgroundColor: '$extraDark',
    borderRadius: 10,
    width: '100%',
    marginVertical: 10,
    alignSelf: 'center',
  },
});
