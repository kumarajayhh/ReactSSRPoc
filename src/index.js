const express = require('express');
const React = require('react');
const rendetToString = require('ReactDOM/server').rendetToString;
const Home = require('./clients/components/Home').default;
const app = express();

app.get('/', (req, res) => {
  const content = rendetToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('running on 3000');
});
