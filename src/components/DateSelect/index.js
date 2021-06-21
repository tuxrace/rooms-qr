import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

const DateSelect = props => {
  const {onChange, value} = props
  return (
    <View
      style={styles.container}>
      <View style={{marginRight: 24}}>
        <Text>Date</Text>
      </View>
      <View style={{flex: 1}}>
        <DateTimePicker
          testID="dateTimePicker"
          value={value ?? new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>
    </View>
  );
};

export default DateSelect;
