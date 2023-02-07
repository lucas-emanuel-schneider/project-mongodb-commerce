db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: db.produtos.find({}).count(),
  },
);

db.resumoProdutos.findOne({}, { franquia: true, _id: false, totalProdutos: true });