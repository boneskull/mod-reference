import { IVersionInfo } from "utilities/Version";
export interface ITrello {
    getChangelog(versionInfo: IVersionInfo): Promise<IChangelog | undefined>;
    getVersions(maxVersion?: IVersionInfo): Promise<IVersionInfo[]>;
}
export interface ITrelloBoard {
    id: string;
    name: string;
    desc: string;
    lists?: ITrelloList[];
}
export interface ITrelloList {
    id: string;
    name: string;
    cards?: ITrelloCard[];
}
export interface ITrelloCard {
    id: string;
    name: string;
    pos: number;
    labels: ITrelloCardLabel[];
    important: boolean;
}
export interface ITrelloCardLabel {
    id: string;
    name: string;
    color: string;
}
export interface ITrelloChangelog {
    version: IVersionInfo;
    list: ITrelloList;
}
export interface IChangelog {
    version: IVersionInfo;
    sections: {
        [index: number]: ITrelloCard[] | undefined;
    };
    changeCount: number;
}
export declare enum ChangelogSection {
    New = 0,
    Improvements = 1,
    BugFixes = 2,
    Balance = 3,
    Modding = 4,
    Mod = 5,
    Technical = 6,
    Misc = 7
}
export default class Trello implements ITrello {
    getChangelog(versionInfo: IVersionInfo): Promise<IChangelog | undefined>;
    getVersions(maxVersion?: IVersionInfo, board?: ITrelloBoard): Promise<IVersionInfo[]>;
    private getCards;
    private getBoard;
    private getListVersionInfo;
    private findChangelogList;
    private parseChangelog;
}
export declare const trello: Trello;
