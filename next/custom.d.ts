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
interface EtabData extends Array<ItabData>{}
interface EtabContent extends Array<ItabContent>{}
}
  export default global