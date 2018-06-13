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
import { Block } from "newui/component/Block";
import { UiApi } from "newui/INewUi";
import { IHighscore } from "save/data/ISaveDataGlobal";
export declare class HighscoreRow extends Block {
    private readonly headingPlace;
    private readonly difficulty;
    private readonly deathBy;
    private _highscore;
    highscore: IHighscore | undefined;
    private _place;
    place: number;
    constructor(api: UiApi, highscore?: IHighscore);
    private getName;
    private getPlaceText;
    private getDifficultyTooltip;
    private getDeathby;
    private getScoreText;
    private getTurnsText;
    private getDate;
}