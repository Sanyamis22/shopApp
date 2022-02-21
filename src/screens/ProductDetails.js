import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetailsAction} from '../redux/actions/ProductDetailAction';

const ProductDetails = ({route, navigation}) => {
  const {id} = route.params;

  const dispatch = useDispatch();

  const {productDetails, isFetching} = useSelector(
    state => state.ProductDetails,
  );
  

  useEffect(() => {
    dispatch(fetchProductDetailsAction(id));
  }, []);

  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.heading}> PRODUCT DETAILS</Text>
      </View>
     { isFetching ? <ActivityIndicator size="large" color="#333" /> : null}
      <ScrollView>
        <Image
          resizeMode={'center'}
          style={styles.img}
          source={{uri: productDetails.image}}
        />

        <Text style={styles.title}>{productDetails.title}</Text>

        <Text style={styles.desc}>{productDetails.description}</Text>
        <TouchableOpacity onPress={() => navigation.goBack('Product')}>
          <View style={styles.button}>
            <Text style={styles.text}> Back </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    font: 20,
    color: 'black',
  },
  img: {
    width: 300,
    height: 300,
    marginBottom: 5,
    resizeMode: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  heading: {
    fontSize: 35,
    color: 'black',
    alignContent: 'center',
    padding: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: 'black',
    padding: 20,
  },
  desc: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'black',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 20,
    color: 'black',
  },
  button: {
    backgroundcolor: 'red',
  },
});
