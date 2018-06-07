import { IPlayOptions } from "game/IGame";
import HookCallFactory from "mod/HookCallFactory";
import { Hook } from "mod/IHookManager";
import { IModConfig } from "mod/IMod";
import { IModInfo, IModProvides, ModState, ModType } from "mod/IModInfo";
import { CanLoadState, ICanLoadInfo, IModManager } from "mod/IModManager";
import Log from "utilities/Log";
export default class ModManager implements IModManager {
    private readonly mods;
    private modsToSetup;
    private readonly internalMods;
    private readonly internalModsElectron;
    private readonly onLanguageLoadCallbacks;
    constructor();
    loadAll(options: Partial<IPlayOptions>): Promise<string | undefined>;
    unloadAll(reset?: boolean): void;
    setupMods(callback: () => void): void;
    saveAll(): void;
    getFile(modIndex: number, file: string, callback: (data: string, success: boolean) => void): boolean;
    setupMod(folderName: string, modType: ModType, callback: (id?: number) => void, initialModState?: ModState): Promise<void>;
    removeMod(id: number, uninstall?: boolean): void;
    getMods(): IModInfo[];
    getLoadedMods(): IModInfo[];
    getLoadedModByName(name: string): IModInfo | undefined;
    getModFromIndex(i: number): IModInfo;
    getEnabledMods(): number[];
    getHook<H extends Hook, R = any>(hook: H, defaultValue?: R): HookCallFactory<H, R>;
    /**
     * @deprecated
     * @see `getHook(hookName).call(...args)`
     */
    callHook(hook: Hook, ...args: any[]): any;
    /**
     * @deprecated
     * @see `getHook(hookName, defaultValue).call(...args)`
     */
    callHookWithDefault<T>(hook: Hook, defaultValue: T, ...args: any[]): T;
    load(index: number, cacheHooks?: boolean): void;
    unload(index: number, cacheHooks?: boolean): void;
    save(index: number): void;
    reloadByName(name: string, cacheHooks?: boolean): boolean;
    reload(index: number, cacheHooks?: boolean): boolean;
    isValid(index: number): boolean;
    isEnabled(index: number): boolean;
    isLoaded(index: number): boolean;
    getIdentifier(index: number): string;
    getConfig(mod: number | IModInfo): IModConfig | undefined;
    getName(index: number): string;
    getLog(index: number): Log;
    getDescription(index: number): string;
    getVersion(index: number): string;
    getLastUpdatedDate(index: number): number | undefined;
    getInstallDate(index: number): number | undefined;
    getCreatedDate(index: number): number | undefined;
    getAuthor(index: number): string;
    getType(index: number): ModType;
    getRequiredMods(index: number): string[];
    getPath(index: number): string;
    getFolderName(index: number): string;
    getPublishFileId(index: number): string | undefined;
    getSteamIdOwner(index: number): string | undefined;
    getProvided(index: number): IModProvides;
    canLoad(index: number, fromModsMenu?: boolean, count?: number): CanLoadState;
    canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    getIndexFromName(name: string): number[];
    getIndexFromPublishId(publishFileId: string): number[];
    getIndexFromPath(path: string): number | undefined;
    isEnabledByName(name: string): boolean;
    isLoadedByName(name: string): boolean;
    setPublishId(index: number, publishedFileId: string): void;
    setSteamIdOwner(index: number, steamIdOwner: string): void;
    setLastUpdated(index: number, lastUpdated: number): void;
    setInstallDate(index: number, installDate: number): void;
    setCreatedDate(index: number, createdDate: number): void;
    getState(index: number): ModState;
    isInitializing(index: number): ModState;
    setState(index: number, state: ModState, force?: boolean, cacheHooks?: boolean, callback?: () => void, unloaded?: boolean): boolean;
    uninitialize(index: number): boolean;
    uninitializeAll(): void;
    private onLanguageLoad;
}
