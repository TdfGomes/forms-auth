const insertUser = async (_, args, { User }) => {
  try {
    const user = await new User({ ...args }).save()
    return user
  } catch (error) {
    console.log('insertUser error=========>', error.errmsg)
  }
}
const updateUser = async (_, { _id, ...args }, { User }) => {
  try {
    const user = await User.findOneAndUpdate({ _id }, { ...args }, (error, user) => {
      if (error) throw new Error(error)
      return user
    })
    user.updatedAt = Date.now()
    return user
  } catch (error) {
    console.log('updateUser error=========>', error.errmsg)
  }
}

const deleteUser = async (_, { _id }, { User }) => {
  try {
    await User.findOneAndDelete({ _id }, (error, user) => {
      if (error) throw new Error(error)
      return user
    })
    return `Delete User ${_id} with success`
  } catch (error) {
    console.log('deleteUser error=========>', error.errmsg)
  }
}

module.exports = { insertUser, updateUser, deleteUser }
