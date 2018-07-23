import axios from "axios"

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
}
type LoginResult = {
    access_token: string;
}
type pathFile = {
    files: string[];
}
type pathProject = {
    path: string;
}

export class SearchApi {
    constructor(private url: string) {

    }

    public getProjectNames() {
        return axios.get<string[]>(`${this.url}/api/search/getProjectNames`)
    }
    public getProjectSettings(projectName: string) {
        return axios.get<pathFile>(`${this.url}/api/search/getProjectSettings/?projectName=${projectName}`)
    }
    public getSettingContent(projectPath: string) {
        return axios.get<ContentResult>(`${this.url}/api/search/getSettingContent/?path=${projectPath}`)
    }
    public saveSettingContent(projectPath: string, projectContent: string) {
        return axios.post(`${this.url}/api/search/SaveSettingContent`, {
            path: projectPath,
            content: projectContent
        })
    }
    public getFolderAll(projectPath: string) {
        return axios.get<string>(`${this.url}/api/Search/GetFolderAll?Pathz=${projectPath}`)
    }
    public getNode(path: string) {
        return axios.get<Node[]>(`${this.url}/api/Search/GetNodes?path=${path}`)
    }
    public Login(user: string, pass: string) {
        return axios.post<LoginResult>(`${this.url}/api/Search/LoginRequest`, {
            User: user,
            Pass: pass
        })
    }
    public getPath(projectName: string) {
        return axios.get<pathProject>(`${this.url}/api/search/GetProjectPath/?projectName=${projectName}`)
    }
}