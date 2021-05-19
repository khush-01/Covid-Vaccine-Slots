import { Dimensions, StyleSheet } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    height: deviceHeight,
    marginTop: deviceHeight / 6,
    width: deviceWidth
  },
  homeButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 25,
    padding: 15,
  },
  button: {
    color: 'white',
    fontSize: 20,
  },
  inputField: {
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    fontSize: 20,
    marginTop: 30,
    padding: 10,
    textAlign: 'center',
    width: deviceWidth * 0.7,
  },
  datePick: {
    marginTop: 30, 
    width: 250
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    width: 450,
  },
  dropdown: {
    marginTop: 20,
    width: deviceWidth * 0.7,
  },
  resultPage: {
    alignItems: 'center',
    height: deviceHeight - 50,
    marginTop: 50,
    width: deviceWidth
  }
})

export default styles;
