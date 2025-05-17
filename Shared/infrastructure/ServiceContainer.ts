import { InMemoryUserRepository } from "../../User/infrastructure/InMemoryUserRepository";
import { UserGetAll } from "../../User/application/UserGetAll/UserGetAll";
import { UserGetOneById } from "../../User/application/UserGetOneById/UserGetOneById";
import { UserCreate } from "../../User/application/UserCreate/UserCreate";
import { UserEdit } from "../../User/application/UserEdit/UserEdit";
import { UserDelete } from "../../User/application/UserDelete/UserDelete";

const useRepository = new InMemoryUserRepository();

export const ServiceContainer = {
    user: {
        getAll: new UserGetAll(useRepository),
        getOneById: new UserGetOneById(useRepository),
        create: new UserCreate(useRepository),
        edit: new UserEdit(useRepository),
        delete: new UserDelete(useRepository)
    }
}