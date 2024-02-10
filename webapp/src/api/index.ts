import axios, { AxiosResponse } from "axios";
import { variables } from "../Variables";

export class UserApi {
    constructor(public email: string, public password: string) {
        this.email = email;
        this.password = password;
    }

    async Get() {
            const response = await axios({
                method: "get",
                url: `${variables.API_URL}Users`,
                params: {
                    email: this.email,
                    UserPassword: this.password,
                },
            }).then(response => response.data);

            return response;
    }
}
