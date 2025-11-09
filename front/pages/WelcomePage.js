import { Text, View } from 'react-native';
import { commonStyles } from '../assets/CommonStyles.js';
import { BlankBox } from '../components/BlankBox.js';
import { Button } from '../components/Button.js';



export function WelcomePage(setWelcomePage) {
  return (
    <View style={commonStyles.menuView}>
      <View style={commonStyles.menuContainer}>
        <Text style={[commonStyles.text, commonStyles.header1]}>Добро пожаловать!</Text>
        <Text style={[commonStyles.text, commonStyles.header6]}>Начните общаться с родными и близкими прямо сейчас</Text>

        <BlankBox height={'25%'}/>

        <Button onPress={() => {setWelcomePage(false)}} text='Начать'/>
      </View>
    </View>
  );
}