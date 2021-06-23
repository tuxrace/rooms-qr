import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import axios from 'axios';
import strings from '../../strings';
import {ROOMS_URL} from '../../config';

const List = props => {
  const {date, time} = props;
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(false);

  const getData = async () => {
    const {data: resData} = await axios.get(ROOMS_URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    setData(resData);
  };

  useEffect(() => {
    getData();
  }, [date, time]);

  const getAvailability = (availability, timeVal) => {
    const time = new Date(timeVal);
    const hour = ('0' + time.getHours().toString()).slice(-2);
    const min = ('0' + time.getMinutes().toString()).slice(-2);
    const timeStr = `${hour}:${min}`;
    return availability[timeStr] === '1';
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: 'lightgrey',
          margin: 8,
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderRadius: 4,
        }}>
        <View>
          <Text>{item.name}</Text>
          <Text>{`Level ${item.level}`}</Text>
        </View>
        <View>
          <Text>{getAvailability(item.availability, time) ? 'Yes' : 'No'}</Text>
          <Text>{`${item.capacity}`}</Text>
        </View>
      </View>
    );
  };

  const handleSort = () => {
    setSortAsc(!sortAsc)
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{padding: 8}}>{strings.rooms}</Text>
        <Button icon="sort" onPress={handleSort} />
      </View>
      <FlatList
        data={data.sort((a, b) => {
          if (sortAsc) {
            return parseFloat(a.capacity) - parseFloat(b.capacity);
          }
          return parseFloat(b.capacity) - parseFloat(a.capacity);
        })}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default List;
