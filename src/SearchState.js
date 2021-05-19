import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

function SearchState({navigation}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [states, setStates] = useState([]);

  useEffect(function effectFunction() {
    async function fetchFunction() { 
      await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`,
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
          setStates(response['states'])
        })
        .catch(error => {
          console.log(error);
        });
    }
    fetchFunction();
  }, [])

  return (
    <View style={styles.page}>
      <DropDownPicker
        open = {open}
        value={value}
        items={states.map(val => ({label: val.state_name, value: val.state_id}))}
        setOpen={setOpen}
        setValue={setValue}
        maxHeight={500}
        placeholder={'Select a State'}
        containerStyle={styles.dropdown}
      />
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('district', {
        state: value
      })}>
        <Text style={styles.button}>Search State</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchState;
