import useOrientation from '@hooks/useOrientation';
import React from 'react';
import * as RN from 'react-native';

interface Props {
  isShown: boolean;
  toggle: () => void;
  style?: RN.FlexStyle;
}

function Modal(props: React.PropsWithChildren<Props>) {
  const {isShown, toggle, children, style} = props;

  const {isPortrait} = useOrientation();
  const styles = isPortrait ? portraitStyles : landscapelStyles;

  return (
    <RN.Modal
      transparent
      animationType="fade"
      visible={isShown}
      onRequestClose={toggle}
      supportedOrientations={['portrait', 'landscape']}>
      <RN.View style={styles.container}>
        <RN.View style={[styles.content, style]}>
          {children}
          <RN.Pressable style={styles.closeButton} onPress={toggle}>
            <RN.Text style={styles.closeText}>Close</RN.Text>
          </RN.Pressable>
        </RN.View>
      </RN.View>
    </RN.Modal>
  );
}

export default Modal;

const baseStyles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  closeButton: {
    width: '100%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#2196F3',
  },
  closeText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const portraitStyles = RN.StyleSheet.create({
  ...baseStyles,
  content: {
    ...baseStyles.content,
    width: '91%',
  },
});

const landscapelStyles = RN.StyleSheet.create({
  ...baseStyles,
  content: {
    ...baseStyles.content,
    width: '70%',
  },
});
