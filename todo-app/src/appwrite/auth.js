import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
    client = new Client
    account
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)  
    }


    createAccount = async ({email, password, name}) =>{
        try {
            const user = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(user){
                login({email, password});
            }
        } catch (error) {
            throw new error
        }
    }

    getCurrentUser = async () =>{
        try {
            return await this.account.get()
        } catch (error) {
            throw new error
        }
        return null;
    }
    
    loginAccount = async ({email, password}) =>{
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password,
            )
        } catch (error) {
            throw new error
        }
    }
    
    logoutAccount = async ({email, password}) =>{
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw new error
        }
    }

}

const authService = new AuthService();
export default authService;