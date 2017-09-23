export declare const messages: Description<string>;
export default messages;
export declare function makeString(msg: Message | string, ...variables: any[]): string;
export declare enum MessageType {
    None = 0,
    Bad = 1,
    Good = 2,
    Miss = 3,
    Attack = 4,
    Stat = 5,
    Skill = 6,
}
export declare enum Message {
    None = 0,
    AberrantCreatureDroppedItem = 1,
    AboutHours = 2,
    AddedFuelToFire = 3,
    AddedFuelToTorch = 4,
    AddFuel = 5,
    AddToQuickslot = 6,
    Advanced = 7,
    AllEquipmentUnEquipped = 8,
    AlreadyFullyRepaired = 9,
    AlreadyPreserved = 10,
    AlreadyWaterInStill = 11,
    AppearedNotEffectiveForGathering = 12,
    AppearsToBeAberrant = 13,
    ArmorAppeared = 14,
    ArmorProtectedFromInjuryAgainst = 15,
    Attack = 16,
    AttemptedToDropAllIntoFire = 17,
    AttemptedToPlaceAllOnGround = 18,
    AttemptToTill = 19,
    AwakeToFindYourself = 20,
    Back = 21,
    BadlyBurnedLostHealth = 22,
    BeenPoisoned = 23,
    BeginSleeping = 24,
    BeginUsingRaft = 25,
    Belt = 26,
    BleedingHasStopped = 27,
    BleedingProfusely = 28,
    BleedingToDeathLostHealth = 29,
    Blunt = 30,
    BookOpen = 31,
    BookBlank = 32,
    BookContains = 33,
    BookCrumbles = 34,
    BookDiagrams = 35,
    BookEmpty = 36,
    BookNothing = 37,
    BookScribbles = 38,
    BrokeIntoPieces = 39,
    BrokenOnImpact = 40,
    BrokenWhileFiring = 41,
    Build = 42,
    Burned = 43,
    CannotAddAnyMoreFuel = 44,
    CannotBePerformedOverWater = 45,
    CannotBePreserved = 46,
    CannotBeReinforced = 47,
    CannotBeRepaired = 48,
    CannotBeTamed = 49,
    CannotBeTransmogrified = 50,
    CannotBuildHere = 51,
    CannotDoThatHere = 52,
    CannotDropHere = 53,
    CannotEquipThatThere = 54,
    CannotFishFor = 55,
    CannotGatherHere = 56,
    CannotImproveGrowingSpeed = 57,
    CannotInWater = 58,
    CannotLeave = 59,
    CannotPickupWhenFull = 60,
    CannotPickUpWhileLit = 61,
    CannotPickUpWithItemsInside = 62,
    CannotPlaceContainerInItself = 63,
    CannotPlaceHere = 64,
    CannotPlaceThatFromHere = 65,
    CannotPlaceThatHere = 66,
    CannotPlantHereTilled = 67,
    CannotRepairWhileLit = 68,
    CannotRestHere = 69,
    CannotSeeHere = 70,
    CannotSleepHere = 71,
    CannotStartFireHere = 72,
    CannotToTellTime = 73,
    CarryingTooMuchWeight = 74,
    CarvedUpCorpse = 75,
    CarveWithTool = 76,
    Carving = 77,
    CastYourLine = 78,
    Category = 79,
    CaughtFish = 80,
    ChatPingCommand = 81,
    ChatPlayerMessage = 82,
    ChatPlayersCommand = 83,
    ChatUnknownCommand = 84,
    Chest = 85,
    ClearMessages = 86,
    Clockwise = 87,
    CloseDoor = 88,
    CollectObjectWithHands = 89,
    Consumed = 90,
    Container = 91,
    Cook = 92,
    Cooked = 93,
    CopySelectedText = 94,
    Corpse = 95,
    CorruptSaveDetected = 96,
    CouldNotDecipher = 97,
    Counterclockwise = 98,
    Craft = 99,
    Crafted = 100,
    Crafts = 101,
    CreatureAlreadyFullHealth = 102,
    CreatureAngered = 103,
    CreatureAppears = 104,
    CreatureAppearsInjured = 105,
    CreatureAppearsUninjured = 106,
    CreatureAppeased = 107,
    CreatureIdolAttractedCreature = 108,
    CreatureIsAtPercentHealth = 109,
    CreatureIsBarelyHurt = 110,
    CreatureIsInjured = 111,
    CreatureIsSeverelyDamaged = 112,
    CreatureIsUninjured = 113,
    CreatureSeemsHurt = 114,
    CreatureSeemsQuiteInjured = 115,
    CreatureSeemsUnharmed = 116,
    CreatureUntamed = 117,
    CuredYourPoison = 118,
    Cut = 119,
    DailyChallengeMode = 120,
    DamageAppeared = 121,
    DamagedByPouring = 122,
    DayQuarter1 = 123,
    DayQuarter2 = 124,
    DayQuarter3 = 125,
    DayQuarter4 = 126,
    DealtNoDamageToYou = 127,
    DeathBy = 128,
    DeathByBleeding = 129,
    DeathByBurning = 130,
    DeathByConsumption = 131,
    DeathByDrowning = 132,
    DeathByExhaustion = 133,
    DeathByPoison = 134,
    DeathBySteppingOn = 135,
    DeathByTrap = 136,
    Decay = 137,
    DefaultGameName = 138,
    DefaultPlayerName = 139,
    DestroyedFromUse = 140,
    DestroyedGrowingByPickingItUp = 141,
    DestroyedGrowingGrassByPickingItUp = 142,
    Dexterity = 143,
    DexterityIncreasing = 144,
    DidNotSeemToBeHurting = 145,
    DifficultyEasy = 146,
    DifficultyHard = 147,
    DifficultyInsane = 148,
    DifficultyMedium = 149,
    DifficultySimple = 150,
    DifficultyVeryEasy = 151,
    DifficultyVeryHard = 152,
    Dig = 153,
    DigAway = 154,
    Digging = 155,
    DigWithHands = 156,
    Disabled = 157,
    Disassemble = 158,
    DisassembleAction = 159,
    Disassembling = 160,
    DiscoveredCaveEntrance = 161,
    DiscoveredInTheBottle = 162,
    Dismantle = 163,
    DismantleAction = 164,
    DismantleLabel = 165,
    Dismantling = 166,
    DismantlingRequires = 167,
    DoNotHaveTreasureMaps = 168,
    DoNotProduceAnyResources = 169,
    DoodadAppearsDamaged = 170,
    DoodadAppearsOnVergeOfBreaking = 171,
    DoodadAppearsUnscathed = 172,
    DoodadCauseStatus = 173,
    DoodadShowsSignsOfWear = 174,
    DrewSurroundings = 175,
    Drink = 176,
    Drop = 177,
    DropAll = 178,
    DropAllIntoFire = 179,
    DropAllOfSameQuality = 180,
    DroppedAllIntoDepths = 181,
    DroppedIntoDepths = 182,
    DroppedIntoFire = 183,
    DueToDehydration = 184,
    DueToStarvation = 185,
    DugTreasureOut = 186,
    DumpContentsOfContainerInInventory = 187,
    Durability = 188,
    DyingOfDehydration = 189,
    EarnedMilestone = 190,
    Effective = 191,
    Enabled = 192,
    EquipTo = 193,
    ErrorHasOccured = 194,
    Expert = 195,
    ExtinguishedFire = 196,
    ExtinguishedTorch = 197,
    FailedToAddFuelToTorch = 198,
    FailedToCatchFish = 199,
    FailedToCauseDamage = 200,
    FailedToDrawMap = 201,
    FailedToPickLock = 202,
    FailedToPlant = 203,
    FailedToPreserve = 204,
    FailedToReinforce = 205,
    FailedToRepair = 206,
    FailedToStartFire = 207,
    FailedToTame = 208,
    FailedToTransmogrify = 209,
    FarAwayFromTreasure = 210,
    Feet = 211,
    FeltBurningPainLostHealth = 212,
    FewMinutes = 213,
    Filled = 214,
    FilledFrom = 215,
    Fire = 216,
    FireAlmostExtinguished = 217,
    FireAroundYouIsWarm = 218,
    FiredIntoObstacle = 219,
    FireIsHealthy = 220,
    FireIsRaging = 221,
    FireIsStruggling = 222,
    FireOverflowed = 223,
    FireSource = 224,
    Food = 225,
    FullyDecodedMap = 226,
    GainedHealth = 227,
    GainedHunger = 228,
    GainedStamina = 229,
    GainedThirst = 230,
    GameHasBeenSavedIsTakingUpMB = 231,
    Gather = 232,
    GatherDestroy = 233,
    Gathering = 234,
    GatherWithHands = 235,
    GhostNoActions = 236,
    GoatHasNoMilk = 237,
    GrabAll = 238,
    Group = 239,
    HackAway = 240,
    Hands = 241,
    HandsNotEffectiveForDigging = 242,
    Harvest = 243,
    Harvesting = 244,
    HarvestWithHands = 245,
    HasBeenHurtByATrap = 246,
    HasDecayed = 247,
    HasHitYouForDamage = 248,
    HasSetTrapOffNoDamage = 249,
    HasSplit = 250,
    Head = 251,
    Held = 252,
    Help = 253,
    HelpGrow = 254,
    HighscoreTurns = 255,
    Hints = 256,
    HintsDisabled = 257,
    HintsEnabled = 258,
    HitForDamage = 259,
    Hour = 260,
    Hours = 261,
    HurtHandsHittingWithoutWeapons = 262,
    HurtHandsWithNoTool = 263,
    Ineffective = 264,
    InExactLocationOfTreasure = 265,
    InjuredFromTrap = 266,
    InNeedOfRepair = 267,
    Inspect = 268,
    Intermediate = 269,
    Inventory = 270,
    ItContains = 271,
    ItsWeightCapacity = 272,
    Jump = 273,
    Killed = 274,
    LabelAdditionalRequirements = 275,
    LabelAttackFromTactics = 276,
    LabelAuthor = 277,
    LabelBase = 278,
    LabelBaseDefense = 279,
    LabelBenignity = 280,
    LabelBluntResist = 281,
    LabelCanIncrease = 282,
    LabelCraftingReputation = 283,
    LabelDecay = 284,
    LabelDefense = 285,
    LabelDefenseFromParrying = 286,
    LabelDifficulty = 287,
    LabelDurability = 288,
    LabelEquip = 289,
    LabelFireResist = 290,
    LabelGrouping = 291,
    LabelHave = 292,
    LabelHp = 293,
    LabelLastUpdated = 294,
    LabelLeftHandAttack = 295,
    LabelLevel = 296,
    LabelLightSourceWhenLit = 297,
    LabelMalignity = 298,
    LabelOnCure = 299,
    LabelOnDrink = 300,
    LabelOnEat = 301,
    LabelOnEquip = 302,
    LabelOnHeal = 303,
    LabelPiercingResist = 304,
    LabelRange = 305,
    LabelRanged = 306,
    LabelRangedAttack = 307,
    LabelRangedDamage = 308,
    LabelReputationImpact = 309,
    LabelRequiredMods = 310,
    LabelRequires = 311,
    LabelResists = 312,
    LabelRightHandAttack = 313,
    LabelScore = 314,
    LabelSkill = 315,
    LabelSlashingResist = 316,
    LabelStokeFireStrength = 317,
    LabelThrowDamageType = 318,
    LabelTicks = 319,
    LabelTrapDamage = 320,
    LabelTurns = 321,
    LabelUse = 322,
    LabelUses = 323,
    LabelVersion = 324,
    LabelVulnerabilities = 325,
    LabelWeight = 326,
    LabelWeightCapacity = 327,
    LabelWeightReduction = 328,
    LastPlaceYouLeftOff = 329,
    LearnedHowToCreate = 330,
    LeftHand = 331,
    LeftHandEquip = 332,
    Legs = 333,
    LikelyFailures = 334,
    LoseBonesLayBleaching = 335,
    LoseEndIsBeginning = 336,
    LoseSadlyNoTrace = 337,
    LostHealth = 338,
    LostHunger = 339,
    LostStamina = 340,
    LostThirst = 341,
    MapNotOfThisArea = 342,
    MaterialsDestroyed = 343,
    Metabolism = 344,
    MetabolismSlowed = 345,
    MilestoneIsHidden = 346,
    MilestoneIsInvisible = 347,
    Milk = 348,
    Milking = 349,
    MissedWith = 350,
    ModFailedToImportSaveGame = 351,
    ModImportedSaveGame = 352,
    ModImportedSaveGameV2 = 353,
    MouseButton = 354,
    MoveAllOfSameQualityToInventory = 355,
    MoveAllOfSameQualityToLastOpenedContainer = 356,
    MoveAllOfSameQualityToOpenedContainer = 357,
    MoveAllToInventory = 358,
    MoveAllToLastOpenedContainer = 359,
    MoveAllToOpenedContainer = 360,
    MoveOverTrapButDoNotSetOff = 361,
    MoveToInventory = 362,
    MoveToLastOpenedContainer = 363,
    MoveToOpenedContainer = 364,
    MultiplayerGamePaused = 365,
    MultiplayerGameResumed = 366,
    MultiplayerPlayerConnected = 367,
    MultiplayerPlayerDied = 368,
    MultiplayerPlayerDisconnected = 369,
    MultiplayerPlayerJoined = 370,
    MustBeEquippedToIgnite = 371,
    MustCastIntoWater = 372,
    Mysteriously = 373,
    Name = 374,
    NearlyBurnedEquipmentProtectedYou = 375,
    Neck = 376,
    NeedAShovelToDigTreasure = 377,
    NeedFishingNetForTreasure = 378,
    NeedFreeHandToShoot = 379,
    NeedToEquipToShoot = 380,
    NeedToStartTravelsOutside = 381,
    NeedWaterForRaft = 382,
    NightQuarter1 = 383,
    NightQuarter2 = 384,
    NightQuarter3 = 385,
    NightQuarter4 = 386,
    NoAmmunitionForThatWeapon = 387,
    NoBlackPowderToFireWeapon = 388,
    NoFireToStokeWith = 389,
    NoFishAtLocation = 390,
    NoInkToDrawMap = 391,
    NoKindlingOrFuelItemsToStartFire = 392,
    NoKindlingToStartFire = 393,
    NoLongerFeelPainOfBeingBurned = 394,
    NoMoreRoomInContainer = 395,
    NoNeedToStokeFire = 396,
    NoRoomForImprovement = 397,
    NoRoomToDrop = 398,
    NotAvailable = 399,
    NotEnoughPurifiedWaterYet = 400,
    NotEnoughTreasureToReturn = 401,
    NotFacingCreatureToHeal = 402,
    NotFacingLockedObject = 403,
    NotFacingValidItem = 404,
    NothingHereToCarve = 405,
    NothingHereToFill = 406,
    NothingToGetFromThis = 407,
    NothingToHarvestFromThisGather = 408,
    NothingUsefulToHarvestYet = 409,
    NoTinderToStartFire = 410,
    NotInRangeOfTreasure = 411,
    NotSuitableToPlant = 412,
    NoWaterInStill = 413,
    NoWhereNearTreasure = 414,
    NumberEight = 415,
    NumberFive = 416,
    NumberFour = 417,
    NumberNine = 418,
    NumberOne = 419,
    NumberSeven = 420,
    NumberSix = 421,
    NumberTen = 422,
    NumberThree = 423,
    NumberTwo = 424,
    ObjectIsLocked = 425,
    ObjectIsLockedAttemptToBreakIt = 426,
    Offer = 427,
    OpenDoor = 428,
    OpenFolderFailed = 429,
    OverEatingLostStamina = 430,
    OverHydratingLostStamina = 431,
    Pack = 432,
    PaperTurnedToMush = 433,
    PartiallyDecodedMap = 434,
    PastExperiencesProvideBenefits = 435,
    PenultimateAnd = 436,
    PetCreature = 437,
    PickAway = 438,
    PickupAllItems = 439,
    PickupItem = 440,
    Piercing = 441,
    Place = 442,
    PlaceAllOnGround = 443,
    PlacedOnGround = 444,
    Plant = 445,
    PlantedInGround = 446,
    PlantHighlyFertile = 447,
    PlantIsFertile = 448,
    PlantIsNotFertile = 449,
    Poisoned = 450,
    PoisonedLostHealth = 451,
    PoisonWorkedItsCourse = 452,
    PouredOut = 453,
    PouredOutOnYourself = 454,
    PouredWaterIntoStill = 455,
    Preservation = 456,
    Preserve = 457,
    PreservedFood = 458,
    PurifiedWaterInStill = 459,
    Quality = 460,
    Recent = 461,
    RefusedToBeTamed = 462,
    Reinforce = 463,
    Reinforcement = 464,
    Release = 465,
    RemovedBlood = 466,
    RemoveFromQuickslot = 467,
    Repair = 468,
    RequiredForDisassembleLabel = 469,
    RequiredForDisassembly = 470,
    RequiresFireToBeLit = 471,
    RequiresYouFacingFireSource = 472,
    RequiresYouToBeAround = 473,
    Resistant = 474,
    Rest = 475,
    Rested = 476,
    RestingOnGroundNotEffective = 477,
    RestInterrupted = 478,
    RestInterruptedLoudNoise = 479,
    RestInterruptedPain = 480,
    RestInterruptedStirring = 481,
    RestOnGround = 482,
    ReturnedToCivilization = 483,
    ReturningToCivilizationSetOffAgain = 484,
    ReturnsToLife = 485,
    RightHand = 486,
    RightHandEquip = 487,
    SailedToCivilization = 488,
    Score = 489,
    ScrollProvidedNoUsefulInsight = 490,
    SeaweedFromWater = 491,
    SeemsToHaveDrawnEnergy = 492,
    SetTrapOffButNoDamage = 493,
    SetUp = 494,
    ShadowInTheWater = 495,
    Simple = 496,
    Skill = 497,
    SkillHasRaised = 498,
    Slashing = 499,
    Sleep = 500,
    Slept = 501,
    Soil = 502,
    SomethingInTheWayOf = 503,
    SomethingInTheWayOfCarveFirst = 504,
    SomethingInTheWayOfFire = 505,
    SomethingInTheWayOfFishing = 506,
    SomethingInTheWayOfPerforming = 507,
    SomethingInTheWayOfPlacing = 508,
    SomethingInTheWayOfPlanting = 509,
    SomethingInWayOfClosingDoor = 510,
    SoothedYourBurnInjuries = 511,
    Sort = 512,
    SortedByCategory = 513,
    SortedByDecay = 514,
    SortedByDurability = 515,
    SortedByGroup = 516,
    SortedByName = 517,
    SortedByQuality = 518,
    SortedByRecent = 519,
    SortedBySkill = 520,
    SortedByUnlockedTime = 521,
    SortedByWeight = 522,
    StaminaIsFull = 523,
    StartedFire = 524,
    Starting = 525,
    StartTravelInWater = 526,
    StarvingToDeath = 527,
    SteppingOnHasInjuredYouForDamage = 528,
    StillHasNoWaterToPurify = 529,
    StirredUpClawWorm = 530,
    StirredUpCreature = 531,
    Stoking = 532,
    StoppedYourBleeding = 533,
    StopUsingRaft = 534,
    Strength = 535,
    StrengthIncreasing = 536,
    SummonedGuardiansByDiggingTreasure = 537,
    SunNotBrightEnoughToStartFire = 538,
    Tame = 539,
    TamedAppearsAngered = 540,
    TamedAppearsContended = 541,
    TamedAppearsHappy = 542,
    TamedAppearsUpset = 543,
    TamedCreature = 544,
    TeleportBlocked = 545,
    Teleported = 546,
    ThereIsNoSunToStartFire = 547,
    ThereIsNothingToMilk = 548,
    ThisCannotBeMilked = 549,
    Throw = 550,
    ThrownIntoDepths = 551,
    ThrownIntoObstacle = 552,
    Till = 553,
    Tilling = 554,
    TimeIs = 555,
    TimeIsDawn = 556,
    TimeIsDaytime = 557,
    TimeIsDusk = 558,
    TimeIsNighttime = 559,
    TimeIsSunrise = 560,
    TimeIsSunset = 561,
    TooDamaged = 562,
    TooExhaustedToJump = 563,
    TrampledFire = 564,
    TrampledIntoGround = 565,
    TrampleIntoGround = 566,
    Trampling = 567,
    Transmogrification = 568,
    Transmogrified = 569,
    TrapStoppedYou = 570,
    TravelToFarOffLands = 571,
    TreasureIsBlocked = 572,
    True = 573,
    UnEquip = 574,
    UnEquipAll = 575,
    Unknown = 576,
    UnknownItem = 577,
    UnlockedChest = 578,
    UnlockedTime = 579,
    UnpurifiedWaterInStill = 580,
    URLHasOpenedInWebBrowser = 581,
    UsedToSpeedUpGrowing = 582,
    UsingBareFistsToFight = 583,
    UsingBareHands = 584,
    Vulnerable = 585,
    WaitUntilFireCooledToGetWater = 586,
    WalkingDistanceOfTreasure = 587,
    Water = 588,
    WaterGathering = 589,
    WaterPutOutFire = 590,
    Weight = 591,
    WeightCapacity = 592,
    WildGoatRefusedToBeMilked = 593,
    WinFindWayBackToCivilization = 594,
    WinSailBackWithRiches = 595,
    WinTravelledBackToCivilization = 596,
    With = 597,
    WorkingYourselfIntoExhaustion = 598,
    WorkingYourselfIntoExhaustionAndDrowning = 599,
    WorkshopHasBeenOpenedPressOkAfter = 600,
    WouldHaveNoEffect = 601,
    YouAte = 602,
    YouBeginResting = 603,
    YouCannotDoThatYet = 604,
    YouCollected = 605,
    YouCooledLava = 606,
    YouCrafted = 607,
    YouDied = 608,
    YouDisassembled = 609,
    YouDismantled = 610,
    YouDrank = 611,
    YouEquip = 612,
    YouFailedTo = 613,
    YouFailedToHeal = 614,
    YouFailedToHealCreature = 615,
    YouFire = 616,
    YouGathered = 617,
    YouHardenedCooledLava = 618,
    YouHarvested = 619,
    YouHaveDied = 620,
    YouHaveEnabledDisabled = 621,
    YouHaveHealedCreature = 622,
    YouHaveKilled = 623,
    YouHaveReleased = 624,
    YouHaveTamed = 625,
    YouNoticeBecomeEnraged = 626,
    YouNoticeDying = 627,
    YouNoticeFertilityDecreasing = 628,
    YouNoticeFertilityIncreasing = 629,
    YouNoticeGrowing = 630,
    YouNoticeLavaCooling = 631,
    YouNoticeLavaHardening = 632,
    YouNoticePerish = 633,
    YouNoticeStumbleInjureItself = 634,
    YouNoticeWoundsClosing = 635,
    YouNoticeZombieHorde = 636,
    YouOfferedToCreature = 637,
    YouOpen = 638,
    YouPacked = 639,
    YouPickedUp = 640,
    YouRepair = 641,
    YourFist = 642,
    YourHands = 643,
    YourRubbingNoEffect = 644,
    YouRub = 645,
    YouSalvaged = 646,
    YouSee = 647,
    YouSeeAnAberrant = 648,
    YouSeeDrop = 649,
    YouSeeEngulfFire = 650,
    YouSeeLay = 651,
    YouSeeLayingTrap = 652,
    YouSeeSpewLava = 653,
    YouSeeSpitAcid = 654,
    YouSeeSpringForth = 655,
    YouSeeSummon = 656,
    YouSeeSwampFlood = 657,
    YouSeparate = 658,
    YouSetTheTrapOff = 659,
    YouThrew = 660,
    YouTilled = 661,
    YouUnequip = 662,
    YouUsed = 663,
}
