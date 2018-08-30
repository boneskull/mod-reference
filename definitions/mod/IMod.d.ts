/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
export interface IModConfig {
    readonly name: string;
    readonly description: string;
    readonly version: string;
    readonly author: string;
    readonly file: string;
    readonly unloadable?: boolean;
    readonly dependencies?: string[];
    readonly compatibleMinorVersions: number[];
    readonly multiplayerCompatible?: boolean;
    readonly multiplayerClientside?: boolean;
    readonly languages?: string[];
    readonly stylesheets?: string[];
    readonly imageOverrides?: boolean;
    readonly customizations?: boolean;
    readonly publishedFileId?: string;
}
export declare enum ModEvent {
    Unload = 0,
    Uninitialize = 1
}
export declare enum SaveDataType {
    Global = "global",
    Save = "save"
}
