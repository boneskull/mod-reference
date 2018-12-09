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
    private static readonly possibleRequirements;
    /**
     * These are the only items that can be requested to collect
     */
    private static readonly itemCollectWhitelist;
    /**
     * These are the only skills that can be requested to learn
     */
    private static readonly skillLearnWhitelist;
    /**
     * These creatures will always be excluded from the possible creatures to be requested to kill, even if they're spawnable
     */
    private static readonly creatureKillBlacklist;
    constructor();
    protected createRequirements(): IterableIterator<IRequirement<any[], {}> | {
        hidden: boolean;
        type: RequirementType;
        options: [];
        completed: boolean;
        data: {};
    }>;
    private createRandomRequirement;
    private getCreatureToKill;
    private onUpdate;
    private onRequirementComplete;
}
