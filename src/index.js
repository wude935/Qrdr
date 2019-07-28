//Entry Point for App
//Root element for Index.html
import React from 'react'; //;Web
import ReactDom from 'react-dom'; //Web
import { AppRegistry } from 'react-native'; //App
import App from './App';

AppRegistry.registerComponent('qrdr', () => App); //App
ReactDom.render(<App />, document.getElementById('root')); //Web
