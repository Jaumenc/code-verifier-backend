import { userEntity } from "../entities/User.entity";

import { LogSuccess,LogError } from "@/utils/logger";

// CRUD

/**
 * @returns Method to obtain all Users from Collection "Users" in Mongo Server
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();

        // Search all users
        return await userModel.find({isDelete: false})


    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`);
    }
}

// TODO:
// - Get User by ID
// - Get User by Email
// - Delete User by ID
// - Create New User
// - Update User By ID