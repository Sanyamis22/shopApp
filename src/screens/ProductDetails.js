import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetailsAction} from '../redux/actions/ProductDetailAction';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../components/atom/button/Button';


const ProductDetails = ({route, navigation}) => {
  const {id} = route.params;

  const dispatch = useDispatch();

  const {productDetails, isFetching} = useSelector(
    state => state.ProductDetails,
  );

  useEffect(() => {
    dispatch(fetchProductDetailsAction(id));
  }, []);

  const handleButtonAlert =() => {
    Alert.alert(
    " ADDED TO CART"
    );
  };
 const handleButtonPress = () => {
   navigation.goBack()
 }
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.heading}> PRODUCT DETAILS</Text>
      </View>
      {isFetching ? <ActivityIndicator size="large" color="#333" /> : null}
      <ScrollView style={styles.container2}>
        <Image
          resizeMode={'center'}
          style={styles.img}
          source={{uri: productDetails.image}}
        />

        <Text style={styles.title}>{productDetails.title}</Text>

        <Text style={styles.desc}>{productDetails.description}</Text>
        <Button text="ADD TO CART" onPress={handleButtonAlert}/>
        <Button text="BACK" onPress={handleButtonPress}/>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = EStyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '$light',
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
    color: '$extraDark',
    alignContent: 'center',
    padding: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    color: '$extraDark',
    padding: 20,
    textAlign: 'center',
  },
  desc: {
    fontSize: 20,
    alignSelf: 'center',
    color: '$Dark',
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 20,
    color: '$extraDark',
  },
  container2: {},
});
