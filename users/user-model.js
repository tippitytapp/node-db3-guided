const db = require('../data/db-config.js');

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};

function findAll(){
return db('users');
}
function findById(id){
return db('users').where({id}).first();
}
function create(user){
return db('users').insert(user, "id")
.then(id => {
   return findById(id[0])
})
}
function update(id, changes){
return db('users').where({id}).update(changes, "id")
.then(count => {
    return findById(id[0])
})
}
function remove(id){
return db('users').where({id}).del();
}
