import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../redux/actions/productAction';
import {fetchCategoryAction} from '../redux/actions/productCategorieAction';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProductsCard from '../components/molecule/ProductsCard';
import Icon from 'react-native-vector-icons/AntDesign';

const Product = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, isFetching} = useSelector(state => state.products);
  const categories = useSelector(state => state.ProductCategories);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategoryAction());
  }, []);

  const _renderCategoryItem = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CategoryList', {
              categoryName: item,
            })
          }>
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
      <View style={styles.view}>
        
        
        
        <TextInput
          placeholder="search here..."
          onChangeText={input => {
            searchName(input);
          }}
        />
        <Icon style={styles.search} name="search1" size={28} color="black" />

        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <Icon style={styles.fav} name="hearto" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon style={styles.bag} name="shoppingcart" size={30} color="black" />
         
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon style={styles.Profile} name="profile" size={28} color="black" />
          
        </TouchableOpacity>
      </View>
      <View style={styles.addedCart}>
        <Text style={styles.heading}> Categories </Text>
      </View>

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
    return <ProductsCard navigation={navigation} item={item} />;
  };

  return (
    <View style={styles.Container}>
      <View></View>
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

export default Product;

const styles = EStyleSheet.create({
  mainContainer: {
    fontSize: 20,
    padding: 10,
  },

  img: {
    width: 140,
    height: 140,
    marginBottom: 10,
    borderRadius: 10,
  },
  productContainer: {
    paddingTop: 20,
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 16,
    color: 'extraDark',
  },
  desc: {
    color: '$Dark',
    marginBottom: 6,
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
    backgroundColor: '$light',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    marginTop: 20,
    color: '$extraDark',
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
    backgroundColor: '$lightDark',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 10,
    paddingTop: 20,
  },
  viewDetails: {
    color: '$light',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  viewBttn: {
    padding: 10,
    backgroundColor: '$extraDark',
    borderRadius: 10,
    width: '100%',
    marginVertical: 10,
  },
  Profile: {
   padding : 3,
    marginTop: 7,
    //marginLeft: 100,
  },
  addedCart: {
    flexDirection: 'row',
  },
  fav: {
    padding: 3,
    marginTop: 7,
    marginLeft: 30,
  },
  bag: {
    marginTop: 5,
    padding: 3,
  },
  view: {
    //margin: 10,
    width: '65%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '$lightDark',
  },
  // SearchInput: {
  //   width: '100%',
  //   height: '100%',
  //   paddingLeft: 8,
  //   fontSize: 16,

  // },
  search: {
    padding: 3,
    marginTop: 4,
    marginLeft: 120,
  },
});
