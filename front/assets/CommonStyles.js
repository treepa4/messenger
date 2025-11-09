import { StyleSheet } from "react-native"

export let palette = {
  main:         '#7e5dea',
  darkerMain:   '#6a49d6',
  darkMain:     '#0d0c1c',
  foreground:   '#ffffff',
  text:         '#000000',
  textMedium:   '#777777',
  textInverted: '#ffffff',
  textButton:   '#ffffff',
};

export const commonStyles = StyleSheet.create({
  text: {
    color: palette.text,
    fontFamily: 'Arial',
  },

  header1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },

  header6: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    color: palette.textMedium,
  },

  lable: {
    paddingLeft: 20,
    marginBottom: 5,
  },

  menuView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuContainer: {
    maxWidth: '400px',
    width: '70%',
    minWidth: '300px',
  },

  mainView: {
    flex: 1,
    flexDirection: 'row',
  },
});
