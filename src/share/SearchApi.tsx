import axios from "axios"
import AppStorage from "./AppStorage";

// ประกาศstate
type ContentResult = {
    success: boolean;
    path: string;
    content: string;
}
export type Node = {
    id: number
    name: string
    isRoot: boolean
    isFile: boolean
    parent: number
    pathFile: string
    modifieDate: string
    fileType: string
}
type LoginResult = {
    accessToken: string;
}
type PathFile = {
    files: string[];
}
type PathProject = {
    path: string;
}
type demo = {
    content: string;
}

export class SearchApi {
    constructor(private url: string) {
    }
    private getHeaders() {
        let headers = {
            headers: { Authorization: "Basic " + AppStorage.getAccessToken() }
        }
        return headers
    }

    public getProjectNames() {
        return axios.get<string[]>(`${this.url}/api/search/getProjectNames`, this.getHeaders())
    }
    public getProjectSettings(projectName: string) {
        return axios.get<PathFile>(`${this.url}/api/search/getProjectSettings/?projectName=${projectName}`, this.getHeaders())
    }
    public getSettingContent(projectPath: string) {
        return axios.get<ContentResult>(`${this.url}/api/search/getSettingContent/?path=${projectPath}`, this.getHeaders())
    }
    public saveSettingContent(projectPath: string, projectContent: string) {
        return axios.post(`${this.url}/api/search/SaveSettingContent`, {
            path: projectPath,
            content: projectContent
        }, this.getHeaders())
    }
    public getFolderAll(projectPath: string) {
        return axios.get<string>(`${this.url}/api/Search/GetFolderAll?Pathz=${projectPath}`, this.getHeaders())
    }
    public getNode(path: string) {
        return axios.get<Node[]>(`${this.url}/api/Search/GetNodes?path=${path}`, this.getHeaders())
    }
    public Login(user: string, pass: string) {
        return axios.post<LoginResult>(`${this.url}/api/Search/LoginRequest`, {
            User: user,
            Pass: pass
        })
    }
    public getPath(projectName: string) {
        return axios.get<PathProject>(`${this.url}/api/search/GetProjectPath/?projectName=${projectName}`, this.getHeaders())
    }
    public getDemo(projectPath: string, projectContent: string) {
        return axios.post(`${this.url}/api/Search/ShowDemoContent`, {
            path: projectPath,
            content: projectContent
        }, this.getHeaders())
    }
}