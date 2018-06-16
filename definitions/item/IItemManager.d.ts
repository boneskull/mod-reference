import { IDoodad } from "doodad/IDoodad";
import { CraftStatus, IItemTypeGroup, ItemQuality, ItemType, ItemTypeGroup, RequirementInfo, SentenceCaseStyle, WeightType } from "Enums";
import { ContainerReference, IContainable, IContainer, IItem, IItemArray, IItemDescription } from "item/IItem";
import { Message } from "language/IMessages";
import { INPC } from "npc/INPC";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import { IVector3 } from "utilities/math/IVector";
import { IStringSection } from "utilities/string/Interpolator";
export interface IItemManager {
    addToContainerInternal(item: IItem, container: IContainer, movingMultiple: boolean, skipMessage?: boolean): boolean;
    breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    checkMilestones(player: IPlayer, item: IItem): void;
    computeContainerWeight(container: IContainer): number;
    countItemsInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    countItemsInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup | IItemTypeGroup, ignoreItem?: IItem): number;
    craft(player: IPlayer, itemType: ItemType, itemsToRequire: IItemArray, itemsToConsume: IItemArray, baseItem?: IItem): CraftStatus;
    create(itemType: ItemType, container: IContainer, quality?: ItemQuality, fake?: boolean): IItem;
    createFake(itemType: ItemType, quality?: ItemQuality): IItem;
    decayItems(): boolean;
    derefenceContainerReference(containerRef: ContainerReference): object | undefined;
    generateLookups(): void;
    getAdjacentContainers(point: IVector3, includeNpcs?: boolean): IContainer[];
    getContainerReference(container: IContainer, parentObject?: any, showWarnings?: boolean): ContainerReference;
    getDefaultDurability(): number;
    getDefaultItemFromItemGroup(itemGroup: ItemTypeGroup): ItemType;
    getDisassemblyComponents(description: IItemDescription, quality: ItemQuality | undefined): IItemArray;
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup | IItemTypeGroup>;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): IItem | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: boolean): IItem | undefined;
    getItemInInventoryByGroup(player: IPlayer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, excludeProtectedItems?: boolean): IItem | undefined;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, excludeProtectedItems?: boolean): IItemArray;
    getItemsString(items: IItemArray, sentenceCase?: SentenceCaseStyle): string;
    getItemsString(items: IItemArray, sentenceCase: SentenceCaseStyle | undefined, html: true, includeAnd?: boolean): string;
    getItemsString(items: IItemArray, sentenceCase: SentenceCaseStyle | undefined, html: false, includeAnd?: boolean): IStringSection[];
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup | IItemTypeGroup, prefix?: boolean, sentenceCaseStyle?: SentenceCaseStyle): string;
    getLegendaryWeightCapacity(container: IContainer): number;
    getNPCFromInventoryContainer(container: IContainer): INPC | undefined;
    getNPCWithItemInInventory(containable: IContainable): INPC | undefined;
    getOrderedContainerItems(container: IContainer, excludeProtectedItems?: boolean): IItem[];
    getPlayerWithItemInInventory(containable: IContainable): IPlayer | undefined;
    getQualityBasedOnSkill(itemQuality: ItemQuality | undefined, skillValue: number, qualityBypass?: boolean): ItemQuality | undefined;
    getRandomQuality(itemType: ItemType, bonusQuality?: number): ItemQuality;
    getTileContainer(x: number, y: number, z: number): IContainer;
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    hasAdditionalRequirements(player: IPlayer, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): RequirementInfo;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove?: IItem): boolean;
    isContainableInAdjacentContainer(player: IPlayer, containable: IContainable, includeNpcs?: boolean): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    isContainer(obj: IItem | IDoodad | IContainer | ITile): obj is IContainer;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup): boolean;
    isInInventory(containable: IContainable): boolean;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    isItemTypeGroup(itemType: (ItemType | ItemTypeGroup)): itemType is ItemTypeGroup;
    isItemTypeInGroup(itemType: ItemType, itemGroupSearch: ItemTypeGroup): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    loadReferences(): void;
    loadTileReferences(): void;
    moveAllFromContainerToContainer(player: IPlayer | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType, ofQuality?: ItemQuality, checkWeight?: boolean, onMoveItem?: (item: IItem) => void): void;
    moveAllFromContainerToInventory(player: IPlayer, container: IContainer, ofQuality?: ItemQuality): void;
    moveToContainer(player: IPlayer | undefined, item: IItem, container: IContainer): boolean;
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    reduceDismantleWeight(createdItems: IItemArray, itemWeight: number, mod?: number): void;
    remove(item: IItem): void;
    removeContainerItems(container: IContainer): void;
    resetMapsInContainer(container: IContainer): void;
    saveTileReferences(): void;
    spawn(itemTypes: ItemType[] | undefined, x: number, y: number, z: number): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
}
export default IItemManager;
