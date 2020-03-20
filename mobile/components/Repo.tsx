import React from 'react';
import {View, Text, Image} from 'react-native';

const Repo = props => {
  const {name, owner, avatar} = props;
  return (
    <>
      <Image source={{uri: avatar}} style={{width: 200, height: 200}} />
      <Text>{name}</Text>
      <Text>{owner}</Text>
    </>
  );
};

export default Repo;
