const findAll = (error, users) => {
  if (error) throw new Error(error)
  return users || []
}

const totalUsers = async (_, args, { User }) => {
  const u = await User.find({}, findAll)
  return u.length
}

module.exports = { totalUsers }
