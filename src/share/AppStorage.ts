export default class AppStorage {

    public static loggedIn = "loggedIn"

    public static getLoggedIn(): string {
        return sessionStorage.getItem(this.loggedIn)
    }
    public static setLoggedIn(value: string): void {
        sessionStorage.setItem(this.loggedIn, value)
    }
}