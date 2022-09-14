const candies = [
  {
    name: 'Classic Fruit Slices',
    flavor: 'fruity',
    sweetness: '3'
  },
  {
    name: 'Honey Filled Candy',
    flavor: 'honey',
    sweetness: '5'
  }
]


export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.statusCode = 204;
    res.end();
  },
  put(req, res) {
    const index = candies.findIndex((candy)=> candy.name === req.body.name);
    candies[index] = req.body;
    res.statusCode = 204;
    res.end();
  },
  delete(req, res) {
    candies.pop();
    res.statusCode = 200;
    res.end();
  },
};
