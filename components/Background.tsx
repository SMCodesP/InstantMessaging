import React, {memo} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Background = ({children}: Props) => (
  <TouchableWithoutFeedback
    touchSoundDisabled={true}
    onPress={Keyboard.dismiss}>
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
