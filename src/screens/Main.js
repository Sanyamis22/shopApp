import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, FlatList, Modal,TouchableOpacity} from 'react-native';
import axios from 'axios';




const Main = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setproductDetails] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com//products');
    setProducts(response.data);
  };

  const handleViewMore = (item) => {
    setproductDetails({
      img: item.image,
      title: item.title,
      Desc: item.description,
      
    })
    setShowModal(true);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <Image resizeMode={'center'} style={styles.img} source={{uri: item.image}} />
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>

        <Text numberOfLines={3} style={styles.desc}>
          {item.description}
        </Text>
        <TouchableOpacity>
          <View>
             <Text onPress={() => {handleViewMore(item)}} style={{color: '#333'}}> View details </Text>
          </View>
        </TouchableOpacity>


        

        
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
      <Modal
        animationType='slide'
        transparent={true}
        visible={showModal}>
        <View style={styles.container2}>
        {/* <Text style={styles.title}>{productDetails.title}</Text> */}
            {/* <View style={{backgroundColor:"#000000aa",flex:1}}>
            <View style={{backgroundColor:"0fffff",margin: 50, padding: 40,borderRadius:10,flex:1}}> */}

            <Image style={styles.img1} source={{uri: productDetails.img}} />
            <Text style={styles.title1}>{productDetails.title}</Text>

            <Text style={styles.Desc1}>{productDetails.Desc}</Text>

            <TouchableOpacity>
            <View>

            <Text onPress={() => {setShowModal(false)}} style={styles.txt}> Back </Text>
            </View>
            
            </TouchableOpacity>
        </View>
        {/* </View>
        </View> */}
       

        </Modal>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor:'#dcdcdc',
   
    
  },
  productContainer: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  desc: {
    color: '#a1a1a1',
    marginBottom: 5,
    fontSize:12
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
    height:300,
    width: 300,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'center',

  },
  
  
  container2: {
    backgroundColor:"#808080",
    flex:2,
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
  }
});
