import { ActionType, BookType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
export declare enum UiMessage {
    AreYouSureYouWantToReleaseCreature = 0,
    AreYouSureYouWantToSail = 1,
    AreYouSureYouWantToSailReturn = 2,
    AreYouSureYouWantToStepOn = 3,
    AreYouSureYouWantToWhileOnFire = 4,
    AutoSaving = 5,
    Cancel = 6,
    DependencyIssue = 7,
    DoNotForgetToAddRequiredModsOnWorkshop = 8,
    FailedToSaveGame = 9,
    FinalizingWorld = 10,
    GeneratingWorld = 11,
    HowDoYouWantToExportSave = 12,
    IncompatibleVersion = 13,
    ItemInCraftMayBeDestroyed = 14,
    ItemMayBeDestroyedOnUse = 15,
    LoadingMods = 16,
    LoadingSprites = 17,
    LoadingWorld = 18,
    LocalFile = 19,
    LocalVersionOfModDetected = 20,
    MissingRequiredMods = 21,
    ModLoadError = 22,
    ModProvidesLanguage = 23,
    ModRequiresItself = 24,
    ModWithNameAlreadyExists = 25,
    MultiplayerBanned = 26,
    MultiplayerConnecting = 27,
    MultiplayerFailedToConnect = 28,
    MultiplayerFailedToLoadMods = 29,
    MultiplayerKicked = 30,
    MultiplayerLostConnection = 31,
    MultiplayerMaxPlayerCountExceeded = 32,
    MultiplayerPlayerGhostOf = 33,
    MultiplayerRetry = 34,
    MultiplayerServerShutdown = 35,
    MultiplayerSynchronizationError = 36,
    MultiplayerUnableToJoinServer = 37,
    MultiplayerUnknownError = 38,
    MultiplayerVersionMismatch = 39,
    No = 40,
    NoGatherAreYouSureYouWantToDestroy = 41,
    Ok = 42,
    PublishingMod = 43,
    QuittingGame = 44,
    RefreshingMods = 45,
    Rejoin = 46,
    Rename = 47,
    RequiredModsMissingWantToContinue = 48,
    RequiredModsNotLoaded = 49,
    Resting = 50,
    ReturnToTitleScreenNoSaveInDailyChallenge = 51,
    ReturnToTitleScreenProgressWillBeSaved = 52,
    SavingGame = 53,
    Sleeping = 54,
    SteamWorkshop = 55,
    TravelAway = 56,
    UnableToImportSave = 57,
    UnableToLoadRequiredMods = 58,
    UpdatingMod = 59,
    VersionWarning = 60,
    WantToDeleteAllSavedData = 61,
    WantToDeleteThisGame = 62,
    WantToPublishThisMod = 63,
    WantToPublishUpdateToMod = 64,
    WantToUninstallThisMod = 65,
    WaterDoesNotNeedDesalination = 66,
    WelcomeToWayward = 67,
    WhatWouldYouLikeToNameThis = 68,
    Yes = 69,
}
export declare enum UiMessageStatic {
    Bleeding = 0,
    Burned = 1,
    Dehydrated = 2,
    DisableHints = 3,
    EnableHints = 4,
    Encumbered = 5,
    EquipmentBack = 6,
    EquipmentBelt = 7,
    EquipmentChest = 8,
    EquipmentFeet = 9,
    EquipmentHands = 10,
    EquipmentHead = 11,
    EquipmentLeftHand = 12,
    EquipmentLeftHandOption = 13,
    EquipmentLegs = 14,
    EquipmentNeck = 15,
    EquipmentRightHand = 16,
    EquipmentRightHandOption = 17,
    EquipmentUse = 18,
    Exhausted = 19,
    Health = 20,
    Healthy = 21,
    HudActions = 22,
    HudCrafting = 23,
    HudEquipment = 24,
    HudFilter = 25,
    HudHelp = 26,
    HudInventory = 27,
    HudMessages = 28,
    HudMilestones = 29,
    HudOptions = 30,
    HudSave = 31,
    HudSkills = 32,
    HudTitleScreen = 33,
    Hunger = 34,
    MenuAbout = 35,
    MenuAboutCredits = 36,
    MenuAboutDonators = 37,
    MenuAboutIntro = 38,
    MenuAboutLibraries = 39,
    MenuAboutLibrariesIntro = 40,
    MenuAboutMessage = 41,
    MenuAboutThanks = 42,
    MenuAboutThanksIntro = 43,
    MenuAboutUnlok = 44,
    MenuChangelog = 45,
    MenuChangelogBalance = 46,
    MenuChangelogBugFixes = 47,
    MenuChangelogImprovements = 48,
    MenuChangelogMessage = 49,
    MenuChangelogMod = 50,
    MenuChangelogModding = 51,
    MenuChangelogNew = 52,
    MenuChangelogTechnical = 53,
    MenuCharacter = 54,
    MenuCharacterAccept = 55,
    MenuCharacterExport = 56,
    MenuCharacterHairColor = 57,
    MenuCharacterHairStyle = 58,
    MenuCharacterHairStyleNext = 59,
    MenuCharacterHairStylePrevious = 60,
    MenuCharacterImport = 61,
    MenuCharacterMessage = 62,
    MenuCharacterSkinColor = 63,
    MenuDailyChallenge = 64,
    MenuDeleteAllGameData = 65,
    MenuDeleteGame = 66,
    MenuEditGame = 67,
    MenuEndGameDead = 68,
    MenuEndGameWon = 69,
    MenuExportGame = 70,
    MenuExportSave = 71,
    MenuHighscores = 72,
    MenuHighscoresAll = 73,
    MenuHighscoresDailyChallenge = 74,
    MenuHighscoresMessage = 75,
    MenuHighscoresNone = 76,
    MenuHighscoresNormal = 77,
    MenuImportGame = 78,
    MenuImportSave = 79,
    MenuJoinGame = 80,
    MenuJoinGameJoin = 81,
    MenuJoinGameMessage = 82,
    MenuJoinGameName = 83,
    MenuJoinGameServer = 84,
    MenuManageMods = 85,
    MenuManageModsDisableAll = 86,
    MenuManageModsEnableAll = 87,
    MenuManageModsInternal = 88,
    MenuManageModsLocal = 89,
    MenuManageModsMessage = 90,
    MenuManageModsPublishMod = 91,
    MenuManageModsUninstallMod = 92,
    MenuManageModsViewInSteamWorkshop = 93,
    MenuManageModsWorkshop = 94,
    MenuModdingGuide = 95,
    MenuNewGame = 96,
    MenuNewGameCustomizationEnable = 97,
    MenuNewGameEditSeed = 98,
    MenuNewGameMessage = 99,
    MenuNewGameName = 100,
    MenuNewGameOptions = 101,
    MenuNewGameOptionsAccept = 102,
    MenuNewGameOptionsCasual = 103,
    MenuNewGameOptionsCasualDescription = 104,
    MenuNewGameOptionsHardcore = 105,
    MenuNewGameOptionsHardcoreDescription = 106,
    MenuNewGameOptionsMessage = 107,
    MenuNewGameSeedPlaceholder = 108,
    MenuNewGameStart = 109,
    MenuNews = 110,
    MenuNoMods = 111,
    MenuOpenLogsFolder = 112,
    MenuOpenModsFolder = 113,
    MenuOptions = 114,
    MenuOptionsMessage = 115,
    MenuPlayGame = 116,
    MenuPlayGameMessage = 117,
    MenuPlayGameNewGame = 118,
    MenuPostATweet = 119,
    MenuQuitGame = 120,
    MenuReloadGame = 121,
    MenuShareOnFacebook = 122,
    MenuToggleDeveloperTools = 123,
    MenuVisitSteamWorkshop = 124,
    NearDeath = 125,
    NextHint = 126,
    OptionsAlternateContextMenu = 127,
    OptionsAlternateContextMenuTooltip = 128,
    OptionsAlternateFont = 129,
    OptionsAlwaysShowMoreInformation = 130,
    OptionsAlwaysShowMoreInformationTooltip = 131,
    OptionsAudio = 132,
    OptionsAutoGather = 133,
    OptionsAutoGatherTooltip = 134,
    OptionsAutoPickup = 135,
    OptionsAutoPickupTooltip = 136,
    OptionsBindDefault = 137,
    OptionsBinds = 138,
    OptionsDeveloper = 139,
    OptionsDeveloperLogging = 140,
    OptionsDeveloperLoggingTooltip = 141,
    OptionsDialogOpacity = 142,
    OptionsDirectionTurnDelay = 143,
    OptionsDirectionTurnDelayTooltip = 144,
    OptionsDropOnGather = 145,
    OptionsDropOnGatherTooltip = 146,
    OptionsDropUnderYourself = 147,
    OptionsDropUnderYourselfTooltip = 148,
    OptionsEffects = 149,
    OptionsEnableHints = 150,
    OptionsEnableHintsTooltip = 151,
    OptionsFullscreenMode = 152,
    OptionsGame = 153,
    OptionsGraphics = 154,
    OptionsKeepSortActive = 155,
    OptionsKeepSortActiveTooltip = 156,
    OptionsKeyBindRebinding = 157,
    OptionsLanguage = 158,
    OptionsMouseClickMovement = 159,
    OptionsMouseClickMovementTooltip = 160,
    OptionsMusic = 161,
    OptionsMute = 162,
    OptionsNextSong = 163,
    OptionsPixelFont = 164,
    OptionsProtectedCraftingItems = 165,
    OptionsProtectedCraftingItemsTooltip = 166,
    OptionsRightClickInspect = 167,
    OptionsRightClickInspectTooltip = 168,
    OptionsSaveData = 169,
    OptionsScaleDefault = 170,
    OptionsScaleIn = 171,
    OptionsScaleOut = 172,
    OptionsScreenshotMode = 173,
    OptionsScreenshotModeTooltip = 174,
    OptionsSkipIntro = 175,
    OptionsSkipIntroTooltip = 176,
    OptionsVisionDither = 177,
    OptionsVisionFade = 178,
    OptionsWarnOnDangerousActions = 179,
    OptionsWarnOnDangerousActionsTooltip = 180,
    OptionsWarnWhenBreakingItems = 181,
    OptionsWarnWhenBreakingItemsOnCraft = 182,
    OptionsWarnWhenBreakingItemsOnCraftTooltip = 183,
    OptionsWarnWhenBreakingItemsTooltip = 184,
    OptionsWindowedMode = 185,
    OptionsWorldTooltips = 186,
    OptionsWorldTooltipsTooltip = 187,
    OptionsZoomIn = 188,
    OptionsZoomOnScroll = 189,
    OptionsZoomOnScrollTooltip = 190,
    OptionsZoomOut = 191,
    Overburdened = 192,
    Poisoned = 193,
    PreviousHint = 194,
    QuickSlot1 = 195,
    QuickSlot2 = 196,
    QuickSlot3 = 197,
    QuickSlot4 = 198,
    QuickSlot5 = 199,
    QuickSlot6 = 200,
    QuickSlot7 = 201,
    QuickSlot8 = 202,
    QuickSlot9 = 203,
    Reputation = 204,
    ReturnToTitleScreen = 205,
    Stamina = 206,
    Starving = 207,
    TabCrafting = 208,
    TabDismantle = 209,
    Thirst = 210,
    Version = 211,
    Weight = 212,
    WindowTitleContainer = 213,
    WindowTitleCrafting = 214,
    WindowTitleEquipment = 215,
    WindowTitleHighscores = 216,
    WindowTitleInventory = 217,
    WindowTitleMap = 218,
    WindowTitleMessages = 219,
    WindowTitleMilestones = 220,
    WindowTitleOptions = 221,
    WindowTitleSkills = 222,
}
export declare enum Dictionary {
    Action = 0,
    Book = 1,
    Corpse = 2,
    Creature = 3,
    Doodad = 4,
    Growth = 5,
    Hint = 6,
    Item = 7,
    KeyBind = 8,
    Message = 9,
    Milestone = 10,
    OnEquip = 11,
    Skill = 12,
    Terrain = 13,
    TileEvent = 14,
    Ui = 15,
    UiStatic = 16,
}
export declare enum GrowthStageTranslation {
    Germinating = 0,
    Seedling = 1,
    Vegetative = 2,
    Budding = 3,
    Flowering = 4,
    Ripening = 5,
    Dead = 6,
    FungusGerminating = 7,
    FungusSpreading = 8,
    FungusForming = 9,
    FungusYoung = 10,
    FungusFruiting = 11,
    FungusFull = 12,
    FungusDead = 13,
}
export interface IStringArray {
    [index: number]: string;
}
export interface INameDescription {
    name: string;
    description?: string;
    prefix?: string;
    suffix?: string;
}
export interface INameDescriptionArray {
    [index: number]: INameDescription;
}
export interface IActionDictionary {
    [index: number]: [string, string];
}
export interface ICorpseDictionary {
    [index: number]: [string, string];
}
export interface ICreatureDictionary {
    [index: number]: [string, string, string] | [string, string];
}
export interface IDoodadDictionary {
    [index: number]: [string, string, string] | [string, string];
}
export interface IGrowthDictionary {
    [index: number]: [string, string];
}
export interface IHintDictionary {
    [index: number]: [string, string];
}
export interface IItemDictionary {
    [index: number]: [string, string, string] | [string, string];
}
export interface IMessageDictionary {
    [index: number]: string;
}
export interface IMilestoneDictionary {
    [index: number]: [string, string];
}
export interface IOnEquipDictionary {
    [index: number]: string;
}
export interface ISkillDictionary {
    [index: number]: [string, string];
}
export interface ITerrainDictionary {
    [index: number]: [string, string];
}
export interface ITileEventDictionary {
    [index: number]: [string, string];
}
export interface IUiDictionary {
    [index: number]: string;
}
export interface IBookDictionary {
    [index: number]: [string, string];
}
export interface ILanguage {
    getName(): string;
    shouldUseAlternateFontStyle(): boolean;
    shouldPluralize(): boolean;
    pluralize(str: string): string;
    addPluralRule(from: string, to: string): void;
    getDictionary(dictionary: Dictionary): INameDescriptionArray;
    setDictionary(dictionary: Dictionary.Action, newEntries: IActionDictionary): void;
    setDictionary(dictionary: Dictionary.Book, newEntries: IBookDictionary): void;
    setDictionary(dictionary: Dictionary.Corpse, newEntries: ICorpseDictionary): void;
    setDictionary(dictionary: Dictionary.Creature, newEntries: ICreatureDictionary): void;
    setDictionary(dictionary: Dictionary.Doodad, newEntries: IDoodadDictionary): void;
    setDictionary(dictionary: Dictionary.Growth, newEntries: IGrowthDictionary): void;
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
        [index: number]: any;
    }): void;
    setDictionaryRaw(dictionary: Dictionary, newEntries: INameDescriptionArray): void;
    setDictionaries(dictionaries: {
        [index: number]: {
            [index: number]: any;
        };
    }): void;
    setEntry(dictionary: Dictionary.Action, entryIndex: ActionType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Book, entryIndex: BookType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Corpse, entryIndex: CreatureType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.Creature, entryIndex: CreatureType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadType, prefix: string, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Doodad, entryIndex: DoodadTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Hint, entryIndex: HintType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemType, prefix: string, name: string, description?: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Message, entryIndex: Message, name: string): void;
    setEntry(dictionary: Dictionary.Milestone, entryIndex: MilestoneType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.OnEquip, entryIndex: OnEquipType, name: string): void;
    setEntry(dictionary: Dictionary.Skill, entryIndex: SkillType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Terrain, entryIndex: TerrainType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.TileEvent, entryIndex: TileEventType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Ui, entryIndex: UiMessageStatic, name: string): void;
    setEntry(dictionary: Dictionary, entryIndex: number, ...entry: string[]): void;
    removeDictionary(dictionary: Dictionary): void;
}
export interface ISelector {
    selector: string | string[];
    html?: boolean;
    attribute?: string;
    func?(translation: string): string;
}
export interface ISelectorArray {
    [index: number]: ISelector;
}
export interface ILanguageExtension {
    [key: string]: INameDescription;
}
