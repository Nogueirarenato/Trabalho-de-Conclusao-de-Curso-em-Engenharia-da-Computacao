const taskModel = require('../models/tasksModel');



const getAll = async (request, response) => {
    
    const tasks = await taskModel.getAll();
    return response.status(200).json(tasks)

}

const getLogin = async (request, response) => {
    
    const users = await taskModel.getLogin();
    return response.json(users)

}

const login  = (request, response)=>{
    getLogin();
    var body = request.body;
    console.log(body);
    console.log(users);
return

}



module.exports = {
    getAll,
    login
}