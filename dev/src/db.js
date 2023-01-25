const db = {
  getItemsFrom: (dbname, callback) => {
    const dbtosearch = `./${dbname}.json`
    //console.log('Searching:', dbtosearch);
    import(`${dbtosearch}`)
      .then((data) => {
        callback(data.default)
      })
      .catch((e) => {
        console.log(`Hubo un error al buscar: ${dbtosearch}`);
      })
  },
  getItemByIdFrom: (id, dbname, callback) => {
    const dbtosearch = `./${dbname}.json`
    //console.log('Searching id:', id, 'from', dbtosearch);
    import(`${dbtosearch}`)
      .then((data) => {
        let response = data.default.find((el) => {
          return el.id === id
        })
        return response ?? {};
      }).then((data) => {
        callback(data)
      })
      .catch((e) => {
        console.log(`Hubo un error al buscar: ${dbtosearch}`);
      })
  },
}

export default db