import React, {createRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

import {theme} from '../core/theme';
import {emailValidator, nameValidator, passwordValidator} from '../core/utils';

import Background from '../components/Background';
import BackButton from '../components/BackButton';
import DefaultInput from '../components/DefaultInput';
import Logo from '../components/Logo';
import Button from '../components/Button';

const RegisterScreen: React.FC<{
  navigation: any;
}> = ({navigation}) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const [loading, setLoading] = useState(false);

  const inputEmailRef = createRef();
  const inputPasswordRef = createRef();

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
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
        Crie uma nova conta
      </Title>

      <DefaultInput
        label="Nome"
        returnKeyType="next"
        value={name.value}
        error={!!name.error}
        errorText={name.error}
        onChangeText={(text) => setName({value: text, error: ''})}
        onSubmitEditing={(e) => {
          e.preventDefault();
          (inputEmailRef.current as any).focus();
        }}
      />

      <DefaultInput
        ref={inputEmailRef}
        label="E-mail"
        returnKeyType="next"
        value={email.value}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={(text) => setEmail({value: text, error: ''})}
        onSubmitEditing={(e) => {
          e.preventDefault();
          (inputPasswordRef.current as any).focus();
        }}
      />

      <DefaultInput
        ref={inputPasswordRef}
        label="Senha"
        returnKeyType="done"
        value={password.value}
        error={!!password.error}
        errorText={password.error}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        onSubmitEditing={_onSignUpPressed}
        secureTextEntry
      />

      <Button
        mode="contained"
        loading={loading}
        onPress={_onSignUpPressed}
        style={styles.button}>
        Registrar
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Já possuí uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.disabled,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default RegisterScreen;
