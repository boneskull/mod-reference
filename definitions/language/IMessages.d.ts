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
export interface IMessagePack {
    message?: Message | string;
    type?: MessageType;
    args?: string | number | any[];
}
export declare module IMessagePack {
    function getArgs(messagePack: IMessagePack): any[];
}
export declare enum MessageType {
    None = 0,
    Bad = 1,
    Good = 2,
    Miss = 3,
    Attack = 4,
    Stat = 5,
    Skill = 6
}
export declare enum Message {
    None = 0,
    AboutHours = 1,
    AddedFuelToFire = 2,
    AddedFuelToTorch = 3,
    AddFuel = 4,
    AddToQuickslot = 5,
    Advanced = 6,
    All = 7,
    AllEquipmentUnEquipped = 8,
    AlreadyDesalinatedWaterInStill = 9,
    AlreadyFullyRepaired = 10,
    AlreadyPreserved = 11,
    AlreadyWaterInStill = 12,
    AnUnknownItem = 13,
    AppearedNotEffectiveForGathering = 14,
    AppearsInjured = 15,
    AppearsToBeAberrant = 16,
    AppearsUninjured = 17,
    ArmorAppeared = 18,
    ArmorProtectedFromInjuryAgainst = 19,
    Attack = 20,
    AttemptedToDropAllIntoFire = 21,
    AttemptedToPlaceAllOnGround = 22,
    AttemptToTill = 23,
    Back = 24,
    BadlyBurnedLostHealth = 25,
    BarteringSkillsProvided = 26,
    BeenPoisoned = 27,
    BeginSleeping = 28,
    BeginUsingRaft = 29,
    Belt = 30,
    BleedingHasStopped = 31,
    BleedingProfusely = 32,
    BleedingToDeathLostHealth = 33,
    Blunt = 34,
    BookBlank = 35,
    BookContains = 36,
    BookCrumbles = 37,
    BookDiagrams = 38,
    BookEmpty = 39,
    BookNothing = 40,
    BookOpen = 41,
    BookScribbles = 42,
    BothEffectiveIneffective = 43,
    BothHands = 44,
    BrokeIntoPieces = 45,
    BrokenOnImpact = 46,
    BrokenWhileFiring = 47,
    Build = 48,
    Burned = 49,
    CannotAddAnyMoreFuel = 50,
    CannotBePerformedOverWater = 51,
    CannotBePreserved = 52,
    CannotBeReinforced = 53,
    CannotBeRepaired = 54,
    CannotBeTamed = 55,
    CannotBuildHere = 56,
    CannotDoThatHere = 57,
    CannotDropHere = 58,
    CannotEquipThatThere = 59,
    CannotFishFor = 60,
    CannotHere = 61,
    CannotInWater = 62,
    CannotLeave = 63,
    CannotPickupWhenFull = 64,
    CannotPickUpWhileLit = 65,
    CannotPickUpWithItemsInside = 66,
    CannotPlaceContainerInItself = 67,
    CannotPlaceHere = 68,
    CannotPlaceThatFromHere = 69,
    CannotPlaceThatHere = 70,
    CannotPlantHereTilled = 71,
    CannotRepairWhileLit = 72,
    CannotRestHere = 73,
    CannotSeeHere = 74,
    CannotSleepHere = 75,
    CannotStartFireHere = 76,
    CannotToTellTime = 77,
    CarryingTooMuchWeight = 78,
    CarvedUpCorpse = 79,
    CarveWithTool = 80,
    Carving = 81,
    CastYourLine = 82,
    Category = 83,
    CaughtFish = 84,
    ChatBanCommand = 85,
    ChatBannedCommand = 86,
    ChatCommandsCommand = 87,
    ChatPingCommand = 88,
    ChatPlayerMessage = 89,
    ChatPlayersCommand = 90,
    ChatServerMessage = 91,
    ChatUnbanCommand = 92,
    ChatUnknownCommand = 93,
    Chest = 94,
    ClearMessages = 95,
    Clockwise = 96,
    CloseContainer = 97,
    CloseDoor = 98,
    CollectObjectWithHands = 99,
    Consumed = 100,
    Container = 101,
    Cook = 102,
    Cooked = 103,
    CopySelectedText = 104,
    Corpse = 105,
    CorpseOf = 106,
    CouldNotDecipher = 107,
    Counterclockwise = 108,
    Craft = 109,
    Crafted = 110,
    Crafts = 111,
    CreatureAngered = 112,
    CreatureAppears = 113,
    CreatureAppeased = 114,
    CreatureIdolAttractedCreature = 115,
    CreatureResistanceVulnerableHigh = 116,
    CreatureResistanceVulnerableLow = 117,
    CreatureResistanceVulnerableModerate = 118,
    CreatureUntamed = 119,
    CuredYourPoison = 120,
    Cut = 121,
    DamageAppeared = 122,
    DamagedByPouring = 123,
    DayQuarter1 = 124,
    DayQuarter2 = 125,
    DayQuarter3 = 126,
    DayQuarter4 = 127,
    DealtNoDamageToYou = 128,
    DeathBy = 129,
    DeathByBleeding = 130,
    DeathByBurning = 131,
    DeathByConsumption = 132,
    DeathByDrowning = 133,
    DeathByExhaustion = 134,
    DeathByFistByPlayer = 135,
    DeathByPoison = 136,
    DeathBySteppingOn = 137,
    DeathByTrap = 138,
    DeathByWeaponByPlayer = 139,
    Decay = 140,
    DestroyedFromUse = 141,
    Dexterity = 142,
    DexterityIncreasing = 143,
    DidNotSeemToBeHurting = 144,
    Dig = 145,
    DigAway = 146,
    Digging = 147,
    DigWithHands = 148,
    Disabled = 149,
    Disassemble = 150,
    DisassembleAction = 151,
    Disassembling = 152,
    DiscoveredCaveEntrance = 153,
    DiscoveredInTheBottle = 154,
    DiscoveredLavaPassage = 155,
    Dismantle = 156,
    DismantleAction = 157,
    DismantleLabel = 158,
    Dismantling = 159,
    DismantlingRequires = 160,
    DoNotHaveTreasureMaps = 161,
    DoNotProduceAnyResources = 162,
    DoodadAppearsDamaged = 163,
    DoodadAppearsOnVergeOfBreaking = 164,
    DoodadAppearsUnscathed = 165,
    DoodadCauseStatus = 166,
    DoodadShowsSignsOfWear = 167,
    DrewSurroundings = 168,
    Drink = 169,
    Drop = 170,
    DropAll = 171,
    DropAllIntoFire = 172,
    DropAllOfSameQuality = 173,
    DroppedAllIntoDepths = 174,
    DroppedIntoDepths = 175,
    DroppedIntoFire = 176,
    DueToDehydration = 177,
    DueToStarvation = 178,
    DugTreasureOut = 179,
    DumpContentsOfContainerInInventory = 180,
    Durability = 181,
    DyingOfDehydration = 182,
    EarnedMilestone = 183,
    Effective = 184,
    Enabled = 185,
    EquipmentPreventedStatusEffects = 186,
    EquipTo = 187,
    ErrorHasOccured = 188,
    Expert = 189,
    ExtinguishedFire = 190,
    ExtinguishedTorch = 191,
    FailedToAddFuelToTorch = 192,
    FailedToCatchFish = 193,
    FailedToCauseDamage = 194,
    FailedToCauseYouDamage = 195,
    FailedToDrawMap = 196,
    FailedToIgniteTorch = 197,
    FailedToPickLock = 198,
    FailedToPlant = 199,
    FailedToPreserve = 200,
    FailedToReinforce = 201,
    FailedToRepair = 202,
    FailedToStartFire = 203,
    FailedToTame = 204,
    FailedToTransmogrify = 205,
    FarAwayFromTreasure = 206,
    Feet = 207,
    FeltBurningPainLostHealth = 208,
    FewMinutes = 209,
    Filled = 210,
    FilledFrom = 211,
    Fire = 212,
    FireAlmostExtinguished = 213,
    FireAroundYouIsWarm = 214,
    FiredIntoObstacle = 215,
    FireIsHealthy = 216,
    FireIsRaging = 217,
    FireIsStruggling = 218,
    FireOverflowed = 219,
    FireReducedToEmbers = 220,
    FireSource = 221,
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
    HitForDamage = 257,
    HitYouForDamage = 258,
    Hour = 259,
    Hours = 260,
    HurtHandsHittingWithoutWeapons = 261,
    HurtHandsWithNoTool = 262,
    Ignite = 263,
    IgnitedTorch = 264,
    Ineffective = 265,
    InExactLocationOfTreasure = 266,
    InjuredFromTrap = 267,
    InNeedOfRepair = 268,
    Intermediate = 269,
    Inventory = 270,
    IsAtPercentHealth = 271,
    IsBarelyHurt = 272,
    IsInjured = 273,
    IsInTheWayOfPickingUp = 274,
    IsSeverelyDamaged = 275,
    IsUninjured = 276,
    ItContains = 277,
    ItsWeightCapacity = 278,
    JoinedAServer = 279,
    Jump = 280,
    Killed = 281,
    KnowledgeHasIncreased = 282,
    LabelAdditionalRequirements = 283,
    LabelAttackFromTactics = 284,
    LabelBase = 285,
    LabelCanIncrease = 286,
    LabelCraftingReputation = 287,
    LabelCraftingSkillReputation = 288,
    LabelDecay = 289,
    LabelDefense = 290,
    LabelDurability = 291,
    LabelEquip = 292,
    LabelGrouping = 293,
    LabelHave = 294,
    LabelLeftHandAttack = 295,
    LabelLevel = 296,
    LabelLightSourceWhenLit = 297,
    LabelOnCure = 298,
    LabelOnDrink = 299,
    LabelOnEat = 300,
    LabelOnEquip = 301,
    LabelOnHeal = 302,
    LabelOnOtherHeal = 303,
    LabelProtected = 304,
    LabelRange = 305,
    LabelRanged = 306,
    LabelRangedAttack = 307,
    LabelRangedDamage = 308,
    LabelReputationImpact = 309,
    LabelRequires = 310,
    LabelResists = 311,
    LabelRightHandAttack = 312,
    LabelSkill = 313,
    LabelStokeFireStrength = 314,
    LabelThrowDamageType = 315,
    LabelTrapDamage = 316,
    LabelUse = 317,
    LabelUses = 318,
    LabelVulnerabilities = 319,
    LabelWeight = 320,
    LabelWeightCapacity = 321,
    LabelWeightReduction = 322,
    LabelWorth = 323,
    LastPlaceYouLeftOff = 324,
    LearnedHowToCreate = 325,
    LeftHand = 326,
    LeftHandEquip = 327,
    Legs = 328,
    LikelyFailures = 329,
    LostHealth = 330,
    LostHunger = 331,
    LostStamina = 332,
    LostThirst = 333,
    MapNotOfThisArea = 334,
    MaterialsDestroyed = 335,
    Metabolism = 336,
    MetabolismSlowed = 337,
    MilestoneIsHidden = 338,
    MilestoneIsInvisible = 339,
    Milk = 340,
    Milking = 341,
    MissedWith = 342,
    MissedYouWith = 343,
    MoreInformation = 344,
    MoveAllOfSameQualityToFacingContainer = 345,
    MoveAllOfSameQualityToInventory = 346,
    MoveAllOfSameQualityToLastOpenedContainer = 347,
    MoveAllOfSameQualityToOpenedContainer = 348,
    MoveAllToFacingContainer = 349,
    MoveAllToInventory = 350,
    MoveAllToLastOpenedContainer = 351,
    MoveAllToOpenedContainer = 352,
    MovedItem = 353,
    MovedItems = 354,
    MoveOverTrapButDoNotSetOff = 355,
    MoveToFacingContainer = 356,
    MoveToInventory = 357,
    MoveToLastOpenedContainer = 358,
    MoveToOpenedContainer = 359,
    MultiplayerGamePaused = 360,
    MultiplayerGameResumed = 361,
    MultiplayerPlayerConnected = 362,
    MultiplayerPlayerDied = 363,
    MultiplayerPlayerDisconnected = 364,
    MultiplayerPlayerJoined = 365,
    MustBeEquippedToIgnite = 366,
    MustCastIntoWater = 367,
    Mysteriously = 368,
    Name = 369,
    NearlyBurnedEquipmentProtectedYou = 370,
    Neck = 371,
    NeedAShovelToDigTreasure = 372,
    NeedFishingNetForTreasure = 373,
    NeedFreeHandToShoot = 374,
    NeedToEquipToShoot = 375,
    NeedToStartTravelsOutside = 376,
    NeedWaterForRaft = 377,
    Negatively = 378,
    NightQuarter1 = 379,
    NightQuarter2 = 380,
    NightQuarter3 = 381,
    NightQuarter4 = 382,
    No = 383,
    NoAmmunitionForThatWeapon = 384,
    NoBlackPowderToFireWeapon = 385,
    NoFireToStokeWith = 386,
    NoFishAtLocation = 387,
    NoInkToDrawMap = 388,
    NoKindlingOrFuelItemsToStartFire = 389,
    NoKindlingToStartFire = 390,
    NoLongerFeelPainOfBeingBurned = 391,
    NoMoreRoomInContainer = 392,
    NoNeedToStokeFire = 393,
    NoRoomForImprovement = 394,
    NoRoomToDrop = 395,
    NotAvailable = 396,
    NotEnoughPurifiedWaterYet = 397,
    NotEnoughTreasureToReturn = 398,
    NotFacingCreatureToOfferThisTo = 399,
    NotFacingLockedObject = 400,
    NotFacingOtherToHeal = 401,
    NotFacingValidItem = 402,
    NothingHereToCarve = 403,
    NothingHereToFill = 404,
    NothingHereToGrasp = 405,
    NothingToGetFromThis = 406,
    NothingToHarvestFromThisGather = 407,
    NothingToSmother = 408,
    NothingUsefulToHarvestYet = 409,
    NoTinderToStartFire = 410,
    NotInRangeOfTreasure = 411,
    NotSuitableToPlant = 412,
    NoWaterInStill = 413,
    NoWhereNearTreasure = 414,
    NPCStartingDialog1 = 415,
    NPCStartingDialog2 = 416,
    NPCStartingDialog3 = 417,
    NPCStartingDialog4 = 418,
    NPCWelcome = 419,
    NPCWelcomeCredit = 420,
    NumberEight = 421,
    NumberFive = 422,
    NumberFour = 423,
    NumberNine = 424,
    NumberOne = 425,
    NumberSeven = 426,
    NumberSix = 427,
    NumberTen = 428,
    NumberThree = 429,
    NumberTwo = 430,
    ObjectIsLocked = 431,
    ObjectIsLockedAttemptToBreakIt = 432,
    Offer = 433,
    OfferAberrantFail = 434,
    OfferAberrantFailButTamed = 435,
    OpenDoor = 436,
    OverEatingLostStamina = 437,
    OverHydratingLostStamina = 438,
    Pack = 439,
    PaperTurnedToMush = 440,
    PartiallyDecodedMap = 441,
    PastExperiencesProvideBenefits = 442,
    PenultimateAnd = 443,
    PetCreature = 444,
    PickAway = 445,
    PickupAllItems = 446,
    PickupItem = 447,
    Piercing = 448,
    Place = 449,
    PlaceAllOnGround = 450,
    PlacedOnGround = 451,
    Plant = 452,
    PlantedInGround = 453,
    PlantGatheringWillDestroy = 454,
    PlantHasResourcesToGather = 455,
    PlantHasResourcesToHarvest = 456,
    PlantHighlyFertile = 457,
    Planting = 458,
    PlantIsFertile = 459,
    PlantIsNotFertile = 460,
    PlantNotReadyToHarvest = 461,
    PlantReadyToHarvest = 462,
    PlantReadyToHarvestNotMaximal = 463,
    Player = 464,
    Poisoned = 465,
    PoisonedLostHealth = 466,
    PoisonWorkedItsCourse = 467,
    Positively = 468,
    PouredOut = 469,
    PouredOutOnYourself = 470,
    PouredWaterIntoStill = 471,
    Preservation = 472,
    Preserve = 473,
    PreservedFood = 474,
    PurifiedWaterInStill = 475,
    Quality = 476,
    Recent = 477,
    ReduceLength = 478,
    RefusedToBeTamed = 479,
    Reinforce = 480,
    Reinforcement = 481,
    Release = 482,
    RemovedBlood = 483,
    RemoveFromQuickslot = 484,
    Repair = 485,
    RequiredForDisassembleLabel = 486,
    RequiredForDisassembly = 487,
    RequiresFireToBeLit = 488,
    RequiresYouFacingFireSource = 489,
    RequiresYouToBeAround = 490,
    Resistant = 491,
    Rest = 492,
    Rested = 493,
    Resting = 494,
    RestingOnGroundNotEffective = 495,
    RestInterrupted = 496,
    RestInterruptedDamage = 497,
    RestInterruptedLoudNoise = 498,
    RestInterruptedPain = 499,
    RestInterruptedStirring = 500,
    RestLongTime = 501,
    RestModerateTime = 502,
    RestOnGround = 503,
    RestShortTime = 504,
    RestTime = 505,
    ReturnedToCivilization = 506,
    ReturningToCivilizationSetOffAgain = 507,
    ReturnsToLife = 508,
    RightHand = 509,
    RightHandEquip = 510,
    ScrollProvidedNoUsefulInsight = 511,
    SeaweedFromWater = 512,
    SeemsHurt = 513,
    SeemsQuiteInjured = 514,
    SeemsToHaveDrawnEnergy = 515,
    SeemsUnharmed = 516,
    SetTrapOffButNoDamage = 517,
    SetUp = 518,
    ShadowInTheWater = 519,
    Simple = 520,
    Skill = 521,
    SkillHasRaised = 522,
    Skills = 523,
    Slashing = 524,
    Sleep = 525,
    Sleeping = 526,
    Slept = 527,
    SlitherSuckerConstricts = 528,
    SlitherSuckerJumpedOnHead = 529,
    Some = 530,
    SomethingInTheWayOf = 531,
    SomethingInTheWayOfCarveFirst = 532,
    SomethingInTheWayOfFire = 533,
    SomethingInTheWayOfFishing = 534,
    SomethingInTheWayOfPerforming = 535,
    SomethingInTheWayOfPlacing = 536,
    SomethingInTheWayOfPlanting = 537,
    SomethingInWayOfClosingDoor = 538,
    SoothedYourBurnInjuries = 539,
    Sort = 540,
    SortedByCategory = 541,
    SortedByDecay = 542,
    SortedByDurability = 543,
    SortedByGroup = 544,
    SortedByName = 545,
    SortedByQuality = 546,
    SortedByRecent = 547,
    SortedBySkill = 548,
    SortedByUnlockedTime = 549,
    SortedByWeight = 550,
    StaminaIsFull = 551,
    StartedFire = 552,
    StartTravelInWater = 553,
    StarvingToDeath = 554,
    SteppingOnHasInjuredYouForDamage = 555,
    StillHasNoWaterToPurify = 556,
    StirredUpClawWorm = 557,
    StirredUpCreature = 558,
    StoppedYourBleeding = 559,
    StopUsingRaft = 560,
    Strength = 561,
    StrengthIncreasing = 562,
    SummonedGuardiansByDiggingTreasure = 563,
    SunNotBrightEnoughToStartFire = 564,
    TakenFromGroundBecomeTamed = 565,
    Tame = 566,
    TamedAppearsAngered = 567,
    TamedAppearsContended = 568,
    TamedAppearsHappy = 569,
    TamedAppearsUpset = 570,
    TamedCreature = 571,
    TeleportBlocked = 572,
    Teleported = 573,
    ThanksBuying = 574,
    ThanksSelling = 575,
    TheirFist = 576,
    ThereIsNoSunToStartFire = 577,
    ThereIsNothingToMilk = 578,
    ThisCannotBeMilked = 579,
    Throw = 580,
    ThrownIntoDepths = 581,
    ThrownIntoObstacle = 582,
    Till = 583,
    Tilling = 584,
    TimeIs = 585,
    TimeIsDawn = 586,
    TimeIsDaytime = 587,
    TimeIsDusk = 588,
    TimeIsNighttime = 589,
    TimeIsSunrise = 590,
    TimeIsSunset = 591,
    ToDamageAChest = 592,
    ToFight = 593,
    TooDamaged = 594,
    TooExhaustedToJump = 595,
    TradeBarterCreditForItem = 596,
    TradeItemForBarterCredit = 597,
    TradingWith = 598,
    TrampledFire = 599,
    TrampledIntoGround = 600,
    TrampleIntoGround = 601,
    Trampling = 602,
    Transmogrification = 603,
    Transmogrified = 604,
    TrapStoppedYou = 605,
    TravelToFarOffLands = 606,
    TreasureIsBlocked = 607,
    True = 608,
    UnEquip = 609,
    UnEquipAll = 610,
    Unknown = 611,
    UnknownItem = 612,
    UnlockedChest = 613,
    UnlockedTime = 614,
    UnpurifiedWaterInStill = 615,
    UsingBareHands = 616,
    Vulnerable = 617,
    WaitUntilFireCooledToGetWater = 618,
    WalkingDistanceOfTreasure = 619,
    Water = 620,
    WaterGathering = 621,
    WaterPutOutFire = 622,
    Weight = 623,
    WeightCapacity = 624,
    WildGoatRefusedToBeMilked = 625,
    With = 626,
    WorkingYourselfIntoExhaustion = 627,
    WorkingYourselfIntoExhaustionAndDrowning = 628,
    YouAte = 629,
    YouBeginResting = 630,
    YouCannotDoThatYet = 631,
    YouCooledLava = 632,
    YouCrafted = 633,
    YouDied = 634,
    YouDisassembled = 635,
    YouDismantled = 636,
    YouDrank = 637,
    YouEquip = 638,
    YouFailedTo = 639,
    YouFailedToExtinguishedFireFully = 640,
    YouFailedToHeal = 641,
    YouFailedToHealOther = 642,
    YouFire = 643,
    YouGathered = 644,
    YouGatheredAndDropped = 645,
    YouHardenedCooledLava = 646,
    YouHarvested = 647,
    YouHarvestedAndDropped = 648,
    YouHaveDied = 649,
    YouHaveEnabledDisabled = 650,
    YouHaveHealedOther = 651,
    YouHaveKilled = 652,
    YouHaveReleased = 653,
    YouHaveTamed = 654,
    YouNeedMoreCredit = 655,
    YouNoticeBecomeEnraged = 656,
    YouNoticeDying = 657,
    YouNoticeFertilityDecreasing = 658,
    YouNoticeFertilityIncreasing = 659,
    YouNoticeGrowing = 660,
    YouNoticeLavaCooling = 661,
    YouNoticeLavaHardening = 662,
    YouNoticePerish = 663,
    YouNoticeStumbleInjureItself = 664,
    YouNoticeTakeFromGround = 665,
    YouNoticeWoundsClosing = 666,
    YouNoticeZombieHorde = 667,
    YouOfferedToCreature = 668,
    YouOpen = 669,
    YouPacked = 670,
    YouPickedUp = 671,
    YouRepair = 672,
    YourFist = 673,
    YourHands = 674,
    YourInventory = 675,
    YourRubbingNoEffect = 676,
    YouRub = 677,
    YouSalvaged = 678,
    YouSee = 679,
    YouSeeAnAberrant = 680,
    YouSeeDrop = 681,
    YouSeeEngulfFire = 682,
    YouSeeLay = 683,
    YouSeeLayingTrap = 684,
    YouSeeSpewLava = 685,
    YouSeeSpitAcid = 686,
    YouSeeSpringForth = 687,
    YouSeeSummon = 688,
    YouSeeSwampFlood = 689,
    YouSeparate = 690,
    YouSetTheTrapOff = 691,
    YouThrew = 692,
    YouTilled = 693,
    YouUnequip = 694,
    YouUsed = 695
}
