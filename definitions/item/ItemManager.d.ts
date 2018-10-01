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
import { IDoodad } from "doodad/IDoodad";
import { CraftStatus, IItemTypeGroup, ItemQuality, ItemType, ItemTypeGroup, RequirementInfo, WeightType } from "Enums";
import { ContainerReference, IContainable, IContainer, IItem, IItemArray, IItemDescription } from "item/IItem";
import { IItemManager } from "item/IItemManager";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { INPC } from "npc/INPC";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export default class ItemManager implements IItemManager {
    private readonly worldContainer;
    private cachedWeights;
    private cachedDecaysIntoWeights;
    private cachedDefaultItemForGroup;
    constructor();
    getContainerReference(container: IContainer | undefined, parentObject?: any, showWarnings?: boolean): ContainerReference;
    derefenceContainerReference(containerRef: ContainerReference): object | undefined;
    addToContainerInternal(item: IItem, container: IContainer, movingMultiple?: boolean, skipMessage?: boolean): boolean;
    removeContainerItems(container: IContainer): void;
    remove(item: IItem): void;
    getDisassemblyComponents(description: IItemDescription, quality: ItemQuality | undefined): IItemArray;
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup | IItemTypeGroup>;
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    weightTree(itemType: ItemType, weightType?: WeightType, debug?: boolean, depth?: number): number;
    create(itemType: ItemType, container: IContainer, quality?: ItemQuality): IItem;
    createFake(itemType: ItemType, quality?: ItemQuality): IItem;
    isContainer(obj: IItem | IDoodad | IContainer | ITile | IPlayer): obj is IContainer;
    moveAllFromContainerToInventory(player: IPlayer, container: IContainer, ofQuality?: ItemQuality): IItem[];
    computeContainerWeight(container: IContainer): number;
    getLegendaryWeightCapacity(container: IContainer): number;
    moveAllFromContainerToContainer(player: IPlayer | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | undefined, ofQuality?: ItemQuality | undefined, checkWeight?: boolean, onMoveItem?: (item: IItem) => void): IItem[];
    moveToContainer(player: IPlayer | undefined, item: IItem, container: IContainer): boolean;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove?: IItem): boolean;
    breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    /**
     * Drop items in a 3x3 square around the location
     */
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    spawn(itemTypes: ItemType[] | undefined, x: number, y: number, z: number): void;
    resetMapsInContainer(container: IContainer): void;
    getTileContainer(x: number, y: number, z: number): IContainer;
    getRandomQuality(itemType: ItemType, bonusQuality?: number): ItemQuality;
    hasAdditionalRequirements(player: IPlayer, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): RequirementInfo;
    isItemTypeGroup(itemType: (ItemType | ItemTypeGroup)): itemType is ItemTypeGroup;
    isItemTypeInGroup(itemType: ItemType, itemGroupSearch: ItemTypeGroup): boolean;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup | IItemTypeGroup, article?: boolean, count?: number): Translation;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup): boolean;
    craft(player: IPlayer, itemType: ItemType, itemsToRequire: IItemArray, itemsToConsume: IItemArray, baseItem?: IItem): CraftStatus;
    decayItems(): boolean;
    getPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getNPCWithItemInInventory(containable: IContainable): INPC | undefined;
    countItemsInContainer(containers: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    countItemsInContainerByGroup(containers: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup | IItemTypeGroup, ignoreItem?: IItem): number;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem, excludeProtectedItems?: boolean): IItem | undefined;
    getItemForPlayer(player: IPlayer, search: ItemType | ItemTypeGroup): IItem | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: boolean): IItem | undefined;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemInInventoryByGroup(player: IPlayer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number): IItem | undefined;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    getAdjacentContainers(player: IPlayer, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    isContainableInAdjacentContainer(player: IPlayer, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isInInventory(containable: IContainable): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    getOrderedContainerItems(container: IContainer, excludeProtectedItems?: boolean): IItem[];
    reduceDismantleWeight(createdItems: IItemArray, itemWeight: number, mod?: number): void;
    getItemTranslations(items: IItem[]): IterableIterator<Translation>;
    getItemListTranslation(items: IItem[]): Translation;
    loadReferences(): void;
    saveTileReferences(): void;
    loadTileReferences(): void;
    getDefaultItemFromItemGroup(itemGroup: ItemTypeGroup, weightType?: WeightType): ItemType;
    checkMilestones(player: IPlayer, item: IItem): void;
    getDefaultDurability(): number;
    generateLookups(): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    getQualityBasedOnSkill(itemQuality: ItemQuality | undefined, skillValue: number, qualityBypass?: boolean): ItemQuality | undefined;
    getNPCFromInventoryContainer(container: IContainer): INPC | undefined;
    getItemsByWeight(a: number, b: number): number;
    private updateItemOrderInternal;
    private loadReference;
    private removeFromContainerInternal;
    private updateUiOnItemRemove;
    private getCraftQualityBonus;
    private computeCraftQualityBonus;
    private isCraftSuccessful;
    private getPlayerFromInventoryContainer;
    private getAbsentPlayerFromInventoryContainer;
}
