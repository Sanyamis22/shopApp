import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../atom/button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {favoriteItems} from '../../redux/actions/favoriteAction';
import {cartItems} from '../../redux/actions/cartAction';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const ProductsCard = ({navigation, item}) => { 
  const dispatch = useDispatch();
  const [counter, setCounter] = useState();

  const handleButtonPress = () => {
    navigation.navigate('ProductDetails', {
      id: item.id,
    });
  };
  const handleButtonAddCart = () => {
    
    dispatch(cartItems({...item, quantity: 1}));
  };

  const handlewishlistAlert = () => {
    dispatch(favoriteItems(item));
  };


  const increment = () => {
    item.quantity+1;
  };

  const decrement = () => {
    if (counter > 0) {
       item.quantity-1;
    }
    
  };

  

  return (
    <View style={styles.Container2}>
      <Pressable
        onPress={() =>
          navigation.navigate('ProductDetails', {
            id: item.id,
          })
        }>
        <TouchableOpacity onPress={handlewishlistAlert}>
      
          <Icon  style={styles.fav} name="hearto" size={20} color="black" />
          
        </TouchableOpacity>

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
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={() =>
          navigation.navigate('ProductDetails', {
            id: item.id,
          })
        }>
        <Text numberOfLines={3} style={styles.desc}>
          {item.description}
        </Text>
      </Pressable>
      <View style={styles.qty}>
      <Text style={styles.qtyy}> Qty: </Text>
        <TouchableOpacity  onPress={increment}>
          <Text style={styles.inc}> + </Text>
        </TouchableOpacity>
        <Text style={styles.counter}> {item.quantity} </Text>
        <TouchableOpacity  onPress={decrement}>
        <Icon name="delete" size={20} color="black" />
        
        </TouchableOpacity>
      </View>

      <Button text="ADD TO CART" onPress={handleButtonAddCart} />
    </View>
  );
};

export default ProductsCard

const styles = EStyleSheet.create({
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
    color: 'extraDark',
  },
  desc: {
    color: '$Dark',
    marginBottom: 6,
    fontSize: 13,
  },
  viewBttn: {
    padding: 10,
    backgroundColor: '$extraDark',
    borderRadius: 10,
    width: '100%',
    marginVertical: 10,
  },
  viewDetails: {
    color: '$light',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fav: {
    width: 25,
    height: 25,
    //q marginTop: 1,
    marginLeft: 130,
  },
  inc: {
    fontSize: 20,
    //fontWeight: 'bold',
  },
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor : '$light',

  },
  dec: {
    fontSize: 20,
    //fontWeight: 'bold',
  },
  qty: {
    backgroundColor : '$light',

    flexDirection: "row",
    borderRadius : 5
  },
  qtyy : {
    fontSize: 20,
    fontWeight: 'bold',


  },
})
