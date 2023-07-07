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
    height: 150,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headerheading: {
    marginLeft: 'auto',
    paddingLeft: 40,
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  iconright: {
    marginRight: 25,
    marginLeft: 'auto',
    borderRadius: 25,
  },
  headercontainer: {
    marginTop: -70,

    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 15,
    shadowColor: '#BFD8FF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  headertext: {
    color: 'black',

    textAlign: 'center',
    marginVertical: 10,
    color: '#374767',
    fontWeight: '600',
  },
  headercontainer1: {
    width: '50%',

    padding: 12,
  },
  headercontainer2: {},
  innercontainer: {
    backgroundColor: '#BFD8FF',
    padding: 15,
    borderRadius: 15,
  },
  headerprice: {
    fontSize: 18,
  },
  secondcontainer: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  recenttext: {
    color: '#8F93A4',
    fontSize: 16,
  },
  recentall: {
    color: '#374767',
    fontSize: 16,
  },
  item: {
     borderWidth: 1,
    borderColor: '#E3F2FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '90%',
    padding:15,
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
    marginVertical:10,
    margin:5,
  },

  text: {
    paddingVertical: 5,
    color: '#9497A6',
  },
  status: {
    borderWidth: 1,
    borderColor: '#BFD8FF',
    borderRadius: 8,
    textAlign: 'center',
  },
  textright: {
    textAlign: 'right',
    paddingVertical: 5,
    color: '#9497A6',
  },
  button: {
    marginTop: 40,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#1C85E8',
    borderRadius: 20,
  },
  buttontext: {
    textAlign: 'center',
    paddingVertical: 15,
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  price: {
    color: '#374767',
  },
});
