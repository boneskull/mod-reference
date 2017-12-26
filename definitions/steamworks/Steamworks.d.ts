import { ModType } from "mod/IModManager";
import { IDedicatedServerInfo, IModPath, ISteamFriend, ISteamId, ISteamworks, IWorkshopItem, LobbyType } from "steamworks/ISteamworks";
import Emitter from "utilities/Emitter";
export default class Steamworks extends Emitter implements ISteamworks {
    private installDir;
    private recordedProblems;
    private steamId;
    private betaName;
    private buildTime;
    private overlayWorks;
    private platform;
    private initializingMods;
    private logsPath;
    private backupPath;
    private logFilePath;
    private modsPath;
    private workshopPath;
    private workshopModsPath;
    private workshopSyncPath;
    private workshopSharePath;
    private loadedMods;
    private publishedMods;
    private workshopUrl;
    private workshopFileUrl;
    private ignoredDirectories;
    private _serverIdToJoin;
    private _dedicatedServerInfo;
    private _nextBackupTime;
    private _currentLobbyId;
    private _multiplayerLogs;
    private importingSaveGameMod;
    isElectron(): boolean;
    isOverlayWorking(): boolean;
    isGreenworksEnabled(): boolean;
    getAbsolutePath(...p: string[]): any;
    isLinux(): boolean;
    isMac(): boolean;
    isDedicatedServer(): boolean;
    getDedicatedServerInfo(): IDedicatedServerInfo | undefined;
    getMatchmakingServer(): IMatchmakingServer | undefined;
    initialize(): void;
    onUnload(): void;
    setOverlayWorks(overlayWorks: boolean): void;
    setupMods(callback: () => void): void;
    getSteamId(): ISteamId | undefined;
    getFriends(): ISteamFriend[] | undefined;
    getScreenName(): string | undefined;
    getBetaName(): string;
    getBuildTime(): number | undefined;
    getPublishedMods(): IWorkshopItem[] | undefined;
    setRichPresence(key: string, value: string): boolean;
    clearRichPresence(): void;
    isInLobby(): boolean;
    createLobby(type: LobbyType): void;
    setLobbyType(type: LobbyType): void;
    leaveLobby(): void;
    joinLobby(lobbyId: string): void;
    getLobbyData(name: string): string | undefined;
    setLobbyData(name: string, data: string): boolean;
    getLobbyMembers(): ISteamFriend[] | undefined;
    getPublishedMod(publishFileId: string): IWorkshopItem | undefined;
    fillOutWorkshopMod(index: number, item?: IWorkshopItem): void;
    publishMod(modIndex: number): Promise<string>;
    createArchive(id: string, source: string): Promise<void>;
    getPublishedItems(): Promise<IWorkshopItem[]>;
    openUrl(url: string): void;
    openWorkshop(publishId?: string): Promise<void>;
    openModsFolder(): void;
    openLogsFolder(): void;
    unsubscribe(publishId: string): Promise<void>;
    sendMessage(name: string, ...data: any[]): boolean;
    onMessage(name: string, listener: (e: any, ...data: any[]) => any): boolean;
    toggleDeveloperTools(): void;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): IModPath | undefined;
    createSaveGameMod(name: string, slot: number): Promise<boolean>;
    importFromSaveGameMod(modIndex: number, json: string): Promise<boolean>;
    deleteSaveGameMod(name: string): void;
    debugLog(...args: any[]): void;
    hasServerToJoin(): boolean;
    onReady(): void;
    setupReporting(): void;
    recordProblem(message: string): void;
    processBackups(): boolean;
    setupMultiplayerLog(): void;
    getMultiplayerLogs(): string;
    multiplayerLog(...args: any[]): void;
    multiplayerLogError(...args: any[]): void;
    private setupAndInitializeWorkshopMods(retried?);
    private initializeModsFromFolder(folderName, modType, callback);
    private enumerateInstalledWorkshopMods();
    private refreshSetupMods();
    private removeTempFolders(destinationPath, id);
    private refreshPublishedMods();
    private getIdFromWorkshopItem(item);
    private syncWorkshopItems();
    private ugcSynchronizeItems();
    private copyFolder(source, destination);
    private saveFilesToCloud(id);
    private getFileShareId(id);
    private publishFileToWorkshop(id, title, description, publishedFileId);
    private extractArchive(id, destination);
    private safeOpenFolder(folder);
    private onGameOverlayActive(isActive);
    private onLobbyCreated(success, lobbyId, result?);
    private onLobbyEntered(success, lobbyId, result?);
    private onLobbyChatUpdate(lobbyId, steamIdUserChanged, state);
    /**
     * Called when the user tries to join a lobby from their friends list or from an invite. The game client should attempt to connect to specified lobby when this is received. If the game isn't running yet then the game will be automatically launched with the command line parameter +connect_lobby <64-bit lobby Steam ID> instead.
     */
    private onLobbyJoinRequested(lobbyId);
    private showCharacterSelectionForLobby(lobbyId);
    private createFolderIfNotExists(folder);
    private getSyncPath(name);
    private getSharePathForModZip(name);
    private getSharePathForModImage(name);
    private recordEvent(categorySuffix, action);
    private getFilesInFolder(folderPath);
}
