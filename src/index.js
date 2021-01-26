import React from 'react';
import ReactDOM from 'react-dom';
import {RoomContext,RoomProvider} from './context';

import App from './components/App.js';

ReactDOM.render(
<RoomProvider>
<App/>
</RoomProvider>,
document.querySelector('#root'));