import React, { useState } from 'react';
import {ScrollView, View, SafeAreaView, Text, Image} from 'react-native';
import Header from '../components/Header';
import List from '../components/List';
import TimeSelect from '../components/TimeSelect';
import DateSelect from '../components/DateSelect';
import strings from '../strings';
import styles from './styles';

const Main = () => {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState(null)

  return (
    <View style={styles.container}>
      <View>
        <Header
          titleComponent={strings.title}
        />
        <DateSelect onChange={(ev, val) => setDate(val)} value={date} />
        <TimeSelect onChange={(ev, val) => setTime(val)} value={time} />
      </View>
      <List time={time}/>
    </View>
  );
};

export default Main;
