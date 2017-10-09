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
    All = 8,
    AllEquipmentUnEquipped = 9,
    AlreadyFullyRepaired = 10,
    AlreadyPreserved = 11,
    AlreadyWaterInStill = 12,
    AppearedNotEffectiveForGathering = 13,
    AppearsInjured = 14,
    AppearsToBeAberrant = 15,
    AppearsUninjured = 16,
    ArmorAppeared = 17,
    ArmorProtectedFromInjuryAgainst = 18,
    Attack = 19,
    AttemptedToDropAllIntoFire = 20,
    AttemptedToPlaceAllOnGround = 21,
    AttemptToTill = 22,
    AwakeToFindYourself = 23,
    Back = 24,
    BadlyBurnedLostHealth = 25,
    BeenPoisoned = 26,
    BeginSleeping = 27,
    BeginUsingRaft = 28,
    Belt = 29,
    BleedingHasStopped = 30,
    BleedingProfusely = 31,
    BleedingToDeathLostHealth = 32,
    Blunt = 33,
    BookBlank = 34,
    BookContains = 35,
    BookCrumbles = 36,
    BookDiagrams = 37,
    BookEmpty = 38,
    BookNothing = 39,
    BookOpen = 40,
    BookScribbles = 41,
    BrokeIntoPieces = 42,
    BrokenOnImpact = 43,
    BrokenWhileFiring = 44,
    Build = 45,
    Burned = 46,
    CannotAddAnyMoreFuel = 47,
    CannotBePerformedOverWater = 48,
    CannotBePreserved = 49,
    CannotBeReinforced = 50,
    CannotBeRepaired = 51,
    CannotBeTamed = 52,
    CannotBeTransmogrified = 53,
    CannotBuildHere = 54,
    CannotDoThatHere = 55,
    CannotDropHere = 56,
    CannotEquipThatThere = 57,
    CannotFishFor = 58,
    CannotGatherHere = 59,
    CannotInWater = 60,
    CannotLeave = 61,
    CannotPickupWhenFull = 62,
    CannotPickUpWhileLit = 63,
    CannotPickUpWithItemsInside = 64,
    CannotPlaceContainerInItself = 65,
    CannotPlaceHere = 66,
    CannotPlaceThatFromHere = 67,
    CannotPlaceThatHere = 68,
    CannotPlantHereTilled = 69,
    CannotRepairWhileLit = 70,
    CannotRestHere = 71,
    CannotSeeHere = 72,
    CannotSleepHere = 73,
    CannotStartFireHere = 74,
    CannotToTellTime = 75,
    CarryingTooMuchWeight = 76,
    CarvedUpCorpse = 77,
    CarveWithTool = 78,
    Carving = 79,
    CastYourLine = 80,
    Category = 81,
    CaughtFish = 82,
    ChatBanCommand = 83,
    ChatBannedCommand = 84,
    ChatCommandsCommand = 85,
    ChatPingCommand = 86,
    ChatPlayerMessage = 87,
    ChatPlayersCommand = 88,
    ChatUnbanCommand = 89,
    ChatUnknownCommand = 90,
    Chest = 91,
    ClearMessages = 92,
    Clockwise = 93,
    CloseDoor = 94,
    CollectObjectWithHands = 95,
    Consumed = 96,
    Container = 97,
    Cook = 98,
    Cooked = 99,
    CopySelectedText = 100,
    Corpse = 101,
    CorruptSaveDetected = 102,
    CouldNotDecipher = 103,
    Counterclockwise = 104,
    Craft = 105,
    Crafted = 106,
    Crafts = 107,
    CreatureAlreadyFullHealth = 108,
    CreatureAngered = 109,
    CreatureAppears = 110,
    CreatureAppeased = 111,
    CreatureIdolAttractedCreature = 112,
    CreatureResistanceVulnerableHigh = 113,
    CreatureResistanceVulnerableLow = 114,
    CreatureResistanceVulnerableModerate = 115,
    CreatureUntamed = 116,
    CuredYourPoison = 117,
    Cut = 118,
    DailyChallengeMode = 119,
    Damage = 120,
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
    DeathByFistByPlayer = 134,
    DeathByPoison = 135,
    DeathBySteppingOn = 136,
    DeathByTrap = 137,
    DeathByWeaponByPlayer = 138,
    Decay = 139,
    DefaultGameName = 140,
    DefaultPlayerName = 141,
    DestroyedFromUse = 142,
    DestroyedGrowingByPickingItUp = 143,
    DestroyedGrowingGrassByPickingItUp = 144,
    Dexterity = 145,
    DexterityIncreasing = 146,
    DidNotSeemToBeHurting = 147,
    DifficultyEasy = 148,
    DifficultyHard = 149,
    DifficultyInsane = 150,
    DifficultyMedium = 151,
    DifficultySimple = 152,
    DifficultyVeryEasy = 153,
    DifficultyVeryHard = 154,
    Dig = 155,
    DigAway = 156,
    Digging = 157,
    DigWithHands = 158,
    Disabled = 159,
    Disassemble = 160,
    DisassembleAction = 161,
    Disassembling = 162,
    DiscoveredCaveEntrance = 163,
    DiscoveredInTheBottle = 164,
    Dismantle = 165,
    DismantleAction = 166,
    DismantleLabel = 167,
    Dismantling = 168,
    DismantlingRequires = 169,
    DoNotHaveTreasureMaps = 170,
    DoNotProduceAnyResources = 171,
    DoodadAppearsDamaged = 172,
    DoodadAppearsOnVergeOfBreaking = 173,
    DoodadAppearsUnscathed = 174,
    DoodadCauseStatus = 175,
    DoodadShowsSignsOfWear = 176,
    DrewSurroundings = 177,
    Drink = 178,
    Drop = 179,
    DropAll = 180,
    DropAllIntoFire = 181,
    DropAllOfSameQuality = 182,
    DroppedAllIntoDepths = 183,
    DroppedIntoDepths = 184,
    DroppedIntoFire = 185,
    DueToDehydration = 186,
    DueToStarvation = 187,
    DugTreasureOut = 188,
    DumpContentsOfContainerInInventory = 189,
    Durability = 190,
    DyingOfDehydration = 191,
    EarnedMilestone = 192,
    Effective = 193,
    Enabled = 194,
    EquipTo = 195,
    ErrorHasOccured = 196,
    Expert = 197,
    ExtinguishedFire = 198,
    ExtinguishedTorch = 199,
    FailedToAddFuelToTorch = 200,
    FailedToCatchFish = 201,
    FailedToCauseDamage = 202,
    FailedToCauseYouDamage = 203,
    FailedToDrawMap = 204,
    FailedToPickLock = 205,
    FailedToPlant = 206,
    FailedToPreserve = 207,
    FailedToReinforce = 208,
    FailedToRepair = 209,
    FailedToStartFire = 210,
    FailedToTame = 211,
    FailedToTransmogrify = 212,
    FarAwayFromTreasure = 213,
    Feet = 214,
    FeltBurningPainLostHealth = 215,
    FewMinutes = 216,
    Filled = 217,
    FilledFrom = 218,
    Fire = 219,
    FireAlmostExtinguished = 220,
    FireAroundYouIsWarm = 221,
    FiredIntoObstacle = 222,
    FireIsHealthy = 223,
    FireIsRaging = 224,
    FireIsStruggling = 225,
    FireOverflowed = 226,
    FireReducedToEmbers = 227,
    FireSource = 228,
    Food = 229,
    FullyDecodedMap = 230,
    GainedHealth = 231,
    GainedHunger = 232,
    GainedStamina = 233,
    GainedThirst = 234,
    GameHasBeenSavedIsTakingUpMB = 235,
    Gather = 236,
    GatherDestroy = 237,
    Gathering = 238,
    GatherWithHands = 239,
    GhostNoActions = 240,
    GoatHasNoMilk = 241,
    GrabAll = 242,
    Group = 243,
    HackAway = 244,
    Hands = 245,
    HandsNotEffectiveForDigging = 246,
    Harvest = 247,
    Harvesting = 248,
    HarvestWithHands = 249,
    HasBeenHurtByATrap = 250,
    HasDecayed = 251,
    HasHitYouForDamage = 252,
    HasNoEffect = 253,
    HasSetTrapOffNoDamage = 254,
    HasSplit = 255,
    Head = 256,
    Held = 257,
    Help = 258,
    HelpGrow = 259,
    HighscoreTurns = 260,
    Hints = 261,
    HintsDisabled = 262,
    HintsEnabled = 263,
    HitForDamage = 264,
    HitYouForDamage = 265,
    Hour = 266,
    Hours = 267,
    HurtHandsHittingWithoutWeapons = 268,
    HurtHandsWithNoTool = 269,
    Ineffective = 270,
    InExactLocationOfTreasure = 271,
    InjuredFromTrap = 272,
    InNeedOfRepair = 273,
    Inspect = 274,
    Intermediate = 275,
    Inventory = 276,
    IsAtPercentHealth = 277,
    IsBarelyHurt = 278,
    IsInjured = 279,
    IsSeverelyDamaged = 280,
    IsUninjured = 281,
    ItContains = 282,
    ItsWeightCapacity = 283,
    Jump = 284,
    Killed = 285,
    LabelAdditionalRequirements = 286,
    LabelAttackFromTactics = 287,
    LabelAuthor = 288,
    LabelBase = 289,
    LabelBaseDefense = 290,
    LabelBenignity = 291,
    LabelBluntResist = 292,
    LabelCanIncrease = 293,
    LabelCraftingReputation = 294,
    LabelDecay = 295,
    LabelDefense = 296,
    LabelDefenseFromParrying = 297,
    LabelDifficulty = 298,
    LabelDurability = 299,
    LabelEquip = 300,
    LabelFireResist = 301,
    LabelGrouping = 302,
    LabelHave = 303,
    LabelHp = 304,
    LabelLastUpdated = 305,
    LabelLeftHandAttack = 306,
    LabelLevel = 307,
    LabelLightSourceWhenLit = 308,
    LabelMalignity = 309,
    LabelOnCure = 310,
    LabelOnDrink = 311,
    LabelOnEat = 312,
    LabelOnEquip = 313,
    LabelOnHeal = 314,
    LabelPiercingResist = 315,
    LabelRange = 316,
    LabelRanged = 317,
    LabelRangedAttack = 318,
    LabelRangedDamage = 319,
    LabelReputationImpact = 320,
    LabelRequiredMods = 321,
    LabelRequires = 322,
    LabelResists = 323,
    LabelRightHandAttack = 324,
    LabelScore = 325,
    LabelSkill = 326,
    LabelSlashingResist = 327,
    LabelStokeFireStrength = 328,
    LabelThrowDamageType = 329,
    LabelTicks = 330,
    LabelTrapDamage = 331,
    LabelTurns = 332,
    LabelUse = 333,
    LabelUses = 334,
    LabelVersion = 335,
    LabelVulnerabilities = 336,
    LabelWeight = 337,
    LabelWeightCapacity = 338,
    LabelWeightReduction = 339,
    LastPlaceYouLeftOff = 340,
    LearnedHowToCreate = 341,
    LeftHand = 342,
    LeftHandEquip = 343,
    Legs = 344,
    LikelyFailures = 345,
    LoseBonesLayBleaching = 346,
    LoseEndIsBeginning = 347,
    LoseSadlyNoTrace = 348,
    LostHealth = 349,
    LostHunger = 350,
    LostStamina = 351,
    LostThirst = 352,
    MapNotOfThisArea = 353,
    MaterialsDestroyed = 354,
    Metabolism = 355,
    MetabolismSlowed = 356,
    MilestoneIsHidden = 357,
    MilestoneIsInvisible = 358,
    Milk = 359,
    Milking = 360,
    MissedWith = 361,
    MissedYouWith = 362,
    ModFailedToImportSaveGame = 363,
    ModImportedSaveGame = 364,
    ModImportedSaveGameV2 = 365,
    MoreInformation = 366,
    MouseButton = 367,
    MoveAllOfSameQualityToInventory = 368,
    MoveAllOfSameQualityToLastOpenedContainer = 369,
    MoveAllOfSameQualityToOpenedContainer = 370,
    MoveAllToInventory = 371,
    MoveAllToLastOpenedContainer = 372,
    MoveAllToOpenedContainer = 373,
    MoveOverTrapButDoNotSetOff = 374,
    MoveToInventory = 375,
    MoveToLastOpenedContainer = 376,
    MoveToOpenedContainer = 377,
    MultiplayerGamePaused = 378,
    MultiplayerGameResumed = 379,
    MultiplayerPlayerConnected = 380,
    MultiplayerPlayerDied = 381,
    MultiplayerPlayerDisconnected = 382,
    MultiplayerPlayerJoined = 383,
    MustBeEquippedToIgnite = 384,
    MustCastIntoWater = 385,
    Mysteriously = 386,
    Name = 387,
    NearlyBurnedEquipmentProtectedYou = 388,
    Neck = 389,
    NeedAShovelToDigTreasure = 390,
    NeedFishingNetForTreasure = 391,
    NeedFreeHandToShoot = 392,
    NeedToEquipToShoot = 393,
    NeedToStartTravelsOutside = 394,
    NeedWaterForRaft = 395,
    NightQuarter1 = 396,
    NightQuarter2 = 397,
    NightQuarter3 = 398,
    NightQuarter4 = 399,
    No = 400,
    NoAmmunitionForThatWeapon = 401,
    NoBlackPowderToFireWeapon = 402,
    NoFireToStokeWith = 403,
    NoFishAtLocation = 404,
    NoInkToDrawMap = 405,
    NoKindlingOrFuelItemsToStartFire = 406,
    NoKindlingToStartFire = 407,
    NoLongerFeelPainOfBeingBurned = 408,
    NoMoreRoomInContainer = 409,
    NoNeedToStokeFire = 410,
    NoRoomForImprovement = 411,
    NoRoomToDrop = 412,
    NotAvailable = 413,
    NotEnoughPurifiedWaterYet = 414,
    NotEnoughTreasureToReturn = 415,
    NotFacingCreatureToHeal = 416,
    NotFacingCreatureToOfferThisTo = 417,
    NotFacingLockedObject = 418,
    NotFacingValidItem = 419,
    NothingHereToCarve = 420,
    NothingHereToFill = 421,
    NothingToGetFromThis = 422,
    NothingToHarvestFromThisGather = 423,
    NothingUsefulToHarvestYet = 424,
    NoTinderToStartFire = 425,
    NotInRangeOfTreasure = 426,
    NotSuitableToPlant = 427,
    NoWaterInStill = 428,
    NoWhereNearTreasure = 429,
    NumberEight = 430,
    NumberFive = 431,
    NumberFour = 432,
    NumberNine = 433,
    NumberOne = 434,
    NumberSeven = 435,
    NumberSix = 436,
    NumberTen = 437,
    NumberThree = 438,
    NumberTwo = 439,
    ObjectIsLocked = 440,
    ObjectIsLockedAttemptToBreakIt = 441,
    Offer = 442,
    OfferAberrantFail = 443,
    OpenDoor = 444,
    OpenFolderFailed = 445,
    OverEatingLostStamina = 446,
    OverHydratingLostStamina = 447,
    Pack = 448,
    PaperTurnedToMush = 449,
    PartiallyDecodedMap = 450,
    PastExperiencesProvideBenefits = 451,
    PenultimateAnd = 452,
    PetCreature = 453,
    PickAway = 454,
    PickupAllItems = 455,
    PickupItem = 456,
    Piercing = 457,
    Place = 458,
    PlaceAllOnGround = 459,
    PlacedOnGround = 460,
    Plant = 461,
    PlantedInGround = 462,
    PlantHighlyFertile = 463,
    PlantIsFertile = 464,
    PlantIsNotFertile = 465,
    Poisoned = 466,
    PoisonedLostHealth = 467,
    PoisonWorkedItsCourse = 468,
    PouredOut = 469,
    PouredOutOnYourself = 470,
    PouredWaterIntoStill = 471,
    Preservation = 472,
    Preserve = 473,
    PreservedFood = 474,
    PurifiedWaterInStill = 475,
    Quality = 476,
    Recent = 477,
    RefusedToBeTamed = 478,
    Reinforce = 479,
    Reinforcement = 480,
    Release = 481,
    RemovedBlood = 482,
    RemoveFromQuickslot = 483,
    Repair = 484,
    RequiredForDisassembleLabel = 485,
    RequiredForDisassembly = 486,
    RequiresFireToBeLit = 487,
    RequiresYouFacingFireSource = 488,
    RequiresYouToBeAround = 489,
    Resistant = 490,
    Rest = 491,
    Rested = 492,
    RestingOnGroundNotEffective = 493,
    RestInterrupted = 494,
    RestInterruptedLoudNoise = 495,
    RestInterruptedPain = 496,
    RestInterruptedStirring = 497,
    RestOnGround = 498,
    ReturnedToCivilization = 499,
    ReturningToCivilizationSetOffAgain = 500,
    ReturnsToLife = 501,
    RightHand = 502,
    RightHandEquip = 503,
    SailedToCivilization = 504,
    Score = 505,
    ScrollProvidedNoUsefulInsight = 506,
    SeaweedFromWater = 507,
    SeemsHurt = 508,
    SeemsQuiteInjured = 509,
    SeemsToHaveDrawnEnergy = 510,
    SeemsUnharmed = 511,
    SetTrapOffButNoDamage = 512,
    SetUp = 513,
    ShadowInTheWater = 514,
    Simple = 515,
    Skill = 516,
    SkillHasRaised = 517,
    Slashing = 518,
    Sleep = 519,
    Slept = 520,
    Soil = 521,
    Some = 522,
    SomethingInTheWayOf = 523,
    SomethingInTheWayOfCarveFirst = 524,
    SomethingInTheWayOfFire = 525,
    SomethingInTheWayOfFishing = 526,
    SomethingInTheWayOfPerforming = 527,
    SomethingInTheWayOfPlacing = 528,
    SomethingInTheWayOfPlanting = 529,
    SomethingInWayOfClosingDoor = 530,
    SoothedYourBurnInjuries = 531,
    Sort = 532,
    SortedByCategory = 533,
    SortedByDecay = 534,
    SortedByDurability = 535,
    SortedByGroup = 536,
    SortedByName = 537,
    SortedByQuality = 538,
    SortedByRecent = 539,
    SortedBySkill = 540,
    SortedByUnlockedTime = 541,
    SortedByWeight = 542,
    StaminaIsFull = 543,
    StartedFire = 544,
    StartTravelInWater = 545,
    StarvingToDeath = 546,
    SteppingOnHasInjuredYouForDamage = 547,
    StillHasNoWaterToPurify = 548,
    StirredUpClawWorm = 549,
    StirredUpCreature = 550,
    StoppedYourBleeding = 551,
    StopUsingRaft = 552,
    Strength = 553,
    RestInterruptedDamage = 554,
    StrengthIncreasing = 555,
    SummonedGuardiansByDiggingTreasure = 556,
    SunNotBrightEnoughToStartFire = 557,
    TakenFromGroundBecomeTamed = 558,
    Tame = 559,
    TamedAppearsAngered = 560,
    TamedAppearsContended = 561,
    TamedAppearsHappy = 562,
    TamedAppearsUpset = 563,
    TamedCreature = 564,
    TeleportBlocked = 565,
    Teleported = 566,
    TheirFist = 567,
    ThereIsNoSunToStartFire = 568,
    ThereIsNothingToMilk = 569,
    ThisCannotBeMilked = 570,
    Throw = 571,
    ThrownIntoDepths = 572,
    ThrownIntoObstacle = 573,
    Till = 574,
    Tilling = 575,
    TimeIs = 576,
    TimeIsDawn = 577,
    TimeIsDaytime = 578,
    TimeIsDusk = 579,
    TimeIsNighttime = 580,
    TimeIsSunrise = 581,
    TimeIsSunset = 582,
    TooDamaged = 583,
    TooExhaustedToJump = 584,
    TrampledFire = 585,
    TrampledIntoGround = 586,
    TrampleIntoGround = 587,
    Trampling = 588,
    Transmogrification = 589,
    Transmogrified = 590,
    TrapStoppedYou = 591,
    TravelToFarOffLands = 592,
    TreasureIsBlocked = 593,
    True = 594,
    UnEquip = 595,
    UnEquipAll = 596,
    Unknown = 597,
    UnknownItem = 598,
    UnlockedChest = 599,
    UnlockedTime = 600,
    UnpurifiedWaterInStill = 601,
    URLHasOpenedInWebBrowser = 602,
    UsingBareFistsToFight = 603,
    UsingBareHands = 604,
    Vulnerable = 605,
    WaitUntilFireCooledToGetWater = 606,
    WalkingDistanceOfTreasure = 607,
    Water = 608,
    WaterGathering = 609,
    WaterPutOutFire = 610,
    Weight = 611,
    WeightCapacity = 612,
    WildGoatRefusedToBeMilked = 613,
    WinFindWayBackToCivilization = 614,
    WinSailBackWithRiches = 615,
    WinTravelledBackToCivilization = 616,
    With = 617,
    WorkingYourselfIntoExhaustion = 618,
    WorkingYourselfIntoExhaustionAndDrowning = 619,
    WorkshopHasBeenOpenedPressOkAfter = 620,
    YouAte = 621,
    YouBeginResting = 622,
    YouCannotDoThatYet = 623,
    YouCollected = 624,
    YouCooledLava = 625,
    YouCrafted = 626,
    YouDied = 627,
    YouDisassembled = 628,
    YouDismantled = 629,
    YouDrank = 630,
    YouEquip = 631,
    YouFailedTo = 632,
    YouFailedToHeal = 633,
    YouFailedToHealCreature = 634,
    YouFire = 635,
    YouGathered = 636,
    YouHardenedCooledLava = 637,
    YouHarvested = 638,
    YouHaveDied = 639,
    YouHaveEnabledDisabled = 640,
    YouHaveHealedCreature = 641,
    YouHaveKilled = 642,
    YouHaveReleased = 643,
    YouHaveTamed = 644,
    YouNoticeBecomeEnraged = 645,
    YouNoticeDying = 646,
    YouNoticeFertilityDecreasing = 647,
    YouNoticeFertilityIncreasing = 648,
    YouNoticeGrowing = 649,
    YouNoticeLavaCooling = 650,
    YouNoticeLavaHardening = 651,
    YouNoticePerish = 652,
    YouNoticeStumbleInjureItself = 653,
    YouNoticeTakeFromGround = 654,
    YouNoticeWoundsClosing = 655,
    YouNoticeZombieHorde = 656,
    YouOfferedToCreature = 657,
    YouOpen = 658,
    YouPacked = 659,
    YouPickedUp = 660,
    YouRepair = 661,
    YourFist = 662,
    YourHands = 663,
    YourRubbingNoEffect = 664,
    YouRub = 665,
    YouSalvaged = 666,
    YouSee = 667,
    YouSeeAnAberrant = 668,
    YouSeeDrop = 669,
    YouSeeEngulfFire = 670,
    YouSeeLay = 671,
    YouSeeLayingTrap = 672,
    YouSeeSpewLava = 673,
    YouSeeSpitAcid = 674,
    YouSeeSpringForth = 675,
    YouSeeSummon = 676,
    YouSeeSwampFlood = 677,
    YouSeparate = 678,
    YouSetTheTrapOff = 679,
    YouThrew = 680,
    YouTilled = 681,
    YouUnequip = 682,
    YouUsed = 683,
}
