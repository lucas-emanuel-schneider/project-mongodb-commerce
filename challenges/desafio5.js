db.produtos.find({
  $or: [{ vendidos: 85 }, { curtidas: 36 }],
}, {
  nome: true, _id: false, vendidos: true, curtidas: true,
  });