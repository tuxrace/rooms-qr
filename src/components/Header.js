import * as React from 'react';
import {Appbar} from 'react-native-paper';
import strings from '../strings';

const Header = (props) => {
  const {titleComponent} = props
  const _goBack = () => console.log('Went back');

  const handleCamera = () => console.log('Searching');

  return (
    <Appbar.Header>
      <Appbar.Content title={titleComponent} />
      <Appbar.Action icon="camera" onPress={handleCamera} />
    </Appbar.Header>
  );
};

export default Header;
