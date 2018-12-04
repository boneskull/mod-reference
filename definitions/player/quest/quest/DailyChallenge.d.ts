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
import { Quest } from "player/quest/quest/Quest";
import { IRequirement, RequirementType } from "player/quest/requirement/IRequirement";
export default class DailyChallenge extends Quest {
    constructor();
    protected createRequirements(): IterableIterator<IRequirement<any[], {}> | {
        hidden: boolean;
        type: RequirementType;
        options: [];
        completed: boolean;
        data: {};
    }>;
    private onUpdate;
}
