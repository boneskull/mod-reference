import UiText, { Paragraph, TextOptions } from "newui/element/Text";
import UiElement from "newui/element/UiElement";
import { TooltipLocation, TooltipOptionsVague, UiApi } from "newui/INewUi";
export interface TooltipOptions extends TooltipOptionsVague {
    create?(tooltip: Tooltip): Promise<void>;
}
export interface TooltipData {
    tooltipLocation: keyof typeof TooltipLocation;
}
export default class Tooltip<T = {}> extends UiElement<TooltipData & T> {
    private readonly source;
    location: TooltipLocation;
    constructor(uiApi: UiApi, source: UiElement, tooltipOptions: TooltipOptions);
    addText(options: TextOptions): UiText<{}>;
    addHeading(options: TextOptions): UiText<{}>;
    addParagraph(...textOptionsArr: TextOptions[]): Paragraph<{}>;
    update(): void;
    updatePosition(position?: {
        x: number;
        y: number;
    }): void;
}