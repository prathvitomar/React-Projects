import { Client, Account, ID, Databases, Storage } from "appwrite";
import conf from "../conf/conf";

class Service {
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    createDocument = async({title, content, featuredImage, status, userId, slug})=>{
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            throw error 
        }
    }

    updateDocument = async(slug, {title, content, featuredImage, status})=>{
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            throw error 
        }
    }

    deleteDocument = async(slug)=>{
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error 
        }
    }

    getDocument = async(slug)=>{
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error 
        }
    }

    listDocuments = async(queries = [Query.equal("status", "active")])=>{
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            throw error 
        }
    }

    updateFile = async(file)=>{
        try {
            return await this.storage.createFile(
                conf.appwriteStorageId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error 
        }
    }

    getFilePreview = (fileId)=>{
            return this.storage.getFilePreview(
                conf.appwriteStorageId,
                fileId
            )
    }

    deleteFile = async(fileId)=>{
        try {
            return await this.storage.deleteFile(
                conf.appwriteStorageId,
                fileId
            )
        } catch (error) {
            throw error 
        }
    }

}

const service = new Service();

export default service;