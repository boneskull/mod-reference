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
/**
 * Ui messages that are on elements that don't change
 */
declare enum UiTranslation {
    GameActionGather = 0,
    GameDialogMessagesName = 1,
    GameDialogMessagesEditFiltersName = 2,
    GameDialogMessagesEditFiltersLabelName = 3,
    GameDialogMessagesEditFiltersButtonDelete = 4,
    GameDialogMessagesEditFiltersButtonSave = 5,
    GameDialogMessagesEditFiltersButtonReset = 6,
    GameDialogMessagesEditFiltersButtonNew = 7,
    GameDialogMessagesEditFiltersInterruptSaveOverExisting = 8,
    GameDialogMessagesEditFiltersInterruptSaveOverExistingDescription = 9,
    GameDialogMessagesEditFiltersInterruptResetConfirm = 10,
    GameDialogMessagesEditFiltersInterruptResetConfirmDescription = 11,
    GameDialogNotesName = 12,
    GameDialogNotesNoteTime = 13,
    GameDialogNotesNoteNumber = 14,
    GameDialogNotesNoteLockedTitle = 15,
    GameDialogNotesNoteLockedDescription = 16,
    GameDialogNotesLinkId = 17,
    GameDialogNotesLinkLearnMore = 18,
    GameDialogQuickSettingsName = 19,
    GameDialogMilestonesName = 20,
    GameDialogMilestonesInvisibleMilestone = 21,
    GameDialogMilestonesProgress = 22,
    GameDialogMilestonesProgressHidden = 23,
    GameDialogMilestonesMilestone = 24,
    GameDialogMilestonesTooltipHidden = 25,
    GameDialogMilestonesTooltipInvisible = 26,
    GameDialogMilestonesSortName = 27,
    GameDialogMilestonesSortProgress = 28,
    GameDialogSkillsName = 29,
    GameDialogSkillsSkill = 30,
    GameDialogSkillsTooltipReputationImpact = 31,
    GameDialogSkillsTooltipCanIncrease = 32,
    GameDialogSkillsSortName = 33,
    GameDialogSkillsSortLevel = 34,
    GameDialogBookName = 35,
    GameDialogMapName = 36,
    GameDialogMapTooltipDecode = 37,
    GameDialogQuestsName = 38,
    GameDialogQuestsLink = 39,
    GameDialogQuestsChildQuests = 40,
    GameDialogQuestsRequirements = 41,
    GameDialogQuestsActiveQuests = 42,
    GameDialogQuestsCompletedQuests = 43,
    GameDialogQuestsCompleteQuest = 44,
    GameTooltipShowMoreInformation = 45,
    GameTooltipLegendaryMaxWeightLabel = 46,
    GameStatsPercentage = 47,
    GameStatsStatAttack = 48,
    GameStatsStatGeneric = 49,
    GameStatsStatGenericWithMax = 50,
    GameStatsStatbar = 51,
    GameStatsStatHealthTooltip = 52,
    GameStatsStatStaminaTooltip = 53,
    GameStatsStatHungerTooltip = 54,
    GameStatsStatThirstTooltip = 55,
    GameStatsStatReputationTooltipDifficulty = 56,
    GameStatsStatReputationTooltipDifficultyEasy = 57,
    GameStatsStatReputationTooltipDifficultyHard = 58,
    GameStatsStatReputationTooltipDifficultyInsane = 59,
    GameStatsStatReputationTooltipDifficultyMedium = 60,
    GameStatsStatReputationTooltipDifficultySimple = 61,
    GameStatsStatReputationTooltipDifficultyVeryEasy = 62,
    GameStatsStatReputationTooltipDifficultyVeryHard = 63,
    GameStatsStatReputationTooltipBenignity = 64,
    GameStatsStatReputationTooltipMalignity = 65,
    GameStatsStatReputationTooltipScore = 66,
    GameStatsStatReputationTooltipTurn = 67,
    GameStatsStatReputationTooltipTicks = 68,
    GameStatsStatWeightTooltip = 69,
    GameStatsStatAttackTooltipTactics = 70,
    GameStatsStatAttackTooltipLeftHand = 71,
    GameStatsStatAttackTooltipRightHand = 72,
    GameStatsStatDefenseTooltipBase = 73,
    GameStatsStatDefenseTooltipBlunt = 74,
    GameStatsStatDefenseTooltipParrying = 75,
    GameStatsStatDefenseTooltipFire = 76,
    GameStatsStatDefenseTooltipPiercing = 77,
    GameStatsStatDefenseTooltipSlashing = 78,
    GameQuadrantElementStats = 79,
    GameQuadrantElementMenuBar = 80,
    GameQuadrantElementQuickslots = 81,
    GameQuadrantElementMessages = 82,
    GameQuadrantElementContextMenuMoveTo = 83,
    GameQuadrantElementContextMenuSwitchWith = 84,
    GameItemBarterCredit = 85,
    GameItemBarterCreditTrade = 86,
    GameInterruptItemMayBeDestroyedInCraft = 87,
    GameInterruptItemMayBeDestroyedInCraftDescription = 88,
    GameInterruptItemMayBeDestroyedOnUse = 89,
    GameInterruptItemMayBeDestroyedOnUseDescription = 90,
    GameInterruptLoadingQuitting = 91,
    GameInterruptLoadingQuittingDescription = 92,
    GameInterruptLoadingSaving = 93,
    GameInterruptLoadingSavingDescription = 94,
    GameInterruptReleaseCreature = 95,
    GameInterruptReleaseCreatureDescription = 96,
    GameInterruptRenameCreature = 97,
    GameInterruptRenameCreatureDescription = 98,
    GameInterruptRenameDoodad = 99,
    GameInterruptRenameDoodadDescription = 100,
    GameInterruptRenameItem = 101,
    GameInterruptRenameItemDescription = 102,
    GameInterruptReturnToTitleScreen = 103,
    GameInterruptReturnToTitleScreenChallenge = 104,
    GameInterruptReturnToTitleScreenChallengeDescription = 105,
    GameInterruptReturnToTitleScreenDescription = 106,
    GameInterruptLoadingWorld = 107,
    GameInterruptLoadingWorldDescription = 108,
    GameInterruptLoadingGeneratingWorld = 109,
    GameInterruptLoadingGeneratingWorldDescription = 110,
    GameInterruptLoadingFinalizingWorld = 111,
    GameInterruptLoadingFinalizingWorldDescription = 112,
    GameInterruptSailAwayEnd = 113,
    GameInterruptSailAwayEndDescription = 114,
    GameInterruptSailAwayReturnable = 115,
    GameInterruptSailAwayReturnableDescription = 116,
    GameInterruptTravelAway = 117,
    GameInterruptTravelAwayDescription = 118,
    GameInterruptLoadingResting = 119,
    GameInterruptLoadingRestingDescription = 120,
    GameInterruptLoadingSleeping = 121,
    GameInterruptLoadingSleepingDescription = 122,
    GameInterruptLoadingTraveling = 123,
    GameInterruptLoadingTravelingDescription = 124,
    GameInterruptLoadingLostGLContext = 125,
    GameInterruptLoadingAutoSaving = 126,
    GameInterruptLoadingAutoSavingDescription = 127,
    GameInterruptLoadingLostGLContextDescription = 128,
    GameInterruptLoadingMods = 129,
    GameInterruptLoadingModsDescription = 130,
    GameInterruptLoadingMultiplayerPlayerConnecting = 131,
    GameInterruptLoadingMultiplayerSyncing = 132,
    GameInterruptLoadingReloadingWebGl = 133,
    GameInterruptDangerousStep = 134,
    GameInterruptDangerousStepDescription = 135,
    GameInterruptSaveFailure = 136,
    GameInterruptSaveFailureDescription = 137,
    GameInterruptLoadFailure = 138,
    GameInterruptLoadFailureDescription = 139,
    GameInterruptDesalinationNoNeed = 140,
    GameInterruptDesalinationNoNeedDescription = 141,
    GameInterruptWellConvert = 142,
    GameInterruptWellConvertDescription = 143,
    GameInterruptNoHealingRequired = 144,
    GameInterruptNoHealingRequiredDescription = 145,
    GameInterruptConfirmationActionOnFire = 146,
    GameInterruptConfirmationActionOnFireDescription = 147,
    GameInterruptConfirmationDestroyOnGather = 148,
    GameInterruptConfirmationDestroyOnGatherDescription = 149,
    GameInterruptLoadingGame = 150,
    GameInterruptLoadingGameDescription = 151,
    GameInterruptLoadingSprites = 152,
    GameInterruptLoadingSpritesDescription = 153,
    GameInterruptMultiplayerSynchronizing = 154,
    GameInterruptMultiplayerSynchronizingDescription = 155,
    GameInterruptNoSaveOnDeath = 156,
    GameInterruptNoSaveOnDeathDescription = 157,
    GameInterruptItemsMayBeDestroyedOnUse = 158,
    GameInterruptItemsMayBeDestroyedOnUseDescription = 159,
    GameMenuBarButtonTooltipBindable = 160,
    GameMenuBarButtonTooltipMenu = 161,
    GameMenuBarButtonTooltipSave = 162,
    GameMenuBarButtonTooltipNotes = 163,
    GameMenuBarButtonTooltipMilestones = 164,
    GameMenuBarButtonTooltipMessages = 165,
    GameMenuBarButtonTooltipHelp = 166,
    GameMenuBarButtonTooltipQuickSettings = 167,
    GameMenuBarButtonTooltipActions = 168,
    GameMenuBarButtonTooltipInventory = 169,
    GameMenuBarButtonTooltipCrafting = 170,
    GameMenuBarButtonTooltipEquipment = 171,
    GameMenuBarButtonTooltipSkills = 172,
    GameMenuBarButtonTooltipQuests = 173,
    GameMessagesButtonSend = 174,
    GameMessagesContextMenuShowAsDialog = 175,
    GameMessagesContextMenuClear = 176,
    GameMessagesContextMenuCopy = 177,
    GameMessagesContextMenuExport = 178,
    GameMessagesContextMenuClearInterrupt = 179,
    GameMessagesContextMenuClearInterruptDescription = 180,
    GameMessagesFilter = 181,
    GameMessagesFilterAll = 182,
    GameMessagesFilterGame = 183,
    GameMessagesFilterChat = 184,
    GameMessagesFiltersEdit = 185,
    GameMessagesNewNote = 186,
    GameMultiplayerInterruptBanned = 187,
    GameMultiplayerInterruptConnected = 188,
    GameMultiplayerInterruptConnectedDescriptionDownloadingWorldData = 189,
    GameMultiplayerInterruptConnectedDescriptionWaitingForWorldData = 190,
    GameMultiplayerInterruptConnecting = 191,
    GameMultiplayerInterruptConnectingDescription = 192,
    GameMultiplayerInterruptFailedToConnect = 193,
    GameMultiplayerInterruptFailedToLoadMods = 194,
    GameMultiplayerInterruptKicked = 195,
    GameMultiplayerInterruptLostConnection = 196,
    GameMultiplayerInterruptRequiredModIsDisabled = 197,
    GameMultiplayerInterruptRequiredModNotInstalled = 198,
    GameMultiplayerInterruptRequiredModNotMultiplayerCompatible = 199,
    GameMultiplayerInterruptRequiredModUnableToLoad = 200,
    GameMultiplayerInterruptRequiredModVersionMismatch = 201,
    GameMultiplayerInterruptRestartServerAfterLoadingSave = 202,
    GameMultiplayerInterruptRestartServerAfterLoadingSaveDescription = 203,
    GameMultiplayerInterruptServerShutdown = 204,
    GameMultiplayerInterruptSynchronizationError = 205,
    GameMultiplayerInterruptSynchronizationErrorDescription = 206,
    GameMultiplayerInterruptUnableToJoinGame = 207,
    GameMultiplayerInterruptUnableToJoinGameBuildMismatch = 208,
    GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier = 209,
    GameMultiplayerInterruptUnableToJoinGameFriendsOnly = 210,
    GameMultiplayerInterruptUnableToJoinGameServerFull = 211,
    GameMultiplayerInterruptUnableToJoinGameSteamRequired = 212,
    GameMultiplayerInterruptUnableToJoinGameUnknownError = 213,
    GameMultiplayerInterruptUnableToJoinGameVersionMismatch = 214,
    MenuAboutTitle = 215,
    MenuAboutDescription = 216,
    MenuAboutGameDescription = 217,
    MenuAboutSectionTeam = 218,
    MenuAboutTeamMemberResponsibilities = 219,
    MenuAboutTeamMemberName = 220,
    MenuAboutTeamMemberNickname = 221,
    MenuAboutSectionContributors = 222,
    MenuAboutSectionSpecialThanks = 223,
    MenuAboutTextSpecialThanksTestorsAndDonators = 224,
    MenuAboutSectionLibraries = 225,
    MenuAboutSectionLibrariesDescription = 226,
    MenuChangelogTitle = 227,
    MenuChangelogDescription = 228,
    MenuChangelogHeadingFailedLoad = 229,
    MenuChangelogHeadingChangeCount = 230,
    MenuChangelogInterruptLoadingChangelog = 231,
    MenuChangelogInterruptLoadingChangelogDescription = 232,
    MenuCharacterCreationButtonRandomizeName = 233,
    MenuCharacterCreationButtonExportTooltip = 234,
    MenuCharacterCreationButtonImportTooltip = 235,
    MenuCharacterCreationButtonStartGame = 236,
    MenuCharacterCreationButtonJoinGame = 237,
    MenuCharacterCreationDescription = 238,
    MenuCharacterCreationHeadingHairColor = 239,
    MenuCharacterCreationHeadingHairStyle = 240,
    MenuCharacterCreationHeadingSkinTone = 241,
    MenuCharacterCreationLabelName = 242,
    MenuCharacterCreationTitle = 243,
    MenuCharacterCreationInterruptImportCharacterFailure = 244,
    MenuCharacterCreationInterruptImportCharacterFailureDescription = 245,
    MenuCharacterCreationButtonRotateLeftTooltip = 246,
    MenuCharacterCreationButtonRotateRightTooltip = 247,
    MenuCharacterCreationButtonRandomizeTooltip = 248,
    MenuCharacterSelectionButtonNewCharacter = 249,
    MenuCharacterSelectionDescription = 250,
    MenuCharacterSelectionHeadingNoCharacters = 251,
    MenuCharacterSelectionTitle = 252,
    MenuCharacterSelectionLabelLastUse = 253,
    MenuCharacterSelectionLabelUseCount = 254,
    MenuCharacterSelectionCharacterButtonDeleteTooltip = 255,
    MenuCharacterSelectionCharacterButtonCustomizeTooltip = 256,
    MenuCharacterSelectionInterruptDeleteCharacter = 257,
    MenuMultiplayerDescription = 258,
    MenuMultiplayerTitle = 259,
    MenuMultiplayerButtonJoinById = 260,
    MenuMultiplayerServerLabelReputation = 261,
    MenuMultiplayerServerLabelDays = 262,
    MenuMultiplayerButtonNewGame = 263,
    MenuMultiplayerButtonLoadGame = 264,
    MenuMultiplayerServerTooltipPVP = 265,
    MenuMultiplayerServerTooltipModsLabel = 266,
    MenuMultiplayerServerTooltipFriendsLabel = 267,
    MenuMultiplayerServerPlayers = 268,
    MenuMultiplayerServerRegion = 269,
    MenuMultiplayerServerHost = 270,
    MenuMultiplayerServerDedicated = 271,
    MenuMultiplayerHeadingPlayersOnline = 272,
    MenuGameEndTitleDead = 273,
    MenuGameEndTitleWon = 274,
    MenuGameEndShareFacebook = 275,
    MenuGameEndShareTwitter = 276,
    MenuGameEndContinueAsGhost = 277,
    MenuGameEndReturnToIsland = 278,
    MenuGameEndExitToMenu = 279,
    MenuGameEndInterruptGhostDeleteSave = 280,
    MenuGameEndInterruptWonDeleteSave = 281,
    MenuGameEndInterruptDeleteSaveDescription = 282,
    MenuGameEndInterruptReturnToTitleScreen = 283,
    MenuGameEndInterruptReturnToTitleScreenChallengeMultiplayerDescription = 284,
    MenuGameEndInterruptReturnToTitleScreenChallengeDescription = 285,
    MenuGameEndInterruptReturnToTitleScreenMultiplayerDescription = 286,
    MenuHelpTitle = 287,
    MenuHelpDescription = 288,
    MenuHelpLabelSearch = 289,
    MenuHighscoresTitle = 290,
    MenuHighscoresDescription = 291,
    MenuHighscoresDifficultyFilterAll = 292,
    MenuHighscoresHighscoreLabelDifficulty = 293,
    MenuHighscoresHighscoreLabelTurns = 294,
    MenuHighscoresHighscoreLabelScore = 295,
    MenuHighscoresHighscoreLabelPlace = 296,
    MenuHighscoresHighscoreLabelDate = 297,
    MenuHighscoresHighscoreLabelDeathBy = 298,
    MenuHighscoresHighscoreTitle = 299,
    MenuHighscoresCharacterNameUnknown = 300,
    MenuLoadGameButtonNewGame = 301,
    MenuLoadGameButtonNewGameButtonImportTooltip = 302,
    MenuLoadGameDescription = 303,
    MenuLoadGameSaveButtonDeleteTooltip = 304,
    MenuLoadGameSaveButtonEditNameTooltip = 305,
    MenuLoadGameSaveButtonExportTooltip = 306,
    MenuLoadGameSaveTooltipLabelCreatedTime = 307,
    MenuLoadGameSaveTooltipLabelSaveTime = 308,
    MenuLoadGameSaveTooltipLabelDifficulty = 309,
    MenuLoadGameSaveTooltipLabelScore = 310,
    MenuLoadGameSaveTooltipLabelSeed = 311,
    MenuLoadGameSaveTooltipLabelTurns = 312,
    MenuLoadGameSaveTooltipLabelMods = 313,
    MenuLoadGameSaveTooltipLabelOriginalVersion = 314,
    MenuLoadGameSaveTooltipMod = 315,
    MenuLoadGameSlotsRemaining = 316,
    MenuLoadGameTitle = 317,
    MenuLoadGameInterruptDeleteSave = 318,
    MenuLoadGameInterruptDeleteSaveDescription = 319,
    MenuLoadGameInterruptLoadingExportingSave = 320,
    MenuLoadGameInterruptLoadingExportingSaveDescription = 321,
    MenuLoadGameInterruptLoadingImportingSave = 322,
    MenuLoadGameInterruptLoadingImportingSaveDescription = 323,
    MenuLoadGameInterruptImportSaveFailure = 324,
    MenuLoadGameInterruptImportSaveFailureDescription = 325,
    MenuLoadGameInterruptExportType = 326,
    MenuLoadGameInterruptExportTypeDescription = 327,
    MenuLoadGameInterruptPublishingSave = 328,
    MenuLoadGameInterruptPublishingSaveDescription = 329,
    MenuLoadGameInterruptMissingMod = 330,
    MenuLoadGameInterruptMissingModDescription = 331,
    MenuLoadGameInterruptMissingModDescriptionLabelModsMissing = 332,
    MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled = 333,
    MenuLoadGameInterruptLoading = 334,
    MenuLoadGameInterruptLoadingDescription = 335,
    MenuMainButtonAbout = 336,
    MenuMainButtonChangelog = 337,
    MenuMainButtonContinueGame = 338,
    MenuMainButtonMultiplayer = 339,
    MenuMainButtonHighscores = 340,
    MenuMainButtonLoadGame = 341,
    MenuMainButtonMods = 342,
    MenuMainButtonNewGame = 343,
    MenuMainButtonNews = 344,
    MenuMainButtonOptions = 345,
    MenuMainButtonQuitGame = 346,
    MenuMainInterruptLoadingNews = 347,
    MenuMainInterruptLoadingNewsDescription = 348,
    MenuMainInterruptLoadingChangelog = 349,
    MenuMainInterruptLoadingChangelogDescription = 350,
    MenuMainInterruptWelcomeToVersion = 351,
    MenuMainInterruptWelcomeToVersionDescription = 352,
    MenuMainInterruptOldVersionWarning = 353,
    MenuMainInterruptOldVersionWarningDescription = 354,
    MenuModsButtonDisableAll = 355,
    MenuModsButtonEnableAll = 356,
    MenuModsButtonModdingGuide = 357,
    MenuModsButtonOpenFolder = 358,
    MenuModsButtonOpenWorkshop = 359,
    MenuModsDescription = 360,
    MenuModsInterruptConfirmPublish = 361,
    MenuModsInterruptConfirmPublishUpdate = 362,
    MenuModsInterruptModEnableMultipleLanguages = 363,
    MenuModsInterruptModEnableMultipleLanguagesDescription = 364,
    MenuModsInterruptModEnableUseLanguage = 365,
    MenuModsInterruptModEnableUseLanguageDescription = 366,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshop = 367,
    MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription = 368,
    MenuModsInterruptConfirmPublishDescription = 369,
    MenuModsInterruptConfirmPublishUpdateDescription = 370,
    MenuModsInterruptPublishingMod = 371,
    MenuModsInterruptPublishingModDescription = 372,
    MenuModsInterruptPublishError = 373,
    MenuModsInterruptPublishErrorDescription = 374,
    MenuModsInterruptUpdatingMod = 375,
    MenuModsInterruptUpdatingModDescription = 376,
    MenuModsInterruptPublishUpdateError = 377,
    MenuModsInterruptPublishUpdateErrorDescription = 378,
    MenuModsInterruptInfoMissingDependencies = 379,
    MenuModsInterruptInfoMissingDependenciesDescription = 380,
    MenuModsInterruptConfirmEnableDisabledDependencies = 381,
    MenuModsInterruptConfirmEnableDisabledDependenciesDescription = 382,
    MenuModsInterruptConfirmDisableDependents = 383,
    MenuModsInterruptConfirmDisableDependentsDescription = 384,
    MenuModsInterruptConfirmUninstallMod = 385,
    MenuModsInterruptConfirmUninstallModDescription = 386,
    MenuModsInterruptUnloadableSaveGameMod = 387,
    MenuModsInterruptUnloadableSaveGameModDescription = 388,
    MenuModsTitle = 389,
    MenuModsTooltipLabelAuthor = 390,
    MenuModsTooltipLabelTags = 391,
    MenuModsTooltipLabelDependencies = 392,
    MenuModsTooltipLabelProvides = 393,
    MenuModsTooltipLabelVersion = 394,
    MenuModsTooltipLabelDescription = 395,
    MenuModsTooltipLabelInstallDate = 396,
    MenuModsTooltipLabelCreatedDate = 397,
    MenuModsTooltipLabelLastUpdatedDate = 398,
    MenuModsTooltipMultiplayerCompatibility = 399,
    MenuModsTooltipModOptions = 400,
    MenuModsTooltipProvidesCustomizations = 401,
    MenuModsTooltipProvidesImageOverrides = 402,
    MenuModsTooltipProvidesLanguage = 403,
    MenuModsTooltipProvidesLanguageExtensions = 404,
    MenuModsTooltipProvidesScript = 405,
    MenuModsTooltipProvidesStylesheet = 406,
    MenuModsTooltipPublishMod = 407,
    MenuModsTooltipUninstallMod = 408,
    MenuModsTooltipViewInSteamWorkshop = 409,
    MenuModsButtonEditInternalMods = 410,
    MenuModsSectionHeading = 411,
    MenuModsSubmenuEditInternalModsTitle = 412,
    MenuModsSubmenuEditInternalModsDescription = 413,
    MenuModsSubmenuEditInternalModsInterruptModsListChangeReload = 414,
    MenuModsSubmenuEditInternalModsInterruptModsListChangeReloadDescription = 415,
    MenuModsSubmenuEditInternalModsPlaceholderAddNewInternalMod = 416,
    MenuNewGameButtonNext = 417,
    MenuNewGameButtonStartServer = 418,
    MenuNewGameDescription = 419,
    MenuNewGameLabelEditName = 420,
    MenuNewGameLabelEditSeed = 421,
    MenuNewGamePlaceholderEditSeed = 422,
    MenuNewGameTitle = 423,
    MenuNewGameChoiceDifficulty = 424,
    MenuNewGameChoiceSingleplayer = 425,
    MenuNewGameChoiceSingleplayerDescription = 426,
    MenuNewGameChoiceMultiplayer = 427,
    MenuNewGameChoiceMultiplayerDescription = 428,
    MenuNewGameChoiceTurnModeManual = 429,
    MenuNewGameChoiceTurnModeManualDescription = 430,
    MenuNewGameChoiceTurnModeRealTime = 431,
    MenuNewGameChoiceTurnModeRealTimeDescription = 432,
    MenuNewGameChoiceTurnModeSimulated = 433,
    MenuNewGameChoiceTurnModeSimulatedDescription = 434,
    MenuNewGameChoiceDifficultyTooltipMaxSaves = 435,
    MenuNewGameChoiceDifficultyTooltipCustomGameOptions = 436,
    MenuNewGameChoiceDifficultyChallengeDaily = 437,
    MenuNewGameChoiceDifficultyChallengeDailyTooltip = 438,
    MenuCustomGameOptionsTitle = 439,
    MenuCustomGameOptionsDescription = 440,
    MenuCustomGameOptionsPeaceful = 441,
    MenuCustomGameOptionsPeacefulDescription = 442,
    MenuCustomGameOptionsRespawnOnDeath = 443,
    MenuCustomGameOptionsRespawnOnDeathDescription = 444,
    MenuCustomGameOptionsBenignityInitial = 445,
    MenuCustomGameOptionsBenignityMultiplier = 446,
    MenuCustomGameOptionsBenignityMultiplierTooltip = 447,
    MenuCustomGameOptionsMalignityInitial = 448,
    MenuCustomGameOptionsMalignityMultiplier = 449,
    MenuCustomGameOptionsMalignityMultiplierTooltip = 450,
    MenuCustomGameOptionsStatMultiplier = 451,
    MenuCustomGameOptionsStatMultiplierTooltip = 452,
    MenuCustomGameOptionsStatRegenerationMultiplierTooltip = 453,
    MenuCustomGameOptionsHeadingGeneral = 454,
    MenuCustomGameOptionsHeadingTime = 455,
    MenuCustomGameOptionsHeadingStats = 456,
    MenuCustomGameOptionsHeadingReputation = 457,
    MenuCustomGameOptionsHeadingInventory = 458,
    MenuCustomGameOptionsHeadingSkills = 459,
    MenuCustomGameOptionsHeadingStatusEffects = 460,
    MenuCustomGameOptionsEternalNight = 461,
    MenuCustomGameOptionsTimeFrozen = 462,
    MenuCustomGameOptionsTimeInitial = 463,
    MenuCustomGameOptionsTimeDayLength = 464,
    MenuCustomGameOptionsTimeDayLengthTooltip = 465,
    MenuCustomGameOptionsTimeDayPercent = 466,
    MenuCustomGameOptionsTimeDayPercentTooltip = 467,
    MenuCustomGameOptionsEternalNightDescription = 468,
    MenuCustomGameOptionsStatStarting = 469,
    MenuCustomGameOptionsStatMax = 470,
    MenuCustomGameOptionsStatStartingDisplay = 471,
    MenuCustomGameOptionsStatMaxDisplay = 472,
    MenuCustomGameOptionsStatStrengthTooltip = 473,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplier = 474,
    MenuCustomGameOptionsStatusEffectPassChanceMultiplierTooltip = 475,
    MenuCustomGameOptionsStatusEffectStartWith = 476,
    MenuCustomGameOptionsStatusEffectUntreatable = 477,
    MenuCustomGameOptionsStatusEffectUntreatableTooltip = 478,
    MenuCustomGameOptionsSkillsGenerateRandom = 479,
    MenuCustomGameOptionsSkillsGenerateRandomDescription = 480,
    MenuCustomGameOptionsSkillNone = 481,
    MenuCustomGameOptionsSkillConfigure = 482,
    MenuCustomGameOptionsSkillInitial = 483,
    MenuCustomGameOptionsSkillMultiplier = 484,
    MenuCustomGameOptionsSkillMultiplierTooltip = 485,
    MenuCustomGameOptionsRandomItems = 486,
    MenuCustomGameOptionsRandomItemsDescription = 487,
    MenuNewsButtonDiscord = 488,
    MenuNewsButtonFacebook = 489,
    MenuNewsButtonReddit = 490,
    MenuNewsButtonTwitter = 491,
    MenuNewsDescription = 492,
    MenuNewsHeadingSocial = 493,
    MenuNewsTitle = 494,
    MenuNewsHeadingUnableToLoad = 495,
    MenuNewsButtonAllNews = 496,
    MenuOptionsInterruptLoading = 497,
    MenuOptionsInterruptLoadingDescription = 498,
    MenuOptionsButtonDitherFogOfWar = 499,
    MenuOptionsButtonDisableCustomCursor = 500,
    MenuOptionsButtonFullscreen = 501,
    MenuOptionsButtonDeveloperMode = 502,
    MenuOptionsButtonDeveloperModeContextMenu = 503,
    MenuOptionsButtonPixelFont = 504,
    MenuOptionsButtonReloadGame = 505,
    MenuOptionsButtonExportGlobalSaveData = 506,
    MenuOptionsButtonImportGlobalSaveData = 507,
    MenuOptionsButtonSaveDataClearAll = 508,
    MenuOptionsButtonSaveDataClearCharacters = 509,
    MenuOptionsButtonSaveDataClearHighscores = 510,
    MenuOptionsButtonSaveDataClearMilestones = 511,
    MenuOptionsButtonSaveDataClearOptions = 512,
    MenuOptionsButtonSaveDataClearCraftingRecipes = 513,
    MenuOptionsButtonSaveDataClearSaves = 514,
    MenuOptionsButtonSkipSplash = 515,
    MenuOptionsButtonToggleDevTools = 516,
    MenuOptionsButtonTooltipsCreatures = 517,
    MenuOptionsButtonOpenLogsFolder = 518,
    MenuOptionsButtonTooltipsDoodads = 519,
    MenuOptionsButtonTooltipsItems = 520,
    MenuOptionsButtonTooltipsTerrain = 521,
    MenuOptionsButtonDropLocationFacing = 522,
    MenuOptionsButtonDropLocationFeet = 523,
    MenuOptionsButtonDropLocationFeetWhenFacingBlocked = 524,
    MenuOptionsDescription = 525,
    MenuOptionsHeadingAudio = 526,
    MenuOptionsHeadingDeveloper = 527,
    MenuOptionsHeadingGameplayOptions = 528,
    MenuOptionsHeadingGeneralOptions = 529,
    MenuOptionsHeadingControls = 530,
    MenuOptionsHeadingLanguage = 531,
    MenuOptionsHeadingPowerPreference = 532,
    MenuOptionsHeadingModOptions = 533,
    MenuOptionsHeadingOther = 534,
    MenuOptionsHeadingSaveData = 535,
    MenuOptionsHeadingTooltips = 536,
    MenuOptionsHeadingVideo = 537,
    MenuOptionsInterruptReloadGame = 538,
    MenuOptionsInterruptSaveDataClearAll = 539,
    MenuOptionsInterruptSaveDataClearAllDescription = 540,
    MenuOptionsInterruptSaveDataClearCharacters = 541,
    MenuOptionsInterruptSaveDataClearHighscores = 542,
    MenuOptionsInterruptSaveDataClearMilestones = 543,
    MenuOptionsInterruptSaveDataClearOptions = 544,
    MenuOptionsInterruptSaveDataClearSaves = 545,
    MenuOptionsInterruptSaveDataClearCraftingRecipes = 546,
    MenuOptionsLabelInterfaceScale = 547,
    MenuOptionsLabelDirectionTurnDelay = 548,
    MenuOptionsLabelMouseTurnDelay = 549,
    MenuOptionsTooltipTurnDelay = 550,
    MenuOptionsTooltipMouseTurnDelay = 551,
    MenuOptionsTooltipUiScaleClamped = 552,
    MenuOptionsTooltipControlsFilter = 553,
    MenuOptionsLabelVolumeEffects = 554,
    MenuOptionsLabelVolumeMusic = 555,
    MenuOptionsTabAudio = 556,
    MenuOptionsTabDeveloper = 557,
    MenuOptionsTabGameplay = 558,
    MenuOptionsTabGeneral = 559,
    MenuOptionsTabControls = 560,
    MenuOptionsTabMods = 561,
    MenuOptionsTabSaveData = 562,
    MenuOptionsTabVideo = 563,
    MenuOptionsTitle = 564,
    MenuOptionsTooltipMusicNextTrack = 565,
    MenuOptionsBindChoose = 566,
    MenuOptionsBindChooseAdd = 567,
    MenuOptionsBindLabelModifier = 568,
    MenuOptionsBindButtonResetTooltip = 569,
    MenuOptionsBindButtonDeleteTooltip = 570,
    MenuOptionsBindButtonAddTooltip = 571,
    MenuOptionsButtonAllowDiagonalMovement = 572,
    MenuOptionsButtonAlwaysShowMoreInformation = 573,
    MenuOptionsButtonAlwaysShowMoreInformationTooltip = 574,
    MenuOptionsButtonAutoGatherHarvest = 575,
    MenuOptionsButtonAutoGatherHarvestTooltip = 576,
    MenuOptionsButtonAutoPickup = 577,
    MenuOptionsButtonAutoPickupTooltip = 578,
    MenuOptionsButtonDropOnGatherHarvest = 579,
    MenuOptionsButtonDropOnGatherHarvestTooltip = 580,
    MenuOptionsButtonKeepSortActive = 581,
    MenuOptionsButtonKeepSortActiveTooltip = 582,
    MenuOptionsButtonProtectCraftingItemsInInventory = 583,
    MenuOptionsButtonProtectCraftingItemsInInventoryTooltip = 584,
    MenuOptionsButtonProtectCraftingItemContainers = 585,
    MenuOptionsButtonProtectCraftingItemsContainersTooltip = 586,
    MenuOptionsButtonUseAdjacentContainers = 587,
    MenuOptionsButtonUseAdjacentContainersTooltip = 588,
    MenuOptionsButtonHideEquippedHeadgear = 589,
    MenuOptionsButtonHideEquippedHeadgearTooltip = 590,
    MenuOptionsButtonEnableAutoSave = 591,
    MenuOptionsButtonEnableAutoSaveTooltip = 592,
    MenuOptionsButtonWarnOnDangerousActions = 593,
    MenuOptionsButtonWarnOnDangerousActionsTooltip = 594,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraft = 595,
    MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip = 596,
    MenuOptionsButtonWarnWhenBreakingItemsOnUse = 597,
    MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip = 598,
    MenuOptionsHeadingWarnWhenBreakingItems = 599,
    MenuOptionsButtonSaveDataClearBindings = 600,
    MenuOptionsInterruptSaveDataClearBindings = 601,
    MenuOptionsTooltipDialogOpacity = 602,
    MenuOptionsLabelDialogOpacity = 603,
    MenuOptionsDeveloperLogSourceFilterHeading = 604,
    MenuOptionsInterruptConfirmImportGlobalData = 605,
    MenuOptionsInterruptConfirmImportGlobalDataDescription = 606,
    MenuOptionsInterruptLoadingImportingGlobalData = 607,
    MenuOptionsInterruptLoadingImportingGlobalDataDescription = 608,
    MenuOptionsAudioVolumeDisplay = 609,
    MenuOptionsMusicPlaylist = 610,
    MenuPauseButtonContinue = 611,
    MenuPauseButtonOptions = 612,
    MenuPauseButtonWorld = 613,
    MenuPauseButtonTitleScreen = 614,
    MenuPauseButtonStopServer = 615,
    MenuPauseHeadingPaused = 616,
    MenuPauseParagraphPaused = 617,
    MenuPauseHeadingNotPaused = 618,
    MenuPauseParagraphNotPaused = 619,
    MenuPauseHeadingDedicatedServer = 620,
    MenuPauseParagraphDedicatedServer = 621,
    MenuPauseInterruptGhostKeepSave = 622,
    MenuPauseInterruptGhostKeepSaveDescription = 623,
    MenuPauseInterruptReturnToTitleScreen = 624,
    MenuPauseInterruptReturnToTitleScreenChallengeDescription = 625,
    MenuPauseInterruptReturnToTitleScreenChallengeMultiplayerDescription = 626,
    MenuPauseInterruptReturnToTitleScreenDescription = 627,
    MenuPauseInterruptReturnToTitleScreenMultiplayerDescription = 628,
    MenuWorldTitle = 629,
    MenuWorldDescription = 630,
    MenuWorldHeadingMultiplayer = 631,
    MenuWorldOpenServer = 632,
    MenuWorldOpenServerDescription = 633,
    MenuWorldPauseServer = 634,
    MenuWorldPauseServerDescription = 635,
    MenuWorldCopyGameCode = 636,
    MenuWorldCopyGameCodeTooltip = 637,
    MenuJoinServerTitle = 638,
    MenuJoinServerDescription = 639,
    MenuJoinServerInputPlaceholder = 640,
    MenuJoinServerNext = 641,
    MenuSharedMultiplayerChoiceLobbyTypeFriends = 642,
    MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription = 643,
    MenuSharedMultiplayerChoiceLobbyTypePublic = 644,
    MenuSharedMultiplayerChoiceLobbyTypePublicDescription = 645,
    MenuSharedMultiplayerChoiceLobbyTypePrivate = 646,
    MenuSharedMultiplayerChoiceLobbyTypePrivateDescription = 647,
    MenuSharedMultiplayerChoicePVP = 648,
    MenuSharedMultiplayerChoicePVPDescription = 649,
    MenuSharedMultiplayerMaxPlayers = 650,
    MenuSharedRealTimeTickSpeedTooltip = 651,
    MenuSharedRealTimeTickSpeedLabel = 652,
    MenuSharedButtonDefault = 653,
    MenuSharedValueTickSpeed = 654,
    MenuSharedValuePercentage = 655,
    MiscSortBy = 656,
    MiscSortDirection = 657,
    MiscFilter = 658,
    MiscPlayerNameDefault = 659,
    MiscPlayerNameServer = 660,
    MiscSaveNameDefault = 661,
    MiscSaveNameDailyChallenge = 662,
    MiscSaveNameChallenge = 663,
    MiscSaveVersionUnknown = 664,
    MiscVersion = 665,
    MiscTime = 666,
    MiscTimeMeridiem = 667,
    MiscBindableOr = 668,
    MiscBindableNoBindings = 669,
    SteamworksInterruptURLOpenedInBrowser = 670,
    SteamworksInterruptURLOpenedInBrowserDescription = 671,
    SteamworksInterruptWorkshopOpenedInBrowser = 672,
    SteamworksInterruptWorkshopOpenedInBrowserDescription = 673,
    SteamworksInterruptModWithNameAlreadyExists = 674,
    SteamworksInterruptModWithNameAlreadyExistsDescription = 675,
    SteamworksInterruptModImportSaveGameFailure = 676,
    SteamworksInterruptModImportSaveGameFailureDescription = 677,
    SteamworksInterruptModImportedSaveGame = 678,
    SteamworksInterruptModImportedSaveGameDescription = 679,
    SteamworksInterruptLoadingRefreshingMods = 680,
    SteamworksInterruptLoadingRefreshingModsDescription = 681,
    SteamworksInterruptOpenFolderFailure = 682,
    SteamworksInterruptOpenFolderFailureDescription = 683,
    DifficultyOptionsPeaceful = 684,
    DifficultyOptionsRespawn = 685,
    DifficultyOptionsEternalNight = 686,
    DifficultyOptionsTimeInitial = 687,
    DifficultyOptionsTimeFrozen = 688,
    DifficultyOptionsTimeDayLength = 689,
    DifficultyOptionsTimeDayPercent = 690,
    DifficultyOptionsNoItems = 691,
    DifficultyOptionsBenignityInitial = 692,
    DifficultyOptionsBenignityMultiplier = 693,
    DifficultyOptionsMalignityInitial = 694,
    DifficultyOptionsMalignityMultiplier = 695,
    DifficultyOptionsStatInitial = 696,
    DifficultyOptionsStatMax = 697,
    DifficultyOptionsStatMultiplier = 698,
    DifficultyOptionsStatusEffectStartWith = 699,
    DifficultyOptionsStatusEffectUntreatable = 700,
    DifficultyOptionsStatusEffectPassChanceMultiplier = 701,
    DifficultyOptionsNoRandomSkills = 702,
    DifficultyOptionsSkillGainMultiplier = 703,
    DifficultyOptionsSkillInitial = 704,
    DifficultyOptionsStatusEffectPermanent = 705,
    DifficultyOptionsStatusEffectRateMultiplier = 706,
    DifficultyOptionsStatusEffectMultiplier = 707,
    EquipmentBack = 708,
    EquipmentBelt = 709,
    EquipmentChest = 710,
    EquipmentFeet = 711,
    EquipmentHands = 712,
    EquipmentHead = 713,
    EquipmentLeftHand = 714,
    EquipmentLeftHandOption = 715,
    EquipmentLegs = 716,
    EquipmentNeck = 717,
    EquipmentRightHand = 718,
    EquipmentRightHandOption = 719,
    EquipmentUse = 720,
    HudFilter = 721,
    QuickSlot1 = 722,
    QuickSlot2 = 723,
    QuickSlot3 = 724,
    QuickSlot4 = 725,
    QuickSlot5 = 726,
    QuickSlot6 = 727,
    QuickSlot7 = 728,
    QuickSlot8 = 729,
    QuickSlot9 = 730,
    TabCrafting = 731,
    TabDismantle = 732,
    Version = 733,
    WindowTitleContainer = 734,
    WindowTitleCrafting = 735,
    WindowTitleEquipment = 736,
    WindowTitleInventory = 737
}
export default UiTranslation;
