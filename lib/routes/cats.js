const cats = [
  { name: 'Abyssinian', origin: 'Egypt', Characteristics: 'long slender legs' }
];

export default {
  animal: 'cats',
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {},
};
