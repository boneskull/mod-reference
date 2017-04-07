import { IUiScreen } from "ui/IUi";
export default class BaseScreen implements IUiScreen {
    element: JQuery;
    visible: boolean;
    constructor();
    selector(): string;
    bindElements(): void;
    unbindElements(): void;
    onGameEnd(showBlocker: boolean): void;
    isVisible(): boolean;
    show(data?: any): void;
    doShow(): void;
    hide(): void;
    doHide(): void;
    protected onShow(data?: any): void;
    protected onHide(): void;
    onMouseDown(event: JQueryEventObject): void;
    onMouseUpOrLeave(event: JQueryEventObject): void;
    onMouseMove(event: JQueryEventObject): void;
    onMouseScroll(event: JQueryEventObject): void;
    onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean | null;
    onKeyUp(event: JQueryEventObject): boolean | null;
}