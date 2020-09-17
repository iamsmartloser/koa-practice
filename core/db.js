const Sequelize = require('sequelize')
const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database

const sequelize = new Sequelize(dbName,user,password,{
    dialect:'mysql',
    host,
    port,
    logging:true,
    timezone: '+08:00',
    define:{
        //create_time  update_time delete_time
        timestamps:true,
        paranoid:true,
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        underscored:true,//驼峰转化为下划线
        freezeTableName:true
    }
})

sequelize.sync({
    force:true  //这个参数不能随便加，他会删除已有的表重新创建
})

module.exports = {
    sequelize
}
