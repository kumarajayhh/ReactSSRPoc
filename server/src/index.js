const express = require('./node_modules/express');
const React = require('./node_modules/react');
const rendetToString = require('./node_modules/ReactDOM/server').rendetToString;
const Home = require('./clients/components/Home').default;
const app = express();

app.get('/', (req, res) => {
  const content = rendetToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('running on 3000');
});
