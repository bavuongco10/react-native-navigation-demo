/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
const Icon = require('react-native-vector-icons/Ionicons');

class react_native_navigation_bootstrap extends Component {
	render() {
		return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit app.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

Navigation.registerComponent('react-native-navigation-bootstrap1', () => react_native_navigation_bootstrap);
Navigation.registerComponent('react-native-navigation-bootstrap2', () => react_native_navigation_bootstrap);
Navigation.registerComponent('react-native-navigation-bootstrap3', () => react_native_navigation_bootstrap);
Navigation.registerComponent('react-native-navigation-bootstrap4', () => react_native_navigation_bootstrap);

var settingsIcon;
var settingsOutlineIcon;
var peopleIcon;
var iosNavigateOutline;
var iosNavigate;

_populateIcons = function () {
	return new Promise(function (resolve, reject) {
		Promise.all(
			[
				Icon.getImageSource('ios-settings', 30),
				Icon.getImageSource('ios-settings-outline', 30),
				Icon.getImageSource('ios-people', 30),
				Icon.getImageSource('ios-navigate-outline', 30),
				Icon.getImageSource('ios-navigate', 30)
			]
		).then((values) => {
			settingsIcon = values[0];
			settingsOutlineIcon = values[1];
			peopleIcon = values[2];
			iosNavigateOutline = values[3];
			iosNavigate = values[4];
			resolve(true);
		}).catch((error) => {
			console.log(error);
			reject(error);
		}).done();
	});
};
const startApp = () => {
	Navigation.startTabBasedApp({
		tabs: [
			{
				label: 'One',
				screen: 'react-native-navigation-bootstrap1',
				icon: peopleIcon,
			},
			{
				label: 'Two',
				screen: 'react-native-navigation-bootstrap2',
				icon: settingsOutlineIcon,
			},
			{
				label: 'Three',
				screen: 'react-native-navigation-bootstrap3',
				icon: iosNavigateOutline,
			},
			{
				label: 'Four',
				screen: 'react-native-navigation-bootstrap4',
				icon: iosNavigate
			}
		]
	});
}

_populateIcons().then(() => {
	// Start app only if all icons are loaded
	startApp();
}).catch((error) => {
	console.error(error);
});