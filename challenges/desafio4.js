db.produtos.find({
  vendidos: { $gt: 50, $lt: 100,
  } }, { nome: true, _id: false, vendidos: true }).sort({ vendidos: 1 });