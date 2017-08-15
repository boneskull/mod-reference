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
    BrokeIntoPieces = 31,
    BrokenOnImpact = 32,
    BrokenWhileFiring = 33,
    Build = 34,
    Burned = 35,
    CannotAddAnyMoreFuel = 36,
    CannotBePerformedOverWater = 37,
    CannotBePreserved = 38,
    CannotBeReinforced = 39,
    CannotBeRepaired = 40,
    CannotBeTamed = 41,
    CannotBeTransmogrified = 42,
    CannotBuildHere = 43,
    CannotDoThatHere = 44,
    CannotDropHere = 45,
    CannotEquipThatThere = 46,
    CannotFishFor = 47,
    CannotGatherHere = 48,
    CannotImproveGrowingSpeed = 49,
    CannotInWater = 50,
    CannotLeave = 51,
    CannotPickupWhenFull = 52,
    CannotPickUpWhileLit = 53,
    CannotPickUpWithItemsInside = 54,
    CannotPlaceContainerInItself = 55,
    CannotPlaceHere = 56,
    CannotPlaceThatFromHere = 57,
    CannotPlaceThatHere = 58,
    CannotPlantHere = 59,
    CannotPlantHereTilled = 60,
    CannotRepairWhileLit = 61,
    CannotRestHere = 62,
    CannotSeeHere = 63,
    CannotSleepHere = 64,
    CannotStartFireHere = 65,
    CannotToTellTime = 66,
    CarryingTooMuchWeight = 67,
    CarvedUpCorpse = 68,
    CarveWithTool = 69,
    Carving = 70,
    CastYourLine = 71,
    Category = 72,
    CaughtFish = 73,
    ChatPlayerMessage = 74,
    ChatUnknownCommand = 75,
    Chest = 76,
    ClearMessages = 77,
    Clockwise = 78,
    CloseDoor = 79,
    CollectObjectWithHands = 80,
    Consumed = 81,
    Container = 82,
    Cook = 83,
    Cooked = 84,
    Corpse = 85,
    CorruptSaveDetected = 86,
    CouldNotDecipher = 87,
    Counterclockwise = 88,
    Craft = 89,
    Crafted = 90,
    Crafts = 91,
    CreatureAlreadyFullHealth = 92,
    CreatureAngered = 93,
    CreatureAppears = 94,
    CreatureAppeased = 95,
    CreatureIdolAttractedCreature = 96,
    CreatureIsAtPercentHealth = 97,
    CreatureIsBarelyHurt = 98,
    CreatureIsHealthy = 99,
    CreatureIsHealthyAndUndamaged = 100,
    CreatureIsHurt = 101,
    CreatureIsInjured = 102,
    CreatureIsnhealthy = 103,
    CreatureIsSeverelyDamaged = 104,
    CreatureIsUnharmed = 105,
    CreatureIsVeryInjured = 106,
    CreatureUntamed = 107,
    CuredYourPoison = 108,
    Cut = 109,
    DailyChallengeMode = 110,
    DamageAppeared = 111,
    DamagedByPouringWater = 112,
    DayQuarter1 = 113,
    DayQuarter2 = 114,
    DayQuarter3 = 115,
    DayQuarter4 = 116,
    DealtNoDamageToYou = 117,
    DeathBy = 118,
    DeathByBleeding = 119,
    DeathByBurning = 120,
    DeathByConsumption = 121,
    DeathByDrowning = 122,
    DeathByExhaustion = 123,
    DeathByPoison = 124,
    DeathBySteppingOn = 125,
    DeathByTrap = 126,
    Decay = 127,
    DefaultGameName = 128,
    DefaultPlayerName = 129,
    DestroyedFromUse = 130,
    DestroyedGrowingByPickingItUp = 131,
    DestroyedGrowingGrassByPickingItUp = 132,
    DexterityIncreasing = 133,
    DidNotSeemToBeHurting = 134,
    DifficultyEasy = 135,
    DifficultyHard = 136,
    DifficultyInsane = 137,
    DifficultyMedium = 138,
    DifficultySimple = 139,
    DifficultyVeryEasy = 140,
    DifficultyVeryHard = 141,
    Dig = 142,
    DigAway = 143,
    Digging = 144,
    DigUpDestroy = 145,
    DigWithHands = 146,
    Disassemble = 147,
    DisassembleAction = 148,
    Disassembling = 149,
    DiscoveredCaveEntrance = 150,
    DiscoveredInTheBottle = 151,
    Dismantle = 152,
    DismantleAction = 153,
    DismantleLabel = 154,
    Dismantling = 155,
    DismantlingRequires = 156,
    DoNotHaveTreasureMaps = 157,
    DoNotProduceAnyResources = 158,
    DoodadAppearsDamaged = 159,
    DoodadAppearsOnVergeOfBreaking = 160,
    DoodadAppearsUnscathed = 161,
    DoodadCauseStatus = 162,
    DoodadShowsSignsOfWear = 163,
    DrewSurroundings = 164,
    Drink = 165,
    Drop = 166,
    DropAll = 167,
    DropAllIntoFire = 168,
    DropAllOfSameQuality = 169,
    DroppedAllIntoDepths = 170,
    DroppedIntoDepths = 171,
    DroppedIntoFire = 172,
    DueToDehydration = 173,
    DueToStarvation = 174,
    DugTreasureOut = 175,
    DumpContentsOfContainerInInventory = 176,
    Durability = 177,
    DyingOfDehydration = 178,
    EarnedMilestone = 179,
    Effective = 180,
    EquipTo = 181,
    ErrorHasOccured = 182,
    Expert = 183,
    ExtinguishedFire = 184,
    ExtinguishedTorch = 185,
    FailedToAddFuelToTorch = 186,
    FailedToCatchFish = 187,
    FailedToCauseDamage = 188,
    FailedToDrawMap = 189,
    FailedToPickLock = 190,
    FailedToPlant = 191,
    FailedToPreserve = 192,
    FailedToReinforce = 193,
    FailedToRepair = 194,
    FailedToStartFire = 195,
    FailedToTame = 196,
    FailedToTransmogrify = 197,
    FarAwayFromTreasure = 198,
    Feet = 199,
    FeltBurningPainLostHealth = 200,
    FewMinutes = 201,
    Filled = 202,
    FilledFrom = 203,
    Fire = 204,
    FireAlmostExtinguished = 205,
    FiredIntoObstacle = 206,
    FireAroundYouIsWarm = 207,
    FireIsHealthy = 208,
    FireIsRaging = 209,
    FireIsStruggling = 210,
    FireOverflowed = 211,
    FireSource = 212,
    Food = 213,
    FullyDecodedMap = 214,
    GainedHealth = 215,
    GainedHunger = 216,
    GainedStamina = 217,
    GainedThirst = 218,
    GameHasBeenSavedIsTakingUpMB = 219,
    Gather = 220,
    Gathering = 221,
    GatherWithHands = 222,
    GhostNoActions = 223,
    GrabAll = 224,
    Group = 225,
    HackAway = 226,
    Hands = 227,
    HandsNotEffectiveForDigging = 228,
    Harvest = 229,
    Harvesting = 230,
    HarvestWithHands = 231,
    HasBeenHurtByATrap = 232,
    HasBeenHurtByYourTrap = 233,
    HasDecayed = 234,
    HasHitYouForDamage = 235,
    HasSplit = 236,
    Head = 237,
    Held = 238,
    Help = 239,
    HighscoreTurns = 240,
    Hints = 241,
    HintsDisabled = 242,
    HintsEnabled = 243,
    HitForDamage = 244,
    Hour = 245,
    Hours = 246,
    HurtHandsHittingWithoutWeapons = 247,
    HurtHandsWithNoTool = 248,
    Ineffective = 249,
    InExactLocationOfTreasure = 250,
    InjuredFromTrap = 251,
    InNeedOfRepair = 252,
    Inspect = 253,
    Intermediate = 254,
    Inventory = 255,
    ItContains = 256,
    ItsWeightCapacity = 257,
    Jump = 258,
    Killed = 259,
    LabelAdditionalRequirements = 260,
    LabelAttackFromTactics = 261,
    LabelAuthor = 262,
    LabelBase = 263,
    LabelBaseDefense = 264,
    LabelBenignity = 265,
    LabelBluntResist = 266,
    LabelCraftingReputation = 267,
    LabelDecay = 268,
    LabelDefense = 269,
    LabelDefenseFromParrying = 270,
    LabelDifficulty = 271,
    LabelDurability = 272,
    LabelEquip = 273,
    LabelFireResist = 274,
    LabelGrouping = 275,
    LabelHave = 276,
    LabelHp = 277,
    LabelLastUpdated = 278,
    LabelLeftHandAttack = 279,
    LabelLevel = 280,
    LabelLightSourceWhenLit = 281,
    LabelMalignity = 282,
    LabelOnCure = 283,
    LabelOnDrink = 284,
    LabelOnEat = 285,
    LabelOnEquip = 286,
    LabelOnHeal = 287,
    LabelPiercingResist = 288,
    LabelRange = 289,
    LabelRanged = 290,
    LabelRangedAttack = 291,
    LabelRangedDamage = 292,
    LabelReputationImpact = 293,
    LabelRequiredMods = 294,
    LabelRequires = 295,
    LabelResists = 296,
    LabelRightHandAttack = 297,
    LabelScore = 298,
    LabelSkill = 299,
    LabelSlashingResist = 300,
    LabelStokeFireStrength = 301,
    LabelThrowDamageType = 302,
    LabelTicks = 303,
    LabelTrapDamage = 304,
    LabelTurns = 305,
    LabelUse = 306,
    LabelUses = 307,
    LabelVersion = 308,
    LabelVulnerabilities = 309,
    LabelWeight = 310,
    LabelWeightCapacity = 311,
    LabelWeightReduction = 312,
    LastPlaceYouLeftOff = 313,
    LearnedHowToCreate = 314,
    LeftHand = 315,
    Legs = 316,
    LikelyFailures = 317,
    LoseBonesLayBleaching = 318,
    LoseEndIsBeginning = 319,
    LoseSadlyNoTrace = 320,
    LostHealth = 321,
    LostHunger = 322,
    LostStamina = 323,
    LostThirst = 324,
    MapNotOfThisArea = 325,
    MaterialsDestroyed = 326,
    MetabolismSlowed = 327,
    MilestoneIsHidden = 328,
    MilestoneIsInvisible = 329,
    MissedWith = 330,
    ModFailedToImportSaveGame = 331,
    ModImportedSaveGame = 332,
    ModImportedSaveGameV2 = 333,
    MouseButton = 334,
    MoveAllOfSameQualityToInventory = 335,
    MoveAllOfSameQualityToLastOpenedContainer = 336,
    MoveAllOfSameQualityToOpenedContainer = 337,
    MoveAllToInventory = 338,
    MoveAllToLastOpenedContainer = 339,
    MoveAllToOpenedContainer = 340,
    MoveOverTrapButDoNotSetOff = 341,
    MoveToInventory = 342,
    MoveToLastOpenedContainer = 343,
    MoveToOpenedContainer = 344,
    MultiplayerGamePaused = 345,
    MultiplayerGameResumed = 346,
    MultiplayerPlayerConnected = 347,
    MultiplayerPlayerDied = 348,
    MultiplayerPlayerDisconnected = 349,
    MultiplayerPlayerJoined = 350,
    MustBeEquippedToIgnite = 351,
    MustCastIntoWater = 352,
    Mysteriously = 353,
    Name = 354,
    NearlyBurnedEquipmentProtectedYou = 355,
    Neck = 356,
    NeedAShovelToDigTreasure = 357,
    NeedFishingNetForTreasure = 358,
    NeedToEquipToShoot = 359,
    NeedToStartTravelsOutside = 360,
    NeedWaterForRaft = 361,
    NightQuarter1 = 362,
    NightQuarter2 = 363,
    NightQuarter3 = 364,
    NightQuarter4 = 365,
    NoAmmunitionForThatWeapon = 366,
    NoBlackPowderToFireWeapon = 367,
    NoFireToStokeWith = 368,
    NoFishAtLocation = 369,
    NoFuelItemsToStartFire = 370,
    NoInkToDrawMap = 371,
    NoKindlingToStartFire = 372,
    NoLongerFeelPainOfBeingBurned = 373,
    NoMoreRoomInContainer = 374,
    NoNeedToStokeFire = 375,
    NoRoomForImprovement = 376,
    NoRoomToDrop = 377,
    NotAvailable = 378,
    NotEnoughFoodToTravel = 379,
    NotEnoughPurifiedWaterYet = 380,
    NotEnoughTreasureToReturn = 381,
    NotFacingCreatureToHeal = 382,
    NotFacingLockedObject = 383,
    NotFacingValidItem = 384,
    NothingHereToCarve = 385,
    NothingHereToFill = 386,
    NothingToGetFromThis = 387,
    NothingUsefulToGetYet = 388,
    NoTinderToStartFire = 389,
    NotInRangeOfTreasure = 390,
    NoWaterInStill = 391,
    NoWhereNearTreasure = 392,
    NumberEight = 393,
    NumberFive = 394,
    NumberFour = 395,
    NumberNine = 396,
    NumberOne = 397,
    NumberSeven = 398,
    NumberSix = 399,
    NumberTen = 400,
    NumberThree = 401,
    NumberTwo = 402,
    ObjectIsLocked = 403,
    ObjectIsLockedAttemptToBreakIt = 404,
    Offer = 405,
    OpenDoor = 406,
    OpenFolderFailed = 407,
    OverEatingLostStamina = 408,
    OverHydratingLostStamina = 409,
    PaperTurnedToMush = 410,
    PartiallyDecodedMap = 411,
    PastExperiencesProvideBenefits = 412,
    PenultimateAnd = 413,
    PetCreature = 414,
    PickAway = 415,
    PickupAllItems = 416,
    PickupItem = 417,
    Piercing = 418,
    Place = 419,
    PlaceAllOnGround = 420,
    PlacedOnGround = 421,
    Plant = 422,
    PlantedInGround = 423,
    PlantHighlyFertile = 424,
    PlantIsFertile = 425,
    PlantIsNotFertile = 426,
    Poisoned = 427,
    PoisonedLostHealth = 428,
    PoisonWorkedItsCourse = 429,
    PouredOutWater = 430,
    PouredOutWaterOnYourself = 431,
    PouredWaterIntoStill = 432,
    Preservation = 433,
    Preserve = 434,
    PreservedFood = 435,
    PurifiedWaterInStill = 436,
    Quality = 437,
    Recent = 438,
    RefusedToBeTamed = 439,
    Reinforce = 440,
    Reinforcement = 441,
    Release = 442,
    RemovedBlood = 443,
    RemoveFromQuickslot = 444,
    Repair = 445,
    RequiredForDisassembleLabel = 446,
    RequiredForDisassembly = 447,
    RequiresFireToBeLit = 448,
    RequiresYouFacingFireSource = 449,
    RequiresYouToBeAround = 450,
    Resistant = 451,
    Rest = 452,
    Rested = 453,
    RestingOnGroundNotEffective = 454,
    RestInterrupted = 455,
    RestInterruptedLoudNoise = 456,
    RestInterruptedPain = 457,
    RestInterruptedStirring = 458,
    RestOnGround = 459,
    ReturnedToCivilization = 460,
    ReturningToCivilizationSetOffAgain = 461,
    ReturnsToLife = 462,
    RightHand = 463,
    SailedToCivilization = 464,
    Score = 465,
    ScrollProvidedNoUsefulInsight = 466,
    SeaweedFromWater = 467,
    SeemsToHaveDrawnEnergy = 468,
    SetTrapOffButNoDamage = 469,
    SetUp = 470,
    ShadowInTheWater = 471,
    Simple = 472,
    Skill = 473,
    SkillHasRaised = 474,
    Slashing = 475,
    Sleep = 476,
    Slept = 477,
    Soil = 478,
    SomethingInTheWayOf = 479,
    SomethingInTheWayOfCarveFirst = 480,
    SomethingInTheWayOfFire = 481,
    SomethingInTheWayOfFishing = 482,
    SomethingInTheWayOfPerforming = 483,
    SomethingInTheWayOfPlacing = 484,
    SomethingInWayOfClosingDoor = 485,
    SoothedYourBurnInjuries = 486,
    Sort = 487,
    SortedByCategory = 488,
    SortedByDecay = 489,
    SortedByDurability = 490,
    SortedByGroup = 491,
    SortedByName = 492,
    SortedByQuality = 493,
    SortedByRecent = 494,
    SortedBySkill = 495,
    SortedByUnlockedTime = 496,
    SortedByWeight = 497,
    StaminaIsFull = 498,
    StartedFire = 499,
    Starting = 500,
    StartTravelInWater = 501,
    StarvingToDeath = 502,
    SteppingOnHasInjuredYouForDamage = 503,
    StillHasNoWaterToPurify = 504,
    StirredUpClawWorm = 505,
    StirredUpCreature = 506,
    Stoking = 507,
    StoppedYourBleeding = 508,
    StopUsingRaft = 509,
    StrengthIncreasing = 510,
    SummonedGuardiansByDiggingTreasure = 511,
    SunNotBrightEnoughToStartFire = 512,
    Tame = 513,
    TamedAppearsAngered = 514,
    TamedAppearsContended = 515,
    TamedAppearsHappy = 516,
    TamedAppearsUpset = 517,
    TamedCreature = 518,
    TeleportBlocked = 519,
    Teleported = 520,
    ThereIsNoSunToStartFire = 521,
    Throw = 522,
    ThrownIntoDepths = 523,
    ThrownIntoObstacle = 524,
    Till = 525,
    Tilling = 526,
    TimeIs = 527,
    TimeIsDawn = 528,
    TimeIsDaytime = 529,
    TimeIsDusk = 530,
    TimeIsNighttime = 531,
    TimeIsSunrise = 532,
    TimeIsSunset = 533,
    TooDamaged = 534,
    TooExhaustedToJump = 535,
    TrampledFire = 536,
    TrampledIntoGround = 537,
    TrampleIntoGround = 538,
    Trampling = 539,
    Transmogrification = 540,
    Transmogrified = 541,
    TrapStoppedYou = 542,
    TravelToFarOffLands = 543,
    TreasureIsBlocked = 544,
    True = 545,
    UnEquip = 546,
    UnEquipAll = 547,
    Unknown = 548,
    UnknownItem = 549,
    UnlockedChest = 550,
    UnlockedTime = 551,
    UnpurifiedWaterInStill = 552,
    URLHasOpenedInWebBrowser = 553,
    UsedToSpeedUpGrowing = 554,
    UsingBareFistsToFight = 555,
    UsingBareHands = 556,
    Vulnerable = 557,
    WaitUntilFireCooledToGetWater = 558,
    WalkingDistanceOfTreasure = 559,
    Water = 560,
    WaterHelpGrow = 561,
    WaterPutOutFire = 562,
    WaterWouldHaveNoEffect = 563,
    Weight = 564,
    WeightCapacity = 565,
    WinFindWayBackToCivilization = 566,
    WinSailBackWithRiches = 567,
    WinTravelledBackToCivilization = 568,
    With = 569,
    WorkingYourselfIntoExhaustion = 570,
    WorkingYourselfIntoExhaustionAndDrowning = 571,
    WorkshopHasBeenOpenedPressOkAfter = 572,
    YouAte = 573,
    YouBeginResting = 574,
    YouCannotDoThatYet = 575,
    YouCollected = 576,
    YouCrafted = 577,
    YouDied = 578,
    YouDisassembled = 579,
    YouDismantled = 580,
    YouDrank = 581,
    YouEquip = 582,
    YouFailedTo = 583,
    YouFailedToHeal = 584,
    YouFailedToHealCreature = 585,
    YouFire = 586,
    YouGathered = 587,
    YouHarvested = 588,
    YouHaveHealedCreature = 589,
    YouHaveKilled = 590,
    YouHaveReleased = 591,
    YouHaveTamed = 592,
    YouNoticeBecomeEnraged = 593,
    YouNoticeDying = 594,
    YouNoticeFertilityDecreasing = 595,
    YouNoticeFertilityIncreasing = 596,
    YouNoticeGrowing = 597,
    YouNoticeLavaTurn = 598,
    YouNoticePerish = 599,
    YouNoticeStumbleInjureItself = 600,
    YouNoticeWoundsClosing = 601,
    YouNoticeZombieHorde = 602,
    YouOfferedToCreature = 603,
    YouOpen = 604,
    YouPacked = 605,
    YouPickedUp = 606,
    YouRepair = 607,
    YourFist = 608,
    YourHands = 609,
    YouRub = 610,
    YouSalvaged = 611,
    YouSee = 612,
    YouSeeAnAberrant = 613,
    YouSeeDrop = 614,
    YouSeeEngulfFire = 615,
    YouSeeLay = 616,
    YouSeeLayingTrap = 617,
    YouSeeSpewLava = 618,
    YouSeeSpitAcid = 619,
    YouSeeSpringForth = 620,
    YouSeeSummon = 621,
    YouSeeSwampFlood = 622,
    YouSeparate = 623,
    YouSetTheTrapOff = 624,
    YouThrew = 625,
    YouTilled = 626,
    YouUnequip = 627,
    YouUsed = 628,
}
