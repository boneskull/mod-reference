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
import { IDamageInfo } from "creature/ICreature";
import BaseEntity from "entity/BaseEntity";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { Delay, EquipType, ItemQuality, ItemType, PlayerState, RestCancelReason, SkillType, StatType } from "Enums";
import { IContainer, IItem } from "item/IItem";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { MilestoneType } from "player/IMilestone";
import { IAttackHand, IMobCheck, IPlayerCustomization, IRestData } from "player/IPlayer";
import MessageManager from "player/MessageManager";
import NoteManager from "player/NoteManager";
import PlayerDefense from "player/PlayerDefense";
import { ISkillSet } from "player/Skills";
export declare const REPUTATION_MAX = 64000;
export default abstract class BaseHumanEntity extends BaseEntity implements IBaseHumanEntity {
    attackFromEquip: IAttackHand;
    customization: IPlayerCustomization;
    deathBy: import("../language/Translation").ISerializedTranslation;
    defense: PlayerDefense;
    defenses: number[];
    equipped: {
        [index: number]: number;
    };
    handToUse: EquipType;
    identifier: string;
    inventory: IContainer;
    lightBonus: number;
    messages: MessageManager;
    notes: NoteManager;
    options: import("../save/data/ISaveDataGlobal").IOptions;
    raft: number | undefined;
    restData: IRestData | undefined;
    score: number;
    skills: ISkillSet;
    state: PlayerState;
    swimming: boolean;
    canSendMessage: boolean;
    protected _nextProcessInput: number;
    protected _fovRadius: number;
    protected _fovMaxRadius: number;
    constructor();
    resetStatTimers(): void;
    isLocalPlayer(): boolean;
    getName(): Translation;
    getSkillCore(skill: SkillType): number;
    setSkillCore(skill: SkillType, value: number): void;
    getSkill(skill: SkillType): number;
    skillCheck(skill: SkillType, check: number): boolean;
    isResting(): boolean;
    isGhost(): boolean;
    isRestingCancelled(): boolean;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): boolean;
    createItemInInventory(itemType: ItemType, quality?: ItemQuality): IItem;
    hasHandToUse(): boolean;
    getHandToUse(): EquipType | undefined;
    damageRandomEquipment(): void;
    getDamageModifier(): number;
    damage(damageInfoOrAmount: IDamageInfo | number, damageMessage?: Message | Translation, soundDelay?: number, causesBlood?: boolean): number | undefined;
    getEquippedItems(): IItem[];
    getEquippedItem(slot: EquipType): IItem | undefined;
    getEquipSlotForItem(item: IItem): EquipType | undefined;
    getMaxHealth(): number;
    addMilestone(milestone: MilestoneType, data?: number): void;
    update(): void;
    updateStatsAndAttributes(): void;
    staminaReduction(skill: SkillType): void;
    updateReputation(reputation: number): void;
    setRaft(itemId: number | undefined): boolean;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    checkForTargetInRange(range: number, includePlayers?: boolean): IMobCheck;
    checkAndRemoveBlood(): boolean;
    getBurnDamage(skipParry?: boolean, equipType?: EquipType): number;
    /**
     * Burn the player
     */
    burn(skipMessage?: boolean, skipParry?: boolean, equipType?: EquipType, fromCombat?: boolean): number | undefined;
    checkUnder(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean, forcePickUp?: boolean, skipDoodadEvents?: boolean): void;
    equip(item: IItem, slot: EquipType): void;
    unequip(item: IItem): void;
    hasDelay(): boolean;
    addDelay(delay: Delay, replace?: boolean): void;
    /**
     * Improve one of the core player stats
     */
    protected statGain(stat: StatType, bypass: boolean): void;
    protected calculateStats(): void;
    protected resetDefense(): void;
    protected calculateEquipmentStats(): void;
    protected swimCheck(): void;
    protected updateSwimming(): void;
}
