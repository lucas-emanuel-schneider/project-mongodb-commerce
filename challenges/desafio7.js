db.produtos.find({
  $and: [{ vendidos: { $ne: 50 },
  }, { tags: { $exists: false } }],
  }, { nome: true, _id: false, vendidos: true });