import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const div = React.createElement('div', {
  id: 'testId',
  name: 'Olexander',
  comments: 1000,
  children: ['Hello ', 'world ', 'from Poland'],
});

ReactDOM.createRoot(document.getElementById('root')).render(div);
