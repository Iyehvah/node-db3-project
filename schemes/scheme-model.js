const db = require("../data/config")

//GET schemes
function find() {
    return db("schemes")
}
//GET scheme by id
function findById(id) {
    return db("schemes").where({id}).first()
}
//GET steps by id
function findSteps(id) {
    return db("schemes as s")
    .where({scheme_id: id})
    .join("steps", "steps.id", "steps.scheme_id")
    .select("s.id", "s.scheme_name", "steps.step_number", "steps.instructions")
    .orderBy("steps.step_number", "desc")
}

//POST  a  scheme
function add(schemeData) {
    return db("schemes").insert(schemeData)
}
//POST  a  step
function addStep(stepData) {
    db("steps").insert(stepData)
    return db("steps")
}


//PUT a scheme
function update(changes, id){
    return db("schemes").where({id: id}).update(changes)
}

//DELETE a scheme
function remove(id){
    return db("schemes").where({id: id}).del()
}
module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}