
// list all users
use admin
db.system.users.find({}, { db: 1, user: 1})

// list users in current db
show users
db.getUsers()