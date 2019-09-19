const model = require("./model.js")

const db = require('./db-config.js');

describe("user model", () => {
  beforeEach(async () => {
    await db('users').truncate()
  })

  describe("insert()", () => {
    it("should insert a user into the users database", async () => {
      await model.add({ 
        username: "zach",
        password: "pass1"
       })

        let users = await db("users")
        expect(users).toHaveLength(1)
    })
    
    it("should save info correctly", async () => {
      const user = await model.add({
        username: "zach",
        password: "pass1"
      })

      // let username = await db("users")
      //   .where({ id })
      //   .first()

        expect(user.username).toBe("zach")
    })
  })

  describe("delete()", () => {
    it ("should delete a user from the database", async () => {

      let user = await model.add({ 
        username: "zach",
        password: "pass1"
      })
    
      let temp = await model.remove( user.id )

      let users = await db("users")
      expect(users).toHaveLength(0)
    })

    it ("should account for a user id", async () => {

      let user = await model.add({ 
        username: "zach",
        password: "pass1"
      })
    
      let temp = await model.remove( user.id )

      let users = await db("users")
      expect(user.id).toBe(1)
    })

  })
})