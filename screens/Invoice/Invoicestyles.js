import {StyleSheet} from 'react-native';
import {font} from '@/theme/font';
import {spacing} from '@/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    backgroundColor: '#1C85E8',
    paddingBottom:20,

  },
  headerheading: {
   marginLeft:'auto',
   
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  iconright:{
    marginRight:25,
    marginLeft:'auto',
    borderRadius:25,
  },
  iconleft:{
    marginLeft:25,
  },
  firstcontainer:{
    padding:25,
    paddingBottom:100,
  },
  sideheading:{
    color:'#8F93A4',
   fontSize:17,
   fontWeight:'700',
  },
  box:{
   marginTop:15,
   padding:10,
   
   borderRadius: 15,
   borderWidth: 2,
   borderColor: '#E3F2FF',
   borderWidth: 1,
   borderColor: '#E3F2FF',

 
   backgroundColor:'white',
   borderRadius:10,
   shadowColor: '#000',
   shadowOffset: {
     width: 0,
     height: 0,
   },
   shadowOpacity: 0.2,
   shadowRadius: 3,
   elevation: 3,
  
   
  
  },
  innercontainer:{
 
    padding:10,
    
  },
  text:{
    paddingVertical:5,
    color:'#374767',
  },
  text1:{
    fontSize:16,
    fontWeight:'700',
  },
  box1:{
   paddingVertical:15,
   
    marginVertical:10,
    borderRadius:15,
    borderWidth: 1,
    borderColor: '#E3F2FF',
   
   
  
    padding:5,
    backgroundColor:'white',
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    margin:5,
   flexDirection:'row',
},
addtext:{
    textAlignVertical:'center',
    marginLeft:10,
    color:'#374767',
    fontWeight:'700',
},
actionicon:{
    marginLeft:10,
},
icon:{
    padding:10,
    marginLeft:10,
    backgroundColor:'#ECF3FF',
},
buttoncontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:25,
},

button:{
    width:'45%',
    paddingVertical:15,
    backgroundColor:'#1C85E8',
    borderRadius:20,
    borderColor:'#1C85E8',
    borderWidth:2,
},
buttontext:{
    textAlign:'center',
    color:'white',
    fontWeight:'800',
    fontSize:18,
}
}
);