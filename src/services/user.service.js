const userRepo = require("../repository/user.repository");
const ApiError = require("../utils/api.error");

const getUserById = async (id) => {
    const user = await userRepo.findById(id);
    if (!user) {
        throw new ApiError(
            "UserError",
            "User not found",
            "Invalid user id",
            404
        );
    }
    return user;
};

const updateUser = async (id, data) => {
    const updated = await userRepo.update(id, data);
    if (!updated) {
        throw new ApiError(
            "UserError",
            "Unable to update user",
            "Update failed",
            400
        );
    }
    return updated;
};

const deleteUser = async (id) => {
    const deleted = await userRepo.deleteUser(id);   // 👈 match repo
    if (!deleted) {
        throw new ApiError(
            "UserError",
            "Unable to delete user",
            "Delete failed",
            400
        );
    }
    return deleted;
};

module.exports = {
    getUserById,
    updateUser,
    deleteUser,
};
