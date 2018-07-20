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
    AlreadyFullHealth = 10,
    AlreadyFullyRepaired = 11,
    AlreadyPreserved = 12,
    AlreadyWaterInStill = 13,
    AnUnknownItem = 14,
    AppearedNotEffectiveForGathering = 15,
    AppearsInjured = 16,
    AppearsToBeAberrant = 17,
    AppearsUninjured = 18,
    ArmorAppeared = 19,
    ArmorProtectedFromInjuryAgainst = 20,
    Attack = 21,
    AttemptedToDropAllIntoFire = 22,
    AttemptedToPlaceAllOnGround = 23,
    AttemptToTill = 24,
    Back = 25,
    BadlyBurnedLostHealth = 26,
    BarteringSkillsProvided = 27,
    BeenPoisoned = 28,
    BeginSleeping = 29,
    BeginUsingRaft = 30,
    Belt = 31,
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
    CollectObjectWithHands = 100,
    Consumed = 101,
    Container = 102,
    Cook = 103,
    Cooked = 104,
    CopySelectedText = 105,
    Corpse = 106,
    CorpseOf = 107,
    CouldNotDecipher = 108,
    Counterclockwise = 109,
    Craft = 110,
    Crafted = 111,
    Crafts = 112,
    CreatureAngered = 113,
    CreatureAppears = 114,
    CreatureAppeased = 115,
    CreatureIdolAttractedCreature = 116,
    CreatureResistanceVulnerableHigh = 117,
    CreatureResistanceVulnerableLow = 118,
    CreatureResistanceVulnerableModerate = 119,
    CreatureUntamed = 120,
    CuredYourPoison = 121,
    Cut = 122,
    DamageAppeared = 123,
    DamagedByPouring = 124,
    DayQuarter1 = 125,
    DayQuarter2 = 126,
    DayQuarter3 = 127,
    DayQuarter4 = 128,
    DealtNoDamageToYou = 129,
    DeathBy = 130,
    DeathByBleeding = 131,
    DeathByBurning = 132,
    DeathByConsumption = 133,
    DeathByDrowning = 134,
    DeathByExhaustion = 135,
    DeathByFistByPlayer = 136,
    DeathByPoison = 137,
    DeathBySteppingOn = 138,
    DeathByTrap = 139,
    DeathByWeaponByPlayer = 140,
    Decay = 141,
    DestroyedFromUse = 142,
    Dexterity = 143,
    DexterityIncreasing = 144,
    DidNotSeemToBeHurting = 145,
    Dig = 146,
    DigAway = 147,
    Digging = 148,
    DigWithHands = 149,
    Disabled = 150,
    Disassemble = 151,
    DisassembleAction = 152,
    Disassembling = 153,
    DiscoveredCaveEntrance = 154,
    DiscoveredInTheBottle = 155,
    DiscoveredLavaPassage = 156,
    Dismantle = 157,
    DismantleAction = 158,
    DismantleLabel = 159,
    Dismantling = 160,
    DismantlingRequires = 161,
    DoNotHaveTreasureMaps = 162,
    DoNotProduceAnyResources = 163,
    DoodadAppearsDamaged = 164,
    DoodadAppearsOnVergeOfBreaking = 165,
    DoodadAppearsUnscathed = 166,
    DoodadCauseStatus = 167,
    DoodadShowsSignsOfWear = 168,
    DrewSurroundings = 169,
    Drink = 170,
    Drop = 171,
    DropAll = 172,
    DropAllIntoFire = 173,
    DropAllOfSameQuality = 174,
    DroppedAllIntoDepths = 175,
    DroppedIntoDepths = 176,
    DroppedIntoFire = 177,
    DueToDehydration = 178,
    DueToStarvation = 179,
    DugTreasureOut = 180,
    DumpContentsOfContainerInInventory = 181,
    Durability = 182,
    DyingOfDehydration = 183,
    EarnedMilestone = 184,
    Effective = 185,
    Enabled = 186,
    EquipmentPreventedStatusEffects = 187,
    EquipTo = 188,
    ErrorHasOccured = 189,
    Expert = 190,
    ExtinguishedFire = 191,
    ExtinguishedTorch = 192,
    FailedToAddFuelToTorch = 193,
    FailedToCatchFish = 194,
    FailedToCauseDamage = 195,
    FailedToCauseYouDamage = 196,
    FailedToDrawMap = 197,
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
    Ineffective = 263,
    InExactLocationOfTreasure = 264,
    InjuredFromTrap = 265,
    InNeedOfRepair = 266,
    Intermediate = 267,
    Inventory = 268,
    IsAtPercentHealth = 269,
    IsBarelyHurt = 270,
    IsInjured = 271,
    IsInTheWayOfPickingUp = 272,
    IsSeverelyDamaged = 273,
    IsUninjured = 274,
    ItContains = 275,
    ItsWeightCapacity = 276,
    JoinedAServer = 277,
    Jump = 278,
    Killed = 279,
    KnowledgeHasIncreased = 280,
    LabelAdditionalRequirements = 281,
    LabelAttackFromTactics = 282,
    LabelBase = 283,
    LabelCanIncrease = 284,
    LabelCraftingReputation = 285,
    LabelCraftingSkillReputation = 286,
    LabelDecay = 287,
    LabelDefense = 288,
    LabelDurability = 289,
    LabelEquip = 290,
    LabelGrouping = 291,
    LabelHave = 292,
    LabelLeftHandAttack = 293,
    LabelLevel = 294,
    LabelLightSourceWhenLit = 295,
    LabelOnCure = 296,
    LabelOnDrink = 297,
    LabelOnEat = 298,
    LabelOnEquip = 299,
    LabelOnHeal = 300,
    LabelOnOtherHeal = 301,
    LabelProtected = 302,
    LabelRange = 303,
    LabelRanged = 304,
    LabelRangedAttack = 305,
    LabelRangedDamage = 306,
    LabelReputationImpact = 307,
    LabelRequires = 308,
    LabelResists = 309,
    LabelRightHandAttack = 310,
    LabelSkill = 311,
    LabelStokeFireStrength = 312,
    LabelThrowDamageType = 313,
    LabelTrapDamage = 314,
    LabelUse = 315,
    LabelUses = 316,
    LabelVulnerabilities = 317,
    LabelWeight = 318,
    LabelWeightCapacity = 319,
    LabelWeightReduction = 320,
    LabelWorth = 321,
    LastPlaceYouLeftOff = 322,
    LearnedHowToCreate = 323,
    LeftHand = 324,
    LeftHandEquip = 325,
    Legs = 326,
    LikelyFailures = 327,
    LostHealth = 328,
    LostHunger = 329,
    LostStamina = 330,
    LostThirst = 331,
    MapNotOfThisArea = 332,
    MaterialsDestroyed = 333,
    Metabolism = 334,
    MetabolismSlowed = 335,
    MilestoneIsHidden = 336,
    MilestoneIsInvisible = 337,
    Milk = 338,
    Milking = 339,
    MissedWith = 340,
    MissedYouWith = 341,
    MoreInformation = 342,
    MoveAllOfSameQualityToFacingContainer = 343,
    MoveAllOfSameQualityToInventory = 344,
    MoveAllOfSameQualityToLastOpenedContainer = 345,
    MoveAllOfSameQualityToOpenedContainer = 346,
    MoveAllToFacingContainer = 347,
    MoveAllToInventory = 348,
    MoveAllToLastOpenedContainer = 349,
    MoveAllToOpenedContainer = 350,
    MoveOverTrapButDoNotSetOff = 351,
    MoveToFacingContainer = 352,
    MoveToInventory = 353,
    MoveToLastOpenedContainer = 354,
    MoveToOpenedContainer = 355,
    MultiplayerGamePaused = 356,
    MultiplayerGameResumed = 357,
    MultiplayerPlayerConnected = 358,
    MultiplayerPlayerDied = 359,
    MultiplayerPlayerDisconnected = 360,
    MultiplayerPlayerJoined = 361,
    MustBeEquippedToIgnite = 362,
    MustCastIntoWater = 363,
    Mysteriously = 364,
    Name = 365,
    NearlyBurnedEquipmentProtectedYou = 366,
    Neck = 367,
    NeedAShovelToDigTreasure = 368,
    NeedFishingNetForTreasure = 369,
    NeedFreeHandToShoot = 370,
    NeedToEquipToShoot = 371,
    NeedToStartTravelsOutside = 372,
    NeedWaterForRaft = 373,
    Negatively = 374,
    NightQuarter1 = 375,
    NightQuarter2 = 376,
    NightQuarter3 = 377,
    NightQuarter4 = 378,
    No = 379,
    NoAmmunitionForThatWeapon = 380,
    NoBlackPowderToFireWeapon = 381,
    NoFireToStokeWith = 382,
    NoFishAtLocation = 383,
    NoInkToDrawMap = 384,
    NoKindlingOrFuelItemsToStartFire = 385,
    NoKindlingToStartFire = 386,
    NoLongerFeelPainOfBeingBurned = 387,
    NoMoreRoomInContainer = 388,
    NoNeedToStokeFire = 389,
    NoRoomForImprovement = 390,
    NoRoomToDrop = 391,
    NotAvailable = 392,
    NotEnoughPurifiedWaterYet = 393,
    NotEnoughTreasureToReturn = 394,
    NotFacingCreatureToOfferThisTo = 395,
    NotFacingLockedObject = 396,
    NotFacingOtherToHeal = 397,
    NotFacingValidItem = 398,
    NothingHereToCarve = 399,
    NothingHereToFill = 400,
    NothingHereToGrasp = 401,
    NothingToGetFromThis = 402,
    NothingToHarvestFromThisGather = 403,
    NothingToSmother = 404,
    NothingUsefulToHarvestYet = 405,
    NoTinderToStartFire = 406,
    NotInRangeOfTreasure = 407,
    NotSuitableToPlant = 408,
    NoWaterInStill = 409,
    NoWhereNearTreasure = 410,
    NPCStartingDialog1 = 411,
    NPCStartingDialog2 = 412,
    NPCStartingDialog3 = 413,
    NPCStartingDialog4 = 414,
    NPCWelcome = 415,
    NPCWelcomeCredit = 416,
    NumberEight = 417,
    NumberFive = 418,
    NumberFour = 419,
    NumberNine = 420,
    NumberOne = 421,
    NumberSeven = 422,
    NumberSix = 423,
    NumberTen = 424,
    NumberThree = 425,
    NumberTwo = 426,
    ObjectIsLocked = 427,
    ObjectIsLockedAttemptToBreakIt = 428,
    Offer = 429,
    OfferAberrantFail = 430,
    OfferAberrantFailButTamed = 431,
    OpenDoor = 432,
    OverEatingLostStamina = 433,
    OverHydratingLostStamina = 434,
    Pack = 435,
    PaperTurnedToMush = 436,
    PartiallyDecodedMap = 437,
    PastExperiencesProvideBenefits = 438,
    PenultimateAnd = 439,
    PetCreature = 440,
    PickAway = 441,
    PickupAllItems = 442,
    PickupItem = 443,
    Piercing = 444,
    Place = 445,
    PlaceAllOnGround = 446,
    PlacedOnGround = 447,
    Plant = 448,
    PlantedInGround = 449,
    PlantGatheringWillDestroy = 450,
    PlantHasResourcesToGather = 451,
    PlantHasResourcesToHarvest = 452,
    PlantHighlyFertile = 453,
    Planting = 454,
    PlantIsFertile = 455,
    PlantIsNotFertile = 456,
    PlantNotReadyToHarvest = 457,
    PlantReadyToHarvest = 458,
    PlantReadyToHarvestNotMaximal = 459,
    Player = 460,
    Poisoned = 461,
    PoisonedLostHealth = 462,
    PoisonWorkedItsCourse = 463,
    Positively = 464,
    PouredOut = 465,
    PouredOutOnYourself = 466,
    PouredWaterIntoStill = 467,
    Preservation = 468,
    Preserve = 469,
    PreservedFood = 470,
    PurifiedWaterInStill = 471,
    Quality = 472,
    Recent = 473,
    ReduceLength = 474,
    RefusedToBeTamed = 475,
    Reinforce = 476,
    Reinforcement = 477,
    Release = 478,
    RemovedBlood = 479,
    RemoveFromQuickslot = 480,
    Repair = 481,
    RequiredForDisassembleLabel = 482,
    RequiredForDisassembly = 483,
    RequiresFireToBeLit = 484,
    RequiresYouFacingFireSource = 485,
    RequiresYouToBeAround = 486,
    Resistant = 487,
    Rest = 488,
    Rested = 489,
    Resting = 490,
    RestingOnGroundNotEffective = 491,
    RestInterrupted = 492,
    RestInterruptedDamage = 493,
    RestInterruptedLoudNoise = 494,
    RestInterruptedPain = 495,
    RestInterruptedStirring = 496,
    RestLongTime = 497,
    RestModerateTime = 498,
    RestOnGround = 499,
    RestShortTime = 500,
    RestTime = 501,
    ReturnedToCivilization = 502,
    ReturningToCivilizationSetOffAgain = 503,
    ReturnsToLife = 504,
    RightHand = 505,
    RightHandEquip = 506,
    ScrollProvidedNoUsefulInsight = 507,
    SeaweedFromWater = 508,
    SeemsHurt = 509,
    SeemsQuiteInjured = 510,
    SeemsToHaveDrawnEnergy = 511,
    SeemsUnharmed = 512,
    SetTrapOffButNoDamage = 513,
    SetUp = 514,
    ShadowInTheWater = 515,
    Simple = 516,
    Skill = 517,
    SkillHasRaised = 518,
    Skills = 519,
    Slashing = 520,
    Sleep = 521,
    Sleeping = 522,
    Slept = 523,
    SlitherSuckerConstricts = 524,
    SlitherSuckerJumpedOnHead = 525,
    Some = 526,
    SomethingInTheWayOf = 527,
    SomethingInTheWayOfCarveFirst = 528,
    SomethingInTheWayOfFire = 529,
    SomethingInTheWayOfFishing = 530,
    SomethingInTheWayOfPerforming = 531,
    SomethingInTheWayOfPlacing = 532,
    SomethingInTheWayOfPlanting = 533,
    SomethingInWayOfClosingDoor = 534,
    SoothedYourBurnInjuries = 535,
    Sort = 536,
    SortedByCategory = 537,
    SortedByDecay = 538,
    SortedByDurability = 539,
    SortedByGroup = 540,
    SortedByName = 541,
    SortedByQuality = 542,
    SortedByRecent = 543,
    SortedBySkill = 544,
    SortedByUnlockedTime = 545,
    SortedByWeight = 546,
    StaminaIsFull = 547,
    StartedFire = 548,
    StartTravelInWater = 549,
    StarvingToDeath = 550,
    SteppingOnHasInjuredYouForDamage = 551,
    StillHasNoWaterToPurify = 552,
    StirredUpClawWorm = 553,
    StirredUpCreature = 554,
    StoppedYourBleeding = 555,
    StopUsingRaft = 556,
    Strength = 557,
    StrengthIncreasing = 558,
    SummonedGuardiansByDiggingTreasure = 559,
    SunNotBrightEnoughToStartFire = 560,
    TakenFromGroundBecomeTamed = 561,
    Tame = 562,
    TamedAppearsAngered = 563,
    TamedAppearsContended = 564,
    TamedAppearsHappy = 565,
    TamedAppearsUpset = 566,
    TamedCreature = 567,
    TeleportBlocked = 568,
    Teleported = 569,
    ThanksBuying = 570,
    ThanksSelling = 571,
    TheirFist = 572,
    ThereIsNoSunToStartFire = 573,
    ThereIsNothingToMilk = 574,
    ThisCannotBeMilked = 575,
    Throw = 576,
    ThrownIntoDepths = 577,
    ThrownIntoObstacle = 578,
    Till = 579,
    Tilling = 580,
    TimeIs = 581,
    TimeIsDawn = 582,
    TimeIsDaytime = 583,
    TimeIsDusk = 584,
    TimeIsNighttime = 585,
    TimeIsSunrise = 586,
    TimeIsSunset = 587,
    ToDamageAChest = 588,
    ToFight = 589,
    TooDamaged = 590,
    TooExhaustedToJump = 591,
    TradeBarterCreditForItem = 592,
    TradeItemForBarterCredit = 593,
    TradingWith = 594,
    TrampledFire = 595,
    TrampledIntoGround = 596,
    TrampleIntoGround = 597,
    Trampling = 598,
    Transmogrification = 599,
    Transmogrified = 600,
    TrapStoppedYou = 601,
    TravelToFarOffLands = 602,
    TreasureIsBlocked = 603,
    True = 604,
    UnEquip = 605,
    UnEquipAll = 606,
    Unknown = 607,
    UnknownItem = 608,
    UnlockedChest = 609,
    UnlockedTime = 610,
    UnpurifiedWaterInStill = 611,
    UsingBareHands = 612,
    Vulnerable = 613,
    WaitUntilFireCooledToGetWater = 614,
    WalkingDistanceOfTreasure = 615,
    Water = 616,
    WaterGathering = 617,
    WaterPutOutFire = 618,
    Weight = 619,
    WeightCapacity = 620,
    WildGoatRefusedToBeMilked = 621,
    With = 622,
    WorkingYourselfIntoExhaustion = 623,
    WorkingYourselfIntoExhaustionAndDrowning = 624,
    YouAte = 625,
    YouBeginResting = 626,
    YouCannotDoThatYet = 627,
    YouCooledLava = 628,
    YouCrafted = 629,
    YouDied = 630,
    YouDisassembled = 631,
    YouDismantled = 632,
    YouDrank = 633,
    YouEquip = 634,
    YouFailedTo = 635,
    YouFailedToExtinguishedFireFully = 636,
    YouFailedToHeal = 637,
    YouFailedToHealOther = 638,
    YouFire = 639,
    YouGathered = 640,
    YouGatheredAndDropped = 641,
    YouHardenedCooledLava = 642,
    YouHarvested = 643,
    YouHarvestedAndDropped = 644,
    YouHaveDied = 645,
    YouHaveEnabledDisabled = 646,
    YouHaveHealedOther = 647,
    YouHaveKilled = 648,
    YouHaveReleased = 649,
    YouHaveTamed = 650,
    YouNeedMoreCredit = 651,
    YouNoticeBecomeEnraged = 652,
    YouNoticeDying = 653,
    YouNoticeFertilityDecreasing = 654,
    YouNoticeFertilityIncreasing = 655,
    YouNoticeGrowing = 656,
    YouNoticeLavaCooling = 657,
    YouNoticeLavaHardening = 658,
    YouNoticePerish = 659,
    YouNoticeStumbleInjureItself = 660,
    YouNoticeTakeFromGround = 661,
    YouNoticeWoundsClosing = 662,
    YouNoticeZombieHorde = 663,
    YouOfferedToCreature = 664,
    YouOpen = 665,
    YouPacked = 666,
    YouPickedUp = 667,
    YouRepair = 668,
    YourFist = 669,
    YourHands = 670,
    YourRubbingNoEffect = 671,
    YouRub = 672,
    YouSalvaged = 673,
    YouSee = 674,
    YouSeeAnAberrant = 675,
    YouSeeDrop = 676,
    YouSeeEngulfFire = 677,
    YouSeeLay = 678,
    YouSeeLayingTrap = 679,
    YouSeeSpewLava = 680,
    YouSeeSpitAcid = 681,
    YouSeeSpringForth = 682,
    YouSeeSummon = 683,
    YouSeeSwampFlood = 684,
    YouSeparate = 685,
    YouSetTheTrapOff = 686,
    YouThrew = 687,
    YouTilled = 688,
    YouUnequip = 689,
    YouUsed = 690
}
