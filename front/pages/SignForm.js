import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Button } from 'react-native';
import { basicStyles } from '../assets/Styles.js'



export function SignForm() {
  const [isSignUpForm, setSignUpForm] = useState(false);
  
  return (
    <LinearGradient
    colors={['#02a1ff', '#85d2ff']}
    style={styles.formMain}>
      <View style={styles.formContainer}>

        <Text style={[basicStyles.text, basicStyles.header1]}>
            {isSignUpForm && "Регистрация" || !isSignUpForm && "Вход"}
        </Text>
        
        { isSignUpForm &&
          (<View>
            <Text style={[basicStyles.text, basicStyles.lable]}>Полное имя</Text>
            <TextInput id='nameField' style={[basicStyles.text, styles.formField]}></TextInput>
          </View>)
        }

        <View>
          <Text style={[basicStyles.text, basicStyles.lable]}>Логин</Text>
          <TextInput id='signField' style={[basicStyles.text, styles.formField]}></TextInput>
        </View>

        <View>
          <Text style={[basicStyles.text, basicStyles.lable]}>Пароль</Text>
          <TextInput id='passwordField' style={[basicStyles.text, styles.formField]} secureTextEntry={true}></TextInput>
        </View>
        
        { isSignUpForm &&
          (<View>
            <Text style={[basicStyles.text, basicStyles.lable]}>Подтверждение пароля</Text>
            <TextInput id='confirmPasswordField' style={[basicStyles.text, styles.formField]} secureTextEntry={true}></TextInput>
          </View>)
        }

        <SendFormButton isSignUpForm={isSignUpForm}/>

        <ChangeFormText formChanger={[isSignUpForm, setSignUpForm]}/>
      
      </View>
    </LinearGradient>
  );
}

function SendFormButton(props) {
  let isSignUpForm = props.isSignUpForm;
  const [isPressed, setPressed] = useState(false);

  return (
    <Pressable
      id='formSendButton'
      style={[styles.formSendButton, isPressed? styles.formSendButton_active : null]}
      onPressIn={() => {
        setPressed(true);
    }} onPressOut={() =>
      {
        setPressed(false);
        if (isSignUpForm) {
          signUp();
        } else {
          signIn();
        }
      }
    }>
      <Text style={[basicStyles.text, basicStyles.buttonText]}>
        {isSignUpForm && "Зарегистрироваться" || !isSignUpForm && "Войти"}
      </Text>
    </Pressable>
  );
}

function ChangeFormText(props) {
  let isSignUpForm = props.formChanger[0];
  let setSignUpForm = props.formChanger[1];

  let [isPressed, setPressed] = useState(false);
  
  return (
    <Pressable id='formChangeButton' onPressIn={() => {
      setPressed(true);
    }} onPressOut={() => {
      setPressed(false);
      setSignUpForm(!isSignUpForm);
    }}>
      <Text style={
        [basicStyles.text,
        {textAlign: 'right'},
        isPressed? styles.formChangeText_active : styles.formChangeText]}>
        {isSignUpForm && "Уже есть аккаунт? Нажми на этот текст!" ||
        !isSignUpForm && "Еще нет аккаунтa? Нажми на этот текст!"}
      </Text>
    </Pressable>
  );
}

function signIn() {
  // todo
}

function signUp() {
  // todo
}

const styles = StyleSheet.create({
  formMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  formContainer: {
    maxWidth: '400px',
    width: '70%',
    minWidth: '300px',
  },

  formField: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },

  formSendButton: {
    backgroundColor: '#dffd5d',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  formSendButton_active: {
    backgroundColor: '#c8e353',
  },

  formChangeText: {
    color: 'white',
  },

  formChangeText_active: {
    color: 'gray',
  },
});
