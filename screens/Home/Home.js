import React from 'react';
import {View, Text, SafeAreaView, StatusBar,FlatList, ScrollView, TouchableOpacity,Image} from 'react-native';
import {styles} from './Homestyles.js';
// import { useNavigation } from "@react-navigation/native";
export default function Home({navigation}) {
 // const navigation=useNavigation();
    const data = [
        {
          no: '10',
          date: 'Mar 02, 2023',
          status: 'Saved',
          description: 'Loreum Ipsum',
          price: 100,
          Due: 'Due in 4 days',
        },
        {
          no: '20',
          date: 'Mar 05, 2023',
          status: 'Paid',
          description: 'Dolor Sit Amet',
          price: 250,
          Due: 'Due in 1 day',
        },
        {
          no: '30',
          date: 'Mar 08, 2023',
          status: 'Pending',
          description: 'Consectetur Adipiscing',
          price: 150,
          Due: 'Due in 6 days',
        },
        {
          no: '40',
          date: 'Mar 10, 2023',
          status: 'Saved',
          description: 'Lorem Ipsum',
          price: 200,
          Due: 'Due in 8 days',
        },
      ];
      
      const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View>
          <Text style={styles.text}>No. #{item.no}</Text>
          <Text style={styles.text}>{item.date}</Text>
          <Text style={[styles.text,styles.status]}>{item.status}</Text>
          </View>
          <View>
          <Text style={styles.textright}>{item.description}</Text>
          <Text style={[styles.textright,styles.price]}>₹{item.price}</Text>
          <Text style={styles.textright}>{item.Due}</Text>
          </View>
        </View>
      );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#1C85E8" />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{marginTop:20,flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
            
          <Text style={styles.headerheading}>Invoice</Text>
          <Image source={require('../../assets/user.png')} style={styles.iconright} />
          </View>
        </View>
        <View style={styles.headercontainer}>
          <View style={styles.headercontainer1}>
            <View style={styles.innercontainer}>
              <Text style={[styles.headertext]}>Amount Raised</Text>
              <Text style={[styles.headertext,styles.headerprice]}>₹10000</Text>
            </View>
          </View>
          <View style={styles.headercontainer1}>
            <View style={[styles.innercontainer,{backgroundColor:'white'}]}>
              <Text style={styles.headertext}>Amount Paid</Text>
              <Text style={[styles.headertext,styles.headerprice]}>₹5000</Text>
            </View>
          </View>
        </View>
        <View style={styles.secondcontainer}>
            <Text style={styles.recenttext}>Recent</Text>
            <Text style={styles.recentall}>View all</Text>
        </View>
        <View style={{height:'40%'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.no}
          style={styles.list}
        />
        </ScrollView>
        </View>
        <View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Invoice")}>
        <Text style={styles.buttontext}>+ Create new invoice</Text>
      </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
