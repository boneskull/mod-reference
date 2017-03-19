import { IBindArray, IKeyBind, IModBindArray } from "Enums";
export interface IOptions {
    alternateContextMenu: boolean;
    autoGather: boolean;
    autoPickup: boolean;
    binds: IBindArray;
    currentGame: number;
    developerLogging: boolean;
    dialogOpacity: number;
    dropOnGather: boolean;
    dropUnderYourself: boolean;
    effects: number;
    fontStyle: boolean;
    hints: boolean;
    keepSortActive: boolean;
    leftHand: boolean;
    modBinds: IModBindArray;
    mouseMovement: boolean;
    music: number;
    mute: boolean;
    protectedCraftingItems: boolean;
    rightHand: boolean;
    screenshotMode: boolean;
    skipIntro: boolean;
    visionMode: boolean;
    warnOnDangerousActions: boolean;
    warnWhenBreakingItems: boolean;
    windowMode: boolean;
    worldTooltips: boolean;
    zoomFactor: number;
    zoomLevel: number;
    zoomOnScroll: boolean;
}
export default IOptions;
export declare type IOptionsOld = Partial<IOptions> & {
    keyBinds: IKeyBind;
};
