import * as React from 'react';
import {Appbar} from 'react-native-paper';
import strings from '../strings';

const Header = () => {
  const _goBack = () => console.log('Went back');

  const handleCamera = () => console.log('Searching');

  return (
    <Appbar.Header>
      <Appbar.Content title={strings.title} />
      <Appbar.Action icon="camera" onPress={handleCamera} />
    </Appbar.Header>
  );
};

export default Header;
