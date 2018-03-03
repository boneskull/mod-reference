import { ActionType, BookType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Message } from "language/Messages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
/**
 * Choices for interrupts
 */
export declare enum InterruptChoice {
    Retry = 0,
    Cancel = 1,
    No = 2,
    Ok = 3,
    Rejoin = 4,
    Rename = 5,
    Yes = 6,
    SteamWorkshop = 7,
    LocalFile = 8,
}
/**
 * Ui messages that are on elements that don't change
 */
export declare enum UiTranslation {
    GameActionGather = 0,
    GameQualityExceptional = 1,
    GameQualityRemarkable = 2,
    GameQualityLegendary = 3,
    GameDamageTypeBlunt = 4,
    GameDamageTypeSlashing = 5,
    GameDamageTypePiercing = 6,
    GameDamageTypeFire = 7,
    GameInterruptItemMayBeDestroyedInCraft = 8,
    GameInterruptItemMayBeDestroyedInCraftDescription = 9,
    GameInterruptItemMayBeDestroyedOnUse = 10,
    GameInterruptItemMayBeDestroyedOnUseDescription = 11,
    GameInterruptLoadingQuitting = 12,
    GameInterruptLoadingQuittingDescription = 13,
    GameInterruptLoadingSaving = 14,
    GameInterruptLoadingSavingDescription = 15,
    GameInterruptReleaseCreature = 16,
    GameInterruptReleaseCreatureDescription = 17,
    GameInterruptRenameCreature = 18,
    GameInterruptRenameCreatureDescription = 19,
    GameInterruptRenameDoodad = 20,
    GameInterruptRenameDoodadDescription = 21,
    GameInterruptRenameItem = 22,
    GameInterruptRenameItemDescription = 23,
    GameInterruptReturnToTitleScreen = 24,
    GameInterruptReturnToTitleScreenDailyChallenge = 25,
    GameInterruptReturnToTitleScreenDailyChallengeDescription = 26,
    GameInterruptReturnToTitleScreenDescription = 27,
    GameInterruptReturnToTitleScreenDead = 28,
    GameInterruptReturnToTitleScreenDeadDescription = 29,
    GameInterruptLoadingWorld = 30,
    GameInterruptLoadingWorldDescription = 31,
    GameInterruptLoadingGeneratingWorld = 32,
    GameInterruptLoadingGeneratingWorldDescription = 33,
    GameInterruptLoadingFinalizingWorld = 34,
    GameInterruptLoadingFinalizingWorldDescription = 35,
    GameInterruptSailAwayEnd = 36,
    GameInterruptSailAwayEndDescription = 37,
    GameInterruptSailAwayReturnable = 38,
    GameInterruptSailAwayReturnableDescription = 39,
    GameInterruptTravelAway = 40,
    GameInterruptTravelAwayDescription = 41,
    GameInterruptLoadingResting = 42,
    GameInterruptLoadingRestingDescription = 43,
    GameInterruptLoadingSleeping = 44,
    GameInterruptLoadingSleepingDescription = 45,
    GameInterruptLoadingTraveling = 46,
    GameInterruptLoadingTravelingDescription = 47,
    GameInterruptLoadingLostGLContext = 48,
    GameInterruptLoadingAutoSaving = 49,
    GameInterruptLoadingAutoSavingDescription = 50,
    GameInterruptLoadingLostGLContextDescription = 51,
    GameInterruptLoadingMods = 52,
    GameInterruptLoadingModsDescription = 53,
    GameInterruptLoadingMultiplayerPlayerConnecting = 54,
    GameInterruptLoadingMultiplayerSyncing = 55,
    GameInterruptDangerousStep = 56,
    GameInterruptDangerousStepDescription = 57,
    GameInterruptSaveFailure = 58,
    GameInterruptSaveFailureDescription = 59,
    GameInterruptDesalinationNoNeed = 60,
    GameInterruptDesalinationNoNeedDescription = 61,
    GameInterruptConfirmationActionOnFire = 62,
    GameInterruptConfirmationActionOnFireDescription = 63,
    GameInterruptConfirmationDestroyOnGather = 64,
    GameInterruptConfirmationDestroyOnGatherDescription = 65,
    GameInterruptLoadingGame = 66,
    GameInterruptLoadingGameDescription = 67,
    GameInterruptLoadingSprites = 68,
    GameInterruptLoadingSpritesDescription = 69,
    GameInterruptMultiplayerSynchronizing = 70,
    GameInterruptMultiplayerSynchronizingDescription = 71,
    GameMultiplayerInterruptBanned = 72,
    GameMultiplayerInterruptConnecting = 73,
    GameMultiplayerInterruptConnectingDescription = 74,
    GameMultiplayerInterruptFailedToConnect = 75,
    GameMultiplayerInterruptFailedToLoadMods = 76,
    GameMultiplayerInterruptKicked = 77,
    GameMultiplayerInterruptLostConnection = 78,
    GameMultiplayerInterruptServerShutdown = 79,
    GameMultiplayerInterruptSynchronizationError = 80,
    GameMultiplayerInterruptSynchronizationErrorDescription = 81,
    GameMultiplayerInterruptUnableToJoinGame = 82,
    GameMultiplayerInterruptUnableToJoinGameBuildMismatch = 83,
    GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier = 84,
    GameMultiplayerInterruptUnableToJoinGameServerFull = 85,
    GameMultiplayerInterruptUnableToJoinGameUnknownError = 86,
    GameMultiplayerInterruptUnableToJoinGameVersionMismatch = 87,
    MenuAboutTitle = 88,
    MenuAboutDescription = 89,
    MenuAboutGameDescription = 90,
    MenuAboutSectionTeam = 91,
    MenuAboutTeamMemberResponsibilities = 92,
    MenuAboutTeamMemberResponsibilityProgramming = 93,
    MenuAboutTeamMemberResponsibilityDesign = 94,
    MenuAboutTeamMemberResponsibilityWeb = 95,
    MenuAboutTeamMemberResponsibilityArt = 96,
    MenuAboutTeamMemberResponsibilityPR = 97,
    MenuAboutTeamMemberResponsibilityUX = 98,
    MenuAboutTeamMemberResponsibilityMusic = 99,
    MenuAboutTeamMemberName = 100,
    MenuAboutTeamMemberNickname = 101,
    MenuAboutSectionContributors = 102,
    MenuAboutSectionSpecialThanks = 103,
    MenuAboutTextSpecialThanksTestorsAndDonators = 104,
    MenuAboutSectionLibraries = 105,
    MenuAboutSectionLibrariesDescription = 106,
    MenuChangelogTitle = 107,
    MenuChangelogDescription = 108,
    MenuChangelogSectionBalance = 109,
    MenuChangelogSectionBugFixes = 110,
    MenuChangelogSectionImprovements = 111,
    MenuChangelogSectionMod = 112,
    MenuChangelogSectionModding = 113,
    MenuChangelogSectionNew = 114,
    MenuChangelogSectionTechnical = 115,
    MenuChangelogHeadingFailedLoad = 116,
    MenuChangelogHeadingChangeCount = 117,
    MenuChangelogInterruptLoadingChangelog = 118,
    MenuChangelogInterruptLoadingChangelogDescription = 119,
    MenuCharacterCreationButtonExportTooltip = 120,
    MenuCharacterCreationButtonImportTooltip = 121,
    MenuCharacterCreationButtonStartGame = 122,
    MenuCharacterCreationButtonJoinGame = 123,
    MenuCharacterCreationDescription = 124,
    MenuCharacterCreationHeadingHairColor = 125,
    MenuCharacterCreationHeadingHairStyle = 126,
    MenuCharacterCreationHeadingSkinTone = 127,
    MenuCharacterCreationLabelName = 128,
    MenuCharacterCreationTitle = 129,
    MenuCharacterCreationInterruptImportCharacterFailure = 130,
    MenuCharacterCreationInterruptImportCharacterFailureDescription = 131,
    MenuCharacterCreationButtonRotateLeftTooltip = 132,
    MenuCharacterCreationButtonRotateRightTooltip = 133,
    MenuCharacterCreationButtonRandomizeTooltip = 134,
    MenuCharacterSelectionButtonNewCharacter = 135,
    MenuCharacterSelectionCharacterSortLastUse = 136,
    MenuCharacterSelectionCharacterSortName = 137,
    MenuCharacterSelectionCharacterSortUseCount = 138,
    MenuCharacterSelectionDescription = 139,
    MenuCharacterSelectionHeadingNoCharacters = 140,
    MenuCharacterSelectionTitle = 141,
    MenuCharacterSelectionLabelLastUse = 142,
    MenuCharacterSelectionLabelUseCount = 143,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 144,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 145,
    MenuCharacterSelectionInterruptDeleteCharacter = 146,
    MenuFriendsDescription = 147,
    MenuFriendsHeadingNotPlayingWayward = 148,
    MenuFriendsHeadingPlayingWayward = 149,
    MenuFriendsSectionNoFriendsOnline = 150,
    MenuFriendsSectionNoFriendsWayward = 151,
    MenuFriendsTitle = 152,
    MenuFriendsUnableToLoad = 153,
    MenuFriendsJoinDedicatedServer = 154,
    MenuGameEndTitleDead = 155,
    MenuGameEndTitleWon = 156,
    MenuGameEndDescriptionDead1 = 157,
    MenuGameEndDescriptionDead2 = 158,
    MenuGameEndDescriptionDead3 = 159,
    MenuGameEndDescriptionWin1 = 160,
    MenuGameEndDescriptionWin2 = 161,
    MenuGameEndDescriptionWin3 = 162,
    MenuGameEndShareFacebook = 163,
    MenuGameEndShareTwitter = 164,
    MenuHighscoresTitle = 165,
    MenuHighscoresDescription = 166,
    MenuHighscoresDifficultyFilterHardcore = 167,
    MenuHighscoresDifficultyFilterCasual = 168,
    MenuHighscoresDifficultyFilterDailyChallenge = 169,
    MenuHighscoresDifficultyFilterAll = 170,
    MenuHighscoresSortScore = 171,
    MenuHighscoresSortSaveName = 172,
    MenuHighscoresSortRecency = 173,
    MenuHighscoresHighscoreLabelDifficulty = 174,
    MenuHighscoresHighscoreLabelTurns = 175,
    MenuHighscoresHighscoreLabelScore = 176,
    MenuHighscoresHighscoreLabelPlace = 177,
    MenuHighscoresHighscoreLabelDate = 178,
    MenuHighscoresHighscoreLabelDeathBy = 179,
    MenuHighscoresHighscoreLabelSaveName = 180,
    MenuHighscoresHighscoreLabelCharacterName = 181,
    MenuHighscoresCharacterNameUnknown = 182,
    MenuLoadGameButtonNewGame = 183,
    MenuLoadGameButtonNewGameButtonImportTooltip = 184,
    MenuLoadGameDescription = 185,
    MenuLoadGameSaveButtonDeleteTooltip = 186,
    MenuLoadGameSaveButtonEditNameTooltip = 187,
    MenuLoadGameSaveButtonExportTooltip = 188,
    MenuLoadGameSaveSortCreatedTime = 189,
    MenuLoadGameSaveSortName = 190,
    MenuLoadGameSaveSortSaveTime = 191,
    MenuLoadGameSaveSortTurnCount = 192,
    MenuLoadGameSaveTooltipLabelCreatedTime = 193,
    MenuLoadGameSaveTooltipLabelSaveTime = 194,
    MenuLoadGameSaveTooltipLabelScore = 195,
    MenuLoadGameSaveTooltipLabelSeed = 196,
    MenuLoadGameSaveTooltipLabelTurns = 197,
    MenuLoadGameSaveTooltipLabelMods = 198,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 199,
    MenuLoadGameSlotsRemaining = 200,
    MenuLoadGameTitle = 201,
    MenuLoadGameInterruptDeleteSave = 202,
    MenuLoadGameInterruptDeleteSaveDescription = 203,
    MenuLoadGameInterruptLoadingExportingSave = 204,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 205,
    MenuLoadGameInterruptLoadingImportingSave = 206,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 207,
    MenuLoadGameInterruptImportSaveFailure = 208,
    MenuLoadGameInterruptImportSaveFailureDescription = 209,
    MenuLoadGameInterruptExportType = 210,
    MenuLoadGameInterruptExportTypeDescription = 211,
    MenuLoadGameInterruptPublishingSave = 212,
    MenuLoadGameInterruptPublishingSaveDescription = 213,
    MenuLoadGameInterruptMissingMod = 214,
    MenuLoadGameInterruptMissingModDescription = 215,
    MenuLoadGameInterruptMissingModDescriptionLabelModsMissing = 216,
    MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled = 217,
    MenuMainButtonAbout = 218,
    MenuMainButtonChangelog = 219,
    MenuMainButtonContinueGame = 220,
    MenuMainButtonFriends = 221,
    MenuMainButtonFriendsWithCount = 222,
    MenuMainButtonHighscores = 223,
    MenuMainButtonLoadGame = 224,
    MenuMainButtonMods = 225,
    MenuMainButtonNewGame = 226,
    MenuMainButtonNews = 227,
    MenuMainButtonOptions = 228,
    MenuMainInterruptLoadingNews = 229,
    MenuMainInterruptLoadingNewsDescription = 230,
    MenuMainInterruptLoadingChangelog = 231,
    MenuMainInterruptLoadingChangelogDescription = 232,
    MenuMainInterruptWelcomeToVersion = 233,
    MenuMainInterruptWelcomeToVersionDescription = 234,
    MenuMainInterruptOldVersionWarning = 235,
    MenuMainInterruptOldVersionWarningDescription = 236,
    MenuModsButtonDisableAll = 237,
    MenuModsButtonEnableAll = 238,
    MenuModsButtonModdingGuide = 239,
    MenuModsButtonOpenFolder = 240,
    MenuModsButtonOpenWorkshop = 241,
    MenuModsDescription = 242,
    MenuModsHeadingInternal = 243,
    MenuModsHeadingLocal = 244,
    MenuModsHeadingNoMods = 245,
    MenuModsHeadingWorkshop = 246,
    MenuModsInterruptConfirmPublish = 247,
    MenuModsInterruptConfirmPublishUpdate = 248,
    MenuModsInterruptModEnableMultipleLanguages = 249,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 250,
    MenuModsInterruptModEnableUseLanguage = 251,
    MenuModsInterruptModEnableUseLanguageDescription = 252,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 253,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 254,
    MenuModsInterruptConfirmPublishDescription = 255,
    MenuModsInterruptConfirmPublishUpdateDescription = 256,
    MenuModsInterruptPublishingMod = 257,
    MenuModsInterruptPublishingModDescription = 258,
    MenuModsInterruptPublishError = 259,
    MenuModsInterruptPublishErrorDescription = 260,
    MenuModsInterruptUpdatingMod = 261,
    MenuModsInterruptUpdatingModDescription = 262,
    MenuModsInterruptPublishUpdateError = 263,
    MenuModsInterruptPublishUpdateErrorDescription = 264,
    MenuModsInterruptInfoMissingDependencies = 265,
    MenuModsInterruptInfoMissingDependenciesDescription = 266,
    MenuModsInterruptConfirmEnableDisabledDependencies = 267,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 268,
    MenuModsInterruptConfirmDisableDependents = 269,
    MenuModsInterruptConfirmDisableDependentsDescription = 270,
    MenuModsInterruptConfirmUninstallMod = 271,
    MenuModsInterruptConfirmUninstallModDescription = 272,
    MenuModsSortName = 273,
    MenuModsSortCreatedDate = 274,
    MenuModsSortInstallDate = 275,
    MenuModsSortAuthor = 276,
    MenuModsSortLastUpdated = 277,
    MenuModsTabInternal = 278,
    MenuModsTabLocal = 279,
    MenuModsTabWorkshop = 280,
    MenuModsTitle = 281,
    MenuModsTooltipLabelAuthor = 282,
    MenuModsTooltipLabelDependencies = 283,
    MenuModsTooltipLabelProvides = 284,
    MenuModsTooltipLabelVersion = 285,
    MenuModsTooltipLabelDescription = 286,
    MenuModsTooltipLabelInstallDate = 287,
    MenuModsTooltipLabelCreatedDate = 288,
    MenuModsTooltipLabelLastUpdatedDate = 289,
    MenuModsTooltipModOptions = 290,
    MenuModsTooltipProvidesCustomizations = 291,
    MenuModsTooltipProvidesImageOverrides = 292,
    MenuModsTooltipProvidesLanguage = 293,
    MenuModsTooltipProvidesScript = 294,
    MenuModsTooltipProvidesStylesheet = 295,
    MenuModsTooltipPublishMod = 296,
    MenuModsTooltipUninstallMod = 297,
    MenuModsTooltipViewInSteamWorkshop = 298,
    MenuModsTooltipCanLoadStateModLoadError = 299,
    MenuModsTooltipCanLoadStateDependencyIssue = 300,
    MenuModsTooltipCanLoadStateModRequiresItself = 301,
    MenuModsTooltipCanLoadStateMissingRequiredMod = 302,
    MenuModsTooltipCanLoadStateReqiredModNotLoaded = 303,
    MenuModsTooltipCanLoadStateLocalModPrecedence = 304,
    MenuModsTooltipCanLoadStateIncompatibleVersion = 305,
    MenuNewGameButtonNext = 306,
    MenuNewGameButtonStartServer = 307,
    MenuNewGameDescription = 308,
    MenuNewGameLabelEditName = 309,
    MenuNewGameLabelEditSeed = 310,
    MenuNewGamePlaceholderEditSeed = 311,
    MenuNewGameTitle = 312,
    MenuNewGameChoiceDifficultyCasual = 313,
    MenuNewGameChoiceDifficultyCasualDescription = 314,
    MenuNewGameChoiceDifficultyHardcore = 315,
    MenuNewGameChoiceDifficultyHardcoreDescription = 316,
    MenuNewGameChoiceDifficultyDailyChallenge = 317,
    MenuNewGameChoiceDifficultyDailyChallengeDescription = 318,
    MenuNewGameChoiceSingleplayer = 319,
    MenuNewGameChoiceSingleplayerDescription = 320,
    MenuNewGameChoiceMultiplayer = 321,
    MenuNewGameChoiceMultiplayerDescription = 322,
    MenuNewGameChoiceTurnsManual = 323,
    MenuNewGameChoiceTurnsManualDescription = 324,
    MenuNewGameChoiceTurnsRealTime = 325,
    MenuNewGameChoiceTurnsRealTimeDescription = 326,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 327,
    MenuNewsButtonDiscord = 328,
    MenuNewsButtonFacebook = 329,
    MenuNewsButtonReddit = 330,
    MenuNewsButtonTwitter = 331,
    MenuNewsDescription = 332,
    MenuNewsHeadingSocial = 333,
    MenuNewsTitle = 334,
    MenuNewsHeadingUnableToLoad = 335,
    MenuNewsButtonAllNews = 336,
    MenuOptionsInterruptLoading = 337,
    MenuOptionsInterruptLoadingDescription = 338,
    MenuOptionsButtonDitherFogOfWar = 339,
    MenuOptionsButtonFullscreen = 340,
    MenuOptionsButtonOpenNotesAutomatically = 341,
    MenuOptionsButtonScreenshotMode = 342,
    MenuOptionsButtonDeveloperMode = 343,
    MenuOptionsButtonDeveloperModeContextMenu = 344,
    MenuOptionsButtonPixelFont = 345,
    MenuOptionsButtonReloadGame = 346,
    MenuOptionsButtonSaveDataClearAll = 347,
    MenuOptionsButtonSaveDataClearCharacters = 348,
    MenuOptionsButtonSaveDataClearHighscores = 349,
    MenuOptionsButtonSaveDataClearMilestones = 350,
    MenuOptionsButtonSaveDataClearOptions = 351,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 352,
    MenuOptionsButtonSaveDataClearSaves = 353,
    MenuOptionsButtonSkipSplash = 354,
    MenuOptionsButtonToggleDevTools = 355,
    MenuOptionsButtonTooltipsCreatures = 356,
    MenuOptionsButtonOpenLogsFolder = 357,
    MenuOptionsButtonTooltipsDoodads = 358,
    MenuOptionsButtonTooltipsItems = 359,
    MenuOptionsButtonTooltipsTerrain = 360,
    MenuOptionsButtonDropLocationFacing = 361,
    MenuOptionsButtonDropLocationFeet = 362,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 363,
    MenuOptionsDescription = 364,
    MenuOptionsHeadingAudio = 365,
    MenuOptionsHeadingDeveloper = 366,
    MenuOptionsHeadingGameplayOptions = 367,
    MenuOptionsHeadingGeneralOptions = 368,
    MenuOptionsHeadingControls = 369,
    MenuOptionsHeadingLanguage = 370,
    MenuOptionsHeadingModOptions = 371,
    MenuOptionsHeadingOther = 372,
    MenuOptionsHeadingSaveData = 373,
    MenuOptionsHeadingTooltips = 374,
    MenuOptionsHeadingVideo = 375,
    MenuOptionsInterruptReloadGame = 376,
    MenuOptionsInterruptSaveDataClearAll = 377,
    MenuOptionsInterruptSaveDataClearAllDescription = 378,
    MenuOptionsInterruptSaveDataClearCharacters = 379,
    MenuOptionsInterruptSaveDataClearHighscores = 380,
    MenuOptionsInterruptSaveDataClearMilestones = 381,
    MenuOptionsInterruptSaveDataClearOptions = 382,
    MenuOptionsInterruptSaveDataClearSaves = 383,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 384,
    MenuOptionsLabelInterfaceScale = 385,
    MenuOptionsLabelTurnDelay = 386,
    MenuOptionsTooltipTurnDelay = 387,
    MenuOptionsLabelVolumeEffects = 388,
    MenuOptionsLabelVolumeMusic = 389,
    MenuOptionsTabAudio = 390,
    MenuOptionsTabDeveloper = 391,
    MenuOptionsTabGameplay = 392,
    MenuOptionsTabGeneral = 393,
    MenuOptionsTabControls = 394,
    MenuOptionsTabMods = 395,
    MenuOptionsTabSaveData = 396,
    MenuOptionsTabVideo = 397,
    MenuOptionsTitle = 398,
    MenuOptionsTooltipMusicNextTrack = 399,
    MenuOptionsBindChoose = 400,
    MenuOptionsBindChooseAdd = 401,
    MenuOptionsBindableTypeGame = 402,
    MenuOptionsBindableTypeDialog = 403,
    MenuOptionsBindableTypeMenu = 404,
    MenuOptionsBindableTypeDeveloper = 405,
    MenuOptionsBindableTypeMod = 406,
    MenuOptionsBindLabelModifier = 407,
    MenuOptionsBindLabelOr = 408,
    MenuOptionsBindButtonResetTooltip = 409,
    MenuOptionsBindButtonDeleteTooltip = 410,
    MenuOptionsBindButtonAddTooltip = 411,
    MenuOptionsBindNoBinding = 412,
    MenuOptionsButtonAlwaysShowMoreInformation = 413,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 414,
    MenuOptionsButtonAutoGather = 415,
    MenuOptionsButtonAutoGatherTooltip = 416,
    MenuOptionsButtonAutoPickup = 417,
    MenuOptionsButtonAutoPickupTooltip = 418,
    MenuOptionsButtonDropOnGather = 419,
    MenuOptionsButtonDropOnGatherTooltip = 420,
    MenuOptionsButtonKeepSortActive = 421,
    MenuOptionsButtonKeepSortActiveTooltip = 422,
    MenuOptionsButtonProtectedCraftingItems = 423,
    MenuOptionsButtonProtectedCraftingItemsTooltip = 424,
    MenuOptionsButtonHideEquippedHeadgear = 425,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 426,
    MenuOptionsButtonWarnOnDangerousActions = 427,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 428,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 429,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 430,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 431,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 432,
    MenuOptionsHeadingWarnWhenBreakingItems = 433,
    MenuOptionsButtonSaveDataClearBindings = 434,
    MenuOptionsInterruptSaveDataClearBindings = 435,
    MenuOptionsTooltipDialogOpacity = 436,
    MenuOptionsLabelDialogOpacity = 437,
    MenuPauseButtonContinue = 438,
    MenuPauseButtonOptions = 439,
    MenuPauseButtonMultiplayer = 440,
    MenuPauseButtonTitleScreen = 441,
    MenuPauseButtonStopServer = 442,
    MenuPauseHeadingPaused = 443,
    MenuPauseParagraphPaused = 444,
    MenuPauseHeadingNotPaused = 445,
    MenuPauseParagraphNotPaused = 446,
    MenuPauseHeadingDedicatedServer = 447,
    MenuPauseParagraphDedicatedServer = 448,
    MenuMultiplayerTitle = 449,
    MenuMultiplayerDescription = 450,
    MenuMultiplayerOpenServer = 451,
    MenuMultiplayerOpenServerDescription = 452,
    MenuMultiplayerPauseServer = 453,
    MenuMultiplayerPauseServerDescription = 454,
    MenuJoinDedicatedServerTitle = 455,
    MenuJoinDedicatedServerDescription = 456,
    MenuJoinDedicatedServerIP = 457,
    MenuJoinDedicatedServerIPPlaceholder = 458,
    MenuJoinDedicatedServerNext = 459,
    MenuSharedSortBy = 460,
    MenuSharedSortDirection = 461,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 462,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 463,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 464,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 465,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 466,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 467,
    MenuSharedMultiplayerChoicePVP = 468,
    MenuSharedMultiplayerChoicePVPDescription = 469,
    MenuSharedMultiplayerMaxPlayers = 470,
    MenuSharedRealTimeTickSpeedTooltip = 471,
    MenuSharedRealTimeTickSpeedLabel = 472,
    MenuSharedButtonDefault = 473,
    MiscPlayerNameDefault = 474,
    MiscSaveNameDefault = 475,
    MiscSaveVersionUnknown = 476,
    MiscDailyChallengeName = 477,
    MiscDifficultyHardcore = 478,
    MiscDifficultyCasual = 479,
    MiscDifficultyDailyChallenge = 480,
    MiscVersion = 481,
    MiscVersionBeta = 482,
    MiscVersionRelease = 483,
    SharedListSeparator = 484,
    SteamworksInterruptURLOpenedInBrowser = 485,
    SteamworksInterruptURLOpenedInBrowserDescription = 486,
    SteamworksInterruptWorkshopOpenedInBrowser = 487,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 488,
    SteamworksInterruptModWithNameAlreadyExists = 489,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 490,
    SteamworksInterruptModImportSaveGameFailure = 491,
    SteamworksInterruptModImportSaveGameFailureDescription = 492,
    SteamworksInterruptModImportedSaveGame = 493,
    SteamworksInterruptModImportedSaveGameDescription = 494,
    SteamworksInterruptLoadingRefreshingMods = 495,
    SteamworksInterruptLoadingRefreshingModsDescription = 496,
    SteamworksInterruptOpenFolderFailure = 497,
    SteamworksInterruptOpenFolderFailureDescription = 498,
    Bleeding = 499,
    Burned = 500,
    DisableHints = 501,
    EnableHints = 502,
    EquipmentBack = 503,
    EquipmentBelt = 504,
    EquipmentChest = 505,
    EquipmentFeet = 506,
    EquipmentHands = 507,
    EquipmentHead = 508,
    EquipmentLeftHand = 509,
    EquipmentLeftHandOption = 510,
    EquipmentLegs = 511,
    EquipmentNeck = 512,
    EquipmentRightHand = 513,
    EquipmentRightHandOption = 514,
    EquipmentUse = 515,
    Health = 516,
    HudActions = 517,
    HudCrafting = 518,
    HudEquipment = 519,
    HudFilter = 520,
    HudHelp = 521,
    HudInventory = 522,
    HudMessages = 523,
    HudMilestones = 524,
    HudOptions = 525,
    HudSave = 526,
    HudSkills = 527,
    HudTitleScreen = 528,
    Hunger = 529,
    MenuDeleteAllGameData = 530,
    MenuDeleteGame = 531,
    MenuEditGame = 532,
    MenuExportGame = 533,
    MenuExportSave = 534,
    MenuHighscoresAll = 535,
    MenuHighscoresDailyChallenge = 536,
    MenuHighscoresMessage = 537,
    MenuHighscoresNone = 538,
    MenuHighscoresNormal = 539,
    MenuImportGame = 540,
    MenuImportSave = 541,
    MenuJoinGame = 542,
    MenuJoinGameJoin = 543,
    MenuJoinGameMessage = 544,
    MenuJoinGameName = 545,
    MenuJoinGameServer = 546,
    MenuOptionsMessage = 547,
    MenuQuitGame = 548,
    MenuReloadGame = 549,
    MenuToggleDeveloperTools = 550,
    MenuVisitSteamWorkshop = 551,
    NextHint = 552,
    OptionsAudio = 553,
    OptionsAutoGather = 554,
    OptionsAutoGatherTooltip = 555,
    OptionsAutoPickup = 556,
    OptionsAutoPickupTooltip = 557,
    OptionsDropOnGather = 558,
    OptionsDropOnGatherTooltip = 559,
    OptionsDropItemsOnFacingTile = 560,
    OptionsDropItemsOnFacingTileTooltip = 561,
    OptionsDropItemsAtFeet = 562,
    OptionsDropItemsAtFeetTooltip = 563,
    OptionsDropItemsAtFeetWhenFacingTileBlocked = 564,
    OptionsDropItemsAtFeetWhenFacingTileBlockedTooltip = 565,
    OptionsKeepSortActive = 566,
    OptionsKeepSortActiveTooltip = 567,
    OptionsProtectedCraftingItems = 568,
    OptionsProtectedCraftingItemsTooltip = 569,
    OptionsWarnOnDangerousActions = 570,
    OptionsWarnOnDangerousActionsTooltip = 571,
    OptionsWarnWhenBreakingItems = 572,
    OptionsWarnWhenBreakingItemsOnCraft = 573,
    OptionsWarnWhenBreakingItemsOnCraftTooltip = 574,
    OptionsWarnWhenBreakingItemsTooltip = 575,
    Poisoned = 576,
    PreviousHint = 577,
    QuickSlot1 = 578,
    QuickSlot2 = 579,
    QuickSlot3 = 580,
    QuickSlot4 = 581,
    QuickSlot5 = 582,
    QuickSlot6 = 583,
    QuickSlot7 = 584,
    QuickSlot8 = 585,
    QuickSlot9 = 586,
    Stamina = 587,
    TabCrafting = 588,
    TabDismantle = 589,
    Thirst = 590,
    Version = 591,
    Weight = 592,
    WindowTitleContainer = 593,
    WindowTitleCrafting = 594,
    WindowTitleEquipment = 595,
    WindowTitleInventory = 596,
    WindowTitleMap = 597,
    WindowTitleMessages = 598,
    WindowTitleMilestones = 599,
    WindowTitleOptions = 600,
    WindowTitleSkills = 601,
}
export declare enum PlayerTranslation {
    FirstName = 0,
    LastName = 1,
}
export declare enum Dictionary {
    Action = 0,
    Book = 1,
    Bindable = 2,
    Corpse = 3,
    Creature = 4,
    Doodad = 5,
    Growth = 6,
    Hint = 7,
    Item = 8,
    Message = 9,
    Milestone = 10,
    OnEquip = 11,
    Player = 12,
    BindPress = 13,
    Skill = 14,
    Terrain = 15,
    TileEvent = 16,
    InterruptChoice = 17,
    Ui = 18,
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
export interface ITranslationObject {
    name: string;
    description?: string;
    prefix?: string;
    suffix?: string;
}
export declare type ITranslation = string[] | ITranslationObject;
export interface ITranslationArray {
    [index: number]: ITranslation;
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
    [index: number]: [string, string, string, string] | [string, string];
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
export interface IPressNameDictionary {
    [index: string]: string;
}
export interface ILanguage {
    getName(): string;
    shouldUseAlternateFontStyle(): boolean;
    shouldPluralize(): boolean;
    pluralize(str: string): string;
    addPluralRule(from: string, to: string): void;
    getDictionary(dictionary: Dictionary): ITranslationArray;
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
    setDictionary(dictionary: Dictionary.InterruptChoice, newEntries: IUiDictionary): void;
    setDictionary(dictionary: Dictionary, newEntries: {
        [index: number]: any;
    }): void;
    setDictionaryRaw(dictionary: Dictionary, newEntries: ITranslationArray): void;
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
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemType, prefix: string, name: string, description?: string, plural?: string): void;
    setEntry(dictionary: Dictionary.Item, entryIndex: ItemTypeGroup, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Message, entryIndex: Message, name: string): void;
    setEntry(dictionary: Dictionary.Milestone, entryIndex: MilestoneType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.OnEquip, entryIndex: OnEquipType, name: string): void;
    setEntry(dictionary: Dictionary.Skill, entryIndex: SkillType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.Terrain, entryIndex: TerrainType, prefix: string, name: string): void;
    setEntry(dictionary: Dictionary.TileEvent, entryIndex: TileEventType, name: string, description: string): void;
    setEntry(dictionary: Dictionary.InterruptChoice, entryIndex: UiTranslation, name: string): void;
    setEntry(dictionary: Dictionary.BindPress, entryName: string, name: string): void;
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
    [key: string]: ITranslation;
}
