import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {theme} from '../core/theme';
import {View} from 'react-native';
import {rgba, lighten} from 'polished';

interface ButtonProps extends RectButtonProps {
  mode: 'text' | 'outlined' | 'contained' | undefined;
  children: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  mode,
  style,
  children,
  loading = false,
  ...props
}) => (
  <RectButton
    style={[
      styles.button,
      mode === 'outlined'
        ? {backgroundColor: theme.colors.background}
        : {backgroundColor: theme.colors.primary},
      style,
    ]}
    rippleColor={lighten(0.3, theme.colors.primary)}
    {...props}>
    <PaperButton
      style={{
        borderWidth: 2,
        backgroundColor:
          mode === 'outlined' ? theme.colors.background : theme.colors.primary,
      }}
      labelStyle={styles.text}
      mode={mode}
      loading={loading}>
      {children}
    </PaperButton>
  </RectButton>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    borderRadius: theme.roundness,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});

export default memo(Button);
