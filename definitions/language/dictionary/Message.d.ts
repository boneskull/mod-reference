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
    CartographyDirection = 80,
    CartographyDirectionUnsure = 81,
    CartographyDistanceHighSkillExactDistance = 82,
    CartographyDistanceHighSkillFarAway = 83,
    CartographyDistanceHighSkillInRegion = 84,
    CartographyDistanceHighSkillNearby = 85,
    CartographyDistanceLowSkillNearby = 86,
    CartographyDistanceLowSkillUnsure = 87,
    CartographyDistanceMedSkillFarAway = 88,
    CartographyDistanceMedSkillNearby = 89,
    CartographyDistanceMedSkillVeryClose = 90,
    CarvedUpCorpse = 91,
    CarveWithTool = 92,
    Carving = 93,
    CastYourLine = 94,
    Category = 95,
    CaughtFish = 96,
    ChatBanCommand = 97,
    ChatBannedCommand = 98,
    ChatCommandsCommand = 99,
    ChatPingCommand = 100,
    ChatPlayerMessage = 101,
    ChatPlayersCommand = 102,
    ChatServerMessage = 103,
    ChatUnbanCommand = 104,
    ChatUnknownCommand = 105,
    Chest = 106,
    ClearMessages = 107,
    Clockwise = 108,
    CloseContainer = 109,
    CloseDoor = 110,
    CloseToBeingDestroyed = 111,
    CollectObjectWithHands = 112,
    Consumed = 113,
    Container = 114,
    Cook = 115,
    Cooked = 116,
    CopySelectedText = 117,
    CorpseOf = 118,
    CorpseOfNamed = 119,
    CouldNotDecipher = 120,
    Counterclockwise = 121,
    Craft = 122,
    Crafted = 123,
    Crafts = 124,
    CreatureAngered = 125,
    CreatureAppears = 126,
    CreatureAppeased = 127,
    CreatureIdolAttractedCreature = 128,
    CreatureUntamed = 129,
    CuredYourPoison = 130,
    Cut = 131,
    DamageAppeared = 132,
    DamagedByPouring = 133,
    DayQuarter1 = 134,
    DayQuarter2 = 135,
    DayQuarter3 = 136,
    DayQuarter4 = 137,
    DealtNoDamageToYou = 138,
    DeathBy = 139,
    DeathByBleeding = 140,
    DeathByBurning = 141,
    DeathByChallengeWinner = 142,
    DeathByConsumption = 143,
    DeathByDrowning = 144,
    DeathByExhaustion = 145,
    DeathByFistByPlayer = 146,
    DeathByPoison = 147,
    DeathBySteppingOn = 148,
    DeathByTrap = 149,
    DeathByWeaponByPlayer = 150,
    Decay = 151,
    DestroyedFromUse = 152,
    Dexterity = 153,
    DexterityIncreasing = 154,
    DidNotSeemToBeHurting = 155,
    Dig = 156,
    DigAway = 157,
    Digging = 158,
    DigWithHands = 159,
    Disabled = 160,
    Disassemble = 161,
    DisassembleAction = 162,
    Disassembling = 163,
    DiscoveredCaveEntrance = 164,
    DiscoveredInTheBottle = 165,
    DiscoveredLavaPassage = 166,
    Dismantle = 167,
    DismantleAction = 168,
    DismantleLabel = 169,
    Dismantling = 170,
    DismantlingRequires = 171,
    DoNotHaveTreasureMaps = 172,
    DoNotProduceAnyResources = 173,
    DoodadAppearsDamaged = 174,
    DoodadAppearsOnVergeOfBreaking = 175,
    DoodadAppearsUnscathed = 176,
    DoodadCauseStatus = 177,
    DoodadShowsSignsOfWear = 178,
    DrewSurroundings = 179,
    Drink = 180,
    Drop = 181,
    DropAll = 182,
    DropAllOfSameQuality = 183,
    DroppedIntoDepths = 184,
    DroppedIntoFire = 185,
    DueToDehydration = 186,
    DueToStarvation = 187,
    DugTreasureOut = 188,
    DumpContentsOfContainerInInventory = 189,
    Durability = 190,
    DyingOfDehydration = 191,
    EarnedMilestone = 192,
    East = 193,
    EastNortheast = 194,
    EastSoutheast = 195,
    Effective = 196,
    Enabled = 197,
    EquipmentPreventedStatusEffects = 198,
    EquipTo = 199,
    ErrorHasOccured = 200,
    Expert = 201,
    ExtinguishedFire = 202,
    ExtinguishedTorch = 203,
    FailedToAddFuelToTorch = 204,
    FailedToCatchFish = 205,
    FailedToCauseDamage = 206,
    FailedToCauseYouDamage = 207,
    FailedToDrawMap = 208,
    FailedToIgniteTorch = 209,
    FailedToPickLock = 210,
    FailedToPlant = 211,
    FailedToPreserve = 212,
    FailedToReinforce = 213,
    FailedToRepair = 214,
    FailedToStartFire = 215,
    FailedToTame = 216,
    FailedToTransmogrify = 217,
    Feet = 218,
    FeltBurningPainLostHealth = 219,
    FewMinutes = 220,
    Filled = 221,
    FilledFrom = 222,
    Fire = 223,
    FireAlmostExtinguished = 224,
    FireAroundYouIsWarm = 225,
    FiredIntoObstacle = 226,
    FireIsHealthy = 227,
    FireIsRaging = 228,
    FireIsStruggling = 229,
    FireOverflowed = 230,
    FireReducedToEmbers = 231,
    FireSource = 232,
    FishingWithNoBait = 233,
    FullyDecodedMap = 234,
    GainedHealth = 235,
    GainedHunger = 236,
    GainedStamina = 237,
    GainedThirst = 238,
    GameHasBeenSavedIsTakingUpMB = 239,
    Gather = 240,
    GatherDestroy = 241,
    Gathering = 242,
    GatherWithHands = 243,
    GhostNoActions = 244,
    GhostOf = 245,
    GoatHasNoMilk = 246,
    GrabAll = 247,
    Group = 248,
    HackAway = 249,
    HandProtectionPreventedInjury = 250,
    Hands = 251,
    HandsNotEffectiveForDigging = 252,
    Harvest = 253,
    Harvesting = 254,
    HarvestWithHands = 255,
    HasBeenHurtByATrap = 256,
    HasDecayed = 257,
    HasHitYouForDamage = 258,
    HasNoEffect = 259,
    HasSetTrapOffNoDamage = 260,
    HasSplit = 261,
    Head = 262,
    Held = 263,
    Help = 264,
    HelpGrow = 265,
    Here = 266,
    Hints = 267,
    HintsDisabled = 268,
    HintsEnabled = 269,
    Hitch = 270,
    HitchAttempt = 271,
    HitchCreature = 272,
    HitchDisabled = 273,
    HitchInUse = 274,
    HitForDamage = 275,
    HitYouForDamage = 276,
    Hour = 277,
    Hours = 278,
    HurtHandsHittingWithoutWeapons = 279,
    HurtHandsWithNoTool = 280,
    Ignite = 281,
    IgnitedTorch = 282,
    Ineffective = 283,
    InjuredFromTrap = 284,
    InNeedOfRepair = 285,
    Intermediate = 286,
    Inventory = 287,
    IsInTheWayOfPickingUp = 288,
    It = 289,
    ItAlsoReveals = 290,
    ItAlsoSeems = 291,
    ItContains = 292,
    ItsWeightCapacity = 293,
    JoinedAServer = 294,
    Jump = 295,
    Killed = 296,
    KnowledgeHasIncreased = 297,
    LabelAdditionalRequirements = 298,
    LabelAttackFromTactics = 299,
    LabelBase = 300,
    LabelCanIncrease = 301,
    LabelCraftingReputation = 302,
    LabelCraftingSkillReputation = 303,
    LabelDecay = 304,
    LabelDefense = 305,
    LabelDurability = 306,
    LabelEquip = 307,
    LabelGrouping = 308,
    LabelHave = 309,
    LabelLeftHandAttack = 310,
    LabelLevel = 311,
    LabelLightSourceWhenLit = 312,
    LabelOnCure = 313,
    LabelOnDrink = 314,
    LabelOnEat = 315,
    LabelOnEquip = 316,
    LabelOnHeal = 317,
    LabelOnOtherHeal = 318,
    LabelProtected = 319,
    LabelRange = 320,
    LabelRanged = 321,
    LabelRangedAttack = 322,
    LabelRangedDamage = 323,
    LabelReputationImpact = 324,
    LabelRequires = 325,
    LabelResists = 326,
    LabelRightHandAttack = 327,
    LabelSkill = 328,
    LabelStokeFireStrength = 329,
    LabelThrowDamageType = 330,
    LabelTrapDamage = 331,
    LabelUse = 332,
    LabelUses = 333,
    LabelVulnerabilities = 334,
    LabelWeight = 335,
    LabelWeightCapacity = 336,
    LabelWeightReduction = 337,
    LabelWorth = 338,
    LastPlaceYouLeftOff = 339,
    LearnedHowToCreate = 340,
    LeftHand = 341,
    LeftHandEquip = 342,
    Legs = 343,
    LikelyFailures = 344,
    LostHealth = 345,
    LostHunger = 346,
    LostStamina = 347,
    LostThirst = 348,
    MapNotOfThisArea = 349,
    MaterialsDestroyed = 350,
    Metabolism = 351,
    MetabolismSlowed = 352,
    Milk = 353,
    Milking = 354,
    MissedWith = 355,
    MissedYouWith = 356,
    MoreInformation = 357,
    MoveAllOfSameQualityToFacingContainer = 358,
    MoveAllOfSameQualityToInventory = 359,
    MoveAllOfSameQualityToLastOpenedContainer = 360,
    MoveAllOfSameQualityToOpenedContainer = 361,
    MoveAllToFacingContainer = 362,
    MoveAllToInventory = 363,
    MoveAllToLastOpenedContainer = 364,
    MoveAllToOpenedContainer = 365,
    MovedItem = 366,
    MoveOverTrapButDoNotSetOff = 367,
    MoveToFacingContainer = 368,
    MoveToInventory = 369,
    MoveToLastOpenedContainer = 370,
    MoveToOpenedContainer = 371,
    MultiplayerGamePaused = 372,
    MultiplayerGameResumed = 373,
    MultiplayerPlayerConnected = 374,
    MultiplayerPlayerDied = 375,
    MultiplayerPlayerDisconnected = 376,
    MultiplayerPlayerJoined = 377,
    MustBeEquippedToIgnite = 378,
    MustCastIntoWater = 379,
    Mysteriously = 380,
    Name = 381,
    NearlyBurnedEquipmentProtectedYou = 382,
    Neck = 383,
    NeedAShovelToDigTreasure = 384,
    NeedFishingNetForTreasure = 385,
    NeedFreeHandToShoot = 386,
    NeedToEquipToShoot = 387,
    NeedToStartTravelsOutside = 388,
    NeedWaterForRaft = 389,
    Negatively = 390,
    NightQuarter1 = 391,
    NightQuarter2 = 392,
    NightQuarter3 = 393,
    NightQuarter4 = 394,
    NoAmmunitionForThatWeapon = 395,
    NoBlackPowderToFireWeapon = 396,
    NoFireToStokeWith = 397,
    NoFishAtLocation = 398,
    NoGroundWater = 399,
    NoInkToDrawMap = 400,
    NoKindlingOrFuelItemsToStartFire = 401,
    NoKindlingToStartFire = 402,
    NoLongerFeelPainOfBeingBurned = 403,
    NoLongerHostile = 404,
    NoMoreRoomInContainer = 405,
    NoNeedToStokeFire = 406,
    NoReturnWithoutCompletingChallenges = 407,
    NoRoomForImprovement = 408,
    NoRoomToDrop = 409,
    North = 410,
    Northeast = 411,
    NorthNortheast = 412,
    NorthNorthwest = 413,
    Northwest = 414,
    NotAvailable = 415,
    NotEnoughPurifiedWaterYet = 416,
    NotEnoughTreasureToReturn = 417,
    NotFacingCreatureToOfferThisTo = 418,
    NotFacingLockedObject = 419,
    NotFacingOtherToHeal = 420,
    NotFacingValidItem = 421,
    NothingHereToCarve = 422,
    NothingHereToFill = 423,
    NothingHereToGrasp = 424,
    NothingToGetFromThis = 425,
    NothingToHarvestFromThisGather = 426,
    NothingToSmother = 427,
    NothingUsefulToHarvestYet = 428,
    NoTinderToStartFire = 429,
    NotInRangeOfTreasure = 430,
    NotSuitableToPlant = 431,
    NoWaterInStill = 432,
    NPCStartingDialog1 = 433,
    NPCStartingDialog2 = 434,
    NPCStartingDialog3 = 435,
    NPCStartingDialog4 = 436,
    NPCWelcome = 437,
    NPCWelcomeCredit = 438,
    NumberEight = 439,
    NumberFive = 440,
    NumberFour = 441,
    NumberNine = 442,
    NumberOne = 443,
    NumberSeven = 444,
    NumberSix = 445,
    NumberTen = 446,
    NumberThree = 447,
    NumberTwo = 448,
    ObjectIsLocked = 449,
    ObjectIsLockedAttemptToBreakIt = 450,
    Offer = 451,
    OfferAberrantFail = 452,
    OfferAberrantFailButTamed = 453,
    OpenDoor = 454,
    OverEatingLostStamina = 455,
    OverHydratingLostStamina = 456,
    Pack = 457,
    PaperTurnedToMush = 458,
    PartiallyDecodedMap = 459,
    PastExperiencesProvideBenefits = 460,
    PenultimateAnd = 461,
    PetCreature = 462,
    PickAway = 463,
    PickupAllItems = 464,
    PickupItem = 465,
    Piercing = 466,
    Place = 467,
    PlacedOnGround = 468,
    Plant = 469,
    PlantCouldBeHarvested = 470,
    PlantedInGround = 471,
    PlantGatheringWillDestroy = 472,
    PlantHasResourcesToGather = 473,
    PlantHasResourcesToHarvest = 474,
    PlantHighlyFertile = 475,
    Planting = 476,
    PlantIsDead = 477,
    PlantIsFertile = 478,
    PlantIsInStage = 479,
    PlantIsNotFertile = 480,
    PlantNotReadyToHarvest = 481,
    PlantReadyToGather = 482,
    PlantReadyToGatherNotMaximal = 483,
    PlantReadyToHarvest = 484,
    PlantReadyToHarvestNotMaximal = 485,
    Player = 486,
    PlayerHasCompletedChallengeRequirement = 487,
    PlayerHasWonChallenge = 488,
    Poisoned = 489,
    PoisonedLostHealth = 490,
    PoisonWorkedItsCourse = 491,
    Positively = 492,
    PouredOut = 493,
    PouredOutOnYourself = 494,
    PouredWaterIntoStill = 495,
    PourHarmedPlant = 496,
    PourHealedPlant = 497,
    PourHealedPlantFully = 498,
    PourHealedPlantPartially = 499,
    PourIncreasedFertility = 500,
    Preservation = 501,
    Preserve = 502,
    PreservedFood = 503,
    PurifiedWaterInStill = 504,
    Quality = 505,
    Recent = 506,
    ReduceLength = 507,
    RefusedToBeTamed = 508,
    Reinforce = 509,
    Reinforcement = 510,
    Release = 511,
    RemovedBlood = 512,
    RemoveFromQuickslot = 513,
    Repair = 514,
    RequiredForDisassembleLabel = 515,
    RequiredForDisassembly = 516,
    RequiresFireToBeLit = 517,
    RequiresYouFacingFireSource = 518,
    RequiresYouToBeAround = 519,
    Resistant = 520,
    ResistOrVuln = 521,
    ResistOrVulnAll = 522,
    Rest = 523,
    Rested = 524,
    Resting = 525,
    RestingOnGroundNotEffective = 526,
    RestInterrupted = 527,
    RestInterruptedDamage = 528,
    RestInterruptedLoudNoise = 529,
    RestInterruptedPain = 530,
    RestInterruptedStirring = 531,
    RestLongTime = 532,
    RestModerateTime = 533,
    RestOnGround = 534,
    RestShortTime = 535,
    RestTime = 536,
    ReturnedToCivilization = 537,
    ReturningToCivilizationSetOffAgain = 538,
    ReturnsToLife = 539,
    Reveals = 540,
    RevealsEntityAppearsHurt = 541,
    RevealsEntityAppearsUnharmed = 542,
    RevealsEntityAppearsVeryHurt = 543,
    RevealsEntityIsAtPercentHealth = 544,
    RevealsEntityIsInjured = 545,
    RevealsEntityIsMostlyUninjured = 546,
    RevealsEntityIsOnTheVergeOfDeath = 547,
    RevealsEntityIsSeverelyInjured = 548,
    RevealsEntitySeemsInjured = 549,
    RevealsEntitySeemsUninjured = 550,
    RevealsNumberOfResistancesAndVulnerabilities = 551,
    RevealsResistancesAndVulnerabilities = 552,
    RevealsSomeResistancesAndVulnerabilities = 553,
    RightHand = 554,
    RightHandEquip = 555,
    ScrollMaster = 556,
    ScrollProvidedNoUsefulInsight = 557,
    SeaweedFromWater = 558,
    SeemsToHaveDrawnEnergy = 559,
    SetTrapOffButNoDamage = 560,
    SetUp = 561,
    ShadowInTheWater = 562,
    Simple = 563,
    Skill = 564,
    SkillHasRaised = 565,
    Skills = 566,
    Slashing = 567,
    Sleep = 568,
    Sleeping = 569,
    Slept = 570,
    SlitherSuckerConstricts = 571,
    SlitherSuckerJumpedOnHead = 572,
    Some = 573,
    SomethingInTheWayOf = 574,
    SomethingInTheWayOfCarveFirst = 575,
    SomethingInTheWayOfFire = 576,
    SomethingInTheWayOfFishing = 577,
    SomethingInTheWayOfPerforming = 578,
    SomethingInTheWayOfPlacing = 579,
    SomethingInTheWayOfPlanting = 580,
    SomethingInWayOfClosingDoor = 581,
    SoothedTheirBurnInjuries = 582,
    SoothedYourBurnInjuries = 583,
    Sort = 584,
    SortedByBest = 585,
    SortedByCategory = 586,
    SortedByDecay = 587,
    SortedByDurability = 588,
    SortedByGroup = 589,
    SortedByName = 590,
    SortedByQuality = 591,
    SortedByRecent = 592,
    SortedBySkill = 593,
    SortedByUnlockedTime = 594,
    SortedByWeight = 595,
    South = 596,
    Southeast = 597,
    SouthSoutheast = 598,
    SouthSouthwest = 599,
    Southwest = 600,
    StaminaIsFull = 601,
    StartedFire = 602,
    StartTravelInWater = 603,
    StarvingToDeath = 604,
    SteppingOnHasInjuredYouForDamage = 605,
    StillHasNoWaterToPurify = 606,
    StirredUpClawWorm = 607,
    StirredUpCreature = 608,
    StoppedYourBleeding = 609,
    StopUsingRaft = 610,
    Strength = 611,
    StrengthIncreasing = 612,
    SummonedGuardiansByDiggingTreasure = 613,
    SunNotBrightEnoughToStartFire = 614,
    TakenFromGroundBecomeTamed = 615,
    Tame = 616,
    TamedAppearsAngered = 617,
    TamedAppearsContended = 618,
    TamedAppearsHappy = 619,
    TamedAppearsUpset = 620,
    TamedCreature = 621,
    TeleportBlocked = 622,
    Teleported = 623,
    ThanksBuying = 624,
    ThanksSelling = 625,
    The = 626,
    TheCreature = 627,
    TheirFist = 628,
    ThePlant = 629,
    ThereIsNoSunToStartFire = 630,
    ThereIsNothingToMilk = 631,
    ThisCannotBeMilked = 632,
    Throw = 633,
    ThrownIntoDepths = 634,
    ThrownIntoObstacle = 635,
    Till = 636,
    Tilling = 637,
    TimeIs = 638,
    TimeIsDawn = 639,
    TimeIsDaytime = 640,
    TimeIsDusk = 641,
    TimeIsNighttime = 642,
    TimeIsSunrise = 643,
    TimeIsSunset = 644,
    ToDamageAChest = 645,
    ToFight = 646,
    TooDamaged = 647,
    TooExhaustedToJump = 648,
    TradeBarterCreditForItem = 649,
    TradeItemForBarterCredit = 650,
    TradingWith = 651,
    TrampledFire = 652,
    TrampledIntoGround = 653,
    TrampleIntoGround = 654,
    Trampling = 655,
    Transmogrification = 656,
    Transmogrified = 657,
    TrapMissed = 658,
    TrapStoppedYou = 659,
    TravelToFarOffLands = 660,
    TreasureIsBlocked = 661,
    True = 662,
    UnEquip = 663,
    UnEquipAll = 664,
    Unhitch = 665,
    UnhitchCreature = 666,
    Unknown = 667,
    UnknownItem = 668,
    UnlockedChest = 669,
    UnlockedTime = 670,
    UnpurifiedFreshWater = 671,
    UnpurifiedWaterInStill = 672,
    UsingBareHands = 673,
    Vulnerable = 674,
    WaitUntilFireCooledToGetWater = 675,
    Water = 676,
    WaterGathering = 677,
    WaterPutOutFire = 678,
    Weight = 679,
    WeightCapacity = 680,
    WellIsDry = 681,
    WellIsFull = 682,
    West = 683,
    WestNorthwest = 684,
    WestSouthwest = 685,
    WildGoatRefusedToBeMilked = 686,
    WillNotTrade = 687,
    With = 688,
    WithYouSee = 689,
    WorkingYourselfIntoExhaustion = 690,
    WorkingYourselfIntoExhaustionAndDrowning = 691,
    YouApplied = 692,
    YouAte = 693,
    YouBeginResting = 694,
    YouCannotDoThatYet = 695,
    YouCooledLava = 696,
    YouCrafted = 697,
    YouDied = 698,
    YouDisassembled = 699,
    YouDismantled = 700,
    YouDrank = 701,
    YouDropTheTorch = 702,
    YouEquip = 703,
    YouFailedTo = 704,
    YouFailedToExtinguishedFireFully = 705,
    YouFailedToHeal = 706,
    YouFailedToHealOther = 707,
    YouFire = 708,
    YouGathered = 709,
    YouGatheredAndDropped = 710,
    YouHardenedCooledLava = 711,
    YouHarvested = 712,
    YouHarvestedAndDropped = 713,
    YouHaveAlreadyLearned = 714,
    YouHaveDied = 715,
    YouHaveEnabledDisabled = 716,
    YouHaveHealedOther = 717,
    YouHaveKilled = 718,
    YouHaveReleased = 719,
    YouHaveTamed = 720,
    YouNeedMoreCredit = 721,
    YouNoticeBecomeEnraged = 722,
    YouNoticeDying = 723,
    YouNoticeFertilityDecreasing = 724,
    YouNoticeFertilityIncreasing = 725,
    YouNoticeGrowing = 726,
    YouNoticeLavaCooling = 727,
    YouNoticeLavaHardening = 728,
    YouNoticePerish = 729,
    YouNoticeStumbleInjureItself = 730,
    YouNoticeTakeFromGround = 731,
    YouNoticeWoundsClosing = 732,
    YouNoticeZombieHorde = 733,
    YouOfferedToCreature = 734,
    YouOpen = 735,
    YouPacked = 736,
    YouPickedUp = 737,
    YouRepair = 738,
    YourFist = 739,
    YourHands = 740,
    YourHighSkill = 741,
    YourInventory = 742,
    YourLowSkill = 743,
    YourModerateSkill = 744,
    YourRubbingNoEffect = 745,
    YouRub = 746,
    YouSalvaged = 747,
    YouSee = 748,
    YouSeeAnAberrant = 749,
    YouSeeDrop = 750,
    YouSeeEngulfFire = 751,
    YouSeeHelpingPlant = 752,
    YouSeeLay = 753,
    YouSeeLayingTrap = 754,
    YouSeeSpewLava = 755,
    YouSeeSpitAcid = 756,
    YouSeeSpringForth = 757,
    YouSeeSummon = 758,
    YouSeeSwampFlood = 759,
    YouSeeTrampling = 760,
    YouSeparate = 761,
    YouSetTheTrapOff = 762,
    YouThrew = 763,
    YouTilled = 764,
    YouUnequip = 765,
    YouUsed = 766
}
export default Message;
