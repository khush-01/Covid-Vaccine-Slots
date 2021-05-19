import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

class SearchPincode extends React.Component {
  state = {
    pinCode: null,
    date: null,
    locations: [],
  };

  handlePinCode = value => {
    this.setState({
      pinCode: value,
    });
  };

  submit = async() => {
    await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.state.pinCode}&date=${this.state.date}`,
      {
        method: 'GET',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(response => {
        this.setState({
          locations: response['sessions'],
        });
      })
      .catch(error => {
        console.log(error);
      });

      this.props.navigation.navigate('results', {
        locations: this.state.locations
      })
  };

  render() {
    return (
      <View style={styles.page}>
        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholder="Enter the Pincode"
            keyboardType={'number-pad'}
            style={styles.inputField}
            onChangeText={this.handlePinCode}
          />
          <DatePicker
            style={{width: 250}}
            date={this.state.date}
            mode="date"
            placeholder="Select Date"
            format="DD-MM-YYYY"
            minDate="01-01-2021"
            maxDate="31-12-2022"
            confirmBtnText="Ok"
            cancelBtnText="Cancel"
            onDateChange={date => {
              this.setState({date: date});
            }}
          />
          <TouchableOpacity style={styles.homeButton} onPress={this.submit}>
            <Text style={styles.button}>Get the Centers</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default SearchPincode;
