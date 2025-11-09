import { StyleSheet, Text, View } from 'react-native';
import { commonStyles, palette } from '../assets/CommonStyles.js'



export function MainPage() {
  return (
    <View style={commonStyles.mainView}>
      
      <View style={styles.sidePanel}>
        {/* TODO */}
        <Text>Side panel</Text>
      </View>

      <View style={styles.chatArea}>
        {/* TODO */}
        <Text>Chat area</Text>
      </View>
      
    </View>
  );
}



const styles = StyleSheet.create({
  sidePanel: {
    display: 'flex',
    backgroundColor: palette.darkMain,
    width: '40%',
    height: '100%',
  },

  chatArea: {
    backgroundColor: palette.foreground,
    display: 'flex',
    width: '60%',
    height: '100%',
  },
});