import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

import {theme} from '../core/theme';
import {nameValidator, passwordValidator} from '../core/utils';

import Background from '../components/Background';
import BackButton from '../components/BackButton';
import DefaultInput from '../components/DefaultInput';
import Logo from '../components/Logo';
import Button from '../components/Button';

const LoginScreen: React.FC<{
  navigation: any;
}> = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [loading, setLoading] = useState(false);

  const inputPasswordRef = useRef(null);

  const _onLoginPressed = () => {
    const nameError = nameValidator(name.value);
    const passwordError = passwordValidator(password.value);

    if (nameError || passwordError) {
      setName({...name, error: nameError});
      setPassword({...password, error: passwordError});
      return;
    }

    setLoading(true);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Welcome')} />

      <Logo />

      <Title
        style={{
          fontSize: 26,
          color: theme.colors.primary,
          fontWeight: 'bold',
          paddingVertical: 14,
        }}>
        Bem-vindo de volta!
      </Title>

      <DefaultInput
        label="Nome"
        returnKeyType="next"
        value={name.value}
        error={!!name.error}
        errorText={name.error}
        autoCapitalize="none"
        autoCompleteType="name"
        textContentType="nickname"
        onChangeText={(text) => setName({value: text, error: ''})}
        onSubmitEditing={(e) => {
          e.preventDefault();
          (inputPasswordRef.current as any).focus();
        }}
      />

      <DefaultInput
        ref={inputPasswordRef}
        label="Senha"
        returnKeyType="join"
        value={password.value}
        error={!!password.error}
        errorText={password.error}
        textContentType="password"
        onChangeText={(text) => setPassword({value: text, error: ''})}
        onSubmitEditing={_onLoginPressed}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.label}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" loading={loading} onPress={_onLoginPressed}>
        Acessar
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Não possuí uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.disabled,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default LoginScreen;
