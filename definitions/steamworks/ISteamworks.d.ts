import { ModType } from "mod/IModManager";
export interface ISteamworks {
    isElectron(): boolean;
    isOverlayWorking(): boolean;
    isGreenworksEnabled(): boolean;
    getAbsolutePath(p: string): any;
    isLinux(): boolean;
    initialize(): void;
    setOverlayWorks(ipg: boolean): void;
    setupMods(callback: () => void): void;
    getSteamId(): ISteamId;
    getBetaName(): string;
    getPublishedMods(): IWorkshopItem[];
    getPublishedMod(publishFileId: string): IWorkshopItem | undefined;
    fillOutMod(index: number, item?: IWorkshopItem): void;
    publishMod(modIndex: number, callback: (err: string | undefined, publishedFileId?: string) => void): void;
    createArchive(id: string, source: string, callback: (err?: string) => void): void;
    getPublishedItems(callback: (err: string | undefined, items?: IWorkshopItem[]) => void): void;
    openUrl(url: string): void;
    openWorkshop(publishId?: string): void;
    openModsFolder(): void;
    openLogsFolder(): void;
    unsubscribe(publishId: string, callback: (err?: string) => void): void;
    sendMessage(name: string, data: string): void;
    toggleDeveloperTools(): void;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): string | undefined;
    createSaveGameMod(name: string, slot: number, callback: (success: boolean) => void): void;
    deleteSaveGameMod(name: string): void;
    debugLog(...args: any[]): void;
    addZoomFactor(change: number): void;
    setDefaultZoomFactor(): void;
    updateZoomFactor(): void;
    onUpdateZoomFactor(): void;
    hasServerToJoin(): boolean;
    onReady(): void;
    setupReporting(): void;
    recordProblem(message: string): void;
    setRichPresence(key: string, value: string): boolean;
    clearRichPresence(): void;
    onUnload(): void;
}
export default ISteamworks;
export interface ISteamId {
    accountId: number;
    screenName: string;
    staticAccountId: string;
}
export interface IWorkshopItem {
    file: string;
    fileName: string;
    isUpdated: boolean;
    timeCreated: number;
    timeUpdated: number;
    title: string;
    description: string;
    banned: boolean;
    acceptedForUse: boolean;
    publishedFileId: string;
    steamIDOwner: string;
}