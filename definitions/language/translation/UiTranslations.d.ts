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
import { UiTranslation as Ui } from "language/ILanguage";
declare const _default: {
    [Ui.GameActionGather]: string;
    [Ui.GameQualityExceptional]: string;
    [Ui.GameQualityRemarkable]: string;
    [Ui.GameQualityLegendary]: string;
    [Ui.GameDamageTypeBlunt]: string;
    [Ui.GameDamageTypeSlashing]: string;
    [Ui.GameDamageTypePiercing]: string;
    [Ui.GameDamageTypeFire]: string;
    [Ui.GameDialogMessagesName]: string;
    [Ui.GameDialogNotesName]: string;
    [Ui.GameDialogNotesNoteTime]: string;
    [Ui.GameDialogNotesNoteNumber]: string;
    [Ui.GameDialogNotesNoteLockedTitle]: string;
    [Ui.GameDialogNotesNoteLockedDescription]: string;
    [Ui.GameDialogNotesLinkId]: string;
    [Ui.GameStatsPercentage]: string;
    [Ui.GameStatsStatAttack]: string;
    [Ui.GameStatsStatGeneric]: string;
    [Ui.GameStatsStatGenericWithMax]: string;
    [Ui.GameStatsStatbar]: string;
    [Ui.GameStatsStatHealthTooltip]: string;
    [Ui.GameStatsStatStaminaTooltip]: string;
    [Ui.GameStatsStatHungerTooltip]: string;
    [Ui.GameStatsStatThirstTooltip]: string;
    [Ui.GameStatsStatReputationTooltipDifficulty]: string;
    [Ui.GameStatsStatReputationTooltipDifficultyEasy]: string;
    [Ui.GameStatsStatReputationTooltipDifficultyHard]: string;
    [Ui.GameStatsStatReputationTooltipDifficultyInsane]: string;
    [Ui.GameStatsStatReputationTooltipDifficultyMedium]: string;
    [Ui.GameStatsStatReputationTooltipDifficultySimple]: string;
    [Ui.GameStatsStatReputationTooltipDifficultyVeryEasy]: string;
    [Ui.GameStatsStatReputationTooltipDifficultyVeryHard]: string;
    [Ui.GameStatsStatReputationTooltipBenignity]: string;
    [Ui.GameStatsStatReputationTooltipMalignity]: string;
    [Ui.GameStatsStatReputationTooltipScore]: string;
    [Ui.GameStatsStatReputationTooltipTurn]: string;
    [Ui.GameStatsStatReputationTooltipTicks]: string;
    [Ui.GameStatsStatWeightTooltip]: string;
    [Ui.GameStatsStatAttackTooltipTactics]: string;
    [Ui.GameStatsStatAttackTooltipLeftHand]: string;
    [Ui.GameStatsStatAttackTooltipRightHand]: string;
    [Ui.GameStatsStatDefenseTooltipBase]: string;
    [Ui.GameStatsStatDefenseTooltipBlunt]: string;
    [Ui.GameStatsStatDefenseTooltipParrying]: string;
    [Ui.GameStatsStatDefenseTooltipFire]: string;
    [Ui.GameStatsStatDefenseTooltipPiercing]: string;
    [Ui.GameStatsStatDefenseTooltipSlashing]: string;
    [Ui.GameStatsStatusEffectBleedingTooltip]: string;
    [Ui.GameStatsStatusEffectBurnedTooltip]: string;
    [Ui.GameStatsStatusEffectPoisonedTooltip]: string;
    [Ui.GameQuadrantElementStats]: string;
    [Ui.GameQuadrantElementMenuBar]: string;
    [Ui.GameQuadrantElementQuickslots]: string;
    [Ui.GameQuadrantElementMessages]: string;
    [Ui.GameQuadrantElementContextMenuMoveTo]: string;
    [Ui.GameQuadrantElementContextMenuSwitchWith]: string;
    [Ui.GameQuadrantNone]: string;
    [Ui.GameQuadrantLeft]: string;
    [Ui.GameQuadrantTopLeft]: string;
    [Ui.GameQuadrantTop]: string;
    [Ui.GameQuadrantTopRight]: string;
    [Ui.GameQuadrantRight]: string;
    [Ui.GameQuadrantBottomRight]: string;
    [Ui.GameQuadrantBottom]: string;
    [Ui.GameQuadrantBottomLeft]: string;
    [Ui.GameLegendaryAttack]: string;
    [Ui.GameLegendaryDefense]: string;
    [Ui.GameLegendaryIllumination]: string;
    [Ui.GameLegendaryWeightCapacity]: string;
    [Ui.GameLegendaryItemWeight]: string;
    [Ui.GameLegendaryStat]: string;
    [Ui.GameLegendarySkill]: string;
    [Ui.GameLegendaryBenignity]: string;
    [Ui.GameLegendaryMalignity]: string;
    [Ui.GameLegendaryRange]: string;
    [Ui.GameLegendaryUseBenefits]: string;
    [Ui.GameLegendaryWorth]: string;
    [Ui.GameLegendaryStatHealth]: string;
    [Ui.GameLegendaryStatStamina]: string;
    [Ui.GameLegendaryStatMetabolism]: string;
    [Ui.GameItemBarterCredit]: string;
    [Ui.GameItemBarterCreditTrade]: string;
    [Ui.GameInterruptItemMayBeDestroyedOnUse]: string;
    [Ui.GameInterruptItemMayBeDestroyedOnUseDescription]: string;
    [Ui.GameInterruptItemMayBeDestroyedInCraft]: string;
    [Ui.GameInterruptItemMayBeDestroyedInCraftDescription]: string;
    [Ui.GameInterruptReleaseCreature]: string;
    [Ui.GameInterruptReleaseCreatureDescription]: string;
    [Ui.GameInterruptRenameItem]: string;
    [Ui.GameInterruptRenameItemDescription]: string;
    [Ui.GameInterruptRenameDoodad]: string;
    [Ui.GameInterruptRenameDoodadDescription]: string;
    [Ui.GameInterruptRenameCreature]: string;
    [Ui.GameInterruptRenameCreatureDescription]: string;
    [Ui.GameInterruptReturnToTitleScreen]: string;
    [Ui.GameInterruptReturnToTitleScreenDescription]: string;
    [Ui.GameInterruptReturnToTitleScreenDailyChallenge]: string;
    [Ui.GameInterruptReturnToTitleScreenDailyChallengeDescription]: string;
    [Ui.GameInterruptReturnToTitleScreenDead]: string;
    [Ui.GameInterruptReturnToTitleScreenDeadDescription]: string;
    [Ui.GameInterruptLoadingSaving]: string;
    [Ui.GameInterruptLoadingSavingDescription]: string;
    [Ui.GameInterruptLoadingQuitting]: string;
    [Ui.GameInterruptLoadingQuittingDescription]: string;
    [Ui.GameInterruptLoadingWorld]: string;
    [Ui.GameInterruptLoadingWorldDescription]: string;
    [Ui.GameInterruptLoadingGeneratingWorld]: string;
    [Ui.GameInterruptLoadingGeneratingWorldDescription]: string;
    [Ui.GameInterruptLoadingFinalizingWorld]: string;
    [Ui.GameInterruptLoadingFinalizingWorldDescription]: string;
    [Ui.GameInterruptSailAwayEnd]: string;
    [Ui.GameInterruptSailAwayEndDescription]: string;
    [Ui.GameInterruptSailAwayReturnable]: string;
    [Ui.GameInterruptSailAwayReturnableDescription]: string;
    [Ui.GameInterruptTravelAway]: string;
    [Ui.GameInterruptTravelAwayDescription]: string;
    [Ui.GameInterruptLoadingResting]: string;
    [Ui.GameInterruptLoadingRestingDescription]: string;
    [Ui.GameInterruptLoadingSleeping]: string;
    [Ui.GameInterruptLoadingSleepingDescription]: string;
    [Ui.GameInterruptLoadingTraveling]: string;
    [Ui.GameInterruptLoadingTravelingDescription]: string;
    [Ui.GameInterruptLoadingLostGLContext]: string;
    [Ui.GameInterruptLoadingLostGLContextDescription]: string;
    [Ui.GameInterruptLoadingAutoSaving]: string;
    [Ui.GameInterruptLoadingAutoSavingDescription]: string;
    [Ui.GameInterruptLoadingMods]: string;
    [Ui.GameInterruptLoadingModsDescription]: string;
    [Ui.GameInterruptLoadingMultiplayerPlayerConnecting]: string;
    [Ui.GameInterruptLoadingMultiplayerSyncing]: string;
    [Ui.GameInterruptDangerousStep]: string;
    [Ui.GameInterruptDangerousStepDescription]: string;
    [Ui.GameInterruptSaveFailure]: string;
    [Ui.GameInterruptSaveFailureDescription]: string;
    [Ui.GameInterruptLoadFailure]: string;
    [Ui.GameInterruptLoadFailureDescription]: string;
    [Ui.GameInterruptDesalinationNoNeed]: string;
    [Ui.GameInterruptDesalinationNoNeedDescription]: string;
    [Ui.GameInterruptConfirmationActionOnFire]: string;
    [Ui.GameInterruptConfirmationActionOnFireDescription]: string;
    [Ui.GameInterruptConfirmationDestroyOnGather]: string;
    [Ui.GameInterruptConfirmationDestroyOnGatherDescription]: string;
    [Ui.GameInterruptLoadingGame]: string;
    [Ui.GameInterruptLoadingGameDescription]: string;
    [Ui.GameInterruptLoadingSprites]: string;
    [Ui.GameInterruptLoadingSpritesDescription]: string;
    [Ui.GameInterruptMultiplayerSynchronizing]: string;
    [Ui.GameInterruptMultiplayerSynchronizingDescription]: string;
    [Ui.GameInterruptNoSaveOnDeath]: string;
    [Ui.GameInterruptNoSaveOnDeathDescription]: string;
    [Ui.GameMenuBarButtonTooltipBindable]: string;
    [Ui.GameMenuBarButtonTooltipMenu]: string;
    [Ui.GameMenuBarButtonTooltipSave]: string;
    [Ui.GameMenuBarButtonTooltipHelp]: string;
    [Ui.GameMenuBarButtonTooltipNotes]: string;
    [Ui.GameMenuBarButtonTooltipMilestones]: string;
    [Ui.GameMenuBarButtonTooltipMessages]: string;
    [Ui.GameMenuBarButtonTooltipQuickSettings]: string;
    [Ui.GameMenuBarButtonTooltipActions]: string;
    [Ui.GameMenuBarButtonTooltipInventory]: string;
    [Ui.GameMenuBarButtonTooltipCrafting]: string;
    [Ui.GameMenuBarButtonTooltipEquipment]: string;
    [Ui.GameMenuBarButtonTooltipSkills]: string;
    [Ui.GameMessagesButtonSend]: string;
    [Ui.GameMessagesContextMenuShowAsDialog]: string;
    [Ui.GameMessagesContextMenuClear]: string;
    [Ui.GameMessagesFilter]: string;
    [Ui.GameMessagesFilterAll]: string;
    [Ui.GameMessagesFilterGame]: string;
    [Ui.GameMessagesFilterChat]: string;
    [Ui.GameMessagesNewNote]: string;
    [Ui.GameMultiplayerInterruptBanned]: string;
    [Ui.GameMultiplayerInterruptConnecting]: string;
    [Ui.GameMultiplayerInterruptConnectingDescription]: string;
    [Ui.GameMultiplayerInterruptFailedToConnect]: string;
    [Ui.GameMultiplayerInterruptFailedToLoadMods]: string;
    [Ui.GameMultiplayerInterruptKicked]: string;
    [Ui.GameMultiplayerInterruptLostConnection]: string;
    [Ui.GameMultiplayerInterruptServerShutdown]: string;
    [Ui.GameMultiplayerInterruptSynchronizationError]: string;
    [Ui.GameMultiplayerInterruptSynchronizationErrorDescription]: string;
    [Ui.GameMultiplayerInterruptUnableToJoinGame]: string;
    [Ui.GameMultiplayerInterruptUnableToJoinGameBuildMismatch]: string;
    [Ui.GameMultiplayerInterruptUnableToJoinGameDuplicateIdentifier]: string;
    [Ui.GameMultiplayerInterruptUnableToJoinGameFriendsOnly]: string;
    [Ui.GameMultiplayerInterruptUnableToJoinGameServerFull]: string;
    [Ui.GameMultiplayerInterruptUnableToJoinGameUnknownError]: string;
    [Ui.GameMultiplayerInterruptUnableToJoinGameVersionMismatch]: string;
    [Ui.MenuAboutTitle]: string;
    [Ui.MenuAboutDescription]: string;
    [Ui.MenuAboutGameDescription]: string;
    [Ui.MenuAboutSectionTeam]: string;
    [Ui.MenuAboutTeamMemberResponsibilities]: string;
    [Ui.MenuAboutTeamMemberResponsibilityProgramming]: string;
    [Ui.MenuAboutTeamMemberResponsibilityDesign]: string;
    [Ui.MenuAboutTeamMemberResponsibilityWeb]: string;
    [Ui.MenuAboutTeamMemberResponsibilityArt]: string;
    [Ui.MenuAboutTeamMemberResponsibilityPR]: string;
    [Ui.MenuAboutTeamMemberResponsibilityUX]: string;
    [Ui.MenuAboutTeamMemberResponsibilityMusic]: string;
    [Ui.MenuAboutTeamMemberName]: string;
    [Ui.MenuAboutTeamMemberNickname]: string;
    [Ui.MenuAboutSectionContributors]: string;
    [Ui.MenuAboutSectionSpecialThanks]: string;
    [Ui.MenuAboutTextSpecialThanksTestorsAndDonators]: string;
    [Ui.MenuAboutSectionLibraries]: string;
    [Ui.MenuAboutSectionLibrariesDescription]: string;
    [Ui.MenuChangelogTitle]: string;
    [Ui.MenuChangelogDescription]: string;
    [Ui.MenuChangelogSectionBalance]: string;
    [Ui.MenuChangelogSectionBugFixes]: string;
    [Ui.MenuChangelogSectionImprovements]: string;
    [Ui.MenuChangelogSectionMod]: string;
    [Ui.MenuChangelogSectionModding]: string;
    [Ui.MenuChangelogSectionNew]: string;
    [Ui.MenuChangelogSectionTechnical]: string;
    [Ui.MenuChangelogHeadingFailedLoad]: string;
    [Ui.MenuChangelogHeadingChangeCount]: string;
    [Ui.MenuChangelogInterruptLoadingChangelog]: string;
    [Ui.MenuChangelogInterruptLoadingChangelogDescription]: string;
    [Ui.MenuCharacterCreationButtonRandomizeName]: string;
    [Ui.MenuCharacterCreationLabelName]: string;
    [Ui.MenuCharacterCreationButtonExportTooltip]: string;
    [Ui.MenuCharacterCreationButtonImportTooltip]: string;
    [Ui.MenuCharacterCreationButtonStartGame]: string;
    [Ui.MenuCharacterCreationButtonJoinGame]: string;
    [Ui.MenuCharacterCreationDescription]: string;
    [Ui.MenuCharacterCreationHeadingHairColor]: string;
    [Ui.MenuCharacterCreationHeadingHairStyle]: string;
    [Ui.MenuCharacterCreationHeadingSkinTone]: string;
    [Ui.MenuCharacterCreationTitle]: string;
    [Ui.MenuCharacterCreationInterruptImportCharacterFailure]: string;
    [Ui.MenuCharacterCreationInterruptImportCharacterFailureDescription]: string;
    [Ui.MenuCharacterCreationButtonRotateLeftTooltip]: string;
    [Ui.MenuCharacterCreationButtonRotateRightTooltip]: string;
    [Ui.MenuCharacterCreationButtonRandomizeTooltip]: string;
    [Ui.MenuCharacterSelectionButtonNewCharacter]: string;
    [Ui.MenuCharacterSelectionCharacterSortLastUse]: string;
    [Ui.MenuCharacterSelectionCharacterSortName]: string;
    [Ui.MenuCharacterSelectionCharacterSortUseCount]: string;
    [Ui.MenuCharacterSelectionDescription]: string;
    [Ui.MenuCharacterSelectionHeadingNoCharacters]: string;
    [Ui.MenuCharacterSelectionLabelLastUse]: string;
    [Ui.MenuCharacterSelectionLabelUseCount]: string;
    [Ui.MenuCharacterSelectionTitle]: string;
    [Ui.MenuCharacterSelectionCharacterButtonDeleteTooltip]: string;
    [Ui.MenuCharacterSelectionCharacterButtonCustomizeTooltip]: string;
    [Ui.MenuCharacterSelectionInterruptDeleteCharacter]: string;
    [Ui.MenuFriendsDescription]: string;
    [Ui.MenuFriendsHeadingNotPlayingWayward]: string;
    [Ui.MenuFriendsHeadingPlayingWayward]: string;
    [Ui.MenuFriendsSectionNoFriendsOnline]: string;
    [Ui.MenuFriendsSectionNoFriendsWayward]: string;
    [Ui.MenuFriendsTitle]: string;
    [Ui.MenuFriendsUnableToLoad]: string;
    [Ui.MenuFriendsButtonJoinDedicatedServer]: string;
    [Ui.MenuGameEndTitleDead]: string;
    [Ui.MenuGameEndTitleWon]: string;
    [Ui.MenuGameEndDescriptionDead1]: string;
    [Ui.MenuGameEndDescriptionDead2]: string;
    [Ui.MenuGameEndDescriptionDead3]: string;
    [Ui.MenuGameEndDescriptionWin1]: string;
    [Ui.MenuGameEndDescriptionWin2]: string;
    [Ui.MenuGameEndDescriptionWin3]: string;
    [Ui.MenuGameEndShareFacebook]: string;
    [Ui.MenuGameEndShareTwitter]: string;
    [Ui.MenuHelpTitle]: string;
    [Ui.MenuHelpDescription]: string;
    [Ui.MenuHighscoresTitle]: string;
    [Ui.MenuHighscoresDescription]: string;
    [Ui.MenuHighscoresDifficultyFilterHardcore]: string;
    [Ui.MenuHighscoresDifficultyFilterCasual]: string;
    [Ui.MenuHighscoresDifficultyFilterDailyChallenge]: string;
    [Ui.MenuHighscoresDifficultyFilterAll]: string;
    [Ui.MenuHighscoresSortScore]: string;
    [Ui.MenuHighscoresSortSaveName]: string;
    [Ui.MenuHighscoresSortRecency]: string;
    [Ui.MenuHighscoresHighscoreLabelDifficulty]: string;
    [Ui.MenuHighscoresHighscoreLabelTurns]: string;
    [Ui.MenuHighscoresHighscoreLabelScore]: string;
    [Ui.MenuHighscoresHighscoreLabelDate]: string;
    [Ui.MenuHighscoresHighscoreLabelPlace]: string;
    [Ui.MenuHighscoresHighscoreLabelDeathBy]: string;
    [Ui.MenuHighscoresHighscoreTitle]: string;
    [Ui.MenuHighscoresCharacterNameUnknown]: string;
    [Ui.MenuLoadGameButtonNewGame]: string;
    [Ui.MenuLoadGameButtonNewGameButtonImportTooltip]: string;
    [Ui.MenuLoadGameDescription]: string;
    [Ui.MenuLoadGameSaveButtonDeleteTooltip]: string;
    [Ui.MenuLoadGameSaveButtonEditNameTooltip]: string;
    [Ui.MenuLoadGameSaveButtonExportTooltip]: string;
    [Ui.MenuLoadGameSaveSortCreatedTime]: string;
    [Ui.MenuLoadGameSaveSortName]: string;
    [Ui.MenuLoadGameSaveSortSaveTime]: string;
    [Ui.MenuLoadGameSaveSortTurnCount]: string;
    [Ui.MenuLoadGameSaveTooltipLabelCreatedTime]: string;
    [Ui.MenuLoadGameSaveTooltipLabelSaveTime]: string;
    [Ui.MenuLoadGameSaveTooltipLabelScore]: string;
    [Ui.MenuLoadGameSaveTooltipLabelSeed]: string;
    [Ui.MenuLoadGameSaveTooltipLabelTurns]: string;
    [Ui.MenuLoadGameSaveTooltipLabelMods]: string;
    [Ui.MenuLoadGameSaveTooltipLabelOriginalVersion]: string;
    [Ui.MenuLoadGameSaveTooltipMod]: string;
    [Ui.MenuLoadGameSlotsRemaining]: string;
    [Ui.MenuLoadGameTitle]: string;
    [Ui.MenuLoadGameInterruptDeleteSave]: string;
    [Ui.MenuLoadGameInterruptDeleteSaveDescription]: string;
    [Ui.MenuLoadGameInterruptLoadingExportingSave]: string;
    [Ui.MenuLoadGameInterruptLoadingExportingSaveDescription]: string;
    [Ui.MenuLoadGameInterruptLoadingImportingSave]: string;
    [Ui.MenuLoadGameInterruptLoadingImportingSaveDescription]: string;
    [Ui.MenuLoadGameInterruptImportSaveFailure]: string;
    [Ui.MenuLoadGameInterruptImportSaveFailureDescription]: string;
    [Ui.MenuLoadGameInterruptExportType]: string;
    [Ui.MenuLoadGameInterruptExportTypeDescription]: string;
    [Ui.MenuLoadGameInterruptPublishingSave]: string;
    [Ui.MenuLoadGameInterruptPublishingSaveDescription]: string;
    [Ui.MenuLoadGameInterruptMissingMod]: string;
    [Ui.MenuLoadGameInterruptMissingModDescription]: string;
    [Ui.MenuLoadGameInterruptMissingModDescriptionLabelModsMissing]: string;
    [Ui.MenuLoadGameInterruptMissingModDescriptionLabelModsDisabled]: string;
    [Ui.MenuLoadGameInterruptLoading]: string;
    [Ui.MenuLoadGameInterruptLoadingDescription]: string;
    [Ui.MenuMainButtonAbout]: string;
    [Ui.MenuMainButtonChangelog]: string;
    [Ui.MenuMainButtonContinueGame]: string;
    [Ui.MenuMainButtonFriends]: string;
    [Ui.MenuMainButtonFriendsWithCount]: string;
    [Ui.MenuMainButtonHighscores]: string;
    [Ui.MenuMainButtonLoadGame]: string;
    [Ui.MenuMainButtonMods]: string;
    [Ui.MenuMainButtonNewGame]: string;
    [Ui.MenuMainButtonNews]: string;
    [Ui.MenuMainButtonOptions]: string;
    [Ui.MenuMainInterruptLoadingNews]: string;
    [Ui.MenuMainInterruptLoadingNewsDescription]: string;
    [Ui.MenuMainInterruptLoadingChangelog]: string;
    [Ui.MenuMainInterruptLoadingChangelogDescription]: string;
    [Ui.MenuMainInterruptWelcomeToVersion]: string;
    [Ui.MenuMainInterruptWelcomeToVersionDescription]: string;
    [Ui.MenuMainInterruptOldVersionWarning]: string;
    [Ui.MenuMainInterruptOldVersionWarningDescription]: string;
    [Ui.MenuModsButtonDisableAll]: string;
    [Ui.MenuModsButtonEnableAll]: string;
    [Ui.MenuModsButtonModdingGuide]: string;
    [Ui.MenuModsButtonOpenFolder]: string;
    [Ui.MenuModsButtonOpenWorkshop]: string;
    [Ui.MenuModsDescription]: string;
    [Ui.MenuModsHeadingInternal]: string;
    [Ui.MenuModsHeadingLocal]: string;
    [Ui.MenuModsHeadingNoMods]: string;
    [Ui.MenuModsHeadingWorkshop]: string;
    [Ui.MenuModsInterruptConfirmPublish]: string;
    [Ui.MenuModsInterruptConfirmPublishUpdate]: string;
    [Ui.MenuModsInterruptModEnableMultipleLanguages]: string;
    [Ui.MenuModsInterruptModEnableMultipleLanguagesDescription]: string;
    [Ui.MenuModsInterruptModEnableUseLanguage]: string;
    [Ui.MenuModsInterruptModEnableUseLanguageDescription]: string;
    [Ui.MenuModsInterruptPublishedReminderRequiredModsOnWorkshop]: string;
    [Ui.MenuModsInterruptInfoMissingDependencies]: string;
    [Ui.MenuModsInterruptInfoMissingDependenciesDescription]: string;
    [Ui.MenuModsInterruptConfirmEnableDisabledDependencies]: string;
    [Ui.MenuModsInterruptConfirmEnableDisabledDependenciesDescription]: string;
    [Ui.MenuModsInterruptConfirmDisableDependents]: string;
    [Ui.MenuModsInterruptConfirmDisableDependentsDescription]: string;
    [Ui.MenuModsInterruptConfirmUninstallMod]: string;
    [Ui.MenuModsInterruptConfirmUninstallModDescription]: string;
    [Ui.MenuModsInterruptUnloadableSaveGameMod]: string;
    [Ui.MenuModsInterruptUnloadableSaveGameModDescription]: string;
    [Ui.MenuModsSortAuthor]: string;
    [Ui.MenuModsSortCreatedDate]: string;
    [Ui.MenuModsSortInstallDate]: string;
    [Ui.MenuModsSortName]: string;
    [Ui.MenuModsSortLastUpdated]: string;
    [Ui.MenuModsTabInternal]: string;
    [Ui.MenuModsTabLocal]: string;
    [Ui.MenuModsTabWorkshop]: string;
    [Ui.MenuModsTitle]: string;
    [Ui.MenuModsTooltipLabelAuthor]: string;
    [Ui.MenuModsTooltipLabelDependencies]: string;
    [Ui.MenuModsTooltipLabelProvides]: string;
    [Ui.MenuModsTooltipLabelVersion]: string;
    [Ui.MenuModsTooltipLabelDescription]: string;
    [Ui.MenuModsTooltipLabelInstallDate]: string;
    [Ui.MenuModsTooltipLabelCreatedDate]: string;
    [Ui.MenuModsTooltipLabelLastUpdatedDate]: string;
    [Ui.MenuModsTooltipModOptions]: string;
    [Ui.MenuModsTooltipProvidesCustomizations]: string;
    [Ui.MenuModsTooltipProvidesImageOverrides]: string;
    [Ui.MenuModsTooltipProvidesLanguage]: string;
    [Ui.MenuModsTooltipProvidesScript]: string;
    [Ui.MenuModsTooltipProvidesStylesheet]: string;
    [Ui.MenuModsTooltipPublishMod]: string;
    [Ui.MenuModsTooltipUninstallMod]: string;
    [Ui.MenuModsTooltipViewInSteamWorkshop]: string;
    [Ui.MenuModsInterruptPublishedReminderRequiredModsOnWorkshopDescription]: string;
    [Ui.MenuModsInterruptConfirmPublishDescription]: string;
    [Ui.MenuModsInterruptConfirmPublishUpdateDescription]: string;
    [Ui.MenuModsInterruptPublishingMod]: string;
    [Ui.MenuModsInterruptPublishingModDescription]: string;
    [Ui.MenuModsInterruptPublishError]: string;
    [Ui.MenuModsInterruptPublishErrorDescription]: string;
    [Ui.MenuModsInterruptUpdatingMod]: string;
    [Ui.MenuModsInterruptUpdatingModDescription]: string;
    [Ui.MenuModsInterruptPublishUpdateError]: string;
    [Ui.MenuModsInterruptPublishUpdateErrorDescription]: string;
    [Ui.MenuModsTooltipCanLoadStateModLoadError]: string;
    [Ui.MenuModsTooltipCanLoadStateDependencyIssue]: string;
    [Ui.MenuModsTooltipCanLoadStateModRequiresItself]: string;
    [Ui.MenuModsTooltipCanLoadStateMissingRequiredMod]: string;
    [Ui.MenuModsTooltipCanLoadStateReqiredModNotLoaded]: string;
    [Ui.MenuModsTooltipCanLoadStateLocalModPrecedence]: string;
    [Ui.MenuModsTooltipCanLoadStateIncompatibleVersion]: string;
    [Ui.MenuNewGameButtonNext]: string;
    [Ui.MenuNewGameButtonStartServer]: string;
    [Ui.MenuNewGameDescription]: string;
    [Ui.MenuNewGameLabelEditName]: string;
    [Ui.MenuNewGameLabelEditSeed]: string;
    [Ui.MenuNewGamePlaceholderEditSeed]: string;
    [Ui.MenuNewGameTitle]: string;
    [Ui.MenuNewGameChoiceDifficultyCasual]: string;
    [Ui.MenuNewGameChoiceDifficultyCasualDescription]: string;
    [Ui.MenuNewGameChoiceDifficultyHardcore]: string;
    [Ui.MenuNewGameChoiceDifficultyHardcoreDescription]: string;
    [Ui.MenuNewGameChoiceDifficultyDailyChallenge]: string;
    [Ui.MenuNewGameChoiceDifficultyDailyChallengeDescription]: string;
    [Ui.MenuNewGameChoiceSingleplayer]: string;
    [Ui.MenuNewGameChoiceSingleplayerDescription]: string;
    [Ui.MenuNewGameChoiceMultiplayer]: string;
    [Ui.MenuNewGameChoiceMultiplayerDescription]: string;
    [Ui.MenuNewGameChoiceTurnsManual]: string;
    [Ui.MenuNewGameChoiceTurnsManualDescription]: string;
    [Ui.MenuNewGameChoiceTurnsRealTime]: string;
    [Ui.MenuNewGameChoiceTurnsRealTimeDescription]: string;
    [Ui.MenuNewGameChoiceDifficultyTooltipMaxSaves]: string;
    [Ui.MenuNewsButtonDiscord]: string;
    [Ui.MenuNewsButtonFacebook]: string;
    [Ui.MenuNewsButtonReddit]: string;
    [Ui.MenuNewsButtonTwitter]: string;
    [Ui.MenuNewsDescription]: string;
    [Ui.MenuNewsHeadingSocial]: string;
    [Ui.MenuNewsTitle]: string;
    [Ui.MenuNewsHeadingUnableToLoad]: string;
    [Ui.MenuNewsButtonAllNews]: string;
    [Ui.MenuOptionsDeveloperLogSourceFilterHeading]: string;
    [Ui.MenuOptionsInterruptLoading]: string;
    [Ui.MenuOptionsInterruptLoadingDescription]: string;
    [Ui.MenuOptionsButtonDitherFogOfWar]: string;
    [Ui.MenuOptionsButtonFullscreen]: string;
    [Ui.MenuOptionsButtonScreenshotMode]: string;
    [Ui.MenuOptionsButtonPixelFont]: string;
    [Ui.MenuOptionsButtonDeveloperMode]: string;
    [Ui.MenuOptionsButtonDeveloperModeContextMenu]: string;
    [Ui.MenuOptionsButtonReloadGame]: string;
    [Ui.MenuOptionsButtonSaveDataClearAll]: string;
    [Ui.MenuOptionsButtonSaveDataClearHighscores]: string;
    [Ui.MenuOptionsButtonSaveDataClearMilestones]: string;
    [Ui.MenuOptionsButtonSaveDataClearOptions]: string;
    [Ui.MenuOptionsButtonSaveDataClearCraftingRecipes]: string;
    [Ui.MenuOptionsButtonSaveDataClearSaves]: string;
    [Ui.MenuOptionsButtonSkipSplash]: string;
    [Ui.MenuOptionsButtonToggleDevTools]: string;
    [Ui.MenuOptionsButtonTooltipsCreatures]: string;
    [Ui.MenuOptionsButtonTooltipsDoodads]: string;
    [Ui.MenuOptionsButtonTooltipsItems]: string;
    [Ui.MenuOptionsButtonTooltipsTerrain]: string;
    [Ui.MenuOptionsButtonOpenLogsFolder]: string;
    [Ui.MenuOptionsDescription]: string;
    [Ui.MenuOptionsHeadingAudio]: string;
    [Ui.MenuOptionsHeadingDeveloper]: string;
    [Ui.MenuOptionsHeadingGameplayOptions]: string;
    [Ui.MenuOptionsHeadingGeneralOptions]: string;
    [Ui.MenuOptionsHeadingControls]: string;
    [Ui.MenuOptionsHeadingLanguage]: string;
    [Ui.MenuOptionsHeadingModOptions]: string;
    [Ui.MenuOptionsHeadingOther]: string;
    [Ui.MenuOptionsHeadingSaveData]: string;
    [Ui.MenuOptionsHeadingTooltips]: string;
    [Ui.MenuOptionsHeadingVideo]: string;
    [Ui.MenuOptionsInterruptReloadGame]: string;
    [Ui.MenuOptionsInterruptSaveDataClearAll]: string;
    [Ui.MenuOptionsInterruptSaveDataClearAllDescription]: string;
    [Ui.MenuOptionsInterruptSaveDataClearHighscores]: string;
    [Ui.MenuOptionsInterruptSaveDataClearMilestones]: string;
    [Ui.MenuOptionsInterruptSaveDataClearOptions]: string;
    [Ui.MenuOptionsInterruptSaveDataClearSaves]: string;
    [Ui.MenuOptionsInterruptSaveDataClearCraftingRecipes]: string;
    [Ui.MenuOptionsLabelInterfaceScale]: string;
    [Ui.MenuOptionsLabelTurnDelay]: string;
    [Ui.MenuOptionsLabelVolumeEffects]: string;
    [Ui.MenuOptionsLabelVolumeMusic]: string;
    [Ui.MenuOptionsLabelControlsFilter]: string;
    [Ui.MenuOptionsTabAudio]: string;
    [Ui.MenuOptionsTabDeveloper]: string;
    [Ui.MenuOptionsTabGameplay]: string;
    [Ui.MenuOptionsTabGeneral]: string;
    [Ui.MenuOptionsTabControls]: string;
    [Ui.MenuOptionsTabMods]: string;
    [Ui.MenuOptionsTabSaveData]: string;
    [Ui.MenuOptionsTabVideo]: string;
    [Ui.MenuOptionsTitle]: string;
    [Ui.MenuOptionsTooltipMusicNextTrack]: string;
    [Ui.MenuOptionsInterruptSaveDataClearCharacters]: string;
    [Ui.MenuOptionsButtonSaveDataClearCharacters]: string;
    [Ui.MenuOptionsBindChoose]: string;
    [Ui.MenuOptionsBindChooseAdd]: string;
    [Ui.MenuOptionsBindableTypeGame]: string;
    [Ui.MenuOptionsBindableTypeDialog]: string;
    [Ui.MenuOptionsBindableTypeMenu]: string;
    [Ui.MenuOptionsBindableTypeDeveloper]: string;
    [Ui.MenuOptionsBindableTypeMod]: string;
    [Ui.MenuOptionsBindLabelModifier]: string;
    [Ui.MenuOptionsBindButtonResetTooltip]: string;
    [Ui.MenuOptionsBindButtonDeleteTooltip]: string;
    [Ui.MenuOptionsBindButtonAddTooltip]: string;
    [Ui.MenuOptionsButtonAlwaysShowMoreInformation]: string;
    [Ui.MenuOptionsButtonAutoGatherHarvest]: string;
    [Ui.MenuOptionsButtonAutoGatherHarvestTooltip]: string;
    [Ui.MenuOptionsButtonAutoPickup]: string;
    [Ui.MenuOptionsButtonAutoPickupTooltip]: string;
    [Ui.MenuOptionsButtonDropOnGatherHarvest]: string;
    [Ui.MenuOptionsButtonDropOnGatherHarvestTooltip]: string;
    [Ui.MenuOptionsButtonDropLocationFacing]: string;
    [Ui.MenuOptionsButtonDropLocationFeet]: string;
    [Ui.MenuOptionsButtonDropLocationFeetWhenFacingBlocked]: string;
    [Ui.MenuOptionsButtonKeepSortActive]: string;
    [Ui.MenuOptionsButtonKeepSortActiveTooltip]: string;
    [Ui.MenuOptionsButtonProtectedCraftingItems]: string;
    [Ui.MenuOptionsButtonProtectedCraftingItemsTooltip]: string;
    [Ui.MenuOptionsButtonHideEquippedHeadgear]: string;
    [Ui.MenuOptionsButtonHideEquippedHeadgearTooltip]: string;
    [Ui.MenuOptionsButtonWarnOnDangerousActions]: string;
    [Ui.MenuOptionsButtonWarnOnDangerousActionsTooltip]: string;
    [Ui.MenuOptionsButtonWarnWhenBreakingItemsOnCraft]: string;
    [Ui.MenuOptionsButtonWarnWhenBreakingItemsOnCraftTooltip]: string;
    [Ui.MenuOptionsButtonWarnWhenBreakingItemsOnUse]: string;
    [Ui.MenuOptionsButtonWarnWhenBreakingItemsOnUseTooltip]: string;
    [Ui.MenuOptionsHeadingWarnWhenBreakingItems]: string;
    [Ui.MenuOptionsTooltipTurnDelay]: string;
    [Ui.MenuOptionsTooltipUiScaleClamped]: string;
    [Ui.MenuOptionsTooltipControlsFilter]: string;
    [Ui.MenuOptionsButtonAlwaysShowMoreInformationTooltip]: string;
    [Ui.MenuOptionsButtonSaveDataClearBindings]: string;
    [Ui.MenuOptionsInterruptSaveDataClearBindings]: string;
    [Ui.MenuOptionsTooltipDialogOpacity]: string;
    [Ui.MenuOptionsLabelDialogOpacity]: string;
    [Ui.MenuPauseButtonContinue]: string;
    [Ui.MenuPauseButtonOptions]: string;
    [Ui.MenuPauseButtonMultiplayer]: string;
    [Ui.MenuPauseButtonTitleScreen]: string;
    [Ui.MenuPauseButtonStopServer]: string;
    [Ui.MenuPauseHeadingPaused]: string;
    [Ui.MenuPauseParagraphPaused]: string;
    [Ui.MenuPauseHeadingNotPaused]: string;
    [Ui.MenuPauseParagraphNotPaused]: string;
    [Ui.MenuPauseHeadingDedicatedServer]: string;
    [Ui.MenuPauseParagraphDedicatedServer]: string;
    [Ui.MenuMultiplayerTitle]: string;
    [Ui.MenuMultiplayerDescription]: string;
    [Ui.MenuMultiplayerOpenServer]: string;
    [Ui.MenuMultiplayerOpenServerDescription]: string;
    [Ui.MenuMultiplayerPauseServer]: string;
    [Ui.MenuMultiplayerPauseServerDescription]: string;
    [Ui.MenuJoinDedicatedServerTitle]: string;
    [Ui.MenuJoinDedicatedServerDescription]: string;
    [Ui.MenuJoinDedicatedServerIP]: string;
    [Ui.MenuJoinDedicatedServerIPPlaceholder]: string;
    [Ui.MenuJoinDedicatedServerNext]: string;
    [Ui.MenuSharedSortBy]: string;
    [Ui.MenuSharedSortDirection]: string;
    [Ui.MenuSharedMultiplayerChoiceLobbyTypeFriends]: string;
    [Ui.MenuSharedMultiplayerChoiceLobbyTypeFriendsDescription]: string;
    [Ui.MenuSharedMultiplayerChoiceLobbyTypePublic]: string;
    [Ui.MenuSharedMultiplayerChoiceLobbyTypePublicDescription]: string;
    [Ui.MenuSharedMultiplayerChoiceLobbyTypePrivate]: string;
    [Ui.MenuSharedMultiplayerChoiceLobbyTypePrivateDescription]: string;
    [Ui.MenuSharedMultiplayerChoicePVP]: string;
    [Ui.MenuSharedMultiplayerChoicePVPDescription]: string;
    [Ui.MenuSharedMultiplayerMaxPlayers]: string;
    [Ui.MenuSharedRealTimeTickSpeedTooltip]: string;
    [Ui.MenuSharedRealTimeTickSpeedLabel]: string;
    [Ui.MenuSharedButtonDefault]: string;
    [Ui.MenuSharedValueTickSpeed]: string;
    [Ui.MenuSharedValuePercentage]: string;
    [Ui.MiscPlayerNameDefault]: string;
    [Ui.MiscSaveNameDefault]: string;
    [Ui.MiscSaveVersionUnknown]: string;
    [Ui.MiscDailyChallengeName]: string;
    [Ui.MiscDifficultyHardcore]: string;
    [Ui.MiscDifficultyCasual]: string;
    [Ui.MiscDifficultyDailyChallenge]: string;
    [Ui.MiscVersion]: string;
    [Ui.MiscVersionBeta]: string;
    [Ui.MiscVersionRelease]: string;
    [Ui.MiscPartOfDayDawn]: string;
    [Ui.MiscPartOfDaySunrise]: string;
    [Ui.MiscPartOfDayDaytime]: string;
    [Ui.MiscPartOfDaySunset]: string;
    [Ui.MiscPartOfDayDusk]: string;
    [Ui.MiscPartOfDayNighttime]: string;
    [Ui.MiscBindableOr]: string;
    [Ui.MiscBindableNoBindings]: string;
    [Ui.SharedListSeparator]: string;
    [Ui.SteamworksInterruptURLOpenedInBrowser]: string;
    [Ui.SteamworksInterruptURLOpenedInBrowserDescription]: string;
    [Ui.SteamworksInterruptWorkshopOpenedInBrowser]: string;
    [Ui.SteamworksInterruptWorkshopOpenedInBrowserDescription]: string;
    [Ui.SteamworksInterruptModWithNameAlreadyExists]: string;
    [Ui.SteamworksInterruptModWithNameAlreadyExistsDescription]: string;
    [Ui.SteamworksInterruptModImportSaveGameFailure]: string;
    [Ui.SteamworksInterruptModImportSaveGameFailureDescription]: string;
    [Ui.SteamworksInterruptModImportedSaveGame]: string;
    [Ui.SteamworksInterruptModImportedSaveGameDescription]: string;
    [Ui.SteamworksInterruptLoadingRefreshingMods]: string;
    [Ui.SteamworksInterruptLoadingRefreshingModsDescription]: string;
    [Ui.SteamworksInterruptOpenFolderFailure]: string;
    [Ui.SteamworksInterruptOpenFolderFailureDescription]: string;
    [Ui.Bleeding]: string;
    [Ui.Burned]: string;
    [Ui.DisableHints]: string;
    [Ui.EnableHints]: string;
    [Ui.EquipmentBack]: string;
    [Ui.EquipmentBelt]: string;
    [Ui.EquipmentChest]: string;
    [Ui.EquipmentFeet]: string;
    [Ui.EquipmentHands]: string;
    [Ui.EquipmentHead]: string;
    [Ui.EquipmentLeftHand]: string;
    [Ui.EquipmentLeftHandOption]: string;
    [Ui.EquipmentLegs]: string;
    [Ui.EquipmentNeck]: string;
    [Ui.EquipmentRightHand]: string;
    [Ui.EquipmentRightHandOption]: string;
    [Ui.EquipmentUse]: string;
    [Ui.HudFilter]: string;
    [Ui.MenuDeleteAllGameData]: string;
    [Ui.MenuDeleteGame]: string;
    [Ui.MenuEditGame]: string;
    [Ui.MenuExportGame]: string;
    [Ui.MenuExportSave]: string;
    [Ui.MenuHighscoresAll]: string;
    [Ui.MenuHighscoresDailyChallenge]: string;
    [Ui.MenuHighscoresMessage]: string;
    [Ui.MenuHighscoresNone]: string;
    [Ui.MenuHighscoresNormal]: string;
    [Ui.MenuImportGame]: string;
    [Ui.MenuImportSave]: string;
    [Ui.MenuJoinGame]: string;
    [Ui.MenuJoinGameJoin]: string;
    [Ui.MenuJoinGameMessage]: string;
    [Ui.MenuJoinGameName]: string;
    [Ui.MenuJoinGameServer]: string;
    [Ui.MenuOptionsMessage]: string;
    [Ui.MenuQuitGame]: string;
    [Ui.MenuReloadGame]: string;
    [Ui.MenuToggleDeveloperTools]: string;
    [Ui.MenuVisitSteamWorkshop]: string;
    [Ui.OptionsAudio]: string;
    [Ui.OptionsAutoGatherHarvest]: string;
    [Ui.OptionsAutoGatherHarvestTooltip]: string;
    [Ui.OptionsAutoPickup]: string;
    [Ui.OptionsAutoPickupTooltip]: string;
    [Ui.OptionsDropItemsAtFeet]: string;
    [Ui.OptionsDropItemsAtFeetTooltip]: string;
    [Ui.OptionsDropItemsAtFeetWhenFacingTileBlocked]: string;
    [Ui.OptionsDropItemsAtFeetWhenFacingTileBlockedTooltip]: string;
    [Ui.OptionsDropItemsOnFacingTile]: string;
    [Ui.OptionsDropItemsOnFacingTileTooltip]: string;
    [Ui.OptionsDropOnGatherHarvest]: string;
    [Ui.OptionsDropOnGatherHarvestTooltip]: string;
    [Ui.OptionsHideEquippedHeadgear]: string;
    [Ui.OptionsHideEquippedHeadgearTooltip]: string;
    [Ui.OptionsKeepSortActive]: string;
    [Ui.OptionsKeepSortActiveTooltip]: string;
    [Ui.OptionsProtectedCraftingItems]: string;
    [Ui.OptionsProtectedCraftingItemsTooltip]: string;
    [Ui.OptionsWarnOnDangerousActions]: string;
    [Ui.OptionsWarnOnDangerousActionsTooltip]: string;
    [Ui.OptionsWarnWhenBreakingItems]: string;
    [Ui.OptionsWarnWhenBreakingItemsOnCraft]: string;
    [Ui.OptionsWarnWhenBreakingItemsOnCraftTooltip]: string;
    [Ui.OptionsWarnWhenBreakingItemsTooltip]: string;
    [Ui.Poisoned]: string;
    [Ui.QuickSlot1]: string;
    [Ui.QuickSlot2]: string;
    [Ui.QuickSlot3]: string;
    [Ui.QuickSlot4]: string;
    [Ui.QuickSlot5]: string;
    [Ui.QuickSlot6]: string;
    [Ui.QuickSlot7]: string;
    [Ui.QuickSlot8]: string;
    [Ui.QuickSlot9]: string;
    [Ui.TabCrafting]: string;
    [Ui.TabDismantle]: string;
    [Ui.Version]: string;
    [Ui.WindowTitleContainer]: string;
    [Ui.WindowTitleCrafting]: string;
    [Ui.WindowTitleEquipment]: string;
    [Ui.WindowTitleInventory]: string;
    [Ui.WindowTitleMap]: string;
    [Ui.WindowTitleMilestones]: string;
    [Ui.WindowTitleOptions]: string;
    [Ui.WindowTitleSkills]: string;
};
export default _default;
