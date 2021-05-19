import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: this.props.route.params.locations
    }
  }

  render() {
    return (
      <View style={styles.resultPage}>
        {this.state.places.length === 0 ? (
          <Text style={{ fontSize: 19, fontWeight: 'bold', marginVertical: 10 }}>No Centers Found</Text>
        ) : (
          <View>
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginVertical: 10, textAlign:'center' }}>
              Available Centers
            </Text>
            <ScrollView>
              <View>
                {this.props.route.params.locations.map((location, index) => {
                  return (
                    <View key={index} style={styles.card}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{location.name}</Text>
                      <Text>{location.vaccine}</Text>
                      <Text>
                        Available Vaccines: {location.available_capacity}
                      </Text>
                      <Text>Min Age: {location.min_age_limit}</Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          )}
      </View>
    )
  }
}

export default Results;
