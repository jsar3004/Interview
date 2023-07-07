import React from 'react';
import {View, Text, SafeAreaView, StatusBar,FlatList, ScrollView, TouchableOpacity,Image} from 'react-native';
import {styles} from './Invoicestyles.js';
export default function Invoice({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex:1}}>
                
            <View style={styles.header}>
          <View style={{marginTop:20,flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/back.png')} style={styles.iconleft} />
          </TouchableOpacity>
          <Text style={styles.headerheading}>Invoice</Text>
          <Image source={require('../../assets/user.png')} style={styles.iconright} />
          </View>
        </View>
        
        <View style={styles.firstcontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.innercontainer}>
            <Text style={styles.sideheading}>Details</Text>
            <View style={styles.box}>
                <Text style={styles.text}>No.#10</Text>
                <Text style={[styles.text,styles.text1]}>Mar 02, 2023</Text>
                <Text style={styles.text}>Due on Mar 09,2023</Text>
            </View>
            </View>
            <View style={styles.innercontainer}>
            <Text style={styles.sideheading}>Client</Text>
            <View style={styles.box1}>
            <Image source={require('../../assets/Group.png')} style={styles.actionicon} />
            <Text style={styles.addtext}>+ Add client details</Text>
            </View>
            </View>
            <View style={styles.innercontainer}>
            <Text style={styles.sideheading}>Items</Text>
            <View style={styles.box1}>
                <View style={styles.icon}>
            <Image source={require('../../assets/Mask.png')}  />
            </View>
            <Text style={styles.addtext}>+ Add Items</Text>
            </View>
            </View>
            <View style={styles.innercontainer}>
            <Text style={styles.sideheading}>Total</Text>
            <View style={[styles.box1,{flexDirection:'column'}]}>
                <View style={{flexDirection:'row',width:'100%',marginVertical:10}}>
            <Text style={styles.addtext}>Subtotal</Text>
            <Text style={{marginLeft:'auto',marginRight:20}}>₹0.0</Text>
            </View>
            <View style={{flexDirection:'row',width:'100%',marginVertical:10}}>
            <Text style={styles.addtext}>Tax</Text>
            <Text style={{marginLeft:'auto',marginRight:20}}>₹0.0</Text>
            </View>
            <View style={{flexDirection:'row',width:'100%',borderTopWidth:2,borderTopColor:'#E3F2FF',paddingTop:10}}>
            <Text style={styles.addtext}>Total</Text>
            <Text style={{marginLeft:'auto',marginRight:20}}>₹0.0</Text>
            </View>
            </View>
            </View>
            <View style={styles.innercontainer}>
            <Text style={styles.sideheading}>Note</Text>
            <View style={styles.box1}>
            <Image source={require('../../assets/note.png')} style={styles.actionicon} />
            <Text style={styles.addtext}>+ Add note</Text>
            </View>
            </View>
            <View style={styles.innercontainer}>
            <Text style={styles.sideheading}>Signature</Text>
            <View style={styles.box1}>
            <Image source={require('../../assets/signature.png')} style={styles.actionicon} />
            <Text style={styles.addtext}>+ Add client details</Text>
            </View>
            </View>
            
            <View style={styles.innercontainer}>
            <Text style={styles.sideheading}>Photo</Text>
            <View style={styles.box1}>
            <Image source={require('../../assets/photo.png')} style={styles.actionicon} />
            <Text style={styles.addtext}>+ Add photo</Text>
            </View>
            <View style={styles.buttoncontainer}>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttontext}>Save</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.button,{backgroundColor:'white'}]}>
<Text style={[styles.buttontext,{color:'#1C85E8'}]}>Share</Text>
</TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        </View>
       
            </View>
        </SafeAreaView>
    )
}
