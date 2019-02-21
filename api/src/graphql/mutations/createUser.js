const createUser = async (_, args, { User }) => {
  console.log('createUser ======>', args)
  console.log('USER ======>', { User })

  return 'user created'
}

module.exports = createUser
