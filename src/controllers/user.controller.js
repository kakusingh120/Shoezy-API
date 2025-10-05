const userService = require("../services/user.service");

const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.json({
            success: true,
            data: user,
            error: {},
            message: "User fetched successfully."
        });
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.json({
            success: true,
            data: updatedUser,
            error: {},
            message: "User updated successfully."
        });
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        await userService.deleteUser(req.params.id);
        res.json({
            success: true,
            data: {},
            error: {},
            message: "User deleted successfully."
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getUserById,
    updateUser,
    deleteUser,
};
