declare global {
interface ItabData {
    tabId: number;
    tabLabel: string;
    tabContent: EtabContent
}
interface ItabContent {
    id: number;
    image: string;
    link: string;
}
interface IUserSteamStatus {
    displayName: string;
    status: string;
    activity: string;
    avatar: string;  
}
interface IUserStatus {
    uId: number;
    steam: {
        [key: number]: IUserSteamStatus;
    };
    discord: string;
}
//Extended{Object Name} extends Info{Object Name}
interface EtabData extends Array<ItabData>{}
interface EtabContent extends Array<ItabContent>{}
interface EUserStatus extends Array<IUserStatus>{}
interface EUserSteamStatus extends Array<IUserSteamStatus>{}
}
export default global