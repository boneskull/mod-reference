import { ActionType, Bindable, DialogId, EquipType, FacingDirection, ItemType, SkillType, SortType } from "Enums";
import { IContainer, IDismantleComponent, IItem, IRecipe } from "item/IItem";
import { Message } from "language/IMessages";
import { BindCatcherApi } from "newui/BindingManager";
import { ITile } from "tile/ITerrain";
import { ISortableEvent } from "ui/functional/IFunctionalSortable";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo } from "ui/IUi";
import BaseScreen from "ui/screens/BaseScreen";
export declare enum TextElementId {
    Weight = 0,
    Attack = 1,
    Defense = 2,
    Reputation = 3,
}
export default class InGameScreen extends BaseScreen {
    overlayBindCatcherId: number;
    shouldResetMovement: boolean;
    shouldCancelSorting: boolean;
    isQuickmoving: boolean;
    elementVisibleInGame: JQuery;
    elementCanvas: JQuery;
    elementStats: JQuery;
    elementStatHealth: JQuery;
    elementStatStamina: JQuery;
    elementStatHunger: JQuery;
    elementStatThirst: JQuery;
    elementStatBurn: JQuery;
    elementStatBleed: JQuery;
    elementStatPoison: JQuery;
    elementAttributeWeight: JQuery;
    elementAttributeAttack: JQuery;
    elementAttributeDefense: JQuery;
    elementAttributeReputation: JQuery;
    elementReputationMalignity: JQuery;
    elementReputationBenignity: JQuery;
    elementQuickSlotsContainer: JQuery;
    elementActions: JQuery;
    elementDialogs: JQuery;
    elementDialogInventory: JQuery;
    elementDialogInventoryContainer: JQuery;
    elementDialogCrafting: JQuery;
    elementDialogCraftingContainer: JQuery;
    elementDialogDismantleContainer: JQuery;
    elementDialogCraftingButton: JQuery;
    elementDialogDismantleButton: JQuery;
    elementDialogEquipment: JQuery;
    elementDialogEquipmentContainer: JQuery;
    elementDialogSkills: JQuery;
    elementDialogSkillsContainer: JQuery;
    elementDialogMilestones: JQuery;
    elementDialogMilestonesContainer: JQuery;
    elementDialogMap: JQuery;
    elementDialogBook: JQuery;
    elementDialogBookContainer: JQuery;
    elementDialogOptions: JQuery;
    elementContainers: JQuery;
    elementVersion: JQuery;
    elementContainerDialogs: JQuery[];
    elementOtherDialogs: JQuery[];
    contextMenuOpen: boolean;
    private readonly touchEvent;
    private mouseX;
    private mouseY;
    private contextMenu;
    private contextMenuTarget;
    private contextMenuBlocking;
    private lastContextMenuPosition;
    private actionsMenuOpen;
    private actionsMenuCentered;
    private activeContainer;
    private multipleContainersOpened;
    private sortableElement;
    private sortableElementPosition;
    private sortableElementTargetContainer;
    private sortingCancelled;
    private onSortableAction;
    private canUseQuickslot;
    private delayState;
    private isCurrentlySorting;
    private craftableItemTypes;
    private nonCraftableItemTypes;
    private worldTooltip;
    private lastStats;
    selector(): string;
    bindElements(): void;
    changeEquipmentOption(id: string): void;
    changeOption(id: string): void;
    toggleCraftingTab(which: "crafting" | "dismantle", canClose?: boolean): void;
    toggleCraftingTabElements(which: "crafting" | "dismantle"): void;
    unbindElements(): void;
    bindSortable(element: JQuery): void;
    pressHotKey(hotKeyNumber: number): boolean;
    useQuickSlot(slot: number): boolean;
    runQuickslot(item: IItem, actionType: ActionType): void;
    isSorting(): boolean;
    runSortableAction(sortable: JQuery, action: string, ...data: any[]): void;
    runGlobalSortableAction(action: string, ...data: any[]): void;
    cancelSorting(): void;
    setupContextMenu(): any;
    hasDelay(): boolean;
    canMove(api: BindCatcherApi): boolean;
    onShow(): void;
    onHide(): void;
    initializeGameState(): void;
    onGameEnd(showDeath: boolean): void;
    getDialogIndex(dialogId: DialogId, customDialogInfo?: IDialogInfo): string;
    setupDialog(dialogId: DialogId, highlightItemId?: number, customDialogInfo?: IDialogInfo): JQueryUI.DialogOptions;
    onMouseMove(event: JQueryEventObject): void;
    highlightItemElementByItemId(itemId: number, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementByItemType(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementByItemTypeWithNoItemId(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementBySelector(selector: string, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    getMovementDirection(mouseX: number, mouseY: number): FacingDirection;
    canUseHotkeys(): boolean;
    refreshStats(): void;
    blurInputs(): void;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    onOpenDialog(): void;
    closeDialog(dialog: JQuery): boolean;
    openMapDialog(): void;
    closeMapDialog(): void;
    openBookDialog(title: string, content: string): void;
    closeAllDialogs(): boolean;
    autoOpenDialog(index: string | number, element: JQuery): boolean;
    openDialogs(): void;
    clampDialogs(): void;
    getItemClass(item?: IItem, itemType?: ItemType): string;
    createItemElementByItemType(itemType: ItemType, item?: IItem): JQuery;
    createItemStringByItemType(itemType: ItemType, extraClass?: string): string;
    createItemElementByItem(item: IItem): JQuery | undefined;
    syncItemElements(itemId: number, selector?: JQuery): void;
    syncDamagedDecayed(item: IItem, element: JQuery): void;
    addItemToContainer(item: IItem, container: IContainer, internal?: boolean, isAddingMultipleItems?: boolean): void;
    insertItemElementToContainer(itemElement: JQuery, containerElement: JQuery): void;
    onAddItemsToContainer(containerElement: JQuery, containerDialogElement: JQuery | undefined, isInventoryContainer: boolean): void;
    afterAddingMultipleItemsToContainer(container: IContainer): void;
    removeItemFromContainer(item: IItem, container: IContainer): void;
    refreshContainerName(container: IContainer): void;
    refreshQuickSlots(): void;
    getInventoryItemsInOrder(): any[];
    loadQuickSlots(): void;
    saveItemOrder(containerElement: JQuery): void;
    showItemContextMenu(element: JQuery): void;
    onContextMenuAction(element: JQuery, action: IContextMenuAction, toElement?: JQuery): boolean;
    runContextMenuAction(itemId: number, containerId: number | undefined, action: IContextMenuAction, skipSound?: boolean): boolean;
    onCraftingItemClick(element: JQuery): void;
    onDismantleItemClick(element: JQuery): void;
    getTooltipHtml(element: JQuery): string | undefined;
    tooltipEnable(): void;
    tooltipRefresh(): void;
    tooltipDisable(): void;
    tooltipHide(): void;
    unSelectElements(): void;
    getTooltipHtmlForItem(item: IItem, itemType: ItemType, isQuickSlot: boolean, isDismantle: string | undefined, isNPC: boolean): string;
    additionalRequirements(itemType: ItemType, recipe: IRecipe): string;
    getTooltipHtmlForTile(tile: ITile): string;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    getUsedQuickSlots(): number[];
    getFreeQuickSlots(): number[];
    getQuickSlotItemElement(quickSlot: number): JQuery;
    getItemIdInQuickSlot(quickSlot: number): number | undefined;
    setQuickSlot(quickSlot: number, itemId?: number, internal?: boolean): boolean;
    setQuickSlotByItemType(quickSlot: number, itemType: ItemType, disabled: boolean): JQuery;
    addItemToFreeQuickSlot(itemId: number): void;
    clearQuickSlot(quickSlot: number, internal?: boolean): void;
    removeItemFromQuickSlot(itemId?: number, skipSync?: boolean): void;
    setItemQuickslot(item: IItem, quickSlot: number | undefined): void;
    updateQuickSlotItem(quickSlot: number): boolean;
    onUpdateQuickSlotsOrEquips(): void;
    onSortableItemReceive(sortableEvent: ISortableEvent): void;
    getEquipSlotItemElement(equip: EquipType): JQuery;
    getItemIdInEquipSlot(equip: EquipType): number | undefined;
    setEquipSlot(equip: EquipType, itemId?: number, internal?: boolean): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    sortSkills(skills: SkillType[]): SkillType[];
    updateSkillsDialog(): void;
    updateMilestonesDialog(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    createCraftItemElements(containerSortInfo: IContainerSortInfo): void;
    updateItem(item: IItem): void;
    onMove(): void;
    refreshWorldTooltips(): void;
    getDialogElementForContainer(container: IContainer): JQuery | undefined;
    isContainerOpen(container: IContainer): boolean;
    openContainer(container: IContainer, containerName?: string): void;
    closeContainer(container: IContainer): void;
    closeContainerDialog(containerDialog?: JQuery): void;
    closeStaticContainers(): void;
    closeAllContainers(): boolean;
    updateContainerName(containerDialogElement: JQuery): void;
    updateActiveContainer(): void;
    hideContextMenu(): boolean;
    hideActionsMenu(): void;
    toggleActionsMenu(center?: boolean): void;
    showActionsMenu(center?: boolean, updatePosition?: boolean, skipSound?: boolean): void;
    onCopySelectedText(): void;
    onFilterInput(containerElement: JQuery): void;
    showSortContextMenu(element: JQuery, container: JQuery, messageType: Message): void;
    getContainerId(containerElement: JQuery): string;
    sortItems(containerElement: JQuery, sortType: SortType, messageType?: Message, canReverse?: boolean): void;
    sortItemElements(itemElements: JQuery, containerSortInfo: IContainerSortInfo): void;
    updateInventorySort(): void;
    onUpdateContainer(containerElement: JQuery, activeSort: boolean): void;
    updateSort(containerElement: JQuery, activeSort: boolean): void;
    isContainerDialogOver(x: number, y: number): boolean;
    onUpdateDirection(): void;
    onBindLoop(api: BindCatcherApi, bindPressed?: boolean | Bindable): boolean | Bindable;
    private runAction(itemId, containerId, action, skipSound?);
    private updateContextMenu(contextMenu);
    private runGatherOrHarvestAction(actionType, action);
    private runPourAction(actionType, item, action);
    private isOverlayVisible();
    private readonly onInterrupt;
    private readonly onInterruptClosed;
    private getHoveredItem(api);
    private quickSlotBindPressed(api, quickSlot, bindable);
    private quickSlotToggleBindPressed(api, itemElement, quickSlot, bindable, wasPressed);
    private determineSort(containerSortInfo, itemIdA, itemTypeA, itemIdB, itemTypeB);
}
