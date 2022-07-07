import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useEffect} from 'react';
import ProductsCard from '../components/molecule/ProductsCard';

const Favorite = ({}) => {
  // const {favoriteProducts  } = route.params;
  const dispatch = useDispatch();

  const {favoriteProducts} = useSelector(state => state.Favorite);

  // useEffect(() => {
  //   dispatch(favoriteItems());
  // }, []);

  const _renderHeader = () => (
    <View>
      <Text style={styles.heading}> Favorite </Text>
    </View>
  );

  const _renderProductItem = ({item}) => (
    <ProductsCard  item={item} />
  );

  return (
    <View style={styles.Container}>
      {console.log('favoriteProducts', favoriteProducts)}
      <View style={styles.productContainer}>
        <FlatList
          data={favoriteProducts}
          numColumns={2}
          renderItem={_renderProductItem}
          keyExtractor={item => item.id}
          //ListFooterComponent={_renderLoader}
          ListHeaderComponent={_renderHeader}
        />
      </View>
    </View>
  );
};

export default Favorite;

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
    backgroundColor: '$light',
  },
  viewDetails: {
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
