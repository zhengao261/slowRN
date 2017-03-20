'use strict';
var React = require('React');
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

function setup(): ReactClass<{}> {
  class Root extends React.Component {
    constructor() {
      super()
    }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.item}> </View>
          <View style={styles.item}> </View>
          <View style={styles.item}> </View>
        </View>
      );
    }
  }
  return Root
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    boderWidth:1,
    borderColor:'red',
    flexDirection:'row'
    //
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  item: {
    flex:1,
    height:80,
    borderColor:'blue',
    borderWidth:1
  }

});
module.exports = setup;
