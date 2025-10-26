import { StyleSheet, Text, View } from 'react-native';
import { commonStyles, palette } from '../assets/CommonStyles.js'



export function MainPage() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      
      <View style={{display: 'flex', backgroundColor: '#808080', width: '25%', height: '100%', alignSelf: 'left'}}>
        {/* TODO */}
        <Text>Side panel</Text>
      </View>

      <View style={{backgroundColor: '#404040', width: '75%', height: '100%'}}>
        {/* TODO */}
        <Text>Chat area</Text>
      </View>
      
    </View>
  );
}



const styles = StyleSheet.create({
  
});