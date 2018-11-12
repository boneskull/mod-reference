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
declare enum Message {
    None = 0,
    Aberrant = 1,
    AboutHours = 2,
    AddedFuelToFire = 3,
    AddedFuelToTorch = 4,
    AddFuel = 5,
    AddToQuickslot = 6,
    Advanced = 7,
    All = 8,
    AllEquipmentUnEquipped = 9,
    AlreadyDesalinatedWaterInStill = 10,
    AlreadyFullyRepaired = 11,
    AlreadyPreserved = 12,
    AlreadyWaterInStill = 13,
    AnUnknownItem = 14,
    AppearedNotEffectiveForGathering = 15,
    AppearsToBeAberrant = 16,
    ArmorAppeared = 17,
    ArmorProtectedFromInjuryAgainst = 18,
    Attack = 19,
    AttemptedToDropAllIntoFire = 20,
    AttemptedToPlaceAllOnGround = 21,
    AttemptToTill = 22,
    Back = 23,
    BadlyBurnedLostHealth = 24,
    BarteringSkillsProvided = 25,
    BasedOnItSeems = 26,
    BeenPoisoned = 27,
    BeginSleeping = 28,
    BeginUsingRaft = 29,
    Belt = 30,
    Best = 31,
    BleedingHasStopped = 32,
    BleedingProfusely = 33,
    BleedingToDeathLostHealth = 34,
    Blunt = 35,
    BookBlank = 36,
    BookContains = 37,
    BookCrumbles = 38,
    BookDiagrams = 39,
    BookEmpty = 40,
    BookNothing = 41,
    BookOpen = 42,
    BookScribbles = 43,
    BothEffectiveIneffective = 44,
    BothHands = 45,
    BrokeIntoPieces = 46,
    BrokenOnImpact = 47,
    BrokenWhileFiring = 48,
    Build = 49,
    Burned = 50,
    CannotAddAnyMoreFuel = 51,
    CannotBePerformedOverWater = 52,
    CannotBePreserved = 53,
    CannotBeReinforced = 54,
    CannotBeRepaired = 55,
    CannotBeTamed = 56,
    CannotBuildHere = 57,
    CannotDoThatHere = 58,
    CannotDropHere = 59,
    CannotEquipThatThere = 60,
    CannotFishFor = 61,
    CannotHere = 62,
    CannotInWater = 63,
    CannotLeave = 64,
    CannotPickupWhenFull = 65,
    CannotPickUpWhileLit = 66,
    CannotPickUpWithItemsInside = 67,
    CannotPlaceContainerInItself = 68,
    CannotPlaceHere = 69,
    CannotPlaceThatFromHere = 70,
    CannotPlaceThatHere = 71,
    CannotPlantHereTilled = 72,
    CannotRepairWhileLit = 73,
    CannotRestHere = 74,
    CannotSeeHere = 75,
    CannotSleepHere = 76,
    CannotStartFireHere = 77,
    CannotToTellTime = 78,
    CarryingTooMuchWeight = 79,
    CarvedUpCorpse = 80,
    CarveWithTool = 81,
    Carving = 82,
    CastYourLine = 83,
    Category = 84,
    CaughtFish = 85,
    ChatBanCommand = 86,
    ChatBannedCommand = 87,
    ChatCommandsCommand = 88,
    ChatPingCommand = 89,
    ChatPlayerMessage = 90,
    ChatPlayersCommand = 91,
    ChatServerMessage = 92,
    ChatUnbanCommand = 93,
    ChatUnknownCommand = 94,
    Chest = 95,
    ClearMessages = 96,
    Clockwise = 97,
    CloseContainer = 98,
    CloseDoor = 99,
    CloseToBeingDestroyed = 100,
    CollectObjectWithHands = 101,
    Consumed = 102,
    Container = 103,
    Cook = 104,
    Cooked = 105,
    CopySelectedText = 106,
    CorpseOf = 107,
    CorpseOfNamed = 108,
    CouldNotDecipher = 109,
    Counterclockwise = 110,
    Craft = 111,
    Crafted = 112,
    Crafts = 113,
    CreatureAngered = 114,
    CreatureAppears = 115,
    CreatureAppeased = 116,
    CreatureIdolAttractedCreature = 117,
    CreatureUntamed = 118,
    CuredYourPoison = 119,
    Cut = 120,
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
    DestroyedFromUse = 140,
    Dexterity = 141,
    DexterityIncreasing = 142,
    DidNotSeemToBeHurting = 143,
    Dig = 144,
    DigAway = 145,
    Digging = 146,
    DigWithHands = 147,
    Disabled = 148,
    Disassemble = 149,
    DisassembleAction = 150,
    Disassembling = 151,
    DiscoveredCaveEntrance = 152,
    DiscoveredInTheBottle = 153,
    DiscoveredLavaPassage = 154,
    Dismantle = 155,
    DismantleAction = 156,
    DismantleLabel = 157,
    Dismantling = 158,
    DismantlingRequires = 159,
    DoNotHaveTreasureMaps = 160,
    DoNotProduceAnyResources = 161,
    DoodadAppearsDamaged = 162,
    DoodadAppearsOnVergeOfBreaking = 163,
    DoodadAppearsUnscathed = 164,
    DoodadCauseStatus = 165,
    DoodadShowsSignsOfWear = 166,
    DrewSurroundings = 167,
    Drink = 168,
    Drop = 169,
    DropAll = 170,
    DropAllIntoFire = 171,
    DropAllOfSameQuality = 172,
    DroppedAllIntoDepths = 173,
    DroppedIntoDepths = 174,
    DroppedIntoFire = 175,
    DueToDehydration = 176,
    DueToStarvation = 177,
    DugTreasureOut = 178,
    DumpContentsOfContainerInInventory = 179,
    Durability = 180,
    DyingOfDehydration = 181,
    EarnedMilestone = 182,
    Effective = 183,
    Enabled = 184,
    EquipmentPreventedStatusEffects = 185,
    EquipTo = 186,
    ErrorHasOccured = 187,
    Expert = 188,
    ExtinguishedFire = 189,
    ExtinguishedTorch = 190,
    FailedToAddFuelToTorch = 191,
    FailedToCatchFish = 192,
    FailedToCauseDamage = 193,
    FailedToCauseYouDamage = 194,
    FailedToDrawMap = 195,
    FailedToIgniteTorch = 196,
    FailedToPickLock = 197,
    FailedToPlant = 198,
    FailedToPreserve = 199,
    FailedToReinforce = 200,
    FailedToRepair = 201,
    FailedToStartFire = 202,
    FailedToTame = 203,
    FailedToTransmogrify = 204,
    FarAwayFromTreasure = 205,
    Feet = 206,
    FeltBurningPainLostHealth = 207,
    FewMinutes = 208,
    Filled = 209,
    FilledFrom = 210,
    Fire = 211,
    FireAlmostExtinguished = 212,
    FireAroundYouIsWarm = 213,
    FiredIntoObstacle = 214,
    FireIsHealthy = 215,
    FireIsRaging = 216,
    FireIsStruggling = 217,
    FireOverflowed = 218,
    FireReducedToEmbers = 219,
    FireSource = 220,
    FishingWithNoBait = 221,
    FullyDecodedMap = 222,
    GainedHealth = 223,
    GainedHunger = 224,
    GainedStamina = 225,
    GainedThirst = 226,
    GameHasBeenSavedIsTakingUpMB = 227,
    Gather = 228,
    GatherDestroy = 229,
    Gathering = 230,
    GatherWithHands = 231,
    GhostNoActions = 232,
    GhostOf = 233,
    GoatHasNoMilk = 234,
    GrabAll = 235,
    Group = 236,
    HackAway = 237,
    HandProtectionPreventedInjury = 238,
    Hands = 239,
    HandsNotEffectiveForDigging = 240,
    Harvest = 241,
    Harvesting = 242,
    HarvestWithHands = 243,
    HasBeenHurtByATrap = 244,
    HasDecayed = 245,
    HasHitYouForDamage = 246,
    HasNoEffect = 247,
    HasSetTrapOffNoDamage = 248,
    HasSplit = 249,
    Head = 250,
    Held = 251,
    Help = 252,
    HelpGrow = 253,
    Hints = 254,
    HintsDisabled = 255,
    HintsEnabled = 256,
    Hitch = 257,
    HitchAttempt = 258,
    HitchCreature = 259,
    HitchDisabled = 260,
    HitchInUse = 261,
    HitForDamage = 262,
    HitYouForDamage = 263,
    Hour = 264,
    Hours = 265,
    HurtHandsHittingWithoutWeapons = 266,
    HurtHandsWithNoTool = 267,
    Ignite = 268,
    IgnitedTorch = 269,
    Ineffective = 270,
    InExactLocationOfTreasure = 271,
    InjuredFromTrap = 272,
    InNeedOfRepair = 273,
    Intermediate = 274,
    Inventory = 275,
    IsInTheWayOfPickingUp = 276,
    It = 277,
    ItAlsoReveals = 278,
    ItAlsoSeems = 279,
    ItContains = 280,
    ItsWeightCapacity = 281,
    JoinedAServer = 282,
    Jump = 283,
    Killed = 284,
    KnowledgeHasIncreased = 285,
    LabelAdditionalRequirements = 286,
    LabelAttackFromTactics = 287,
    LabelBase = 288,
    LabelCanIncrease = 289,
    LabelCraftingReputation = 290,
    LabelCraftingSkillReputation = 291,
    LabelDecay = 292,
    LabelDefense = 293,
    LabelDurability = 294,
    LabelEquip = 295,
    LabelGrouping = 296,
    LabelHave = 297,
    LabelLeftHandAttack = 298,
    LabelLevel = 299,
    LabelLightSourceWhenLit = 300,
    LabelOnCure = 301,
    LabelOnDrink = 302,
    LabelOnEat = 303,
    LabelOnEquip = 304,
    LabelOnHeal = 305,
    LabelOnOtherHeal = 306,
    LabelProtected = 307,
    LabelRange = 308,
    LabelRanged = 309,
    LabelRangedAttack = 310,
    LabelRangedDamage = 311,
    LabelReputationImpact = 312,
    LabelRequires = 313,
    LabelResists = 314,
    LabelRightHandAttack = 315,
    LabelSkill = 316,
    LabelStokeFireStrength = 317,
    LabelThrowDamageType = 318,
    LabelTrapDamage = 319,
    LabelUse = 320,
    LabelUses = 321,
    LabelVulnerabilities = 322,
    LabelWeight = 323,
    LabelWeightCapacity = 324,
    LabelWeightReduction = 325,
    LabelWorth = 326,
    LastPlaceYouLeftOff = 327,
    LearnedHowToCreate = 328,
    LeftHand = 329,
    LeftHandEquip = 330,
    Legs = 331,
    LikelyFailures = 332,
    LostHealth = 333,
    LostHunger = 334,
    LostStamina = 335,
    LostThirst = 336,
    MapNotOfThisArea = 337,
    MaterialsDestroyed = 338,
    Metabolism = 339,
    MetabolismSlowed = 340,
    Milk = 341,
    Milking = 342,
    MissedWith = 343,
    MissedYouWith = 344,
    MoreInformation = 345,
    MoveAllOfSameQualityToFacingContainer = 346,
    MoveAllOfSameQualityToInventory = 347,
    MoveAllOfSameQualityToLastOpenedContainer = 348,
    MoveAllOfSameQualityToOpenedContainer = 349,
    MoveAllToFacingContainer = 350,
    MoveAllToInventory = 351,
    MoveAllToLastOpenedContainer = 352,
    MoveAllToOpenedContainer = 353,
    MovedItem = 354,
    MovedItems = 355,
    MoveOverTrapButDoNotSetOff = 356,
    MoveToFacingContainer = 357,
    MoveToInventory = 358,
    MoveToLastOpenedContainer = 359,
    MoveToOpenedContainer = 360,
    MultiplayerGamePaused = 361,
    MultiplayerGameResumed = 362,
    MultiplayerPlayerConnected = 363,
    MultiplayerPlayerDied = 364,
    MultiplayerPlayerDisconnected = 365,
    MultiplayerPlayerJoined = 366,
    MustBeEquippedToIgnite = 367,
    MustCastIntoWater = 368,
    Mysteriously = 369,
    Name = 370,
    NearlyBurnedEquipmentProtectedYou = 371,
    Neck = 372,
    NeedAShovelToDigTreasure = 373,
    NeedFishingNetForTreasure = 374,
    NeedFreeHandToShoot = 375,
    NeedToEquipToShoot = 376,
    NeedToStartTravelsOutside = 377,
    NeedWaterForRaft = 378,
    Negatively = 379,
    NightQuarter1 = 380,
    NightQuarter2 = 381,
    NightQuarter3 = 382,
    NightQuarter4 = 383,
    NoAmmunitionForThatWeapon = 384,
    NoBlackPowderToFireWeapon = 385,
    NoFireToStokeWith = 386,
    NoFishAtLocation = 387,
    NoGroundWater = 388,
    NoInkToDrawMap = 389,
    NoKindlingOrFuelItemsToStartFire = 390,
    NoKindlingToStartFire = 391,
    NoLongerFeelPainOfBeingBurned = 392,
    NoLongerHostile = 393,
    NoMoreRoomInContainer = 394,
    NoNeedToStokeFire = 395,
    NoRoomForImprovement = 396,
    NoRoomToDrop = 397,
    NotAvailable = 398,
    NotEnoughPurifiedWaterYet = 399,
    NotEnoughTreasureToReturn = 400,
    NotFacingCreatureToOfferThisTo = 401,
    NotFacingLockedObject = 402,
    NotFacingOtherToHeal = 403,
    NotFacingValidItem = 404,
    NothingHereToCarve = 405,
    NothingHereToFill = 406,
    NothingHereToGrasp = 407,
    NothingToGetFromThis = 408,
    NothingToHarvestFromThisGather = 409,
    NothingToSmother = 410,
    NothingUsefulToHarvestYet = 411,
    NoTinderToStartFire = 412,
    NotInRangeOfTreasure = 413,
    NotSuitableToPlant = 414,
    NoWaterInStill = 415,
    NoWhereNearTreasure = 416,
    NPCStartingDialog1 = 417,
    NPCStartingDialog2 = 418,
    NPCStartingDialog3 = 419,
    NPCStartingDialog4 = 420,
    NPCWelcome = 421,
    NPCWelcomeCredit = 422,
    NumberEight = 423,
    NumberFive = 424,
    NumberFour = 425,
    NumberNine = 426,
    NumberOne = 427,
    NumberSeven = 428,
    NumberSix = 429,
    NumberTen = 430,
    NumberThree = 431,
    NumberTwo = 432,
    ObjectIsLocked = 433,
    ObjectIsLockedAttemptToBreakIt = 434,
    Offer = 435,
    OfferAberrantFail = 436,
    OfferAberrantFailButTamed = 437,
    OpenDoor = 438,
    OverEatingLostStamina = 439,
    OverHydratingLostStamina = 440,
    Pack = 441,
    PaperTurnedToMush = 442,
    PartiallyDecodedMap = 443,
    PastExperiencesProvideBenefits = 444,
    PenultimateAnd = 445,
    PetCreature = 446,
    PickAway = 447,
    PickupAllItems = 448,
    PickupItem = 449,
    Piercing = 450,
    Place = 451,
    PlaceAllOnGround = 452,
    PlacedOnGround = 453,
    Plant = 454,
    PlantedInGround = 455,
    PlantGatheringWillDestroy = 456,
    PlantHasResourcesToGather = 457,
    PlantHasResourcesToHarvest = 458,
    PlantHighlyFertile = 459,
    Planting = 460,
    PlantIsDead = 461,
    PlantIsFertile = 462,
    PlantIsInStage = 463,
    PlantIsNotFertile = 464,
    PlantNotReadyToHarvest = 465,
    PlantReadyToHarvest = 466,
    PlantReadyToHarvestNotMaximal = 467,
    Player = 468,
    Poisoned = 469,
    PoisonedLostHealth = 470,
    PoisonWorkedItsCourse = 471,
    Positively = 472,
    PouredOut = 473,
    PouredOutOnYourself = 474,
    PouredWaterIntoStill = 475,
    Preservation = 476,
    Preserve = 477,
    PreservedFood = 478,
    PurifiedWaterInStill = 479,
    Quality = 480,
    Recent = 481,
    ReduceLength = 482,
    RefusedToBeTamed = 483,
    Reinforce = 484,
    Reinforcement = 485,
    Release = 486,
    RemovedBlood = 487,
    RemoveFromQuickslot = 488,
    Repair = 489,
    RequiredForDisassembleLabel = 490,
    RequiredForDisassembly = 491,
    RequiresFireToBeLit = 492,
    RequiresYouFacingFireSource = 493,
    RequiresYouToBeAround = 494,
    Resistant = 495,
    ResistOrVuln = 496,
    ResistOrVulnAll = 497,
    Rest = 498,
    Rested = 499,
    Resting = 500,
    RestingOnGroundNotEffective = 501,
    RestInterrupted = 502,
    RestInterruptedDamage = 503,
    RestInterruptedLoudNoise = 504,
    RestInterruptedPain = 505,
    RestInterruptedStirring = 506,
    RestLongTime = 507,
    RestModerateTime = 508,
    RestOnGround = 509,
    RestShortTime = 510,
    RestTime = 511,
    ReturnedToCivilization = 512,
    ReturningToCivilizationSetOffAgain = 513,
    ReturnsToLife = 514,
    Reveals = 515,
    RevealsEntityAppearsHurt = 516,
    RevealsEntityAppearsUnharmed = 517,
    RevealsEntityAppearsVeryHurt = 518,
    RevealsEntityIsAtPercentHealth = 519,
    RevealsEntityIsInjured = 520,
    RevealsEntityIsMostlyUninjured = 521,
    RevealsEntityIsOnTheVergeOfDeath = 522,
    RevealsEntityIsSeverelyInjured = 523,
    RevealsEntitySeemsInjured = 524,
    RevealsEntitySeemsUninjured = 525,
    RevealsNumberOfResistancesAndVulnerabilities = 526,
    RevealsResistancesAndVulnerabilities = 527,
    RevealsSomeResistancesAndVulnerabilities = 528,
    RightHand = 529,
    RightHandEquip = 530,
    ScrollProvidedNoUsefulInsight = 531,
    SeaweedFromWater = 532,
    SeemsToHaveDrawnEnergy = 533,
    SetTrapOffButNoDamage = 534,
    SetUp = 535,
    ShadowInTheWater = 536,
    Simple = 537,
    Skill = 538,
    SkillHasRaised = 539,
    Skills = 540,
    Slashing = 541,
    Sleep = 542,
    Sleeping = 543,
    Slept = 544,
    SlitherSuckerConstricts = 545,
    SlitherSuckerJumpedOnHead = 546,
    Some = 547,
    SomethingInTheWayOf = 548,
    SomethingInTheWayOfCarveFirst = 549,
    SomethingInTheWayOfFire = 550,
    SomethingInTheWayOfFishing = 551,
    SomethingInTheWayOfPerforming = 552,
    SomethingInTheWayOfPlacing = 553,
    SomethingInTheWayOfPlanting = 554,
    SomethingInWayOfClosingDoor = 555,
    SoothedTheirBurnInjuries = 556,
    SoothedYourBurnInjuries = 557,
    Sort = 558,
    SortedByBest = 559,
    SortedByCategory = 560,
    SortedByDecay = 561,
    SortedByDurability = 562,
    SortedByGroup = 563,
    SortedByName = 564,
    SortedByQuality = 565,
    SortedByRecent = 566,
    SortedBySkill = 567,
    SortedByUnlockedTime = 568,
    SortedByWeight = 569,
    StaminaIsFull = 570,
    StartedFire = 571,
    StartTravelInWater = 572,
    StarvingToDeath = 573,
    SteppingOnHasInjuredYouForDamage = 574,
    StillHasNoWaterToPurify = 575,
    StirredUpClawWorm = 576,
    StirredUpCreature = 577,
    StoppedYourBleeding = 578,
    StopUsingRaft = 579,
    Strength = 580,
    StrengthIncreasing = 581,
    SummonedGuardiansByDiggingTreasure = 582,
    SunNotBrightEnoughToStartFire = 583,
    TakenFromGroundBecomeTamed = 584,
    Tame = 585,
    TamedAppearsAngered = 586,
    TamedAppearsContended = 587,
    TamedAppearsHappy = 588,
    TamedAppearsUpset = 589,
    TamedCreature = 590,
    TeleportBlocked = 591,
    Teleported = 592,
    ThanksBuying = 593,
    ThanksSelling = 594,
    The = 595,
    TheCreature = 596,
    TheirFist = 597,
    ThePlant = 598,
    ThereIsNoSunToStartFire = 599,
    ThereIsNothingToMilk = 600,
    ThisCannotBeMilked = 601,
    Throw = 602,
    ThrownIntoDepths = 603,
    ThrownIntoObstacle = 604,
    Till = 605,
    Tilling = 606,
    TimeIs = 607,
    TimeIsDawn = 608,
    TimeIsDaytime = 609,
    TimeIsDusk = 610,
    TimeIsNighttime = 611,
    TimeIsSunrise = 612,
    TimeIsSunset = 613,
    ToDamageAChest = 614,
    ToFight = 615,
    TooDamaged = 616,
    TooExhaustedToJump = 617,
    TradeBarterCreditForItem = 618,
    TradeItemForBarterCredit = 619,
    TradingWith = 620,
    TrampledFire = 621,
    TrampledIntoGround = 622,
    TrampleIntoGround = 623,
    Trampling = 624,
    Transmogrification = 625,
    Transmogrified = 626,
    TrapStoppedYou = 627,
    TravelToFarOffLands = 628,
    TreasureIsBlocked = 629,
    True = 630,
    UnEquip = 631,
    UnEquipAll = 632,
    Unhitch = 633,
    UnhitchCreature = 634,
    Unknown = 635,
    UnknownItem = 636,
    UnlockedChest = 637,
    UnlockedTime = 638,
    UnpurifiedWaterInStill = 639,
    UsingBareHands = 640,
    Vulnerable = 641,
    WaitUntilFireCooledToGetWater = 642,
    WalkingDistanceOfTreasure = 643,
    Water = 644,
    WaterGathering = 645,
    WaterPutOutFire = 646,
    Weight = 647,
    WeightCapacity = 648,
    WellIsDry = 649,
    WellIsFull = 650,
    WildGoatRefusedToBeMilked = 651,
    WillNotTrade = 652,
    With = 653,
    WithYouSee = 654,
    WorkingYourselfIntoExhaustion = 655,
    WorkingYourselfIntoExhaustionAndDrowning = 656,
    YouApplied = 657,
    YouAte = 658,
    YouBeginResting = 659,
    YouCannotDoThatYet = 660,
    YouCooledLava = 661,
    YouCrafted = 662,
    YouDied = 663,
    YouDisassembled = 664,
    YouDismantled = 665,
    YouDrank = 666,
    YouDropTheTorch = 667,
    YouEquip = 668,
    YouFailedTo = 669,
    YouFailedToExtinguishedFireFully = 670,
    YouFailedToHeal = 671,
    YouFailedToHealOther = 672,
    YouFire = 673,
    YouGathered = 674,
    YouGatheredAndDropped = 675,
    YouHardenedCooledLava = 676,
    YouHarvested = 677,
    YouHarvestedAndDropped = 678,
    YouHaveDied = 679,
    YouHaveEnabledDisabled = 680,
    YouHaveHealedOther = 681,
    YouHaveKilled = 682,
    YouHaveReleased = 683,
    YouHaveTamed = 684,
    YouNeedMoreCredit = 685,
    YouNoticeBecomeEnraged = 686,
    YouNoticeDying = 687,
    YouNoticeFertilityDecreasing = 688,
    YouNoticeFertilityIncreasing = 689,
    YouNoticeGrowing = 690,
    YouNoticeLavaCooling = 691,
    YouNoticeLavaHardening = 692,
    YouNoticePerish = 693,
    YouNoticeStumbleInjureItself = 694,
    YouNoticeTakeFromGround = 695,
    YouNoticeWoundsClosing = 696,
    YouNoticeZombieHorde = 697,
    YouOfferedToCreature = 698,
    YouOpen = 699,
    YouPacked = 700,
    YouPickedUp = 701,
    YouRepair = 702,
    YourFist = 703,
    YourHands = 704,
    YourHighSkill = 705,
    YourInventory = 706,
    YourLowSkill = 707,
    YourModerateSkill = 708,
    YourRubbingNoEffect = 709,
    YouRub = 710,
    YouSalvaged = 711,
    YouSee = 712,
    YouSeeAnAberrant = 713,
    YouSeeDrop = 714,
    YouSeeEngulfFire = 715,
    YouSeeHelpingPlant = 716,
    YouSeeLay = 717,
    YouSeeLayingTrap = 718,
    YouSeeSpewLava = 719,
    YouSeeSpitAcid = 720,
    YouSeeSpringForth = 721,
    YouSeeSummon = 722,
    YouSeeSwampFlood = 723,
    YouSeeTrampling = 724,
    YouSeparate = 725,
    YouSetTheTrapOff = 726,
    YouThrew = 727,
    YouTilled = 728,
    YouUnequip = 729,
    YouUsed = 730
}
export default Message;
