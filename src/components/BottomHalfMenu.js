import React from 'react';
import { View, Dimensions, Platform, StyleSheet, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { get } from 'react-native-extra-dimensions-android';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    paddingBottom: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'white',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  edge: {
    height: 4,
    width: 50,
    alignSelf: 'center',
    backgroundColor: '#D8D8D8',
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 25,
    paddingHorizontal: 25,
  },
});

const BottomHalfMenu = (props) => {
  const { isModalVisible, close, children, disableSwipe, disableBackClose } = props;

  // To fix problems with device with extra dimensions as the Galaxy phones
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : get('REAL_WINDOW_HEIGHT');

  return (
    <Modal
      isVisible={!children ? false : isModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      onSwipeComplete={!disableSwipe ? close : null}
      swipeDirection={!disableSwipe ? ['down'] : null}
      onBackButtonPress={!disableBackClose ? close : null}
      onBackdropPress={!disableBackClose ? close : null}
      style={styles.modal}
      propagateSwipe
    >
      <View style={styles.content}>
        {!disableSwipe && <View style={styles.edge} />}
        {children}
      </View>
    </Modal>
  );
};

BottomHalfMenu.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  disableSwipe: PropTypes.bool,
  disableBackClose: PropTypes.bool,
};

BottomHalfMenu.defaultProps = {
  disableSwipe: false,
  disableBackClose: false,
};

export default BottomHalfMenu;
