import { StyleSheet } from "react-native"

export const palettes = {
  orange: {
    main:         '#ffb268',
    darkerMain:   '#eb9e68',
    text:         '#000000',
    textMedium:   '#777777',
    textInverted: '#ffffff',
    textButton:   '#000000',
  },

  purple: {
    main:         '#7e5dea',
    darkerMain:   '#6a49d6',
    text:         '#000000',
    textMedium:   '#777777',
    textInverted: '#ffffff',
    textButton:   '#ffffff',
  },
};

export let palette = palettes.purple;

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

  menuMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuContainer: {
    maxWidth: '400px',
    width: '70%',
    minWidth: '300px',
  },
});
