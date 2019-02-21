const insertUser = async (_, args, { User }) => {
  try {
    const createAt = Date.now()
    const updatedAt = Date.now()

    const user = await new User({ ...args, createAt, updatedAt }).save()
    return user
  } catch (error) {
    console.log('insertUser error=========>', error.errmsg)
  }
}

module.exports = { insertUser }
