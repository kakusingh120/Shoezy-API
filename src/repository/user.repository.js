const { User } = require("../models/index");

const create = async (data) => {
    return await User.create(data);
};

const findByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

const findById = async (id) => {
    return await User.findByPk(id, { attributes: { exclude: ["password"] } });
};

const update = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.update(data);
    return user;
};

const deleteUser = async (id) => {   // 👈 final name = deleteUser
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return true;
};

module.exports = {
    create,
    findByEmail,
    findById,
    update,
    deleteUser,   // 👈 keep consistent everywhere
};
