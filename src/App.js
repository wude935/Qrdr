import React, { Component } from 'react'; //diverged from tutorial by not using *
import { Text, View } from 'react-native';

//diverged from tutorial by not using Typescript or Hooks, using react-native 0.55
export default class App extends Component {
	render() {
		return (
			<View>
				<Text>Hello World!</Text>
			</View>
		);
	}
}
