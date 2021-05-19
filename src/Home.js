import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.navigate('pincode')}>
          <Text style={styles.button}>Search by Pincode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton} onPress={() => this.props.navigation.navigate('state')}>
          <Text style={styles.button}>Search by District</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home;
