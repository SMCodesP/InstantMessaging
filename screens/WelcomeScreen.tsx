import React from 'react';

import {Title, Paragraph} from 'react-native-paper';

import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import {theme} from '../core/theme';

// import { Container } from './styles';

const Welcome: React.FC<{
  navigation: any;
}> = ({navigation}) => {
  return (
    <Background>
      <Logo />

      <Title
        style={{
          fontSize: 26,
          color: theme.colors.primary,
          fontWeight: 'bold',
          paddingVertical: 14,
        }}>
        InstantMessaging
      </Title>

      <Paragraph
        style={{
          fontSize: 16,
          lineHeight: 26,
          color: theme.colors.backdrop,
          textAlign: 'center',
          marginBottom: 14,
        }}>
        Converse com seus amigos agora instantaneamente.
      </Paragraph>

      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Entrar
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
        Registrar
      </Button>
    </Background>
  );
};

export default Welcome;
