import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => (
  <Image
    source={{
      uri: 'https://dummyimage.com/128x128/999999/000',
    }}
    style={styles.image}
  />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 32,
    borderRadius: 42,
  },
});

export default memo(Logo);
