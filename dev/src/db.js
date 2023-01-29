class DBManager {
  constructor() { }
  getItemsFrom = async (dbname) => {
    const dbpath = `./${dbname}.json`
    const data = await import(`${dbpath}`)
    return data.default
  }
  getItemByIdFrom = async (id, dbname) => {
    const dbpath = `./${dbname}.json`
    const data = await import(`${dbpath}`)
    return data.default.find((el) => {
      return el.id === id
    })
  }
}

const db = new DBManager

export default db