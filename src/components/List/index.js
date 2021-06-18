import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';
import strings from '../../strings';

const List = props => {
  const {date, time} = props;
  const [data, setData] = useState([]);
  const getData = async () => {
    const {data: resData} = await axios.get(
      'https://gist.githubusercontent.com/yuhong90/7ff8d4ebad6f759fcc10cc6abdda85cf/raw/463627e7d2c7ac31070ef409d29ed3439f7406f6/room-availability.json',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    // console.log(resData);
    setData(resData);
  };

  useEffect(() => {
    getData();
  }, [date, time]);


  const getAvailability = (availability, timeVal) => {
    console.log('test', timeVal, availability)
    const time = new Date(timeVal)
    const hour = ('0' + time.getHours().toString()).slice(-2)
    const min = ('0' + time.getMinutes().toString()).slice(-2)
    const timeStr = `${hour}:${min}`
    console.log('bool', timeStr, availability[timeStr] === '1');
    return availability[timeStr] === '1';
  }

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: 'lightgrey',
          margin: 8,
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderRadius: 4
        }}>
        <View>
          <Text>{item.name}</Text>
          <Text>{`Level ${item.level}`}</Text>
        </View>
        <View>
          <Text>{getAvailability(item.availability, time) ? 'Yes' : 'No' }</Text>
          <Text>{`${item.capacity}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={{padding: 8}}>{strings.rooms}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default List;
