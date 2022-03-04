import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import {SearchBar} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../redux/actions/productAction';
import {fetchCategoryAction} from '../redux/actions/productCategorieAction';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProductsCard from '../components/molecule/ProductsCard';


const Product = ({navigation}) => {
  const dispatch = useDispatch();
  const {products, isFetching} = useSelector(state => state.products);
  const categories = useSelector(state => state.ProductCategories);
  const [productsFromState, setData]= useState (products);
 

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

  const searchName = (input) => {
    let products = productsFromState;
    let searchData = products.filter((item) => {
      return item.title.toLowerCase().includes(input.toLowerCase())

    });

  setData(searchData)

  }

  const _renderLoader = () =>
    isFetching ? <ActivityIndicator size="large" color="#333" /> : null;
  const _renderHeader = () => (
    <View>
      <View style={styles.view}>
        {/* <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
          /> */}
        <Image
          style={styles.search}
          source={require('./../assets/search.png')}
        />
        <TextInput 
        placeholder="search here..." 
          onChangeText={(input)=>{
            searchName(input)

          }}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <Image style={styles.fav} source={require('./../assets/fav.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AddtoCart')}>
          <Image style={styles.bag} source={require('./../assets/bag.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.Profile}
            source={require('./../assets/profile.png')}
          />
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
          data={productsFromState}
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
    width: 30,
    height: 30,
    marginTop: 7,
    //marginLeft: 100,
  },
  addedCart: {
    flexDirection: 'row',
  },
  fav: {
    width: 30,
    height: 30,
    marginTop: 7,
    marginLeft: 140,
  },
  bag: {
    width: 40,
    height: 40,
    //marginTop: 1,
  },
  view: {
    //margin: 10,
    width: '65%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 10,
    flexDirection : 'row',
    borderWidth : 2,
    borderColor : '$lightDark',


  },
  // SearchInput: {
  //   width: '100%',
  //   height: '100%',
  //   paddingLeft: 8,
  //   fontSize: 16,

  // },
  search : {
    width: 45,
    height: 45,
    marginTop: 3,
  },
});


