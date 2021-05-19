import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

function SearchDistrict({navigation, route}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [districts, setDistricts] = useState([]);
  
  const [date, setDate] = useState();
  const [locations, setLocations] = useState([]);

  useEffect(function effectFunction() {
    async function fetchFunction() { 
      await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${route.params.state}`,
        {
          method: 'GET',
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
          },
        },
      )
      .then(res => res.json())
      .then(response => {
          setDistricts(response['districts'])
        })
        .catch(error => {
          console.log(error);
        });
    }
    fetchFunction();
  }, [])

  const submit = () => {
    async function fetchResults() {
      await fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${value}&date=${date}`,
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
          setLocations(response['sessions'])
        })
      .catch(error => {
          console.log(error);
        });
    }

    fetchResults();

    navigation.navigate('results', {
      locations: locations
    })
  };

  return (
    <View style={styles.page}>
      <DropDownPicker
        open = {open}
        value={value}
        items={districts.map(val => ({label: val.district_name, value: val.district_id}))}
        setOpen={setOpen}
        setValue={setValue}
        maxHeight={500}
        placeholder={'Select a District'}
        containerStyle={styles.dropdown}
      />
      <DatePicker
        style={styles.datePick}
        date={date}
        mode="date"
        placeholder="Select Date"
        format="DD-MM-YYYY"
        minDate="01-01-2021"
        maxDate="31-12-2022"
        confirmBtnText="Ok"
        cancelBtnText="Cancel"
        onDateChange={date => setDate(date)}
      />
      <TouchableOpacity style={styles.homeButton} onPress={submit}>
        <Text style={styles.button}>Get Centers</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchDistrict;
