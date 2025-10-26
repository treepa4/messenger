import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { commonStyles, palette } from '../assets/CommonStyles.js';
import { Button } from '../components/Button.js';
import { PressableText } from '../components/PressableText.js';



export function SignForm(setLoggedIn) {
  const [isSignUpForm, setSignUpForm] = useState(false);
  
  return (
    <View style={commonStyles.menuMain}>
      <View style={commonStyles.menuContainer}>

        <Text style={[commonStyles.text, commonStyles.header1]}>
          {isSignUpForm? 'Регистрация' : 'Вход'}
        </Text>

        <Text style={[commonStyles.text, commonStyles.header6]}>
          {isSignUpForm? 'Заполните данные для создания аккаунта' : 'Заполните данные для входа в аккаунт'}
        </Text>
        
        { isSignUpForm &&
          (<View>
            <Text style={[commonStyles.text, commonStyles.lable]}>Полное имя</Text>
            <TextInput id='nameField' style={[commonStyles.text, styles.formField]}></TextInput>
          </View>)
        }

        <View>
          <Text style={[commonStyles.text, commonStyles.lable]}>Логин</Text>
          <TextInput id='signField' style={[commonStyles.text, styles.formField]}></TextInput>
        </View>

        <View>
          <Text style={[commonStyles.text, commonStyles.lable]}>Пароль</Text>
          <TextInput id='passwordField' style={[commonStyles.text, styles.formField]} secureTextEntry={true}></TextInput>
        </View>
        
        { isSignUpForm &&
          (<View>
            <Text style={[commonStyles.text, commonStyles.lable]}>Подтверждение пароля</Text>
            <TextInput id='confirmPasswordField' style={[commonStyles.text, styles.formField]} secureTextEntry={true}></TextInput>
          </View>)
        }

        <Button
        onPress={
          () => {
            if (isSignUpForm) {
              setLoggedIn(signUp())
            } else {
              setLoggedIn(signIn())
            }
          }
        }
        text={
          isSignUpForm? 'Зарегистрироваться' : 'Войти'
        }/>

        <View style={{alignItems: 'center'}}>
          <PressableText
          onPress={() => {setSignUpForm(!isSignUpForm)}}
          text={
            isSignUpForm? 'Уже есть аккаунт? Нажми на этот текст!' : 'Еще нет аккаунтa? Нажми на этот текст!'
          }/>
        </View>
      
      </View>
    </View>
  );
}

function signIn() {
  // todo
  return false;
}

function signUp() {
  // todo
  return false;
}

const styles = StyleSheet.create({
  formField: {
    borderColor: palette.text,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
