import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimeSelect = props => {
  const {onChange, value} = props
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex',
      }}>
      <View style={{marginRight: 24}}>
        <Text>Time</Text>
      </View>
      <View style={{flex: 1}}>
        <DateTimePicker
          testID="dateTimePicker"
          value={value ?? new Date()}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minuteInterval={30}
        />
      </View>
    </View>
  );
};

export default TimeSelect;
