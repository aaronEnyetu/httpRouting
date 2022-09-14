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
      
};