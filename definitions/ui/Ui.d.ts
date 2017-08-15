import { BindType, DialogId, EquipType, IBind, IMessagePack, ItemType, KeyBind, LoadingType, ScreenId, SentenceCaseStyle, StatType, TitleScreenId } from "Enums";
import { IContainer, IDismantleComponent, IItem } from "item/IItem";
import { UiMessage } from "language/ILanguage";
import { Message, MessageType } from "language/Messages";
import { IPlayer } from "player/IPlayer";
import "ui/functional/FunctionalSortable";
import "ui/functional/FunctionalTooltip";
import { HintType } from "ui/IHint";
import { IDialogInfo, IUi } from "ui/IUi";
export default class Ui implements IUi {
    private keyCodeCache;
    private bindState;
    private rebindingKey;
    private rebindingKeyElement;
    private elementDocument;
    private elementWindow;
    private elementBody;
    private elementScrollableContainers;
    private screen;
    private screenId;
    private screenLoading;
    private screenOptions;
    private screenConfirm;
    private screenInput;
    private screenHelp;
    private screenInGame;
    private screenTitle;
    private objectUrl;
    constructor();
    initialize(): void;
    initializeGameState(): void;
    setupButtons(): void;
    getBody(): JQuery;
    getWidth(): number;
    getHeight(): number;
    removeStyle(id: string): void;
    appendStyle(id: string, styleContent: string): void;
    setRangeValue(id: string, value: number): void;
    setCheckboxValue(element: JQuery, id: string, checked: boolean): void;
    playClickSound(): void;
    switchToScreen(screenId: ScreenId, titleScreenId?: TitleScreenId, data?: any): void;
    setLoadingType(loadingType: LoadingType): void;
    showLoadingScreen(loadingType?: LoadingType, message?: UiMessage, fadeAudio?: boolean): void;
    setLoadingMessage(message: UiMessage): void;
    showLoadingScreenAround(func: () => void): void;
    showLoadingScreenAround(message: UiMessage, func: () => void): void;
    hideLoadingScreen(immediately?: boolean): void;
    toggleOptions(): void;
    showOptionsScreen(): void;
    hideOptionsScreen(): void;
    onWindowResize(): void;
    resetHelpHeight(): void;
    updateWindowMode(): void;
    onUpdateWindowMode(): void;
    launchFullScreen(): void;
    cancelFullscreen(): void;
    isInGameScreenShown(): boolean;
    isTitleScreenShown(): boolean;
    onMouseDown(event: JQueryEventObject): void;
    onMouseUpOrLeave(event: JQueryEventObject): void;
    onMouseMove(event: JQueryEventObject): void;
    onMouseScroll(event: JQueryEventObject): void;
    onKeyDown(event: JQueryEventObject): void;
    onKeyUp(event: JQueryEventObject): void;
    setRebindingKey(key: KeyBind | undefined, element: JQuery | undefined): void;
    getRebindingKeyElement(): JQuery | undefined;
    isBindDown(key: KeyBind): boolean;
    getBindDownTime(key: KeyBind): number | undefined;
    isBindPressed(key: KeyBind, pressedBind: IBind): boolean;
    getBind(key: KeyBind): IBind;
    getKeyBindFromKeyCode(keyCode: number): KeyBind | undefined;
    getKeyBind(key: KeyBind): number | undefined;
    getMouseBind(key: KeyBind): number | undefined;
    setBind(key: KeyBind, value: number, type: BindType): void;
    clearBind(key: KeyBind): void;
    getStringForKeyBind(key: KeyBind): string;
    getMousePositionFromMouseEvent(event: any): {
        x: number;
        y: number;
    };
    setupItemBackgrounds(): void;
    refreshStats(): void;
    shakeStat(stat: StatType): void;
    refreshAttributes(): void;
    loadQuickSlots(): void;
    isContextMenuOpen(): boolean;
    isOverlayShown(): boolean;
    isConfirmOverlayShown(): boolean;
    isInputOverlayShown(): boolean;
    isOptionsOverlayShown(): boolean;
    isHelpOverlayShown(): boolean;
    isLoadingScreenShown(): boolean;
    isConfirmOverlayEnabled(): boolean;
    isInputOverlayEnabled(): boolean;
    isHelpOverlayEnabled(): boolean;
    isOptionsOverlayEnabled(): boolean;
    showTitleScreen(): void;
    refreshSlots(): void;
    displayConfirmDialog(message: string | UiMessage, buttons: UiMessage[], callback?: (selection: UiMessage) => void, force?: boolean): void;
    displayInputDialog(message: UiMessage, buttonText: UiMessage, inputText: string, placeholder: string, callback?: (input: string) => void): void;
    displayHint(player: IPlayer | undefined, hintType: HintType, force?: boolean): void;
    displayChatMessage(player: IPlayer, message: string): void;
    getCurrentHint(): HintType;
    setCurrentHint(hintType: HintType): void;
    isMouseMovementBlockerVisible(): boolean;
    updateMultiplayerElements(isConnected: boolean): void;
    toggleHelp(): void;
    hideHelpScreen(): void;
    tooltipRefresh(): void;
    refreshWorldTooltips(): void;
    messageIdToText(message: Message): string;
    getMessageHtml(messagePack: IMessagePack, tag?: string, textCase?: SentenceCaseStyle, log?: boolean, addedClass?: string): string;
    displayMessage(player: IPlayer | IPlayer[] | undefined, message: Message | string, messageType?: MessageType, ...args: any[]): void;
    displayMessagePack(player: IPlayer | IPlayer[] | undefined, messagePack: IMessagePack): void;
    getMessageCount(): number;
    removeOldestMessage(): void;
    updateMilestonesDialog(): void;
    updateSkillsDialog(): void;
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    getInventoryItemOrder(): any[];
    updateItem(item: IItem): void;
    hideActionsMenu(): void;
    openMapDialog(): void;
    closeMapDialog(): void;
    setFontStyle(): void;
    setOpacity(): void;
    updateKeybind(key: KeyBind, element: JQuery): void;
    addOptionsSection(translationId: string): JQuery;
    removeOptionsSection(options: JQuery): void;
    addButton(translationId: string, imagePath: string, keyBind?: number): JQuery;
    refreshButtonTooltip(button: JQuery): void;
    removeButton(button: JQuery): void;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    closeDialog(dialog: JQuery): boolean;
    setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
    setQuickSlot(quickSlot: number, itemId: number, internal?: boolean): void;
    refreshQuickSlots(): void;
    removeItemFromQuickSlot(itemId: number): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    isManageModsVisible(): boolean;
    refreshModManager(): any;
    setObjectUrl(objectUrl: string): void;
    runHotKeys(): void;
    pressHotKey(hotKeyNumber: number): boolean;
    onGameEnd(showBlocker: boolean): void;
    onUpdateDirection(): void;
    highlight(selector?: string[] | undefined, onlyFirstElement?: boolean, timeout?: number): void;
    toggleUIDisplay(): void;
    getSerializationProperties(_: string): string[];
    onMove(): void;
    openContainer(container: IContainer, containerName?: string): void;
    closeContainer(container: IContainer): void;
    isContainerOpen(container: IContainer): boolean;
    addItemToContainer(item: IItem, container: IContainer, internal?: boolean, isAddingMultipleItems?: boolean): void;
    afterAddingMultipleItemsToContainer(container: IContainer): void;
    removeItemFromContainer(item: IItem, container: IContainer): void;
    updateInventorySort(): void;
    getDialogInfo(dialogId: DialogId): IDialogInfo;
    setVersionExtra(msg: string): void;
    openDialogs(): void;
    updateScrollableContainersList(): void;
    updateScrollableContainer(this: Element): void;
    private updatePlayerBindState(keyCode);
    private updateBindCache(key);
    private updateBindTranslation(key);
}
