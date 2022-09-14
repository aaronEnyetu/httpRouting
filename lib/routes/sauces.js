const sauces = [
    {
      name: 'Bordelaise sauce',
      ingredients: 'red wine, shallots, thyme, bay leaf, stock, salt, black pepper',
      rating: '100'
    },
    {
      name: 'Honey Dill',
      ingredients: 'honey, mayonnaise, dill ',
      rating: '99'
    }
  ]
  
  
export default {
    get(req, res) {
        res.write(JSON.stringify(sauces));
        res.statusCode = 200;
        res.end();
    },
    post(req, res) {
        sauces.push(req.body);
        res.statusCode = 204;
        res.end();
  },
  put(req, res) {
    const index = sauces.findIndex((sauce)=> sauce.name === req.body.name);
    sauces[index] = req.body;
    res.statusCode = 204;
    res.end();
  },
};