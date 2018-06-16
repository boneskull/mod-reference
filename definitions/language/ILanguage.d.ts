import { ActionType, BookType, CreatureType, DoodadType, DoodadTypeGroup, ItemType, ItemTypeGroup, OnEquipType, SkillType, TerrainType } from "Enums";
import { Message } from "language/IMessages";
import { MilestoneType } from "player/IMilestone";
import { TileEventType } from "tile/ITileEvent";
import { HintType } from "ui/IHint";
/**
 * Choices for interrupts
 */
export declare enum InterruptChoice {
    Cancel = 0,
    ContinueAnyway = 1,
    LocalFile = 2,
    No = 3,
    Ok = 4,
    OpenSaveFolderAndQuit = 5,
    Rejoin = 6,
    Rename = 7,
    Retry = 8,
    SteamWorkshop = 9,
    Yes = 10
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
    GameDialogMessagesName = 8,
    GameDialogNotesName = 9,
    GameDialogNotesNoteTime = 10,
    GameDialogNotesNoteNumber = 11,
    GameDialogNotesNoteLockedTitle = 12,
    GameDialogNotesNoteLockedDescription = 13,
    GameDialogNotesLinkId = 14,
    GameStatsPercentage = 15,
    GameStatsStatAttack = 16,
    GameStatsStatGeneric = 17,
    GameStatsStatGenericWithMax = 18,
    GameStatsStatbar = 19,
    GameStatsStatHealthTooltip = 20,
    GameStatsStatStaminaTooltip = 21,
    GameStatsStatHungerTooltip = 22,
    GameStatsStatThirstTooltip = 23,
    GameStatsStatReputationTooltipDifficulty = 24,
    GameStatsStatReputationTooltipDifficultyEasy = 25,
    GameStatsStatReputationTooltipDifficultyHard = 26,
    GameStatsStatReputationTooltipDifficultyInsane = 27,
    GameStatsStatReputationTooltipDifficultyMedium = 28,
    GameStatsStatReputationTooltipDifficultySimple = 29,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 30,
    GameStatsStatReputationTooltipDifficultyVeryHard = 31,
    GameStatsStatReputationTooltipBenignity = 32,
    GameStatsStatReputationTooltipMalignity = 33,
    GameStatsStatReputationTooltipScore = 34,
    GameStatsStatReputationTooltipTurn = 35,
    GameStatsStatReputationTooltipTicks = 36,
    GameStatsStatWeightTooltip = 37,
    GameStatsStatAttackTooltipTactics = 38,
    GameStatsStatAttackTooltipLeftHand = 39,
    GameStatsStatAttackTooltipRightHand = 40,
    GameStatsStatDefenseTooltipBase = 41,
    GameStatsStatDefenseTooltipBlunt = 42,
    GameStatsStatDefenseTooltipParrying = 43,
    GameStatsStatDefenseTooltipFire = 44,
    GameStatsStatDefenseTooltipPiercing = 45,
    GameStatsStatDefenseTooltipSlashing = 46,
    GameStatsStatusEffectBleedingTooltip = 47,
    GameStatsStatusEffectBurnedTooltip = 48,
    GameStatsStatusEffectPoisonedTooltip = 49,
    GameQuadrantElementStats = 50,
    GameQuadrantElementMenuBar = 51,
    GameQuadrantElementQuickslots = 52,
    GameQuadrantElementMessages = 53,
    GameQuadrantElementContextMenuMoveTo = 54,
    GameQuadrantElementContextMenuSwitchWith = 55,
    GameQuadrantNone = 56,
    GameQuadrantLeft = 57,
    GameQuadrantTopLeft = 58,
    GameQuadrantTop = 59,
    GameQuadrantTopRight = 60,
    GameQuadrantRight = 61,
    GameQuadrantBottomRight = 62,
    GameQuadrantBottom = 63,
    GameQuadrantBottomLeft = 64,
    GameLegendaryAttack = 65,
    GameLegendaryDefense = 66,
    GameLegendaryIllumination = 67,
    GameLegendaryWeightCapacity = 68,
    GameLegendaryItemWeight = 69,
    GameLegendaryStat = 70,
    GameLegendarySkill = 71,
    GameLegendaryBenignity = 72,
    GameLegendaryMalignity = 73,
    GameLegendaryRange = 74,
    GameLegendaryUseBenefits = 75,
    GameLegendaryWorth = 76,
    GameLegendaryStatHealth = 77,
    GameLegendaryStatStamina = 78,
    GameLegendaryStatMetabolism = 79,
    GameItemBarterCredit = 80,
    GameItemBarterCreditTrade = 81,
    GameInterruptItemMayBeDestroyedInCraft = 82,
    GameInterruptItemMayBeDestroyedInCraftDescription = 83,
    GameInterruptItemMayBeDestroyedOnUse = 84,
    GameInterruptItemMayBeDestroyedOnUseDescription = 85,
    GameInterruptLoadingQuitting = 86,
    GameInterruptLoadingQuittingDescription = 87,
    GameInterruptLoadingSaving = 88,
    GameInterruptLoadingSavingDescription = 89,
    GameInterruptReleaseCreature = 90,
    GameInterruptReleaseCreatureDescription = 91,
    GameInterruptRenameCreature = 92,
    GameInterruptRenameCreatureDescription = 93,
    GameInterruptRenameDoodad = 94,
    GameInterruptRenameDoodadDescription = 95,
    GameInterruptRenameItem = 96,
    GameInterruptRenameItemDescription = 97,
    GameInterruptReturnToTitleScreen = 98,
    GameInterruptReturnToTitleScreenDailyChallenge = 99,
    GameInterruptReturnToTitleScreenDailyChallengeDescription = 100,
    GameInterruptReturnToTitleScreenDescription = 101,
    GameInterruptLoadingWorld = 102,
    GameInterruptLoadingWorldDescription = 103,
    GameInterruptLoadingGeneratingWorld = 104,
    GameInterruptLoadingGeneratingWorldDescription = 105,
    GameInterruptLoadingFinalizingWorld = 106,
    GameInterruptLoadingFinalizingWorldDescription = 107,
    GameInterruptSailAwayEnd = 108,
    GameInterruptSailAwayEndDescription = 109,
    GameInterruptSailAwayReturnable = 110,
    GameInterruptSailAwayReturnableDescription = 111,
    GameInterruptTravelAway = 112,
    GameInterruptTravelAwayDescription = 113,
    GameInterruptLoadingResting = 114,
    GameInterruptLoadingRestingDescription = 115,
    GameInterruptLoadingSleeping = 116,
    GameInterruptLoadingSleepingDescription = 117,
    GameInterruptLoadingTraveling = 118,
    GameInterruptLoadingTravelingDescription = 119,
    GameInterruptLoadingLostGLContext = 120,
    GameInterruptLoadingAutoSaving = 121,
    GameInterruptLoadingAutoSavingDescription = 122,
    GameInterruptLoadingLostGLContextDescription = 123,
    GameInterruptLoadingMods = 124,
    GameInterruptLoadingModsDescription = 125,
    GameInterruptLoadingMultiplayerPlayerConnecting = 126,
    GameInterruptLoadingMultiplayerSyncing = 127,
    GameInterruptDangerousStep = 128,
    GameInterruptDangerousStepDescription = 129,
    GameInterruptSaveFailure = 130,
    GameInterruptSaveFailureDescription = 131,
    GameInterruptLoadFailure = 132,
    GameInterruptLoadFailureDescription = 133,
    GameInterruptDesalinationNoNeed = 134,
    GameInterruptDesalinationNoNeedDescription = 135,
    GameInterruptConfirmationActionOnFire = 136,
    GameInterruptConfirmationActionOnFireDescription = 137,
    GameInterruptConfirmationDestroyOnGather = 138,
    GameInterruptConfirmationDestroyOnGatherDescription = 139,
    GameInterruptLoadingGame = 140,
    GameInterruptLoadingGameDescription = 141,
    GameInterruptLoadingSprites = 142,
    GameInterruptLoadingSpritesDescription = 143,
    GameInterruptMultiplayerSynchronizing = 144,
    GameInterruptMultiplayerSynchronizingDescription = 145,
    GameInterruptNoSaveOnDeath = 146,
    GameInterruptNoSaveOnDeathDescription = 147,
    GameMenuBarButtonTooltipBindable = 148,
    GameMenuBarButtonTooltipMenu = 149,
    GameMenuBarButtonTooltipSave = 150,
    GameMenuBarButtonTooltipNotes = 151,
    GameMenuBarButtonTooltipMilestones = 152,
    GameMenuBarButtonTooltipMessages = 153,
    GameMenuBarButtonTooltipHelp = 154,
    GameMenuBarButtonTooltipQuickSettings = 155,
    GameMenuBarButtonTooltipActions = 156,
    GameMenuBarButtonTooltipInventory = 157,
    GameMenuBarButtonTooltipCrafting = 158,
    GameMenuBarButtonTooltipEquipment = 159,
    GameMenuBarButtonTooltipSkills = 160,
    GameMessagesButtonSend = 161,
    GameMessagesContextMenuShowAsDialog = 162,
    GameMessagesContextMenuClear = 163,
    GameMessagesFilter = 164,
    GameMessagesFilterAll = 165,
    GameMessagesFilterGame = 166,
    GameMessagesFilterChat = 167,
    GameMessagesNewNote = 168,
    GameMultiplayerInterruptBanned = 169,
    GameMultiplayerInterruptConnecting = 170,
    GameMultiplayerInterruptConnectingDescription = 171,
    GameMultiplayerInterruptFailedToConnect = 172,
    GameMultiplayerInterruptFailedToLoadMods = 173,
    GameMultiplayerInterruptKicked = 174,
    GameMultiplayerInterruptLostConnection = 175,
    GameMultiplayerInterruptServerShutdown = 176,
    GameMultiplayerInterruptSynchronizationError = 177,
    GameMultiplayerInterruptSynchronizationErrorDescription = 178,
    GameMultiplayerInterruptUnableToJoinGame = 179,
    GameMultiplayerInterruptUnableToJoinGameBuildMismatch = 180,
    GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier = 181,
    GameMultiplayerInterruptUnableToJoinGameFriendsOnly = 182,
    GameMultiplayerInterruptUnableToJoinGameServerFull = 183,
    GameMultiplayerInterruptUnableToJoinGameUnknownError = 184,
    GameMultiplayerInterruptUnableToJoinGameVersionMismatch = 185,
    MenuAboutTitle = 186,
    MenuAboutDescription = 187,
    MenuAboutGameDescription = 188,
    MenuAboutSectionTeam = 189,
    MenuAboutTeamMemberResponsibilities = 190,
    MenuAboutTeamMemberResponsibilityProgramming = 191,
    MenuAboutTeamMemberResponsibilityDesign = 192,
    MenuAboutTeamMemberResponsibilityWeb = 193,
    MenuAboutTeamMemberResponsibilityArt = 194,
    MenuAboutTeamMemberResponsibilityPR = 195,
    MenuAboutTeamMemberResponsibilityUX = 196,
    MenuAboutTeamMemberResponsibilityMusic = 197,
    MenuAboutTeamMemberName = 198,
    MenuAboutTeamMemberNickname = 199,
    MenuAboutSectionContributors = 200,
    MenuAboutSectionSpecialThanks = 201,
    MenuAboutTextSpecialThanksTestorsAndDonators = 202,
    MenuAboutSectionLibraries = 203,
    MenuAboutSectionLibrariesDescription = 204,
    MenuChangelogTitle = 205,
    MenuChangelogDescription = 206,
    MenuChangelogSectionBalance = 207,
    MenuChangelogSectionBugFixes = 208,
    MenuChangelogSectionImprovements = 209,
    MenuChangelogSectionMod = 210,
    MenuChangelogSectionModding = 211,
    MenuChangelogSectionNew = 212,
    MenuChangelogSectionTechnical = 213,
    MenuChangelogHeadingFailedLoad = 214,
    MenuChangelogHeadingChangeCount = 215,
    MenuChangelogInterruptLoadingChangelog = 216,
    MenuChangelogInterruptLoadingChangelogDescription = 217,
    MenuCharacterCreationButtonRandomizeName = 218,
    MenuCharacterCreationButtonExportTooltip = 219,
    MenuCharacterCreationButtonImportTooltip = 220,
    MenuCharacterCreationButtonStartGame = 221,
    MenuCharacterCreationButtonJoinGame = 222,
    MenuCharacterCreationDescription = 223,
    MenuCharacterCreationHeadingHairColor = 224,
    MenuCharacterCreationHeadingHairStyle = 225,
    MenuCharacterCreationHeadingSkinTone = 226,
    MenuCharacterCreationLabelName = 227,
    MenuCharacterCreationTitle = 228,
    MenuCharacterCreationInterruptImportCharacterFailure = 229,
    MenuCharacterCreationInterruptImportCharacterFailureDescription = 230,
    MenuCharacterCreationButtonRotateLeftTooltip = 231,
    MenuCharacterCreationButtonRotateRightTooltip = 232,
    MenuCharacterCreationButtonRandomizeTooltip = 233,
    MenuCharacterSelectionButtonNewCharacter = 234,
    MenuCharacterSelectionCharacterSortLastUse = 235,
    MenuCharacterSelectionCharacterSortName = 236,
    MenuCharacterSelectionCharacterSortUseCount = 237,
    MenuCharacterSelectionDescription = 238,
    MenuCharacterSelectionHeadingNoCharacters = 239,
    MenuCharacterSelectionTitle = 240,
    MenuCharacterSelectionLabelLastUse = 241,
    MenuCharacterSelectionLabelUseCount = 242,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 243,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 244,
    MenuCharacterSelectionInterruptDeleteCharacter = 245,
    MenuFriendsDescription = 246,
    MenuFriendsHeadingNotPlayingWayward = 247,
    MenuFriendsHeadingPlayingWayward = 248,
    MenuFriendsSectionNoFriendsOnline = 249,
    MenuFriendsSectionNoFriendsWayward = 250,
    MenuFriendsTitle = 251,
    MenuFriendsUnableToLoad = 252,
    MenuFriendsButtonJoinDedicatedServer = 253,
    MenuGameEndTitleDead = 254,
    MenuGameEndTitleWon = 255,
    MenuGameEndDescriptionDead1 = 256,
    MenuGameEndDescriptionDead2 = 257,
    MenuGameEndDescriptionDead3 = 258,
    MenuGameEndDescriptionWin1 = 259,
    MenuGameEndDescriptionWin2 = 260,
    MenuGameEndDescriptionWin3 = 261,
    MenuGameEndShareFacebook = 262,
    MenuGameEndShareTwitter = 263,
    MenuGameEndContinueAsGhost = 264,
    MenuGameEndReturnToIsland = 265,
    MenuGameEndExitToMenu = 266,
    MenuGameEndInterruptGhostDeleteSave = 267,
    MenuGameEndInterruptWonDeleteSave = 268,
    MenuGameEndInterruptDeleteSaveDescription = 269,
    MenuHelpTitle = 270,
    MenuHelpDescription = 271,
    MenuHighscoresTitle = 272,
    MenuHighscoresDescription = 273,
    MenuHighscoresDifficultyFilterHardcore = 274,
    MenuHighscoresDifficultyFilterCasual = 275,
    MenuHighscoresDifficultyFilterDailyChallenge = 276,
    MenuHighscoresDifficultyFilterAll = 277,
    MenuHighscoresSortScore = 278,
    MenuHighscoresSortSaveName = 279,
    MenuHighscoresSortRecency = 280,
    MenuHighscoresHighscoreLabelDifficulty = 281,
    MenuHighscoresHighscoreLabelTurns = 282,
    MenuHighscoresHighscoreLabelScore = 283,
    MenuHighscoresHighscoreLabelPlace = 284,
    MenuHighscoresHighscoreLabelDate = 285,
    MenuHighscoresHighscoreLabelDeathBy = 286,
    MenuHighscoresHighscoreTitle = 287,
    MenuHighscoresCharacterNameUnknown = 288,
    MenuLoadGameButtonNewGame = 289,
    MenuLoadGameButtonNewGameButtonImportTooltip = 290,
    MenuLoadGameDescription = 291,
    MenuLoadGameSaveButtonDeleteTooltip = 292,
    MenuLoadGameSaveButtonEditNameTooltip = 293,
    MenuLoadGameSaveButtonExportTooltip = 294,
    MenuLoadGameSaveSortCreatedTime = 295,
    MenuLoadGameSaveSortName = 296,
    MenuLoadGameSaveSortSaveTime = 297,
    MenuLoadGameSaveSortTurnCount = 298,
    MenuLoadGameSaveTooltipLabelCreatedTime = 299,
    MenuLoadGameSaveTooltipLabelSaveTime = 300,
    MenuLoadGameSaveTooltipLabelDifficulty = 301,
    MenuLoadGameSaveTooltipLabelScore = 302,
    MenuLoadGameSaveTooltipLabelSeed = 303,
    MenuLoadGameSaveTooltipLabelTurns = 304,
    MenuLoadGameSaveTooltipLabelMods = 305,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 306,
    MenuLoadGameSaveTooltipMod = 307,
    MenuLoadGameSlotsRemaining = 308,
    MenuLoadGameTitle = 309,
    MenuLoadGameInterruptDeleteSave = 310,
    MenuLoadGameInterruptDeleteSaveDescription = 311,
    MenuLoadGameInterruptLoadingExportingSave = 312,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 313,
    MenuLoadGameInterruptLoadingImportingSave = 314,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 315,
    MenuLoadGameInterruptImportSaveFailure = 316,
    MenuLoadGameInterruptImportSaveFailureDescription = 317,
    MenuLoadGameInterruptExportType = 318,
    MenuLoadGameInterruptExportTypeDescription = 319,
    MenuLoadGameInterruptPublishingSave = 320,
    MenuLoadGameInterruptPublishingSaveDescription = 321,
    MenuLoadGameInterruptMissingMod = 322,
    MenuLoadGameInterruptMissingModDescription = 323,
    MenuLoadGameInterruptMissingModDescriptionLabelModsMissing = 324,
    MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled = 325,
    MenuLoadGameInterruptLoading = 326,
    MenuLoadGameInterruptLoadingDescription = 327,
    MenuMainButtonAbout = 328,
    MenuMainButtonChangelog = 329,
    MenuMainButtonContinueGame = 330,
    MenuMainButtonFriends = 331,
    MenuMainButtonFriendsWithCount = 332,
    MenuMainButtonHighscores = 333,
    MenuMainButtonLoadGame = 334,
    MenuMainButtonMods = 335,
    MenuMainButtonNewGame = 336,
    MenuMainButtonNews = 337,
    MenuMainButtonOptions = 338,
    MenuMainInterruptLoadingNews = 339,
    MenuMainInterruptLoadingNewsDescription = 340,
    MenuMainInterruptLoadingChangelog = 341,
    MenuMainInterruptLoadingChangelogDescription = 342,
    MenuMainInterruptWelcomeToVersion = 343,
    MenuMainInterruptWelcomeToVersionDescription = 344,
    MenuMainInterruptOldVersionWarning = 345,
    MenuMainInterruptOldVersionWarningDescription = 346,
    MenuModsButtonDisableAll = 347,
    MenuModsButtonEnableAll = 348,
    MenuModsButtonModdingGuide = 349,
    MenuModsButtonOpenFolder = 350,
    MenuModsButtonOpenWorkshop = 351,
    MenuModsDescription = 352,
    MenuModsHeadingInternal = 353,
    MenuModsHeadingLocal = 354,
    MenuModsHeadingNoMods = 355,
    MenuModsHeadingWorkshop = 356,
    MenuModsInterruptConfirmPublish = 357,
    MenuModsInterruptConfirmPublishUpdate = 358,
    MenuModsInterruptModEnableMultipleLanguages = 359,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 360,
    MenuModsInterruptModEnableUseLanguage = 361,
    MenuModsInterruptModEnableUseLanguageDescription = 362,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 363,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 364,
    MenuModsInterruptConfirmPublishDescription = 365,
    MenuModsInterruptConfirmPublishUpdateDescription = 366,
    MenuModsInterruptPublishingMod = 367,
    MenuModsInterruptPublishingModDescription = 368,
    MenuModsInterruptPublishError = 369,
    MenuModsInterruptPublishErrorDescription = 370,
    MenuModsInterruptUpdatingMod = 371,
    MenuModsInterruptUpdatingModDescription = 372,
    MenuModsInterruptPublishUpdateError = 373,
    MenuModsInterruptPublishUpdateErrorDescription = 374,
    MenuModsInterruptInfoMissingDependencies = 375,
    MenuModsInterruptInfoMissingDependenciesDescription = 376,
    MenuModsInterruptConfirmEnableDisabledDependencies = 377,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 378,
    MenuModsInterruptConfirmDisableDependents = 379,
    MenuModsInterruptConfirmDisableDependentsDescription = 380,
    MenuModsInterruptConfirmUninstallMod = 381,
    MenuModsInterruptConfirmUninstallModDescription = 382,
    MenuModsInterruptUnloadableSaveGameMod = 383,
    MenuModsInterruptUnloadableSaveGameModDescription = 384,
    MenuModsSortName = 385,
    MenuModsSortCreatedDate = 386,
    MenuModsSortInstallDate = 387,
    MenuModsSortAuthor = 388,
    MenuModsSortLastUpdated = 389,
    MenuModsTabInternal = 390,
    MenuModsTabLocal = 391,
    MenuModsTabWorkshop = 392,
    MenuModsTitle = 393,
    MenuModsTooltipLabelAuthor = 394,
    MenuModsTooltipLabelDependencies = 395,
    MenuModsTooltipLabelProvides = 396,
    MenuModsTooltipLabelVersion = 397,
    MenuModsTooltipLabelDescription = 398,
    MenuModsTooltipLabelInstallDate = 399,
    MenuModsTooltipLabelCreatedDate = 400,
    MenuModsTooltipLabelLastUpdatedDate = 401,
    MenuModsTooltipModOptions = 402,
    MenuModsTooltipProvidesCustomizations = 403,
    MenuModsTooltipProvidesImageOverrides = 404,
    MenuModsTooltipProvidesLanguage = 405,
    MenuModsTooltipProvidesScript = 406,
    MenuModsTooltipProvidesStylesheet = 407,
    MenuModsTooltipPublishMod = 408,
    MenuModsTooltipUninstallMod = 409,
    MenuModsTooltipViewInSteamWorkshop = 410,
    MenuModsTooltipCanLoadStateModLoadError = 411,
    MenuModsTooltipCanLoadStateDependencyIssue = 412,
    MenuModsTooltipCanLoadStateModRequiresItself = 413,
    MenuModsTooltipCanLoadStateMissingRequiredMod = 414,
    MenuModsTooltipCanLoadStateReqiredModNotLoaded = 415,
    MenuModsTooltipCanLoadStateLocalModPrecedence = 416,
    MenuModsTooltipCanLoadStateIncompatibleVersion = 417,
    MenuNewGameButtonNext = 418,
    MenuNewGameButtonStartServer = 419,
    MenuNewGameDescription = 420,
    MenuNewGameLabelEditName = 421,
    MenuNewGameLabelEditSeed = 422,
    MenuNewGamePlaceholderEditSeed = 423,
    MenuNewGameTitle = 424,
    MenuNewGameChoiceDifficultyCasual = 425,
    MenuNewGameChoiceDifficultyCasualDescription = 426,
    MenuNewGameChoiceDifficultyHardcore = 427,
    MenuNewGameChoiceDifficultyHardcoreDescription = 428,
    MenuNewGameChoiceDifficultyDailyChallenge = 429,
    MenuNewGameChoiceDifficultyDailyChallengeDescription = 430,
    MenuNewGameChoiceSingleplayer = 431,
    MenuNewGameChoiceSingleplayerDescription = 432,
    MenuNewGameChoiceMultiplayer = 433,
    MenuNewGameChoiceMultiplayerDescription = 434,
    MenuNewGameChoiceTurnsManual = 435,
    MenuNewGameChoiceTurnsManualDescription = 436,
    MenuNewGameChoiceTurnsRealTime = 437,
    MenuNewGameChoiceTurnsRealTimeDescription = 438,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 439,
    MenuNewsButtonDiscord = 440,
    MenuNewsButtonFacebook = 441,
    MenuNewsButtonReddit = 442,
    MenuNewsButtonTwitter = 443,
    MenuNewsDescription = 444,
    MenuNewsHeadingSocial = 445,
    MenuNewsTitle = 446,
    MenuNewsHeadingUnableToLoad = 447,
    MenuNewsButtonAllNews = 448,
    MenuOptionsInterruptLoading = 449,
    MenuOptionsInterruptLoadingDescription = 450,
    MenuOptionsButtonDitherFogOfWar = 451,
    MenuOptionsButtonFullscreen = 452,
    MenuOptionsButtonScreenshotMode = 453,
    MenuOptionsButtonDeveloperMode = 454,
    MenuOptionsButtonDeveloperModeContextMenu = 455,
    MenuOptionsButtonPixelFont = 456,
    MenuOptionsButtonReloadGame = 457,
    MenuOptionsButtonSaveDataClearAll = 458,
    MenuOptionsButtonSaveDataClearCharacters = 459,
    MenuOptionsButtonSaveDataClearHighscores = 460,
    MenuOptionsButtonSaveDataClearMilestones = 461,
    MenuOptionsButtonSaveDataClearOptions = 462,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 463,
    MenuOptionsButtonSaveDataClearSaves = 464,
    MenuOptionsButtonSkipSplash = 465,
    MenuOptionsButtonToggleDevTools = 466,
    MenuOptionsButtonTooltipsCreatures = 467,
    MenuOptionsButtonOpenLogsFolder = 468,
    MenuOptionsButtonTooltipsDoodads = 469,
    MenuOptionsButtonTooltipsItems = 470,
    MenuOptionsButtonTooltipsTerrain = 471,
    MenuOptionsButtonDropLocationFacing = 472,
    MenuOptionsButtonDropLocationFeet = 473,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 474,
    MenuOptionsDescription = 475,
    MenuOptionsHeadingAudio = 476,
    MenuOptionsHeadingDeveloper = 477,
    MenuOptionsHeadingGameplayOptions = 478,
    MenuOptionsHeadingGeneralOptions = 479,
    MenuOptionsHeadingControls = 480,
    MenuOptionsHeadingLanguage = 481,
    MenuOptionsHeadingModOptions = 482,
    MenuOptionsHeadingOther = 483,
    MenuOptionsHeadingSaveData = 484,
    MenuOptionsHeadingTooltips = 485,
    MenuOptionsHeadingVideo = 486,
    MenuOptionsInterruptReloadGame = 487,
    MenuOptionsInterruptSaveDataClearAll = 488,
    MenuOptionsInterruptSaveDataClearAllDescription = 489,
    MenuOptionsInterruptSaveDataClearCharacters = 490,
    MenuOptionsInterruptSaveDataClearHighscores = 491,
    MenuOptionsInterruptSaveDataClearMilestones = 492,
    MenuOptionsInterruptSaveDataClearOptions = 493,
    MenuOptionsInterruptSaveDataClearSaves = 494,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 495,
    MenuOptionsLabelInterfaceScale = 496,
    MenuOptionsLabelTurnDelay = 497,
    MenuOptionsTooltipTurnDelay = 498,
    MenuOptionsTooltipUiScaleClamped = 499,
    MenuOptionsTooltipControlsFilter = 500,
    MenuOptionsLabelVolumeEffects = 501,
    MenuOptionsLabelVolumeMusic = 502,
    MenuOptionsLabelControlsFilter = 503,
    MenuOptionsTabAudio = 504,
    MenuOptionsTabDeveloper = 505,
    MenuOptionsTabGameplay = 506,
    MenuOptionsTabGeneral = 507,
    MenuOptionsTabControls = 508,
    MenuOptionsTabMods = 509,
    MenuOptionsTabSaveData = 510,
    MenuOptionsTabVideo = 511,
    MenuOptionsTitle = 512,
    MenuOptionsTooltipMusicNextTrack = 513,
    MenuOptionsBindChoose = 514,
    MenuOptionsBindChooseAdd = 515,
    MenuOptionsBindableTypeGame = 516,
    MenuOptionsBindableTypeDialog = 517,
    MenuOptionsBindableTypeMenu = 518,
    MenuOptionsBindableTypeDeveloper = 519,
    MenuOptionsBindableTypeMod = 520,
    MenuOptionsBindLabelModifier = 521,
    MenuOptionsBindButtonResetTooltip = 522,
    MenuOptionsBindButtonDeleteTooltip = 523,
    MenuOptionsBindButtonAddTooltip = 524,
    MenuOptionsButtonAllowDiagonalMovement = 525,
    MenuOptionsButtonAlwaysShowMoreInformation = 526,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 527,
    MenuOptionsButtonAutoGatherHarvest = 528,
    MenuOptionsButtonAutoGatherHarvestTooltip = 529,
    MenuOptionsButtonAutoPickup = 530,
    MenuOptionsButtonAutoPickupTooltip = 531,
    MenuOptionsButtonDropOnGatherHarvest = 532,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 533,
    MenuOptionsButtonKeepSortActive = 534,
    MenuOptionsButtonKeepSortActiveTooltip = 535,
    MenuOptionsButtonProtectedCraftingItems = 536,
    MenuOptionsButtonProtectedCraftingItemsTooltip = 537,
    MenuOptionsButtonHideEquippedHeadgear = 538,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 539,
    MenuOptionsButtonWarnOnDangerousActions = 540,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 541,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 542,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 543,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 544,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 545,
    MenuOptionsHeadingWarnWhenBreakingItems = 546,
    MenuOptionsButtonSaveDataClearBindings = 547,
    MenuOptionsInterruptSaveDataClearBindings = 548,
    MenuOptionsTooltipDialogOpacity = 549,
    MenuOptionsLabelDialogOpacity = 550,
    MenuOptionsDeveloperLogSourceFilterHeading = 551,
    MenuPauseButtonContinue = 552,
    MenuPauseButtonOptions = 553,
    MenuPauseButtonMultiplayer = 554,
    MenuPauseButtonTitleScreen = 555,
    MenuPauseButtonStopServer = 556,
    MenuPauseHeadingPaused = 557,
    MenuPauseParagraphPaused = 558,
    MenuPauseHeadingNotPaused = 559,
    MenuPauseParagraphNotPaused = 560,
    MenuPauseHeadingDedicatedServer = 561,
    MenuPauseParagraphDedicatedServer = 562,
    MenuPauseInterruptGhostKeepSave = 563,
    MenuPauseInterruptGhostKeepSaveDescription = 564,
    MenuMultiplayerTitle = 565,
    MenuMultiplayerDescription = 566,
    MenuMultiplayerOpenServer = 567,
    MenuMultiplayerOpenServerDescription = 568,
    MenuMultiplayerPauseServer = 569,
    MenuMultiplayerPauseServerDescription = 570,
    MenuJoinDedicatedServerTitle = 571,
    MenuJoinDedicatedServerDescription = 572,
    MenuJoinDedicatedServerIP = 573,
    MenuJoinDedicatedServerIPPlaceholder = 574,
    MenuJoinDedicatedServerNext = 575,
    MenuSharedSortBy = 576,
    MenuSharedSortDirection = 577,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 578,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 579,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 580,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 581,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 582,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 583,
    MenuSharedMultiplayerChoicePVP = 584,
    MenuSharedMultiplayerChoicePVPDescription = 585,
    MenuSharedMultiplayerMaxPlayers = 586,
    MenuSharedRealTimeTickSpeedTooltip = 587,
    MenuSharedRealTimeTickSpeedLabel = 588,
    MenuSharedButtonDefault = 589,
    MenuSharedValueTickSpeed = 590,
    MenuSharedValuePercentage = 591,
    MiscPlayerNameDefault = 592,
    MiscSaveNameDefault = 593,
    MiscSaveVersionUnknown = 594,
    MiscDailyChallengeName = 595,
    MiscDifficultyHardcore = 596,
    MiscDifficultyCasual = 597,
    MiscDifficultyDailyChallenge = 598,
    MiscVersion = 599,
    MiscVersionBeta = 600,
    MiscVersionRelease = 601,
    MiscPartOfDayDawn = 602,
    MiscPartOfDaySunrise = 603,
    MiscPartOfDayDaytime = 604,
    MiscPartOfDaySunset = 605,
    MiscPartOfDayDusk = 606,
    MiscPartOfDayNighttime = 607,
    SharedListSeparator = 608,
    MiscBindableOr = 609,
    MiscBindableNoBindings = 610,
    SteamworksInterruptURLOpenedInBrowser = 611,
    SteamworksInterruptURLOpenedInBrowserDescription = 612,
    SteamworksInterruptWorkshopOpenedInBrowser = 613,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 614,
    SteamworksInterruptModWithNameAlreadyExists = 615,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 616,
    SteamworksInterruptModImportSaveGameFailure = 617,
    SteamworksInterruptModImportSaveGameFailureDescription = 618,
    SteamworksInterruptModImportedSaveGame = 619,
    SteamworksInterruptModImportedSaveGameDescription = 620,
    SteamworksInterruptLoadingRefreshingMods = 621,
    SteamworksInterruptLoadingRefreshingModsDescription = 622,
    SteamworksInterruptOpenFolderFailure = 623,
    SteamworksInterruptOpenFolderFailureDescription = 624,
    Bleeding = 625,
    Burned = 626,
    DisableHints = 627,
    EnableHints = 628,
    EquipmentBack = 629,
    EquipmentBelt = 630,
    EquipmentChest = 631,
    EquipmentFeet = 632,
    EquipmentHands = 633,
    EquipmentHead = 634,
    EquipmentLeftHand = 635,
    EquipmentLeftHandOption = 636,
    EquipmentLegs = 637,
    EquipmentNeck = 638,
    EquipmentRightHand = 639,
    EquipmentRightHandOption = 640,
    EquipmentUse = 641,
    HudFilter = 642,
    MenuDeleteAllGameData = 643,
    MenuDeleteGame = 644,
    MenuEditGame = 645,
    MenuExportGame = 646,
    MenuExportSave = 647,
    MenuHighscoresAll = 648,
    MenuHighscoresDailyChallenge = 649,
    MenuHighscoresMessage = 650,
    MenuHighscoresNone = 651,
    MenuHighscoresNormal = 652,
    MenuImportGame = 653,
    MenuImportSave = 654,
    MenuJoinGame = 655,
    MenuJoinGameJoin = 656,
    MenuJoinGameMessage = 657,
    MenuJoinGameName = 658,
    MenuJoinGameServer = 659,
    MenuOptionsMessage = 660,
    MenuQuitGame = 661,
    MenuReloadGame = 662,
    MenuToggleDeveloperTools = 663,
    MenuVisitSteamWorkshop = 664,
    OptionsAudio = 665,
    OptionsAutoGatherHarvest = 666,
    OptionsAutoGatherHarvestTooltip = 667,
    OptionsAutoPickup = 668,
    OptionsAutoPickupTooltip = 669,
    OptionsDropItemsAtFeet = 670,
    OptionsDropItemsAtFeetTooltip = 671,
    OptionsDropItemsAtFeetWhenFacingTileBlocked = 672,
    OptionsDropItemsAtFeetWhenFacingTileBlockedTooltip = 673,
    OptionsDropItemsOnFacingTile = 674,
    OptionsDropItemsOnFacingTileTooltip = 675,
    OptionsDropOnGatherHarvest = 676,
    OptionsDropOnGatherHarvestTooltip = 677,
    OptionsHideEquippedHeadgear = 678,
    OptionsHideEquippedHeadgearTooltip = 679,
    OptionsKeepSortActive = 680,
    OptionsKeepSortActiveTooltip = 681,
    OptionsProtectedCraftingItems = 682,
    OptionsProtectedCraftingItemsTooltip = 683,
    OptionsWarnOnDangerousActions = 684,
    OptionsWarnOnDangerousActionsTooltip = 685,
    OptionsWarnWhenBreakingItems = 686,
    OptionsWarnWhenBreakingItemsOnCraft = 687,
    OptionsWarnWhenBreakingItemsOnCraftTooltip = 688,
    OptionsWarnWhenBreakingItemsTooltip = 689,
    Poisoned = 690,
    QuickSlot1 = 691,
    QuickSlot2 = 692,
    QuickSlot3 = 693,
    QuickSlot4 = 694,
    QuickSlot5 = 695,
    QuickSlot6 = 696,
    QuickSlot7 = 697,
    QuickSlot8 = 698,
    QuickSlot9 = 699,
    TabCrafting = 700,
    TabDismantle = 701,
    Version = 702,
    WindowTitleContainer = 703,
    WindowTitleCrafting = 704,
    WindowTitleEquipment = 705,
    WindowTitleInventory = 706,
    WindowTitleMap = 707,
    WindowTitleMilestones = 708,
    WindowTitleOptions = 709,
    WindowTitleSkills = 710
}
export declare enum PlayerTranslation {
    FirstName = 0,
    LastName = 1
}
export declare enum Dictionary {
    Action = 0,
    Bindable = 1,
    BindPress = 2,
    Book = 3,
    Corpse = 4,
    Creature = 5,
    Doodad = 6,
    Growth = 7,
    HelpArticle = 8,
    InterruptChoice = 9,
    Item = 10,
    Message = 11,
    Milestone = 12,
    Note = 13,
    OnEquip = 14,
    Player = 15,
    Skill = 16,
    Terrain = 17,
    TileEvent = 18,
    Ui = 19
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
    FungusDead = 13
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
    setDictionary(dictionary: Dictionary.Note, newEntries: IHintDictionary): void;
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
    setEntry(dictionary: Dictionary.Note, entryIndex: HintType, name: string, description: string): void;
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
