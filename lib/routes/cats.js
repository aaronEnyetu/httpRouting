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
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.statusCode = 202;
    res.end();
  },
  put(req, res) {

  },
  delete(req, res) {
   
  },
};
