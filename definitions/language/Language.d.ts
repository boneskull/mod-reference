import { ActionType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Dictionary, ILanguage, INameDescriptionArray, UiMessageStatic } from "language/ILanguage";
import { IActionDictionary, ICreatureDictionary, IDoodadDictionary, IHintDictionary, IItemDictionary, IMessageDictionary, IMilestoneDictionary, IOnEquipDictionary, ISkillDictionary, ITerrainDictionary, ITileEventDictionary, IUiDictionary } from "language/ILanguage";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
export default class Language implements ILanguage {
    private name;
    private alternateFontStyle;
    private _shouldPluralize;
    private dictionaries;
    constructor(name: string, alternateFontStyle?: boolean, shouldPluralize?: boolean);
    getName(): string;
    shouldUseAlternateFontStyle(): boolean;
    shouldPluralize(): boolean;
    pluralize(str: string): string;
    addPluralRule(from: string, to: string): void;
    onPrefix: (prefix: string) => string;
    getDictionary(dictionary: Dictionary): INameDescriptionArray;
    setDictionary(dictionary: Dictionary.Action, newEntries: IActionDictionary): void;
    setDictionary(dictionary: Dictionary.Creature, newEntries: ICreatureDictionary): void;
    setDictionary(dictionary: Dictionary.Doodad, newEntries: IDoodadDictionary): void;
    setDictionary(dictionary: Dictionary.Hint, newEntries: IHintDictionary): void;
    setDictionary(dictionary: Dictionary.Item, newEntries: IItemDictionary): void;
    setDictionary(dictionary: Dictionary.Message, newEntries: IMessageDictionary): void;
    setDictionary(dictionary: Dictionary.Milestone, newEntries: IMilestoneDictionary): void;
    setDictionary(dictionary: Dictionary.OnEquip, newEntries: IOnEquipDictionary): void;
    setDictionary(dictionary: Dictionary.Skill, newEntries: ISkillDictionary): void;
    setDictionary(dictionary: Dictionary.Terrain, newEntries: ITerrainDictionary): void;
    setDictionary(dictionary: Dictionary.TileEvent, newEntries: ITileEventDictionary): void;
    setDictionary(dictionary: Dictionary.Ui, newEntries: IUiDictionary): void;
    setDictionary(dictionary: Dictionary, newEntries: {
        [key: number]: any;
    }): void;
    setDictionaryRaw(dictionary: Dictionary, newEntries: INameDescriptionArray): void;
    setDictionaries(dictionaries: {
        [key: number]: {
            [key: number]: any;
        };
    }): void;
    setEntry(dictionary: Dictionary.Action, entryIndex: ActionType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Creature, entryIndex: CreatureType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Corpse, entryIndex: CreatureType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Hint, entryIndex: HintType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Message, entryIndex: Message, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Milestone, entryIndex: MilestoneType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.OnEquip, entryIndex: OnEquipType, name: string): void;
    setEntry(dictionary: Dictionary.Skill, entryIndex: SkillType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Terrain, entryIndex: TerrainType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.TileEvent, entryIndex: TileEventType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Ui, entryIndex: UiMessageStatic, name: string): void;
    setEntry(dictionary: Dictionary, entryIndex: number, ...entry: string[]): void;
    private formatEntry(dictionary, entry);
}
