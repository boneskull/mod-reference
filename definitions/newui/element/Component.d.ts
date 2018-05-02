import { IComponent, IComponentOptions, IContextMenu, ITooltipOptionsVague, SelectableLayer } from "newui/element/IComponent";
import { UiApi } from "newui/INewUi";
import { AttributeManipulator, ClassListManipulator } from "newui/util/ElementManipulator";
import Emitter from "utilities/Emitter";
export default class Component extends Emitter implements IComponent {
    protected uiApi: UiApi;
    static findDescendants(inElement: IComponent | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    static getSelectableLayer(element: IComponent | HTMLElement): number | false;
    static append(elementToMove: string | IComponent | HTMLElement, placeToAppendTo: string | IComponent | HTMLElement): Promise<void>;
    private static removeFromParent(elementToRemove);
    static remove(elementToRemove: string | IComponent | HTMLElement): Promise<void>;
    readonly classes: ClassListManipulator<this>;
    readonly attributes: AttributeManipulator<this>;
    readonly element: HTMLElement;
    readonly data: DOMStringMap;
    readonly childCount: number;
    readonly scrollHeight: number;
    readonly style: CSSStyleDeclaration;
    protected children: Component[];
    protected parent: Component;
    private readonly internalElement;
    private scrollingChild?;
    private readonly _data;
    private _tooltipOptions?;
    private contextMenuGenerator?;
    selectable: SelectableLayer | false;
    constructor(uiApi: UiApi, options?: IComponentOptions);
    jsonData<T>(): DOMStringMap & T;
    isVisible(): boolean;
    show(...args: any[]): Promise<void>;
    hide(...args: any[]): Promise<void>;
    toggle(visible?: boolean, ...args: any[]): Promise<void>;
    appendTo(where: string | HTMLElement | IComponent): this;
    append(...elements: ArrayOfTOrIterablesOfT<HTMLElement | IComponent | undefined>): this;
    remove(): Promise<void>;
    contains(what: string | HTMLElement | IComponent): boolean;
    dump(filter?: (element: Component) => boolean): Promise<void>;
    setContents(html: string, escape?: boolean): this;
    store(): void;
    findDescendants(selector: string): NodeListOf<Element>;
    showTooltip(): Promise<void>;
    setTooltip(tooltipOptions?: ITooltipOptionsVague): void;
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): void;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: () => IContextMenu): void;
    getBox(): ClientRect | DOMRect;
    getOffset(): {
        top: number;
        left: number;
    };
    getNthChild(nth?: number): Component;
    getChildren(): Component[];
    scrollTo(child: Component, ms?: number): void;
    getStyle(styleName: string): string;
    schedule(cb: (this: this, button: this) => any, ...args: any[]): this;
    schedule(ms: number, cb: (this: this, button: this) => any, ...args: any[]): this;
    repaint(): void;
    collect<T>(collector: (component: IComponent) => T): T;
    private initializeTooltip();
    private onBindLoopForContextMenu(_, api);
}
