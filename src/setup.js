'use strict';
var React = require('React');
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  NavigatorIOS
} from 'react-native';
import List from './Modules/List'
function setup(): ReactClass<{}> {
  class Root extends React.Component {
    constructor() {
      super()
    }
    render() {
      return (
        <NavigatorIOS
          style={{flex:1}}
          initialRoute={{
            component:List,
            title:'小函冰',
            passProps:{}

          }}
        />
      );
    }
  }
  return Root
}

const styles = StyleSheet.create({

});
module.exports = setup;
