const cats = [
  {
    name: 'Abyssinian',
    origin: 'Egypt',
    Characteristics: 'long slender legs'
  },
  {
    name: 'Bengal',
    origin: 'U.S',
    Characteristics: 'cross between Asian leopard and American tabby'
  }
];

export default {
  animal: 'cats',
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.statusCode = 204;
    res.end();
  },
  put(req, res) {
    const index = cats.findIndex((cat)=> cat.name === req.body.name);
    cats[index] = req.body;
    res.statusCode = 204;
    res.end();
  },
  delete(req, res) {
   
  },
};
