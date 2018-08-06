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
import Component from "newui/component/Component";
import { ITooltip, TooltipLocation } from "newui/component/IComponent";
import Text, { Paragraph } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
export default class Tooltip extends Component implements ITooltip {
    private readonly source;
    readonly location: TooltipLocation;
    cache: boolean;
    constructor(api: UiApi, source: Component);
    setLocation(location: TooltipLocation): this;
    setMaxWidth(maxWidth: number): this;
    setNoCache(): this;
    addText(initializer: (text: Text) => any): this;
    addHeading(initializer: (text: Text) => any): this;
    addParagraph(initializer: (text: Paragraph) => any): this;
    updatePosition(position?: {
        x: number;
        y: number;
    }): this;
    private onShow;
    private onHide;
    private onMouseMove;
}
