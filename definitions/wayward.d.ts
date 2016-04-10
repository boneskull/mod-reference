declare type ActionCallback = (item: Item.IItem) => void;
declare namespace Actions {
    function add(use: ActionType, callback: ActionCallback): void;
    function remove(use: ActionType): void;
    function execute(use: ActionType, item: Item.IItem): void;
    function preserve(preserver: Item.IItem, preservee?: Item.IItem): void;
    function addFuel(fuel: Item.IItem, torch: Item.IItem): void;
    function consume(itemType: ItemType, actionType: ActionType): boolean;
    function consumeItem(item: Item.IItem, actionType: ActionType): void;
    function openContainer(container: Item.IContainer, containerName: string, silent?: boolean): void;
    function reinforce(reinforcer: Item.IItem, reinforcee?: Item.IItem): void;
    function repair(repairer: Item.IItem, repairee?: Item.IItem): void;
    function transmogrify(transmogrifier: Item.IItem, transmogrifee?: Item.IItem): void;
    function inspect(tileX: any, tileY: number): void;
    function hurtTerrain(x: number, y: number, z: number, tile: ITile): boolean;
}
declare class WAudio {
    private sfx;
    private music;
    private soundList;
    private musicPlaylist;
    private musicTrack;
    private fileFormat;
    constructor();
    playMusic(): void;
    pauseMusic(): void;
    nextTrack(): void;
    playEffect(sound: SfxType): void;
    updateVolume(): void;
    queueEffect(soundEffect: SfxType, delay?: number): void;
    processEffects(): void;
}
declare enum SfxType {
    Bow = 0,
    Craft = 1,
    Death = 2,
    Eating = 3,
    Exceptional = 4,
    Fail = 5,
    TreeHit = 6,
    Hit = 7,
    Hurt = 8,
    Miss = 9,
    MonsterHit = 10,
    MonsterNoise = 11,
    PickUp = 12,
    RockHit = 13,
    SandstoneHit = 14,
    Swim = 15,
    Throw = 16,
    Trample = 17,
    Walk = 18,
    Water = 19,
    Click = 20,
}
declare var Z_MIN: number;
declare var Z_CAVE: number;
declare var Z_NORMAL: number;
declare var Z_MAX: number;
declare enum AttackType {
    Melee = 0,
    HandToHand = 1,
    Shoot = 2,
    Sling = 3,
    Fire = 4,
    ThrowItem = 5,
}
declare enum DamageType {
    Blunt = 1,
    Slashing = 2,
    Piercing = 4,
    Fire = 8,
    Last = 16,
}
declare function fullDamageType(damageType: DamageType): string;
declare class Resistances {
    [index: number]: any;
    constructor(...args: any[]);
}
declare class Vulnerabilities {
    [index: number]: any;
    constructor(...args: any[]);
}
declare class Defense {
    base: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, resist: Resistances, vulnerable: Vulnerabilities);
}
declare enum DoorOrientation {
    Default = 0,
    Vertical = 1,
}
declare enum FacingDirection {
    None = -1,
    East = 0,
    North = 1,
    West = 2,
    South = 3,
}
declare enum Gender {
    Male = 0,
    Female = 1,
}
declare enum SaveType {
    InGame = 0,
    Quit = 1,
    BackToMainMenu = 2,
}
declare enum LootGroupType {
    Low = 0,
    High = 1,
    Treasure = 2,
    SeaTreasure = 3,
}
declare enum EquipType {
    None = 0,
    Held = 1,
    Legs = 2,
    Chest = 3,
    Head = 4,
    Belt = 5,
    Feet = 6,
    Neck = 7,
    Hands = 8,
    Back = 9,
    LeftHand = 10,
    RightHand = 11,
}
declare enum RecipeLevel {
    Advanced = 0,
    Simple = 1,
    Intermediate = 2,
    Expert = 3,
}
declare enum ActionType {
    Disassemble = 0,
    Pickup = 1,
    Throw = 2,
    Attack = 3,
    StartFire = 4,
    Carve = 5,
    SetDown = 6,
    Eat = 7,
    Drink = 8,
    Rest = 9,
    Sleep = 10,
    Heal = 11,
    Dig = 12,
    Paddle = 13,
    GatherWater = 14,
    Shoot = 15,
    Cast = 16,
    TraverseTheSea = 17,
    LockPick = 18,
    Sling = 19,
    Repair = 20,
    Decode = 21,
    Read = 22,
    Reinforce = 23,
    Gather = 24,
    StokeFire = 25,
    Garden = 26,
    Pour = 27,
    Plant = 28,
    GatherTreasure = 29,
    Ignite = 30,
    Build = 31,
    OpenContainer = 32,
    Preserve = 33,
    Open = 34,
    Cure = 35,
    TellTime = 36,
    SailToCivilization = 37,
    Transmogrify = 38,
    Fire = 39,
    Teleport = 40,
    Extinguish = 41,
    DrawMap = 42,
}
declare enum ItemType {
    None = 0,
    Amber = 1,
    AnimalSkull = 2,
    Arrow = 3,
    StoneArrowhead = 4,
    PileOfAsh = 5,
    BarkLeggings = 6,
    BarkShield = 7,
    BarkTunic = 8,
    Bone = 9,
    Branch = 10,
    CactusSpines = 11,
    Charcoal = 12,
    CobblestoneFlooring = 13,
    CookedMeat = 14,
    Earthworm = 15,
    Feather = 16,
    FertileSoil = 17,
    WaterskinOfSeawater = 18,
    FirePlough = 19,
    FlowerSeeds = 20,
    Fossil = 21,
    GoldCoins = 22,
    GoldenChalice = 23,
    GoldenRing = 24,
    GoldenSword = 25,
    GrassSeeds = 26,
    IronOre = 27,
    Kindling = 28,
    LargeRock = 29,
    LeafBedroll = 30,
    LeatherHide = 31,
    Leaves = 32,
    Limestone = 33,
    Log = 34,
    MortarAndPestle = 35,
    WhiteMushrooms = 36,
    Nopal = 37,
    Peat = 38,
    Sandstone = 39,
    PileOfGravel = 40,
    PileOfSand = 41,
    WoodenArrow = 42,
    StoneAxe = 43,
    Bandage = 44,
    WovenFabric = 45,
    CactusNeedle = 46,
    StoneShovel = 47,
    WoodenSpear = 48,
    Suture = 49,
    Raft = 50,
    RawMeat = 51,
    RedBerries = 52,
    SpottedRedMushrooms = 53,
    Rope = 54,
    Sapling = 55,
    Seaweed = 56,
    SharpGlass = 57,
    SharpRock = 58,
    Skullcap = 59,
    SmoothRock = 60,
    Soil = 61,
    StoneSpear = 62,
    Stones = 63,
    StoneWall = 64,
    String = 65,
    StrippedBark = 66,
    TannedLeather = 67,
    Tannin = 68,
    ThistleSeeds = 69,
    TreeBark = 70,
    TreeFungus = 71,
    Vine = 72,
    Twigs = 73,
    Waterskin = 74,
    WoodenPole = 75,
    PeatBandage = 76,
    Bow = 77,
    BowDrill = 78,
    FishingNet = 79,
    RawCod = 80,
    CookedCod = 81,
    Campfire = 82,
    VineWhip = 83,
    PileOfSnow = 84,
    BarkTorch = 85,
    LitBarkTorch = 86,
    HandDrill = 87,
    SmallBag = 88,
    Shale = 89,
    SharpenedBone = 90,
    Grindstone = 91,
    RawFishSteak = 92,
    CookedFishSteak = 93,
    WaterskinOfDesalinatedWater = 94,
    BoatPaddle = 95,
    BullBoat = 96,
    RefinedSand = 97,
    Spyglass = 98,
    Flask = 99,
    RawClay = 100,
    RawClayBlowpipe = 101,
    ClayBlowpipe = 102,
    LeatherBelt = 103,
    LeatherTunic = 104,
    LeatherBoots = 105,
    LeatherCap = 106,
    LeatherGorget = 107,
    LeatherPants = 108,
    LeatherGloves = 109,
    Furnace = 110,
    Kiln = 111,
    IronTongs = 112,
    Talc = 113,
    TalcumPowder = 114,
    SandCastFlask = 115,
    Lens = 116,
    PlantRoots = 117,
    LockPick = 118,
    BoneNeedle = 119,
    Pineapple = 120,
    TatteredMap = 121,
    Coal = 122,
    WroughtIron = 123,
    LimestonePowder = 124,
    IronIngot = 125,
    Backpack = 126,
    RottenMeat = 127,
    StoneHammer = 128,
    RawChicken = 129,
    CookedChicken = 130,
    ForgeAndAnvil = 131,
    WoodenChest = 132,
    IronSword = 133,
    IronBreastplate = 134,
    IronBoots = 135,
    IronHelmet = 136,
    IronGorget = 137,
    IronGreaves = 138,
    IronGauntlets = 139,
    IronShield = 140,
    SandstoneWall = 141,
    SandstoneFlooring = 142,
    SpiderSilk = 143,
    AnimalFat = 144,
    AnimalFatTorch = 145,
    ClayFlakes = 146,
    GreenSand = 147,
    OldInstructionalScroll = 148,
    SlimeGelatin = 149,
    Glue = 150,
    CookedSpider = 151,
    DeadSpider = 152,
    IronLockPick = 153,
    RottingVegetation = 154,
    WildOnion = 155,
    IronHammer = 156,
    IronSpear = 157,
    IronShovel = 158,
    IronDoubleAxe = 159,
    IronPickaxe = 160,
    Inkstick = 161,
    Coconut = 162,
    PalmLeaf = 163,
    Offal = 164,
    Bones = 165,
    LitPoleTorch = 166,
    Cotton = 167,
    CottonSeeds = 168,
    CottonFabric = 169,
    BonePole = 170,
    Tourniquet = 171,
    WroughtIronPickaxe = 172,
    WroughtIronDoubleAxe = 173,
    WroughtIronShovel = 174,
    WroughtIronSpear = 175,
    WroughtIronHammer = 176,
    WroughtIronLockPick = 177,
    WroughtIronShield = 178,
    WroughtIronGauntlets = 179,
    WroughtIronGreaves = 180,
    WroughtIronGorget = 181,
    WroughtIronHelmet = 182,
    WroughtIronBoots = 183,
    WroughtIronBreastPlate = 184,
    WroughtIronSword = 185,
    WoodenWall = 186,
    WoodenFlooring = 187,
    WoodenDoor = 188,
    FishingRod = 189,
    MessageInABottle = 190,
    CarbonPowder = 191,
    PileOfCompost = 192,
    MeltedAmber = 193,
    Tinder = 194,
    Deadfall = 195,
    Snare = 196,
    WaterskinOfMedicinalWater = 197,
    CharcoalBandage = 198,
    WoodenTongs = 199,
    WroughtIronTongs = 200,
    SheetOfGlass = 201,
    SolarStill = 202,
    StoneWaterStill = 203,
    Sundial = 204,
    LitAnimalFatTorch = 205,
    Sinew = 206,
    ShortBow = 207,
    LongBow = 208,
    CompositeBow = 209,
    WaterskinOfPurifiedFreshWater = 210,
    WaterskinOfUnpurifiedFreshWater = 211,
    GlassBottle = 212,
    Cork = 213,
    GlassBottleOfSeawater = 214,
    GlassBottleOfDesalinatedWater = 215,
    GlassBottleOfMedicinalWater = 216,
    GlassBottleOfPurifiedFreshWater = 217,
    GlassBottleOfUnpurifiedFreshWater = 218,
    WroughtIronArrow = 219,
    IronArrow = 220,
    StoneBullet = 221,
    WroughtIronBullet = 222,
    IronBullet = 223,
    LeatherQuiver = 224,
    Ectoplasm = 225,
    MagicalEssence = 226,
    WoodenFence = 227,
    MonsterIdol = 228,
    CordedSling = 229,
    LeatherSling = 230,
    WroughtIronArrowhead = 231,
    IronArrowhead = 232,
    Hammock = 233,
    CottonBedroll = 234,
    FeatherBedroll = 235,
    RawTaintedMeat = 236,
    CookedTaintedMeat = 237,
    StoneKnife = 238,
    RawBlindfish = 239,
    CookedBlindfish = 240,
    Pemmican = 241,
    PreparedPemmican = 242,
    Sail = 243,
    Sailboat = 244,
    Egg = 245,
    BoiledEgg = 246,
    GrassBlades = 247,
    Niter = 248,
    Saltpeter = 249,
    BlackPowder = 250,
    FlintlockPistol = 251,
    Giblets = 252,
    ExplosiveTrap = 253,
    SkeletalMageWand = 254,
    RawClayJug = 255,
    ClayJug = 256,
    ClayJugOfSeawater = 257,
    ClayJugOfDesalinatedWater = 258,
    ClayJugOfMedicinalWater = 259,
    ClayJugOfPurifiedFreshWater = 260,
    ClayJugOfUnpurifiedFreshWater = 261,
    RawClayBrick = 262,
    ClayBrick = 263,
    ClayBrickWall = 264,
    ClayBrickFlooring = 265,
    PineappleSeeds = 266,
    BerrySeeds = 267,
    CactiSeeds = 268,
    VineSeeds = 269,
    PaperSheet = 270,
    PaperMold = 271,
    FlowerPetals = 272,
    Thistles = 273,
    DrawnMap = 274,
}
declare let ItemTypeLast: number;
declare let ItemTypeMax: number;
declare enum ItemTypeGroup {
    Invalid = 800,
    Sharpened = 801,
    Carbon = 802,
    Arrow = 803,
    Utensil = 804,
    Bone = 805,
    Fuel = 806,
    Medicinal = 807,
    Meat = 808,
    Food = 809,
    Insect = 810,
    Water = 811,
    Treasure = 812,
    Rock = 813,
    Compost = 814,
    Fabric = 815,
    Needle = 816,
    Cordage = 817,
    SharpenedRock = 818,
    Container = 819,
    Pole = 820,
    LightSource = 821,
    Repair = 822,
    Tongs = 823,
    Hammer = 824,
    Preserve = 825,
    Reinforce = 826,
    GlassBottleOfPotableWater = 827,
    Bullet = 828,
    Transmogrify = 829,
    WaterskinOfPotableWater = 830,
    Pulp = 831,
    ClayJugOfPotableWater = 832,
    Powder = 833,
    Equipment = 834,
    Gardening = 835,
    Firemaking = 836,
    Bedding = 837,
    Tool = 838,
    Weapon = 839,
    Health = 840,
    Travel = 841,
    Housing = 842,
    Heating = 843,
    Storage = 844,
    Trap = 845,
    Other = 846,
    RawMeat = 847,
    CookedMeat = 848,
    ContainerOfSeawater = 849,
    ContainerOfDesalinatedWater = 850,
    ContainerOfMedicinalWater = 851,
    ContainerOfPurifiedFreshWater = 852,
    ContainerOfUnpurifiedFreshWater = 853,
    Last = 854,
}
declare enum PlayerState {
    None = 0,
    Dead = 1,
    Won = 2,
    Traveling = 3,
}
declare enum ObjectContext {
    None = 0,
    Inventory = 1,
    TileItem = 2,
    Doodad = 3,
    TileEvent = 4,
    Corpse = 5,
}
declare enum Delay {
    None = 0,
    LongPause = 25,
    Movement = 10,
    ShortPause = 12,
    Collision = 40,
}
declare enum StatType {
    EnemyHealth = 0,
    Talent = 1,
    Stamina = 2,
    Hunger = 3,
    Health = 4,
    Thirst = 5,
}
declare enum StatusType {
    Bleeding = 0,
    Poisoned = 1,
    Burning = 2,
}
declare enum ItemQuality {
    None = 0,
    Random = 1,
    Exceptional = 2,
    Remarkable = 3,
    Legendary = 4,
}
declare enum ItemImage {
    Default = 0,
    Exceptional = 1,
    Remarkable = 2,
    Legendary = 3,
    Damaged = 4,
    Selected = 5,
}
declare enum RenderFlag {
    None = 0,
    Corpse = 1,
    Item = 2,
    Player = 4,
    Monster = 8,
    Terrain = 16,
    All = 65535,
}
declare enum OnEquipType {
    LightSource = 0,
    Telescopy = 1,
}
interface IOnEquipType {
    [index: number]: {};
}
declare var onEquipTypes: IOnEquipType;
declare enum KeyBind {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3,
    Idle = 4,
    One = 5,
    Two = 6,
    Three = 7,
    Four = 8,
    Five = 9,
    Six = 10,
    Seven = 11,
    Eight = 12,
    Nine = 13,
    Escape = 14,
    Inventory = 15,
    Help = 16,
    Skills = 17,
    Messages = 18,
    Options = 19,
    Alt = 20,
    Shift = 21,
    Equipment = 22,
    Crafting = 23,
    Actions = 24,
    Milestones = 25,
    Enter = 26,
}
interface IKeyBind {
    [index: number]: number;
}
declare var keybindCount: number;
declare var defaultKeyBinds: IKeyBind;
declare var hotKeyNumbers: KeyBind[];
declare enum TurnType {
    Resting = 0,
    CheckUnderPlayer = 1,
    DontEnterCaves = 2,
}
declare enum HintType {
    First = 0,
    WelcomeToWayward = 1,
    Controls = 2,
    CorpseCarving = 3,
    DoodadPickup = 4,
    CaveDarkness = 5,
    Nightfall = 6,
    StaminaReplenishment = 7,
    HealthReplenishment = 8,
    Bleeding = 9,
    Poisoned = 10,
    Dehydration = 11,
    UseATool = 12,
    Durability = 13,
    Death = 14,
    EatingBadThings = 15,
    FastPickup = 16,
    Bugs = 17,
    HeldItems = 18,
    Milestones = 19,
    Burning = 20,
    Crafting = 21,
    Encumbered = 22,
    DailyChallengeMode = 23,
    Last = 24,
}
interface IHint {
    name?: string;
    description?: string;
}
declare var hints: IHint[];
declare var keyCodes: string[];
declare enum ScreenId {
    None = 0,
    Cover = 1,
    Title = 2,
    Game = 3,
}
declare enum TitleScreenId {
    Default = 0,
    EndGame = 1,
}
declare enum DialogId {
    Inventory = 0,
    Crafting = 1,
    Equipment = 2,
    Messages = 3,
    Skills = 4,
    Milestones = 5,
    Map = 6,
    Container = 7,
    Custom = 8,
}
declare enum SortType {
    Name = 0,
    Group = 1,
    Weight = 2,
    Oldest = 3,
    Newest = 4,
    Skill = 5,
    Category = 6,
}
declare enum RestType {
    Resting = 0,
    Sleeping = 1,
}
declare enum LoadingType {
    Normal = 0,
    Rest = 1,
}
declare enum InputRecordType {
    KeyDown = 0,
    KeyUp = 1,
    MouseDown = 2,
    MouseUpOrLeave = 3,
    MouseMove = 4,
    MouseScroll = 5,
}
import Vec2 = TSM.vec2;
declare enum TileType {
    Top = 0,
    TopLeft = 1,
    Left = 2,
    BottomLeft = 3,
    Bottom = 4,
    BottomRight = 5,
    Right = 6,
    TopRight = 7,
    InnerTopLeft = 8,
    InnerBottomLeft = 9,
    InnerBottomRight = 10,
    InnerTopRight = 11,
    CenterTopLeft = 12,
    CenterBottomLeft = 13,
    CenterBottomRight = 14,
    CenterTopRight = 15,
}
declare enum TerrainType {
    DeepSeawater = 0,
    Seawater = 1,
    ShallowSeawater = 2,
    DeepFreshWater = 3,
    FreshWater = 4,
    ShallowFreshWater = 5,
    Grass = 6,
    Trees = 7,
    BareTrees = 8,
    TreesWithVines = 9,
    TreesWithBerries = 10,
    TreesWithFungus = 11,
    PalmTrees = 12,
    BarePalmTrees = 13,
    PalmTreesWithCoconuts = 14,
    Gravel = 15,
    Dirt = 16,
    Sand = 17,
    Snow = 18,
    Swamp = 19,
    Clay = 20,
    Ash = 21,
    Rocks = 22,
    RocksWithIron = 23,
    RocksWithTalc = 24,
    RocksWithCoal = 25,
    RocksWithLimestone = 26,
    Cobblestone = 27,
    Sandstone = 28,
    SandstoneFloor = 29,
    SandstoneWithIron = 30,
    SandstoneWithNiter = 31,
    WoodenFloor = 32,
    ClayBrickFloor = 33,
    CaveEntrance = 34,
}
declare function rotateTileType90Deg(tileType: TileType, times: number): TileType;
declare function getTileLoc(tileType: TileType, tileInfo: TerrainTileInfo, variation: number): Vec2;
declare class Bound2 {
    min: Vec2;
    max: Vec2;
    constructor(min: Vec2, max: Vec2);
}
declare class TerrainTileInfo {
    top: Vec2[];
    left: Vec2[];
    right: Vec2[];
    bottom: Vec2[];
    topLeft: Vec2;
    topRight: Vec2;
    bottomLeft: Vec2;
    bottomRight: Vec2;
    innerTopLeft: Vec2;
    innerTopRight: Vec2;
    innerBottomLeft: Vec2;
    innerBottomRight: Vec2;
    centerTopLeft: Vec2[];
    centerTopRight: Vec2[];
    centerBottomLeft: Vec2[];
    centerBottomRight: Vec2[];
    constructor(xOffset: number, yOffset: number);
    getCenterTopLeft(variation: number): Vec2;
    getCenterTopRight(variation: number): Vec2;
    getCenterBottomLeft(variation: number): Vec2;
    getCenterBottomRight(variation: number): Vec2;
    getLeft(variation: number): Vec2;
    getRight(variation: number): Vec2;
    getTop(variation: number): Vec2;
    getBottom(variation: number): Vec2;
}
declare class MountainTileInfo extends TerrainTileInfo {
    extendedInfo: TerrainTileInfo;
    constructor(xOffset: number, yOffset: number);
}
declare class TileAtlas {
    static terrain: {
        [index: number]: TerrainTileInfo;
    };
    static doodads: {
        [index: number]: Doodad.DoodadInfo;
    };
    static isMountain(type: TerrainType): boolean;
    static isOre(type: TerrainType): boolean;
    static isWater(type: TerrainType): boolean;
    static isFloor(type: TerrainType): boolean;
}
interface IMonster {
    x: number;
    y: number;
    z: number;
    fromX: number;
    fromY: number;
    direction: FacingDirection;
    ai: MonsterAiType;
    type: MonsterType;
    anim: number;
    aberrant: boolean;
    hp: number;
    maxhp: number;
    loot: ItemType[];
    lootChance?: number;
}
declare enum MoveType {
    None = 0,
    Water = 1,
    ShallowWater = 2,
    Land = 4,
    Tree = 8,
    Mountain = 16,
    Flying = 15,
}
declare enum MonsterType {
    Slime = 0,
    JellyCube = 1,
    GiantSpider = 2,
    Bear = 3,
    Rabbit = 4,
    Snake = 5,
    GiantRat = 6,
    Rat = 7,
    VampireBat = 8,
    GreyWolf = 9,
    Imp = 10,
    Bogling = 11,
    LivingRock = 12,
    Shark = 13,
    Zombie = 14,
    Skeleton = 15,
    PirateGhost = 16,
    TimeSkitter = 17,
    Chicken = 18,
    TrapdoorSpider = 19,
    FireElemental = 20,
    Cod = 21,
    Hobgoblin = 22,
    LivingMushroom = 23,
    Kraken = 24,
    Blindfish = 25,
    Harpy = 26,
    AcidSpitterDemon = 27,
    SkeletalMage = 28,
    Blood = 29,
}
declare enum MonsterSpawnGroup {
    Any = 0,
    Guardians = 1,
    Water = 2,
}
declare enum MonsterAiType {
    Neutral = 0,
    Hostile = 1,
    Scared = 2,
    Random = 4,
    Hidden = 8,
    Fearless = 16,
}
declare enum MonsterSpawnableTiles {
    None = 0,
    Default = 1,
    DefaultWithWater = 2,
    DeepWater = 3,
    Water = 4,
    Flying = 5,
    Ghost = 6,
}
declare var spawnableTiles: TerrainType[][];
interface IMonsterDescription {
    name?: string;
    minhp: number;
    maxhp: number;
    minatk: number;
    maxatk: number;
    defense: Defense;
    damageType: DamageType;
    ai: MonsterAiType;
    moveType: MoveType;
    fishable?: boolean;
    blood?: number[];
    loot?: ItemType[];
    lootChance?: number;
    spawnTiles: MonsterSpawnableTiles;
    spawnTalent?: number;
    makeNoise?: boolean;
    canCauseStatus?: StatusType[];
    lootGroup?: LootGroupType;
    breaksWalls?: boolean;
    jumpOver?: boolean;
    mod?: number;
    noCorpse?: boolean;
}
declare var monsters: IMonsterDescription[];
declare enum SkillType {
    Chemistry = 0,
    Anatomy = 1,
    Archery = 2,
    Blacksmithing = 3,
    Botany = 4,
    Camping = 5,
    Cartography = 6,
    Claythrowing = 7,
    Cooking = 8,
    Fishing = 9,
    Fletching = 10,
    Glassblowing = 11,
    Leatherworking = 12,
    LockPicking = 13,
    Lumberjacking = 14,
    Mining = 15,
    Mycology = 16,
    Parrying = 17,
    Stonecrafting = 18,
    Swimming = 19,
    Tactics = 20,
    Tailoring = 21,
    Throwing = 22,
    Tinkering = 23,
    Trapping = 24,
    Woodworking = 25,
}
declare class SkillLevel {
    percent: number;
    bonus: number;
    core: number;
}
interface ISkillSet extends Array<SkillLevel> {
}
declare function skillSet(): ISkillSet;
interface ISkillDescription {
    name?: string;
    attribute: StatType;
    description?: string;
    talent: number;
}
declare var skillDescriptions: ISkillDescription[];
interface IMonsterCorpses {
    name?: string;
    decay?: number;
    resource?: ItemType[];
    carve?: boolean;
    skill?: SkillType;
    blood?: number[];
    damage?: number;
}
interface ICorpse {
    x: number;
    y: number;
    z: number;
    type: MonsterType;
    decay?: number;
    aberrant?: boolean;
}
declare var corpses: IMonsterCorpses[];
declare namespace Doodad {
    class DoodadInfo {
        type: DoodadType;
        tall: boolean;
        animated: boolean;
        topLeft: Vec2;
        topRight: Vec2;
        bottomLeft: Vec2;
        bottomRight: Vec2;
        constructor(type: DoodadType, tall: boolean, xOffset: number, yOffset: number, animated: boolean);
    }
    interface IDoodad extends Item.IObject {
        type: DoodadType;
        spread?: number;
        growInto?: DoodadType;
        gatherWater?: boolean;
        gatherReady?: boolean;
        torch?: any;
        x: number;
        y: number;
        z: number;
    }
    interface IDoodadFurnace extends IDoodad {
        lit: boolean;
    }
    interface IDoodadDoor extends IDoodad {
        orientation: DoorOrientation;
    }
    function create(type: DoodadType, x: number, y: number, z: number, spread?: number, decay?: number, minDur?: number, maxDur?: number): IDoodad;
    function remove(doodad: IDoodad, bypass?: boolean): void;
    function updateAll(doodads: IDoodad[]): void;
    function update(doodad: IDoodad): void;
    function canGrowInCaves(doodad: IDoodad): boolean;
    function gather(doodad: IDoodad): void;
    function canPickup(doodad: IDoodad): boolean;
    function pickup(x: number, y: number, z: number): void;
    function checkForTrampling(doodad: IDoodad, isPlayer: boolean, monsterId?: number): boolean;
    function messageGardenFertility(spread: number): void;
    function inspect(doodad: IDoodad): void;
}
declare enum DoodadType {
    WoodenDoor = 0,
    WoodenFence = 1,
    WoodenWall = 2,
    ClayBrickWall = 3,
    SandstoneWall = 4,
    StoneWall = 5,
    SetExplosiveTrap = 6,
    SetDeadfall = 7,
    SetSnare = 8,
    SetHobgoblinSnare = 9,
    SolarStill = 10,
    WoodenChest = 11,
    LockedWoodenChest = 12,
    MonsterIdol = 13,
    GrassSeeds = 14,
    Vines = 15,
    Thistles = 16,
    GrowingMushroom = 17,
    WhiteMushrooms = 18,
    SpottedRedMushroom = 19,
    TallGrass = 20,
    Seaweed = 21,
    WildOnion = 22,
    PineapplePlant = 23,
    PileOfRocks = 24,
    BerryBush = 25,
    YellowFlowers = 26,
    Sapling = 27,
    GrowingPlant = 28,
    Cotton = 29,
    Tree = 30,
    TreeWithVines = 31,
    TreeWithBerries = 32,
    TreeWithFungus = 33,
    BareTree = 34,
    PalmTreeWithCoconuts = 35,
    PalmTree = 36,
    BarePalmTree = 37,
    Cacti = 38,
    DeadBush = 39,
    StoneWaterStill = 40,
    LitStoneWaterStill = 41,
    Campfire = 42,
    LitCampfire = 43,
    Kiln = 44,
    LitKiln = 45,
    Furnace = 46,
    LitFurnace = 47,
    TorchStand = 48,
    LitTorchStand = 49,
    ForgeAndAnvil = 50,
    LitForgeAndAnvil = 51,
    Acid = 52,
    CaveEntrance = 53,
    OpenWoodenDoor = 54,
}
declare namespace Doodad {
    interface IDoodadDescription extends Item.IObjectDescription {
        blockMove?: boolean;
        growth?: DoodadType;
        resource?: ItemType[];
        allowedTiles?: TerrainType[];
        blockdig?: boolean;
        garden?: boolean;
        caveGrow?: boolean;
        trample?: boolean;
        fire?: boolean;
        trap?: boolean;
        waterSource?: boolean;
        isLocked?: boolean;
        growing?: boolean;
        damage?: number;
        lit?: DoodadType;
        spreadMax?: number;
        revert?: DoodadType;
        blockJump?: boolean;
        variation?: boolean;
        tall?: boolean;
        animated?: boolean;
        mod?: number;
        flammable?: boolean;
        onBurn?: ItemType;
        graphicVariation?: boolean;
    }
    var defines: IDoodadDescription[];
}
declare module Languages {
    var saveData: {
        language: string;
    };
    enum UiTranslation {
        Bleeding = 0,
        Burning = 1,
        Dehydrated = 2,
        DisableHints = 3,
        EnableHints = 4,
        Encumbered = 5,
        EquipmentBack = 6,
        EquipmentBelt = 7,
        EquipmentChest = 8,
        EquipmentFeet = 9,
        EquipmentHands = 10,
        EquipmentHead = 11,
        EquipmentLeftHand = 12,
        EquipmentLegs = 13,
        EquipmentNeck = 14,
        EquipmentRightHand = 15,
        Exhausted = 16,
        Health = 17,
        Healthy = 18,
        HudActions = 19,
        HudCrafting = 20,
        HudEquipment = 21,
        HudFilter = 22,
        HudHelp = 23,
        HudInventory = 24,
        HudMessages = 25,
        HudMilestones = 26,
        HudOptions = 27,
        HudSave = 28,
        HudSkills = 29,
        HudTitleScreen = 30,
        Hunger = 31,
        MenuAbout = 32,
        MenuAboutCredits = 33,
        MenuAboutDonators = 34,
        MenuAboutIntro = 35,
        MenuAboutLibraries = 36,
        MenuAboutLibrariesIntro = 37,
        MenuAboutMessage = 38,
        MenuAboutTesters = 39,
        MenuAboutTestersIntro = 40,
        MenuAboutThanks = 41,
        MenuAboutThanksIntro = 42,
        MenuDailyChallenge = 43,
        MenuDeleteAllGameData = 44,
        MenuDeleteGame = 45,
        MenuEditGame = 46,
        MenuEndGameDead = 47,
        MenuEndGameWon = 48,
        MenuExportGame = 49,
        MenuExportSave = 50,
        MenuImportGame = 51,
        MenuImportSave = 52,
        MenuManageMods = 53,
        MenuManageModsInternal = 54,
        MenuManageModsLocal = 55,
        MenuManageModsMessage = 56,
        MenuManageModsPublishMod = 57,
        MenuManageModsUninstallMod = 58,
        MenuManageModsViewInSteamWorkshop = 59,
        MenuManageModsWorkshop = 60,
        MenuModdingGuide = 61,
        MenuNoHighscores = 62,
        MenuNoMods = 63,
        MenuOpenLogsFolder = 64,
        MenuOpenModFolder = 65,
        MenuOptions = 66,
        MenuOptionsMessage = 67,
        MenuPlayGame = 68,
        MenuPlayGameMessage = 69,
        MenuPlayGameNewGame = 70,
        MenuPostATweet = 71,
        MenuQuitGame = 72,
        MenuReloadGame = 73,
        MenuShareOnFacebook = 74,
        MenuToggleDeveloperTools = 75,
        MenuViewHighscores = 76,
        MenuViewHighscoresMessage = 77,
        MenuVisitSteamWorkshop = 78,
        NearDeath = 79,
        NextHint = 80,
        OptionsAlternateFont = 81,
        OptionsAudio = 82,
        OptionsAutoGather = 83,
        OptionsAutoPickup = 84,
        OptionsDeveloper = 85,
        OptionsDropOnGather = 86,
        OptionsEffects = 87,
        OptionsEnableHints = 88,
        OptionsFullscreenMode = 89,
        OptionsGame = 90,
        OptionsGraphics = 91,
        OptionsKeyBindDefault = 92,
        OptionsKeyBindRebinding = 93,
        OptionsKeyBinds = 94,
        OptionsLanguage = 95,
        OptionsMusic = 96,
        OptionsMute = 97,
        OptionsNextSong = 98,
        OptionsPixelFont = 99,
        OptionsSaveData = 100,
        OptionsVisionDither = 101,
        OptionsVisionFade = 102,
        OptionsWindowedMode = 103,
        OptionsZoomIn = 104,
        OptionsZoomOut = 105,
        Overburdened = 106,
        Poisoned = 107,
        PreviousHint = 108,
        QuickSlot1 = 109,
        QuickSlot2 = 110,
        QuickSlot3 = 111,
        QuickSlot4 = 112,
        QuickSlot5 = 113,
        QuickSlot6 = 114,
        QuickSlot7 = 115,
        QuickSlot8 = 116,
        QuickSlot9 = 117,
        ReturnToTitleScreen = 118,
        Stamina = 119,
        Starving = 120,
        Talent = 121,
        Thirst = 122,
        Version = 123,
        Weight = 124,
        WindowTitleContainer = 125,
        WindowTitleCrafting = 126,
        WindowTitleEquipment = 127,
        WindowTitleHighscores = 128,
        WindowTitleInventory = 129,
        WindowTitleMap = 130,
        WindowTitleMessages = 131,
        WindowTitleMilestones = 132,
        WindowTitleOptions = 133,
        WindowTitleSkills = 134,
    }
    enum Dictionary {
        ItemTypes = 0,
        Doodads = 1,
        ActionTypes = 2,
        Ui = 3,
        Messages = 4,
        Terrains = 5,
        Monsters = 6,
        Skills = 7,
        Corpses = 8,
        Hints = 9,
        Milestones = 10,
        OnEquipTypes = 11,
        TileEvents = 12,
    }
    interface IStringArray {
        [index: number]: string;
    }
    interface INameDescription {
        name: string;
        description?: string;
    }
    interface INameDescriptionArray {
        [index: number]: INameDescription;
    }
    class Language {
        private name;
        private alternateFontStyle;
        private dictionary;
        constructor(name: string, alternateFontStyle?: boolean);
        getName(): string;
        useAlternateFontStyle(): boolean;
        item(key: ItemType, name: string, description?: string): void;
        itemGroup(key: ItemTypeGroup, name: string, description?: string): void;
        doodad(key: DoodadType, name: string, description?: string): void;
        use(key: ActionType, name: string, description: string): any;
        ui(key: UiTranslation, value: string): void;
        message(key: Message, value: string): void;
        terrain(key: TerrainType, value: string): void;
        monster(key: MonsterType, value: string): void;
        monsterCorpse(key: MonsterType, value: string): void;
        skill(key: SkillType, name: string, description: string): any;
        milestone(key: MilestoneType, name: string, description: string): void;
        hint(key: HintType, name: string, description: string): void;
        tileEvent(key: TileEvent.Type, value: string): void;
        onEquipType(key: OnEquipType, value: string): void;
        getDictionary(dictionary: Dictionary): INameDescriptionArray;
    }
    function add(language: Language): void;
    function remove(name: string): void;
    function addTranslateSelector(id: UiTranslation, selector: string | string[], attribute?: string, html?: boolean, func?: (translation: string) => string): void;
    function getLanguages(): Language[];
    function getLoaded(): Language;
    function reload(): void;
    function refreshUiTranslation(id: UiTranslation): void;
    function load(name: string): boolean;
}
declare function makeString(msg: Message, ...variables: any[]): string;
declare enum MessageType {
    None = 0,
    Bad = 1,
    Good = 2,
    Miss = 3,
    Attack = 4,
    Stat = 5,
    Skill = 6,
}
declare enum Message {
    AberrantCreatureDroppedItem = 0,
    AboutHours = 1,
    AddFuel = 2,
    AddToQuickslot = 3,
    AddedFuelToFire = 4,
    AddedFuelToTorch = 5,
    Advanced = 6,
    AllSavedContentRemoved = 7,
    AlreadyFullyRepaired = 8,
    AlreadyWaterInStill = 9,
    AppearsToBeDawn = 10,
    AppearsToBeDusk = 11,
    AppearsToBeMidDay = 12,
    AppearsToBeNight = 13,
    AreYouSureYouWantToSail = 14,
    ArmorAppearedResistant = 15,
    ArmorAppearedVulnerable = 16,
    ArmorProtectedFromInjuryAgainst = 17,
    Attack = 18,
    AttemptToPlaceAllOnGround = 19,
    AttemptedToDropAllIntoFire = 20,
    AutomaticallySavingGame = 21,
    AwakeToFindYourself = 22,
    Back = 23,
    BadlyBurnedLostHealth = 24,
    BecomingMoreAgile = 25,
    BeginSleeping = 26,
    BeginUsingRaft = 27,
    Belt = 28,
    BleedingHasStopped = 29,
    BleedingProfusely = 30,
    BleedingToDeathLostHealth = 31,
    Blunt = 32,
    BrokeIntoPieces = 33,
    BrokenOnImpact = 34,
    BrokenWhileFiring = 35,
    Build = 36,
    BurningToDeath = 37,
    By = 38,
    ByBleedingOut = 39,
    ByEatingSomethingBad = 40,
    ByPoisoning = 41,
    BySteppingOnA = 42,
    BySteppingOnTrap = 43,
    Cancel = 44,
    CannotBePreserved = 45,
    CannotBeReinforced = 46,
    CannotBeRepaired = 47,
    CannotBeTransmogrified = 48,
    CannotBuildHere = 49,
    CannotCraftHere = 50,
    CannotDigHere = 51,
    CannotDropHere = 52,
    CannotEquipThatThere = 53,
    CannotFishFor = 54,
    CannotGatherFromWhileOnFire = 55,
    CannotGatherHere = 56,
    CannotImproveGrowingSpeed = 57,
    CannotPickUpWhileLit = 58,
    CannotPickUpWithItemsInside = 59,
    CannotPickupWhenFull = 60,
    CannotPlaceContainerInItself = 61,
    CannotPlaceHere = 62,
    CannotPlaceThatFromHere = 63,
    CannotPlaceThatHere = 64,
    CannotPlantHere = 65,
    CannotRestHere = 66,
    CannotSeeHere = 67,
    CannotSleepHere = 68,
    CannotStartFireHere = 69,
    CarryingTooMuchWeight = 70,
    CarvedUpCorpse = 71,
    CastYourLine = 72,
    Category = 73,
    CaughtFish = 74,
    Chest = 75,
    ClearMessages = 76,
    CloseDoor = 77,
    Consumed = 78,
    Container = 79,
    Cook = 80,
    Cooked = 81,
    Corpse = 82,
    CorruptSaveDetected = 83,
    CouldNotDecipher = 84,
    Craft = 85,
    Crafted = 86,
    Crafts = 87,
    CreatureAppears = 88,
    CreatureAppearsHealthy = 89,
    CreatureAppearsUnhealthy = 90,
    CreatureIsAtPercentHealth = 91,
    CreatureLooksBarelyHurt = 92,
    CreatureLooksHealthyAndUndamaged = 93,
    CreatureLooksInjured = 94,
    CreatureLooksSeverelyDamaged = 95,
    CreatureSeemsHurt = 96,
    CreatureSeemsInjured = 97,
    CreatureSeemsUnimpaired = 98,
    CuredYourPoison = 99,
    DailyChallengeMode = 100,
    DamageAppearedEffective = 101,
    DamageAppearedIneffective = 102,
    DamagedByPouringWater = 103,
    DealtNoDamageToYou = 104,
    DefaultGameName = 105,
    DependencyIssue = 106,
    DestroyedFromUse = 107,
    DestroyedGrowingByPickingItUp = 108,
    DidNotSeemToBeHurting = 109,
    Disassemble = 110,
    DiscoveredCaveEntrance = 111,
    DiscoveredInTheBottle = 112,
    DoNotForgetToAddRequiredModsOnWorkshop = 113,
    DoNotHaveTreasureMaps = 114,
    DrewSurroundings = 115,
    Drink = 116,
    Drop = 117,
    DropAll = 118,
    DropAllOfSameQuality = 119,
    DroppedAllIntoDepths = 120,
    DroppedIntoDepths = 121,
    DroppedIntoFire = 122,
    DueToDehydration = 123,
    DueToStarvation = 124,
    DugTreasureOut = 125,
    DumpContentsOfContainerInInventory = 126,
    DyingOfDehydration = 127,
    EarnedMilestone = 128,
    EquipTo = 129,
    EquipmentProtectedYouFromHeat = 130,
    ErrorHasOccured = 131,
    Expert = 132,
    ExtinguishedFire = 133,
    ExtinguishedTorch = 134,
    FailedToAddFuelToTorch = 135,
    FailedToCatchFish = 136,
    FailedToCauseDamage = 137,
    FailedToDrawMap = 138,
    FailedToPickLock = 139,
    FailedToPlant = 140,
    FailedToPreserve = 141,
    FailedToReinforce = 142,
    FailedToRepair = 143,
    FailedToStartFire = 144,
    FailedToTransmogrify = 145,
    FarAwayFromTreasure = 146,
    Feet = 147,
    FeltBurningPainLostHealth = 148,
    FewMinutes = 149,
    Filled = 150,
    FilledFrom = 151,
    FinalizingWorld = 152,
    Fire = 153,
    FireAlmostExtinguished = 154,
    FireFacingYouIsWarm = 155,
    FireIsHealthy = 156,
    FireIsRaging = 157,
    FireIsStruggling = 158,
    FireSource = 159,
    FiredIntoObstacle = 160,
    FirstQuarterOfDay = 161,
    FirstQuarterOfNight = 162,
    Food = 163,
    FoodAlreadyPreserved = 164,
    FourthQuarterOfDay = 165,
    FourthQuarterOfNight = 166,
    FullyDecodedMap = 167,
    GainedHealth = 168,
    GainedHunger = 169,
    GainedStamina = 170,
    GainedThirst = 171,
    GameHasBeenSavedIsTakingUpMB = 172,
    Gather = 173,
    GeneratingWorld = 174,
    GettingStronger = 175,
    GrabAll = 176,
    Group = 177,
    Hands = 178,
    HasBeenHurtByATrap = 179,
    HasBeenHurtByYourTrap = 180,
    HasDecayed = 181,
    HasHitYouForDamage = 182,
    HasSplit = 183,
    Head = 184,
    Held = 185,
    Help = 186,
    Hints = 187,
    HintsDisabled = 188,
    HintsEnabled = 189,
    HitForDamage = 190,
    Hour = 191,
    Hours = 192,
    HowDoYouWantToExportSave = 193,
    HurtHandsByGatheringWithNoTool = 194,
    HurtHandsHittingWithoutWeapons = 195,
    InExactLocationOfTreasure = 196,
    InNeedOfRepair = 197,
    IncompatibleVersion = 198,
    InjuredFromTrap = 199,
    Inspect = 200,
    Intermediate = 201,
    Inventory = 202,
    Jump = 203,
    Killed = 204,
    LabelAttackFromTactics = 205,
    LabelAuthor = 206,
    LabelBase = 207,
    LabelBaseAttack = 208,
    LabelBaseDefense = 209,
    LabelBluntResist = 210,
    LabelDecay = 211,
    LabelDefense = 212,
    LabelDefenseFromParrying = 213,
    LabelDoodadRequired = 214,
    LabelDurability = 215,
    LabelEquip = 216,
    LabelFireResist = 217,
    LabelGrouping = 218,
    LabelHave = 219,
    LabelLastUpdated = 220,
    LabelLeftHandAttack = 221,
    LabelLevel = 222,
    LabelMaximumWeight = 223,
    LabelOnEquip = 224,
    LabelPiercingResist = 225,
    LabelRange = 226,
    LabelRanged = 227,
    LabelRangedAttack = 228,
    LabelRangedDamage = 229,
    LabelRequiredMods = 230,
    LabelRequires = 231,
    LabelResists = 232,
    LabelRightHandAttack = 233,
    LabelSkill = 234,
    LabelSlashingResist = 235,
    LabelUse = 236,
    LabelUses = 237,
    LabelVersion = 238,
    LabelVulnerabilities = 239,
    LabelWeight = 240,
    LabelWeightReduction = 241,
    LastPlaceYouLeftOff = 242,
    LearnedHowToCreate = 243,
    LeftHand = 244,
    Legs = 245,
    LoadingMods = 246,
    LoadingSprites = 247,
    LoadingWorld = 248,
    LocalFile = 249,
    LocalVersionOfModDetected = 250,
    LoseBonesLayBleaching = 251,
    LoseEndIsBeginning = 252,
    LoseSadlyNoTrace = 253,
    LostHealth = 254,
    LostHunger = 255,
    LostStamina = 256,
    LostThirst = 257,
    MapNotOfThisArea = 258,
    MaterialsDestroyed = 259,
    MetabolismSlowed = 260,
    MilestoneIsHidden = 261,
    MilestoneIsInvisible = 262,
    MissedWith = 263,
    MissingRequiredMods = 264,
    ModLoadError = 265,
    ModRequiresItself = 266,
    ModWithNameAlreadyExists = 267,
    MonsterIdolAttractedCreature = 268,
    MoveAllOfSameQualityToInventory = 269,
    MoveAllOfSameQualityToOpenedContainer = 270,
    MoveAllToInventory = 271,
    MoveAllToOpenedContainer = 272,
    MoveOverTrapButDoNotSetOff = 273,
    MoveToInventory = 274,
    MoveToOpenedContainer = 275,
    MustCastIntoWater = 276,
    Mysteriously = 277,
    Name = 278,
    Neck = 279,
    NeedAShovelToDigTreasure = 280,
    NeedDeeperWaterForRaft = 281,
    NeedFishingNetForTreasure = 282,
    NeedToBuildUpLandAround = 283,
    NeedToEquipToShoot = 284,
    NeedToStartTravelsOutside = 285,
    Newest = 286,
    No = 287,
    NoAmmunitionForThatWeapon = 288,
    NoBlackPowderToFireWeapon = 289,
    NoFireToStokeWith = 290,
    NoFishAtLocation = 291,
    NoFuelItemsToStartFire = 292,
    NoInkToDrawMap = 293,
    NoKindlingToStartFire = 294,
    NoLongerFeelPainOfBurning = 295,
    NoMoreRoomInContainer = 296,
    NoRoomToDrop = 297,
    NoTinderToStartFire = 298,
    NoWaterInStill = 299,
    NoWhereNearTreasure = 300,
    None = 301,
    NotAvailable = 302,
    NotEnoughFoodToTravel = 303,
    NotEnoughPurifiedWaterYet = 304,
    NotEnoughStrengthToThrow = 305,
    NotEnoughTreasureToReturn = 306,
    NotFacingLockedObject = 307,
    NotFacingValidFoodForPreservation = 308,
    NotFacingValidItemForReinforcement = 309,
    NotFacingValidItemForRepair = 310,
    NotFacingValidItemToTransmogrify = 311,
    NotInRangeOfTreasure = 312,
    NothingHereToCarve = 313,
    NothingHereToFill = 314,
    NothingHereToGardenWith = 315,
    NumberEight = 316,
    NumberFive = 317,
    NumberFour = 318,
    NumberNine = 319,
    NumberOne = 320,
    NumberSeven = 321,
    NumberSix = 322,
    NumberTen = 323,
    NumberThree = 324,
    NumberTwo = 325,
    ObjectIsLocked = 326,
    Ok = 327,
    Oldest = 328,
    OpenDoor = 329,
    OverEatingLostStamina = 330,
    OverHydratingLostStamina = 331,
    PaperTurnedToMush = 332,
    PartiallyDecodedMap = 333,
    PastExperiencesProvideBenefits = 334,
    PickupItem = 335,
    PickupObject = 336,
    Piercing = 337,
    Place = 338,
    PlacedOnGround = 339,
    Plant = 340,
    PlantIsFertile = 341,
    PlantIsNotFertile = 342,
    PlantVeryHealthy = 343,
    PlantedInGround = 344,
    PoisonWorkedItsCourse = 345,
    Poisoned = 346,
    PoisonedLostHealth = 347,
    PouredOutWater = 348,
    PouredWaterIntoStill = 349,
    PreservedFood = 350,
    PublishingMod = 351,
    PurifiedWaterInStill = 352,
    RefreshingMods = 353,
    Reinforce = 354,
    RemoveFromQuickslot = 355,
    RemovedBlood = 356,
    Repair = 357,
    RequiredModsMissingWantToContinue = 358,
    RequiredModsNotLoaded = 359,
    RequiresFacingFireSource = 360,
    RequiresFireToBeLit = 361,
    RequiresYouToBeFacingToCraft = 362,
    Rest = 363,
    RestInterrupted = 364,
    Rested = 365,
    Resting = 366,
    ReturnToTitleScreenNoSaveInDailyChallenge = 367,
    ReturnToTitleScreenProgressWillBeSaved = 368,
    ReturnedToCivilization = 369,
    ReturningToCivilizationSetOffAgain = 370,
    RightHand = 371,
    SailedToCivilization = 372,
    SavingGame = 373,
    ScrollProvidedNoUsefulInsight = 374,
    SeaweedFromWater = 375,
    SecondQuarterOfDay = 376,
    SecondQuarterOfNight = 377,
    SeeGrowing = 378,
    SeemsToHaveDrawnEnergy = 379,
    SetTrapOffButNoDamage = 380,
    SetUp = 381,
    ShadowInTheWater = 382,
    Simple = 383,
    Skill = 384,
    SkillHasRaised = 385,
    Slashing = 386,
    SleepInterrupted = 387,
    Sleeping = 388,
    Slept = 389,
    SoilWouldHaveNoEffect = 390,
    SomethingInTheWayOfCarving = 391,
    SomethingInTheWayOfDigging = 392,
    SomethingInTheWayOfDiggingCarveFirst = 393,
    SomethingInTheWayOfFishing = 394,
    SomethingInTheWayOfPlacing = 395,
    SoothedYourBurningPain = 396,
    Sort = 397,
    SortedByCategory = 398,
    SortedByGroup = 399,
    SortedByName = 400,
    SortedByNewest = 401,
    SortedByOldest = 402,
    SortedBySkill = 403,
    SortedByWeight = 404,
    StaminaIsFull = 405,
    StartTravelInWater = 406,
    StartedFire = 407,
    StarvingToDeath = 408,
    SteamWorkshop = 409,
    SteppingOnHasInjuredYouForDamage = 410,
    StillHasNoWaterToPurify = 411,
    StirredUpCreature = 412,
    StopUsingRaft = 413,
    StoppedYourBleeding = 414,
    SummonedGuardiansByDiggingTreasure = 415,
    SunIsRising = 416,
    SunIsSetting = 417,
    SunNotBrightEnoughToStartFire = 418,
    Talent = 419,
    TeleportBlocked = 420,
    Teleported = 421,
    ThereIsNoSunToStartFire = 422,
    ThirdQuarterOfDay = 423,
    ThirdQuarterOfNight = 424,
    ThisContains = 425,
    Throw = 426,
    ThrownIntoDepths = 427,
    ThrownIntoObstacle = 428,
    TooDamaged = 429,
    TooExhaustedToJump = 430,
    ToolAppearedEffectiveForGathering = 431,
    TrampleIntoGround = 432,
    TrampledFire = 433,
    TrampledIntoGround = 434,
    Trampling = 435,
    Transmogrified = 436,
    TravelAway = 437,
    TravelToFarOffLands = 438,
    TreasureIsBlocked = 439,
    URLHasOpenedInWebBrowser = 440,
    UnEquip = 441,
    UnableToLoadRequiredMods = 442,
    UnknownItem = 443,
    UnlockedChest = 444,
    UnpurifiedWaterInStill = 445,
    UpdatingMod = 446,
    UsedSoilToIncreaseFertility = 447,
    UsedSoilToSpeedUpGrowing = 448,
    UsingBareFistsToFight = 449,
    UsingBareHandsToGather = 450,
    WaitUntilFireCooledToGetWater = 451,
    WalkingDistanceOfTreasure = 452,
    WantToDeleteAllSavedData = 453,
    WantToDeleteThisGame = 454,
    WantToPublishThisMod = 455,
    WantToPublishUpdateToMod = 456,
    WantToUninstallThisMod = 457,
    Water = 458,
    WaterDoesNotNeedDesalination = 459,
    WaterIncreaseFertilityOfPlant = 460,
    WaterPutOutFire = 461,
    WaterWouldHaveNoEffect = 462,
    Weight = 463,
    WinFindWayBackToCivilization = 464,
    WinSailBackWithRiches = 465,
    WinTravelledBackToCivilization = 466,
    With = 467,
    WorkingYourselfIntoExhaustion = 468,
    WorkshopHasBeenOpenedPressOkAfter = 469,
    Yes = 470,
    YouAte = 471,
    YouBeginResting = 472,
    YouCrafted = 473,
    YouDied = 474,
    YouDisassembled = 475,
    YouDrank = 476,
    YouEquip = 477,
    YouFailedTo = 478,
    YouFire = 479,
    YouGathered = 480,
    YouHaveKilled = 481,
    YouOpen = 482,
    YouPickedUp = 483,
    YouSalvaged = 484,
    YouSee = 485,
    YouThrew = 486,
    YouUnequip = 487,
    YouUsed = 488,
    YourFist = 489,
}
declare var equipTypeToMessage: Message[];
declare var recipeLevelToMessage: Message[];
declare var damageTypeToMessage: Message[];
interface IMessages {
    [index: number]: string;
}
declare var messages: IMessages;
declare namespace TileEvent {
    interface ITileEventDescription extends Item.IObjectDescription {
        spreadMax: number;
    }
    interface ITileEvent {
        type: Type;
        spread: number;
        decay: number;
        x: number;
        y: number;
        z: number;
    }
    var tileEvents: ITileEventDescription[];
    enum Type {
        None = 0,
        Fire = 1,
    }
    function create(type: Type, x: number, y: number, z: number): ITileEvent;
    function remove(tileEventId: number): void;
    function updateAll(tileEvents2: ITileEvent[]): void;
}
declare namespace Item {
    var lootGroup: ItemType[][];
    var groups: IGroupDescription[];
    var actionDescriptions: IActionDescription[];
    var defines: IItemDescription[];
    function RecipeComponent(type: (ItemType | ItemTypeGroup), requiredAmount: number, consumedAmount: number, disassembleAmount?: number): number[];
    function generateLookups(): void;
}
interface ITile {
    monsterId: number;
    doodadId: number;
    corpseIds: number[];
    eventId: number;
    data: number;
}
interface ITileArray {
    [index: number]: ITile;
}
interface ITileContainer extends Item.IContainer {
    x: number;
    y: number;
    z: number;
}
interface ITileData {
    type: TerrainType;
    strength?: number;
    minDur?: number;
    maxDur?: number;
    quality?: string;
    gfx?: number;
}
interface ITerrainDescription {
    name?: string;
    passable?: boolean;
    particles: number[];
    durability?: number;
    water?: boolean;
    regathered?: boolean;
    shallowWater?: boolean;
    freshWater?: boolean;
    gather?: boolean;
    noGfxSwitch?: boolean;
    noLos?: boolean;
    flammable?: boolean;
    skill?: SkillType;
    sound?: SfxType;
    strength?: number;
    leftOver?: TerrainType;
    terrainType?: TerrainType;
    doodad?: DoodadType;
    isMountain?: boolean;
    background?: TerrainType;
    noBackground?: boolean;
    mod?: number;
    isOre?: boolean;
}
declare var resource: any[];
declare var terrains: ITerrainDescription[];
/**
 * Resource definitions
 * Item drop, chance, <tile to transform into>, <chance for tile to turn - if not set = 100%>
 * NOTE: For regathered tiles above, make sure their equivalent item is in position [0] in their resource array.
 * This is so that we can force a regather of the placed tile.
 */
interface ITerrainResource {
    item: ItemType;
    itemChance: number;
    tileToTransform?: TerrainType;
    tileToTransformChance?: number;
}
declare enum TileTemplateType {
    House = 0,
    Pond = 1,
    CavePond = 2,
    Desert = 3,
    Beach = 4,
    Boat = 5,
}
interface ITemplate {
    w: number;
    h: number;
    terrainTypes: {
        [id: string]: TerrainType;
    };
    terrain: Array<string>;
    doodadTypes?: {
        [id: string]: DoodadType;
    };
    doodad?: Array<string>;
    degrade: number;
}
declare var templates: {
    [id: number]: {
        [id: string]: ITemplate;
    };
};
declare enum MilestoneType {
    Abnormalizer = 0,
    Chef = 1,
    Extincteur = 2,
    Crafter = 3,
    Gardener = 4,
    Gatherer = 5,
    Hunter = 6,
    Locksmith = 7,
    ReaperOfSouls = 8,
    Survivor = 9,
    Thrower = 10,
    Trapper = 11,
    TreasureHunter = 12,
    Collector = 13,
    Explorer = 14,
    Grandmaster = 15,
    Prepared = 16,
    Doctor = 17,
}
declare enum MilestoneVisibilityType {
    Visible = 0,
    Invisibile = 1,
    Hidden = 2,
}
declare enum MilestoneDataType {
    Counter = 0,
    Check = 1,
}
interface IMilestone {
    name?: string;
    description?: string;
    amount: number;
    skills?: SkillType[];
    dataType?: MilestoneDataType;
}
interface IMilestoneData {
    amount: number;
    type?: MilestoneVisibilityType;
    data?: any[];
}
declare var milestones: IMilestone[];
declare var milestoneData: IMilestoneData[];
declare var english: Languages.Language;
declare class ByteGrid {
    width: number;
    height: number;
    size: number;
    data: Uint8Array;
    constructor(width: number, height?: number);
    get(x: number, y: number): number;
    set(x: number, y: number, value: number): void;
    clear(): void;
}
declare class FieldOfView {
    private gl;
    radius: number;
    private subdivisions;
    static hBlurProgram: CompiledProgram;
    static vBlurProgram: CompiledProgram;
    private static shaderProgram;
    maxRadius: number;
    texLight: WebGLTexture;
    texLightOld: WebGLTexture;
    disabled: boolean;
    blurEnabled: boolean;
    computeOffset: Vec2;
    private renderer;
    private texLight01;
    private texLight02;
    private texBlurStorage;
    private framebuffer1;
    private framebuffer2;
    private viewQuadBuffer;
    static compileShaders(gl: WebGLRenderingContext): void;
    constructor(gl: WebGLRenderingContext, radius: number, subdivisions?: number);
    getTextureSize(): number;
    getSubdivisions(): number;
    compute(lightBlocking?: boolean): void;
    createDebugRenderer(): FieldOfViewDebugRenderer;
    getRadiusModifier(tileX: number, tileY: number): number;
    canSeeTile(tileX: number, tileY: number): boolean;
    computeLights(): void;
    getBounds(): Bound2;
    private updateExplored();
    private bresenham(x0, y0, x1, y1);
}
interface TextureDebugRenderer {
    renderDebug(): void;
}
declare class FieldOfViewDebugRenderer implements TextureDebugRenderer {
    private fov;
    private gl;
    private viewQuadBuffer;
    private viewQuadBuffer2;
    private shaderProgramAlphaDebug;
    constructor(gl: WebGLRenderingContext, fov: FieldOfView);
    renderDebug(): void;
}
declare class FlowField {
    fieldWater: ByteGrid;
    fieldLand: ByteGrid;
    fieldFlying: ByteGrid;
    tileX: number;
    tileY: number;
    size: number;
    delegate: DebugRendererDelegate;
    constructor(radius: number);
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isInFlowField(worldX: number, worldY: number): boolean;
    getMoveDirection(worldX: number, worldY: number, moveType: MoveType): FacingDirection;
    getOpposingMoveDirection(worldX: number, worldY: number, moveType: MoveType): FacingDirection;
    setCenter(worldX: number, worldY: number): void;
    update(): void;
    private flowFieldFromMoveType(moveType);
    private getMovePenaltyForType(worldX, worldY, moveType);
    private updateField(field, moveType);
}
interface DebugRendererDelegate {
    update(): void;
}
declare class FlowFieldDebugRenderer implements TextureDebugRenderer {
    private ff;
    private gl;
    private viewQuadBuffer;
    private shaderProgramAlphaDebug;
    private tex;
    constructor(gl: WebGLRenderingContext, ff: FlowField);
    update(): void;
    renderDebug(): void;
}
declare namespace UI {
    interface IUiScreen {
        selector(): string;
        bindElements(): void;
        unbindElements(): void;
        show(data?: any): void;
        hide(): void;
        onGameEnd(showBlocker: boolean): void;
        isVisible(): void;
        onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean;
        onKeyUp(event: JQueryEventObject): void;
    }
    interface IDialogInfo {
        id?: string;
        title?: string;
        open?: boolean;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        minWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        maxWidth?: number;
        canResizeHeight?: boolean;
        onResizeStop?: () => void;
    }
    enum MouseButton {
        Primary = 0,
        Middle = 1,
        Secondary = 2,
        Touch = 26,
    }
    class Ui implements IPropSerializable {
        dialogInfo: {
            [index: string]: IDialogInfo;
        };
        dialogContainerInfo: IDialogInfo[];
        quickSlotInfo: ItemType[];
        containerSortInfo: {
            [index: string]: SortType;
        };
        private keyState;
        private mouseState;
        private rebindingKey;
        private rebindingKeyElement;
        private mousePlayerDirection;
        private touchPlayerDirection;
        private elementDocument;
        private elementWindow;
        private elementBody;
        private screen;
        private screenId;
        private screenLoading;
        private screenOptions;
        private screenConfirm;
        private screenHelp;
        private screenInGame;
        private screenTitle;
        private objectUrl;
        private currentHint;
        constructor();
        initialize(): void;
        initializeGameState(): void;
        getBody(): JQuery;
        getWidth(): number;
        getHeight(): number;
        appendStyle(id: string, styleContent: string): void;
        playClickSound(): void;
        switchToScreen(screenId: ScreenId, titleScreenId?: TitleScreenId): void;
        showLoadingScreen(loadingType?: LoadingType): void;
        setLoadingMessage(message: Message): void;
        showLoadingScreenAround(func: () => void): void;
        hideLoadingScreen(): void;
        toggleOptions(): void;
        showOptionsScreen(): void;
        hideOptionsScreen(): void;
        onWindowResize(): void;
        onUpdateWindowMode(): void;
        launchFullScreen(): void;
        cancelFullscreen(): void;
        isInGameScreenShown(): boolean;
        onKeyDown(event: JQueryEventObject): void;
        onKeyUp(event: JQueryEventObject): void;
        setMouseDown(mouseCode: MouseButton, isDown: boolean): void;
        isMouseDown(mouseCode: MouseButton): boolean;
        getMouseDownTime(mouseCode: MouseButton): number;
        setRebindingKey(key: KeyBind, element: JQuery): void;
        getRebindingKeyElement(): JQuery;
        isKeyDown(key: KeyBind): boolean;
        getKeyDownTime(key: KeyBind): number;
        setKeyDown(key: KeyBind, pressed: boolean): void;
        getKeyBind(key: KeyBind): number;
        setKeyBind(key: KeyBind, value: number): void;
        clearKeyBind(key: KeyBind): void;
        getStringForKeyBind(key: KeyBind): string;
        getMousePlayerDirection(): FacingDirection;
        setMousePlayerDirection(playerDirection: FacingDirection): void;
        getTouchPlayerDirection(): FacingDirection;
        setTouchPlayerDirection(playerDirection: FacingDirection): void;
        setupItemBackgrounds(): void;
        refreshStats(): void;
        refreshAttributes(): void;
        loadQuickSlots(): void;
        isOverlayShown(): boolean;
        isConfirmOverlayShown(): boolean;
        isOptionsOverlayShown(): boolean;
        isHelpOverlayShown(): boolean;
        isHelpOverlayEnabled(): boolean;
        isOptionsOverlayEnabled(): boolean;
        showTitleScreen(): void;
        refreshSlots(): void;
        displayConfirmDialog(message: Message, buttons: Message[], callback: (selection: Message) => void): void;
        displayHint(hintType: HintType, force?: boolean): void;
        getCurrentHint(): HintType;
        setCurrentHint(hintType: HintType): void;
        toggleHelp(): void;
        hideHelpScreen(): void;
        messageIdToText(message: Message): string;
        displayMessage(message: Message, messageType?: MessageType, ...args: any[]): void;
        getMessageCount(): number;
        removeOldestMessage(): void;
        updateMilestonesDialog(): void;
        updateSkillsDialog(): void;
        updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
        getInventoryItemOrder(): any[];
        updateItem(item: Item.IItem): void;
        hideActionsMenu(): void;
        openMapDialog(): void;
        setFontStyle(): void;
        updateKeybind(key: KeyBind, element: JQuery): void;
        addOptionsSection(elementId: string, sectionName: string): JQuery;
        removeOptionsSection(sectionName: string): void;
        createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
        toggleDialog(dialog: JQuery): boolean;
        openDialog(dialog: JQuery): boolean;
        closeDialog(dialog: JQuery): boolean;
        setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
        setQuickSlot(quickSlot: number, itemId: number, internal?: boolean): void;
        updateQuickSlotItem(quickSlot: number): void;
        removeItemFromQuickSlot(itemId: number): void;
        removeItemFromEquipSlot(itemId: number, internal?: boolean): void;
        isManageModsVisible(): boolean;
        refreshModManager(): any;
        revokeObjectUrl(): void;
        setObjectUrl(objectUrl: string): void;
        runHotKeys(): void;
        pressHotKey(hotKeyNumber: number, hotKey: KeyBind): void;
        onGameEnd(showBlocker: boolean): void;
        highlightElement(element: JQuery, timeout: number): void;
        getSerializationProperties(version: string): string[];
        openContainer(container: Item.IContainer, containerName?: string): void;
        closeContainer(container: Item.IContainer): void;
        isContainerOpen(container: Item.IContainer): boolean;
        closeStaticContainers(): any;
        addItemToContainer(item: Item.IItem, container: Item.IContainer, internal?: boolean, isAddingMultipleItems?: boolean): void;
        afterAddingMultipleItemsToContainer(container: Item.IContainer): void;
        removeItemFromContainer(item: Item.IItem, container: Item.IContainer): void;
        getDialogInfo(dialogId: DialogId): IDialogInfo;
    }
}
interface JQuery {
    functionalTooltip(data: string): void;
    functionalTooltip(data: ITooltipOptions): ITooltip;
}
interface ITooltipOptions {
    selector: string;
    disabled?: boolean;
    trackMouse?: boolean;
    position?: ITooltipPosition;
    onOpen?: (target: JQuery) => void;
    onClose?: (target: JQuery) => void;
    onPosition?: (target: JQuery) => ITooltipPosition;
    content: (target: JQuery) => void;
}
interface ITooltip extends ITooltipOptions {
    visible: HTMLElement;
    lastEvent: string;
    element: HTMLElement;
    width: number;
    height: number;
}
interface ITooltipPosition {
    startAtRight?: boolean;
    startAtBottom?: boolean;
    centerX?: boolean;
    centerY?: boolean;
    leftOffset?: number;
    topOffset?: number;
    clampRight?: boolean;
}
declare var tooltips: {
    [index: number]: ITooltip;
};
declare var tooltipsMap: {
    [index: string]: number;
};
declare var globalTooltipId: number;
declare module MapGen {
    interface IMapGen {
        generateWorld(generateNewWorld: boolean): void;
    }
    function generateWorld(generateNewWorld: boolean, callback: () => void): void;
    function initialize(callback: () => void): void;
    function setFinishedLoading(): void;
    function spawnHouseItem(x: number, y: number, z: number): void;
    function spawnShoreItem(x: number, y: number, z: number): void;
    function spawnDoodad(tileType: TerrainType, x: number, y: number, z: number, afterMapGen?: boolean): void;
    function spawnTemplate(templateType: TileTemplateType, templateX: number, templateY: number, templateZ: number): void;
}
declare var globalRequire: (path: string) => any;
declare module Steamworks {
    interface ISteamId {
        accountId: number;
        screenName: string;
        staticAccountId: string;
    }
    interface IWorkshopItem {
        file: string;
        fileName: string;
        isUpdated: boolean;
        timeCreated: number;
        timeUpdated: number;
        title: string;
        description: string;
        banned: boolean;
        acceptedForUse: boolean;
        publishedFileId: string;
        steamIDOwner: string;
    }
    function isElectron(): boolean;
    function isGreenworksEnabled(): boolean;
    function getAbsolutePath(p: string): any;
    function isLinux(): boolean;
    function initialize(): void;
    function initializeMods(callback: () => void): void;
    function getSteamId(): ISteamId;
    function getPublishedMods(): IWorkshopItem[];
    function getPublishedMod(publishFileId: string): IWorkshopItem;
    function fillOutMod(index: number, item?: IWorkshopItem): void;
    function publishMod(modIndex: number, callback: (err: string, publishedFileId: string) => void): void;
    function createArchive(id: string, source: string, callback: (err: string) => void): void;
    function getPublishedItems(callback: (err: string, items: IWorkshopItem[]) => void): void;
    function openUrl(url: string): void;
    function openWorkshop(publishId?: string): void;
    function openModFolder(): void;
    function openLogsFolder(): void;
    function unsubscribe(publishId: string, callback: (err: string) => void): void;
    function sendMessage(name: string, data: string): void;
    function toggleDeveloperTools(): void;
    function getModPath(name: string, modType: Mods.Type, file?: string): string;
    function createSaveGameMod(name: string, slot: number, callback: (success: boolean) => void): void;
    function deleteSaveGameMod(name: string): void;
    function debugLog(...args: any[]): void;
}
declare module Mods {
    enum Hook {
        CalculateMonsterMoveType = 0,
        CanConsumeItem = 1,
        CanMonsterAttack = 2,
        CanMonsterMove = 3,
        CanSeeMonster = 4,
        GetMonsterSpriteBatchLayer = 5,
        GetPlayerSpriteBatchLayer = 6,
        IsPlayerSwimming = 7,
        OnAddOrUpdateInventoryItem = 8,
        OnBuild = 9,
        OnCreateWorld = 10,
        OnDisplayMessage = 11,
        OnGameEnd = 12,
        OnGameStart = 13,
        OnItemEquip = 14,
        OnKeyBindPress = 15,
        OnKeyDown = 16,
        OnKeyUp = 17,
        OnMonsterDeath = 18,
        OnMouseDown = 19,
        OnMouseMove = 20,
        OnMouseScroll = 21,
        OnMouseUpOrLeave = 22,
        OnMove = 23,
        OnMoveDirectionUpdate = 24,
        OnNoInputReceived = 25,
        OnShowInGameScreen = 26,
        OnSpawnMonsterFromGroup = 27,
        OnTurnComplete = 28,
        OnTurnStart = 29,
        PostGenerateWorld = 30,
        PostRender = 31,
        PreRender = 32,
        PreRenderWorld = 33,
        ProcessInput = 34,
        ShouldRender = 35,
    }
    abstract class BaseMod {
        private index;
        private optionSectionId;
        private allocatedEnums;
        constructor(index: number);
        getName(): string;
        createOptionsSection(sectionName: string): JQuery;
        removeOptionsSection(sectionName: string): void;
        createDialog(container: JQuery, dialogInfo: UI.IDialogInfo): JQuery;
        getDialog(title: string): JQuery;
        addActionType(name: string, description: string, callback: ActionCallback): number;
        addItem(description: Item.IItemDescription): number;
        addMonster(description: IMonsterDescription): number;
        addTerrain(description: ITerrainDescription, terrainType?: number): number;
        addTerrainResource(terrainType: number, terrainResource: ITerrainResource[]): void;
        addDoodad(description: Doodad.IDoodadDescription): number;
        addMessage(name: string, message: string): number;
        addKeyBind(name: string, defaultKeyCode: number): number;
        itemNameToObjectType(name: string): ItemType;
        getItemByType(itemType: ItemType): Item.IItemDescription;
        getItemByName(name: string): Item.IItemDescription;
        /**
         * This is called internally after unloading a mod
         */
        unallocateEnums(): void;
        private allocateEnum(enumName, name, object?, objectValue?, onAllocate?, onUnallocate?);
        private unallocateEnum(enumInfo);
    }
    abstract class Mod extends BaseMod {
        /**
         * Called when the mod is initialized (mod files are read/loaded when the title screen loads)
         * @param saveDataGlobal The save data object you previously saved via onInitialize()
         * @returns An object containing the data you want to save (saved globally, not per slot)
         */
        abstract onInitialize(saveDataGlobal: any): any;
        /**
         * Called when the mod is loaded called after a player starts/loads a world.
         * Called before the world is loaded
         * @param saveData The save data object you previously saved via onSave()
         */
        abstract onLoad(saveData: any): void;
        /**
         * Called when the mod is unloaded
         */
        abstract onUnload(): void;
        /**
         * Called when the game is saved or the mod is unloaded
         * This will be called before onUnload
         * @returns An object containing the data you want to save
         */
        abstract onSave(): any;
        /**
         * Called when the game is calculating the move type of a monster
         * @param monsterId The monster id
         * @param monster The monster object
         * @param moveType The monsters move type
         * @returns The move type the monster should use or undefined to use the default logic
         */
        calculateMonsterMoveType(monsterId: number, monster: IMonster, moveType: MoveType): MoveType;
        /**
         * Called before consuming an item
         * @param itemType The item type
         * @param actionType The action type
         * @returns True if the player can consume the item, false if the player cannot consume the item, or undefined to use the default logic
         */
        canConsumeItem(itemType: ItemType, actionType: ActionType): boolean;
        /**
         * Called before a monster attacks
         * @param monsterId The monster id
         * @param monster The monster object
         * @returns False if the monster cannot attack, or undefined to use the default logic
         */
        canMonsterAttack(monsterId: number, monster: IMonster): boolean;
        /**
         * Called when a monster tries to move
         * @param monsterId The monster id
         * @param monster The monster object
         * @param tile The tile the monster is trying to move to
         * @param moveType The monsters move type
         * @returns True if the monster can move, false if the monster cannot move, or undefined to use the default logic
         */
        canMonsterMove(monsterId: number, monster: IMonster, tile: ITile, moveType: MoveType): boolean;
        /**
         * Called when calculating monsters in the viewport
         * @param monsterId The monster id
         * @param monster The monster object
         * @param tile The tile the monster is on
         * @returns False if the player should not see the monster or undefined to use the default logic
         */
        canSeeMonster(monsterId: number, monster: IMonster, tile: ITile): boolean;
        /**
         * Called when rendering monsters in the viewport
         * @param monsterId The monster id
         * @param monster The monster object
         * @param batchLayer The batch layer the monster will render in
         * @returns The batch layer the monster should render in or undefined to use the default logic
         */
        getMonsterSpriteBatchLayer(monsterId: number, monster: IMonster, batchLayer: SpriteBatchLayer): SpriteBatchLayer;
        /**
         * Called when rendering the player in the viewport
         * @param player The player object
         * @param batchLayer The batch layer the player will render in
         * @returns The batch layer the player should render in or undefined to use the default logic
         */
        getPlayerSpriteBatchLayer(player: Player, batchLayer: SpriteBatchLayer): SpriteBatchLayer;
        /**
         * Called when checking if a player is swimming
         * @param player The player object
         * @param isSwimming True if the player is swimming
         * @returns True if the player should be swimming, false if the player should not be swimming, or undefined to use the default logic
         */
        isPlayerSwimming(player: Player, isSwimming: boolean): boolean;
        /**
         * Called when an item is called to the players inventory
         * @param item The item object
         * @param container The container object the item was added to
         */
        onAddItemToInventory(item: Item.IItem, container: Item.IContainer): void;
        /**
         * Called when something is built on a tile
         * @param item The item used to build the object
         * @param tile The tile something was built on
         * @param doodad The doodad that was created on the tile
         */
        onBuild(item: Item.IItem, tile: ITile, doodad: Doodad.IDoodad): void;
        /**
         * Called right after the world is created, but before the renderer
         * @param world The world object
         */
        onCreateWorld(world: World): void;
        /**
         * Called when a message is about to be displayed to the player
         * @param message The message
         * @param messageType The message type
         * @param args The message arguments
         * @returns False to not display the message or undefined to use the default logic
         */
        onDisplayMessage(message: Message, messageType?: MessageType, ...args: any[]): boolean;
        /**
         * Called when the game is ending
         * @param playerState The ending player state
         */
        onGameEnd(playerState: PlayerState): void;
        /**
         * Called when the game is starting
         * @param isLoadingSave True if a save game was loaded
         * @param playedCount The number of times the player has played the game (globally, not per slot)
         */
        onGameStart(isLoadingSave: boolean, playedCount: number): void;
        /**
         * Called when the player equips an item to a slot
         * @param item The item being equipped
         * @param slot The slot
         */
        onItemEquip(item: Item.IItem, slot: EquipType): void;
        /**
         * Called when a keybind is pressed
         * @param keyBind The keybind
         * @returns False to cancel the keybind press or undefined to use the default logic
         */
        onKeyBindPress(keyBind: KeyBind): boolean;
        /**
         * Called when a key is pressed down
         * @param event The event object
         * @returns False to cancel the event or undefined to use the default logic
         */
        onKeyDown(event: JQueryEventObject): boolean;
        /**
         * Called when a key is let go
         * @param event The event object
         * @returns False to cancel the event or undefined to use the default logic
         */
        onKeyUp(event: JQueryEventObject): boolean;
        /**
         * Called when a monster dies
         * @param monsterId The monster id
         * @param monster The monster object
         */
        onMonsterDeath(monsterId: number, monster: IMonster): void;
        /**
         * Called when a mouse button is pressed
         * @param event The mouse event object
         * @returns False to cancel the mouse event or undefined to use the default logic
         */
        onMouseDown(event: JQueryEventObject): boolean;
        /**
         * Called when a mouse button is pressed
         * @param event The mouse event object
         * @returns False to cancel the mouse event or undefined to use the default logic
         */
        onMouseMove(event: JQueryEventObject): boolean;
        /**
         * Called when a mouse button is pressed
         * @param event The mouse event object
         * @returns False to cancel the mouse event or undefined to use the default logic
         */
        onMouseScroll(event: JQueryEventObject): boolean;
        /**
         * Called when a mouse button is let go or if the mouse leaves the screen
         * @param event The mouse event object
         * @returns False to cancel the event or undefined to use the default logic
         */
        onMouseUpOrLeave(event: JQueryEventObject): boolean;
        /**
         * Called when the player is moving
         * @param nextX The x position the player is moving to
         * @param nextY The y position the player is moving to
         * @param tile The tile the player is moving to
         * @param direction The direction the player is facing
         * @returns False to cancel the move or undefined to use the default logic
         */
        onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean;
        /**
         * Called when the player faces a different direction
         * @param direction The direction the player is now facing
         */
        onMoveDirectionUpdate(direction: FacingDirection): void;
        /**
         * Called when no input is received
         */
        onNoInputReceived(): void;
        /**
         * Called when the in game screen is shown
         */
        onShowInGameScreen(): void;
        /**
         * Called when a monster is spawned from a monster group
         * @param monsterGroup The monster group
         * @param monsterPool The pool of monsters that can be spawned
         * @param x The x position to spawn the monster
         * @param y The y position to spawn the monster
         * @param z The z position to spawn the monster
         * @returns False to cancel spawning the monster or undefined to use the default logic
         */
        onSpawnMonsterFromGroup(monsterGroup: MonsterSpawnGroup, monsterPool: MonsterType[], x: number, y: number, z: number): boolean;
        /**
         * Called when a turn is completing
         */
        onTurnComplete(): void;
        /**
         * Called when a turn is starting
         */
        onTurnStart(): void;
        /**
         * Called after the world is generating
         * @param generateNewWorld True if a new world is being generated
         */
        postGenerateWorld(generateNewWorld: boolean): void;
        /**
         * Called after rendering
         */
        postRender(): void;
        /**
         * Called before rendering
         */
        preRender(): void;
        /**
         * Called before rendering the world
         * @param tileScale The tile scale
         * @param viewWidth The width of the view port
         * @param viewHeight The height of the view port
         */
        preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
        /**
         * Called when input is being processed
         */
        processInput(): void;
        /**
         * Called when different object types are rendered
         * @returns A bitwise list of render flags or undefined to use the default logic
         */
        shouldRender(): RenderFlag;
    }
}
declare module Mods {
    enum State {
        Disabled = 0,
        Enabled = 1,
        Loaded = 2,
        Error = 3,
    }
    enum CanLoadState {
        Loadable = 0,
        Disabled = 1,
        ModLoadError = 2,
        DependencyIssue = 3,
        ModRequiresItself = 4,
        MissingRequiredMod = 5,
        CannnotLoadRequiredMod = 6,
        ReqiredModNotLoaded = 7,
        LocalModPrecedence = 8,
        IncompatibleVersion = 9,
    }
    enum Type {
        Internal = 0,
        Local = 1,
        Workshop = 2,
    }
    interface IModInfo {
        object: Mod;
        info: {
            [index: string]: any;
        };
        state: State;
        path: string;
        folderName: string;
        type: Type;
        publishedFileId: string;
        steamIDOwner: string;
        lastUpdated: string;
    }
    var modState: {
        [index: string]: Mods.State;
    };
    var saveData: {
        [index: string]: any;
    };
    var saveDataGlobal: {
        [index: string]: any;
    };
    var unloadable: {
        [index: string]: {
            name: string;
            unloadable: boolean;
        };
    };
    interface ICanLoadInfo {
        name: string;
        loadable: boolean;
    }
    function loadAll(callback: () => void): void;
    function initializeMods(callback: () => void): void;
    function unloadAll(reset?: boolean): void;
    function saveAll(): void;
    function initializeMod(folderName: string, modType: Type, callback: (id: number) => void, skipOnInitialize?: boolean): void;
    function removeMod(id: number, uninstall?: boolean): void;
    function getMods(): IModInfo[];
    function getLoadedMods(): IModInfo[];
    function callHook(hook: Mods.Hook, ...args: any[]): any;
    function load(index: number): void;
    function unload(index: number): void;
    function save(index: number): void;
    function reload(index: number): void;
    function isValid(index: number): boolean;
    function isEnabled(index: number): boolean;
    function isLoaded(index: number): boolean;
    function getIdentifier(index: number): string;
    function getName(index: number): string;
    function getDescription(index: number): string;
    function getVersion(index: number): string;
    function getLastUpdatedDate(index: number): string;
    function getAuthor(index: number): string;
    function getType(index: number): Type;
    function getRequiredMods(index: number): string[];
    function getPath(index: number): string;
    function getFolderName(index: number): string;
    function getPublishFileId(index: number): string;
    function getSteamIdOwner(index: number): string;
    function canLoad(index: number, fromTitleScreen?: boolean, count?: number): CanLoadState;
    function canLoadFromIdentifier(identifier: string): ICanLoadInfo;
    function getIndexFromName(name: string): number;
    function getIndexFromPublishId(publishFileId: string): number[];
    function getIndexFromPath(path: string): number;
    function isEnabledByName(name: string): boolean;
    function isLoadedByName(name: string): boolean;
    function setPublishId(index: number, publishedFileId: string): void;
    function setSteamIdOwner(index: number, steamIdOwner: string): void;
    function setLastUpdated(index: number, lastUpdated: string): void;
    function getState(index: number): State;
    function setState(index: number, state: State, force?: boolean): boolean;
}
declare var gameVersion: string;
declare var gameVersionMinor: number;
declare var quickLoad: number;
declare var game: Game;
declare var audio: WAudio;
declare var ui: UI.Ui;
declare var player: Player;
declare var world: World;
declare var renderer: WorldRenderer;
interface IInputMovement {
    keyBind: KeyBind;
    direction: FacingDirection;
    x: number;
    y: number;
}
interface IPoint {
    x: number;
    y: number;
}
interface IPointZ {
    x: number;
    y: number;
    z: number;
}
interface IHighscore {
    name: string;
    message: string;
    talent: number;
    dailyChallenge: boolean;
    date: number;
}
declare class Game implements IPropSerializable {
    private static gameMovement;
    interval: number;
    mapSize: number;
    halfMapSize: number;
    slot: number;
    loadedResources: boolean;
    version: string;
    isLoadingSave: boolean;
    slotName: string;
    tile: ITileArray;
    tileData: ITileData[][][][];
    items: Item.IItemArray;
    monsters: IMonster[];
    doodads: Doodad.IDoodad[];
    tileEvents: TileEvent.ITileEvent[];
    corpses: ICorpse[];
    time: number;
    nextProcessInput: number;
    turnFinishTime: number;
    turnProgress: number;
    turnProgressCompleted: boolean;
    healthRegen: number;
    hintIndex: number;
    hungerRegen: number;
    moveAnim: number;
    messageTimer: number;
    monsterSpawnerPool: {
        [index: number]: MonsterType[];
    };
    saveClear: boolean;
    playing: boolean;
    savedHighscore: boolean;
    wonGame: boolean;
    canSave: boolean;
    autoSaveTimer: number;
    staminaRegen: number;
    thirstRegen: number;
    updateRender: boolean;
    walkSoundCounter: number;
    dailyChallenge: boolean;
    raft: number;
    fillCount: number;
    fillTile: boolean[][];
    unloading: boolean;
    spawnCoords: any;
    contaminatedWater: Array<IPointZ>;
    dayNight: number;
    dayNightSwitch: number;
    fadeInAmount: number;
    crafted: {
        [index: number]: boolean;
    };
    highscores: IHighscore[];
    seeds: {
        base: number;
        saved: number;
    };
    options: {
        autoGather: boolean;
        autoPickup: boolean;
        currentGame: number;
        fontStyle: boolean;
        hints: boolean;
        mute: boolean;
        music: number;
        effects: number;
        windowMode: boolean;
        zoomLevel: number;
        visionMode: boolean;
        dropOnGather: boolean;
        keyBinds: IKeyBind;
    };
    playedCount: number;
    glContext: WebGLRenderingContext;
    mapContext: CanvasRenderingContext2D;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
    particleSystem: ParticleSystem;
    flowField: FlowField;
    fov: FieldOfView;
    debugRenderer: TextureDebugRenderer;
    notifier: Notifier.Notifier;
    cartographyTexture: WebGLTexture;
    private loadedWorld;
    private tileContainers;
    constructor();
    createWorld(): void;
    createWorldRenderer(): void;
    resizeRenderer(): void;
    setupWorldResources(): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    checkForHiddenMob(x: number, y: number, z: number): void;
    getWrappedCoord(x: number): number;
    getTileInFrontOfPlayer(): ITile;
    getTile(x: number, y: number, z?: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    gameLoop: (timeStamp: any) => void;
    nullFilter(element: any): boolean;
    saveGame(saveType: SaveType): void;
    addZoomLevel(amount: number): void;
    setZoomLevel(): void;
    fireMessage(decay: number): void;
    getTileEventStatus(tileEvent: TileEvent.ITileEvent): void;
    play(saveSlot: number): void;
    loadResources(): void;
    postLoadResources(): void;
    postGenerateWorld(): void;
    playGame(): void;
    deleteMonsters(id: number): void;
    resetGameState(): void;
    initializeGameState(isTravelling?: boolean): void;
    checkUnderPlayer(inFacingDirection?: boolean, autoActions?: boolean, enterCave?: boolean): void;
    setPlayerZ(z: number): void;
    shouldRender(): number;
    placeCorpse(corpse: ICorpse): void;
    placeTileEvent(tileEvent: TileEvent.ITileEvent): void;
    damageMonster(monsterId: number, hitdamage: number, offsetx: number, offsety: number, bypass: boolean, bypass2: boolean): boolean;
    healMonster(monsterId: number): void;
    getLocationOffsets(locationX: number, locationY: number): {
        x: number;
        y: number;
    };
    blockMove(): void;
    makeCaveEntrance(): TerrainType;
    findUnique(a: any, b: any): any[];
    updateCraftTableAndWeight(): void;
    hasDelay(): boolean;
    addDelay(delay: Delay, replace?: boolean): void;
    createParticles(r: number, g: number, b: number, offsetX?: number, offsetY?: number, count?: number): void;
    spawnMonsterFromGroup(monsterGroup: MonsterSpawnGroup, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean): boolean;
    spawnMonster(monsterType: MonsterType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean): boolean;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    getBlackness(): number;
    getAmbientLightLevel(): number;
    getLightSourceAt(worldX: number, worldY: number): number;
    isOnScreen(x: number, y: number, z: number): boolean;
    changeTile(newTile: any, changeX: number, changeY: number, changeZ: number, stackTiles: boolean): void;
    checkMonsterMove(monsterId: number, monster: IMonster, tileX: number, tileY: number, tileZ: number, moveType: MoveType): number;
    isTileFull(x: number, y: number, z?: number): boolean;
    isTileFullEx(tile: ITile): boolean;
    isTileEmpty(x: number, y: number, z?: number): boolean;
    contaminateWater(): void;
    passTurn(turnType?: TurnType): void;
    updateGame(resting?: boolean): void;
    removeCorpse(corpseId: number): void;
    checkForMobInRange(range: number): {
        id: number;
        x: number;
        y: number;
        z: number;
        found: boolean;
        obstacle: boolean;
        water: boolean;
    };
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    getHeight(z0: number, z1: number, d: number): number;
    onGlobalSlotLoaded(slot: number, success: boolean): void;
    refreshOverlay: () => void;
    onSave(slot: number): void;
    onPostLoad(): void;
    getSerializationProperties(version: string): string[];
    /**
     * This will generate the monster spawning pool based on monsters.X.spawnTalent dynamically
     * Will output like this.monsterSpawnerPool[14000] = [MonsterType.Kraken, MonsterType.Zombie,... ];
     */
    private generateMonsterSpawnPool();
    private processInput;
    private processMessages();
    private prePlay(mapSeed, isLoadingSave);
    private playPostSeed(seed);
    private getBurned();
    private render(delta);
    private move(direction);
    private showStatsHint();
    private stats();
    private getPotentialRecipesInContainer(container, typesChecked, potentialRecipes);
    private corpsesUpdate();
    private monsterMove(turnType);
    private swimCheck();
}
declare namespace Item {
    interface IRecipe {
        baseComponent?: (ItemType | ItemTypeGroup);
        components: IRecipeComponent[];
        skill: SkillType;
        level: RecipeLevel;
        requiredDoodadType?: DoodadType;
        requiresFire?: boolean;
    }
    interface IRecipeComponent extends Array<number> {
    }
    enum IRecipeComponentIndex {
        ItemType = 0,
        RequiredAmount = 1,
        ConsumedAmount = 2,
        DisassembleAmount = 3,
    }
    interface IRanged {
        range: number;
        attack: number;
    }
    interface IItemArray extends Array<IItem> {
    }
    interface IItem extends IObject, IContainable {
        id: number;
        type: ItemType;
        equipped?: EquipType;
        quickSlot?: number;
        tatteredMap?: IPointZ;
        legendary?: any;
        disassembly?: IItemArray;
        order?: number;
    }
    interface IContainable {
        containedWithin: IContainer;
    }
    interface IContainer extends IContainable {
        weightCapacity: number;
        containedItems: IItemArray;
    }
    interface IObject {
        type: number;
        decay?: number;
        minDur?: number;
        maxDur?: number;
        quality?: ItemQuality;
    }
    interface IObjectDescription {
        name?: string;
        description?: string;
        decayMax?: number;
        skillUse?: SkillType;
        weightCapacity?: number;
    }
    interface IItemDescription extends IObjectDescription {
        durability?: number;
        doodadType?: DoodadType;
        onBurn?: ItemType;
        onUse?: any[];
        onEquip?: (item: IItem) => void;
        onUnequip?: (item: IItem) => void;
        onEquipEffect?: any[];
        damageType?: DamageType;
        group?: ItemTypeGroup[];
        torch?: any;
        weight: number;
        lit?: ItemType;
        damageModifier?: number;
        isTorch?: boolean;
        equip?: EquipType;
        returnOnUse?: [ItemType, boolean];
        attack?: number;
        defense?: Defense;
        revert?: ItemType;
        use?: ActionType[];
        ranged?: IRanged;
        recipe?: IRecipe;
        disassemble?: boolean;
        mod?: number;
        decaysInto?: ItemType;
        twoHanded?: boolean;
        recipes?: ItemType[];
    }
    interface IGroupDescription {
        name: string;
        types: ItemType[];
    }
    interface IActionDescription {
        name?: string;
        description?: string;
    }
    enum ContainerReferenceType {
        Null = 0,
        Inventory = 1,
        Doodad = 2,
        World = 3,
        Tile = 4,
        Item = 5,
    }
    interface IInventoryContainerReference extends IContainerReference {
    }
    interface IWorldContainerReference extends IContainerReference {
    }
    interface ITileContainerReference extends IContainerReference {
        x: number;
        y: number;
        z: number;
    }
    interface IDoodadContainerReference extends IContainerReference {
        x: number;
        y: number;
        z: number;
    }
    interface IItemContainerReference extends IContainerReference {
        id: number;
    }
    interface IContainerReference {
        type: ContainerReferenceType;
    }
    function getContainerReference(container: IContainer): IContainerReference;
    function derefenceContainerReference(containerRef: IContainerReference): Object;
    function acquireNotify(item: IItem): void;
    function changeInto(item: IItem, type: ItemType): void;
    function removeContainerItems(container: IContainer): void;
    function remove(item: IItem): void;
    function create(itemType: ItemType, quality?: ItemQuality, container?: IContainer): IItem;
    function getDecayMax(item: IItem): number;
    function isContainer(obj: any): boolean;
    function moveAllFromContainerToInventory(container: IContainer, ofQuality?: ItemQuality): void;
    function computeItemWeight(item: IItem): number;
    function computeContainerWeight(container: IContainer): number;
    function moveAllFromContainerToContainer(fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType, ofQuality?: ItemQuality): void;
    function moveToContainer(item: IItem, container: IContainer): void;
    function unequip(item: IItem): void;
    function equip(item: IItem, slot: EquipType, internal?: boolean): void;
    function use(item: IItem, itemType: ItemType, use: ActionType): boolean;
    function breakContainerOnTile(itemContainer: IItem, x: number, y: number, z: number): void;
    function drop(item: IItem, dropAll?: boolean, dropAllQuality?: ItemQuality): void;
    function dropInWater(item: IItem, itemType: ItemType): void;
    function spawn(itemTypes: Array<ItemType>, x: number, y: number, z: number): void;
    function initializeMap(map: IItem): void;
    function resetMapsInContainer(container: IContainer): void;
    function getTileContainer(x: number, y: number, z: number): IContainer;
    function placeOnTile(item: IItem, x: number, y: number, z: number, bypass?: boolean): boolean;
    function damageEquipment(): void;
    function damage(item: IItem, mod?: number): void;
    function isDamaged(item: IItem): boolean;
    namespace Quality {
        function update(item: IItem, quality: ItemQuality): void;
        function createRandom(legendable: boolean, bonusQuality?: number): ItemQuality;
    }
    function hasRequiredDoodad(craftType: ItemType): boolean;
    class ItemRecipeRequirementChecker {
        private recipe;
        private trackItems;
        itemBaseComponent: IItem;
        itemComponentsRequired: IItemArray;
        itemComponentsConsumed: IItemArray;
        itemComponentsToBeSalvaged: IItemArray;
        numComponentsNeeded: number;
        private baseComponent;
        private components;
        constructor(recipe: IRecipe, trackItems: boolean);
        amountNeededForComponent(componentIndex: number): number;
        requirementsMet(): boolean;
        /**
         * Looks inside the container and its subcontainers.
         * @param container
         * @returns true if the recipe's requirements are satisfied by items in the container.
         */
        process(container: IContainer): boolean;
        isDiscovered(): boolean;
        private processItem(item);
    }
    function isItemTypeGroup(itemType: (ItemType | ItemTypeGroup)): boolean;
    function getItemTypeGroupName(itemType: (ItemType | ItemTypeGroup)): string;
    function isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup): boolean;
    function craft(itemType: ItemType, itemsToRequire: IItemArray, itemsToConsume: IItemArray, itemsToBeSalvaged: IItemArray, baseItem?: IItem): boolean;
    function decayItems(): boolean;
    function isItemTypeInGroup(itemType: ItemType, itemGroupSearch: ItemTypeGroup): boolean;
    function countItemsInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): number;
    function countItemsInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: IItem): number;
    function getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): IItem;
    function getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: number): IItem;
    function getItemsInContainer(container: IContainer, includeSubContainers?: boolean): IItemArray;
    function getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean): IItemArray;
    function getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean): IItemArray;
    function getItemInInventoryByGroup(itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: number): IItem;
    function isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: IItem): boolean;
    function isItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignore?: number): boolean;
    function isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    function isInInventory(containable: IContainable): boolean;
    function isTileContainer(container: IContainer): boolean;
    function loadReferences(): void;
    function saveTileReferences(tileContainers: ITileContainer[]): void;
    function loadTileReferences(tileContainers: ITileContainer[]): void;
}
declare namespace Notifier {
    class Notifier {
        private capacity;
        private mostRecent;
        private mostRecentLife;
        private count;
        private notifications;
        private spriteBatch;
        private nextUpdate;
        constructor(gl: WebGLRenderingContext, capacity: number);
        setTexture(texture: WebGLTexture, inverseTextureSize: Vec2): void;
        clear(): void;
        addItem(x: number, y: number, type: ItemType): void;
        addStat(x: number, y: number, type: StatType, value: number): void;
        update(): void;
        render(x: number, y: number, tileSize: number, tileScale: number, viewWidth: number, viewHeight: number): boolean;
        private addNote(x, y, type);
        private renderNote(note);
    }
}
declare class ParticleSystem {
    private static shaderProgram;
    private count;
    private capacity;
    private positionSizeBuf;
    private colorBuf;
    private gl;
    private particles;
    private positionSizeData;
    private colorData;
    private particleSize;
    private lastUsedParticle;
    constructor(gl: WebGLRenderingContext, maxParticles?: number);
    spawn(r: number, g: number, b: number, offsetX: number, offsetY: number, count: number): void;
    clear(): void;
    simulate(dt: number): boolean;
    render(x: any, y: any): void;
    private findUnusedParticle();
}
declare class PlayerDefense extends Defense {
    base: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, resist: Resistances, vulnerable: Vulnerabilities);
}
declare class Player implements IPropSerializable {
    attack: number;
    attackFromEquip: number;
    deathBy: string;
    defense: PlayerDefense;
    defenses: number[];
    dehydration: number;
    dexterity: number;
    dialog: any;
    direction: IPoint;
    facingDirection: FacingDirection;
    isMoving: boolean;
    gender: Gender;
    health: number;
    hintSeen: boolean[];
    hunger: number;
    inventory: Item.IContainer;
    lightBonus: number;
    monsterSpawner: number;
    monsterSpawnTimer: number;
    state: PlayerState;
    skills: ISkillSet;
    stamina: number;
    starvation: number;
    status: {
        bleeding: boolean;
        burning: boolean;
        poisoned: boolean;
    };
    swimming: boolean;
    stepCounter: number;
    strength: number;
    talent: number;
    thirst: number;
    turns: number;
    weight: number;
    x: number;
    y: number;
    z: number;
    thirstTimer: number;
    staminaTimer: number;
    healthTimer: number;
    hungerTimer: number;
    fromX: number;
    fromY: number;
    nextX: number;
    nextY: number;
    movement: IInputMovement;
    constructor();
    attributes(): void;
    skillGain(skillType: SkillType, mod: any, bypass: any): void;
    staminaCheck(): boolean;
    checkWeight(): void;
    addMilestone(milestone: MilestoneType, data?: number): void;
    damage(mod: any, damageMessage: string, soundDelay?: number): void;
    calculateEquipmentStats(): void;
    updateDirection(direction: FacingDirection): void;
    directionToMovement(direction: FacingDirection): IPoint;
    canJump(): boolean;
    jump(): void;
    drink(): void;
    getSerializationProperties(version: string): string[];
    private statGain(stat, bypass);
    private resetDefense();
}
declare class SpriteAtlas {
    static monsters: Array<SpriteUtil.SpriteInfo>;
    static corpses: Array<SpriteUtil.SpriteInfo>;
    static tileEvents: Array<SpriteUtil.SpriteInfo>;
    static items: Array<SpriteUtil.SpriteInfo>;
    static itemsSmall: Array<SpriteUtil.SpriteInfo>;
    static shadow: SpriteUtil.SpriteInfo;
    static player: SpriteUtil.SpriteInfo;
    static raft: SpriteUtil.SpriteInfo;
    static text: SpriteUtil.SpriteInfo;
}
declare module ResourceLoader {
    enum PathType {
        Monster = 0,
        Corpse = 1,
        Item = 2,
        Terrain = 3,
        Doodad = 4,
    }
    interface IResourceContainer {
        spriteTexture: WebGLTexture;
        spriteTextureSizeInversed: Vec2;
        tileTexture: WebGLTexture;
        tileTextureSizeInversed: Vec2;
    }
    function initialize(gl: WebGLRenderingContext): void;
    function loadResources(container: IResourceContainer): void;
    function continueLoading(): void;
    function takeLoadingSlot(callback: () => void): void;
    function releaseLoadingSlot(): void;
    function getPath(pathType: PathType, index: number): string;
    function getImageOverride(src: string): string;
}
declare module SaveLoad {
    var maxSlots: number;
    var saveTime: number;
    class SaveObject {
        version: string;
        data: any;
    }
    function isEnabled(): boolean;
    function useLocalStorage(): void;
    function initialize(): void;
    function getSaveSlots(callback: (slot: number, isUsed: boolean) => void): void;
    function isSlotUsed(slot: number, callback: (slot: number, isUsed: boolean) => void): void;
    function getSaveCount(callback: (usedCount: number, usedSlots: number[]) => void, callbackPerSlot?: (slot: number, isUsed: boolean) => void): void;
    function getFirstFreeSlot(callback: (slot: number) => void): void;
    function save(slot: number, callback: (slot: number, bytes: number) => void): void;
    function load(slot: number, callback: (slot: number, success: boolean) => void): void;
    function loadPartial(slot: number, callback: (slot: number, success: boolean, saveObject: SaveObject) => void): void;
    function loadPartialData(saveObject: SaveObject, object: any, key: string, saveObjectKey?: string, skipCompression?: boolean): void;
    function loadPartialDataInside(saveObject: SaveObject, saveObjectKey: string, key?: string): any;
    function savePartialData(slot: number, object: any, key: string, saveObjectKey: string, callback: (slot: number, bytes: number) => void): void;
    function savePartialDataInside(slot: number, saveObjectKey: string, key: string, value: any, callback: (slot: number, bytes: number) => void): void;
    function exportSave(slot: number, callback: (slot: number, success: boolean, json: string) => void): void;
    function importSave(slot: number, data: string, callback: (slot: number, bytes: number) => void): void;
    function deleteSlot(slot: number, callback: (slot: number, success: boolean) => void): void;
    function deleteAll(callback: () => void): void;
    function transferSaves(): void;
}
interface ISerializable {
    serializeObject(serializer: Serializer, version: string): void;
    deserializeObject(serializer: Serializer, version: string): void;
}
interface IPropSerializable {
    getSerializationProperties(version: string): string[];
}
declare enum Types {
    Invalid = 0,
    Undefined = 1,
    Null = 2,
    Boolean = 3,
    ByteSigned = 4,
    ByteUnsigned = 5,
    ShortSigned = 6,
    ShortUnsigned = 7,
    IntegerSigned = 8,
    IntegerUnsigned = 9,
    Float32 = 10,
    Float64 = 11,
    String = 12,
    Array = 13,
    Object = 14,
    ArrayBuffer = 15,
    ComplexObject = 16,
}
declare class Serializer {
    static SerializeAllProperties: string[];
    maxBytes: number;
    private buffer;
    private dataView;
    private byteOffset;
    private object;
    private objectKey;
    private version;
    constructor(object: any, objectKey: any, version: string);
    saveToString(): string;
    loadToObject(data: string): void;
    readProperty(object: any, key: any): void;
    writeProperty(object: any, key: any): void;
    private getSerializationProperties(object, version);
    private readObject(object, key);
    private readString();
    private readArrayBuffer();
    private writeObject(object, properties?);
    private writeString(value);
    private writeArrayBuffer(object);
    private isInteger(nVal);
    private isByteSigned(num);
    private isByteUnsigned(num);
    private isShortSigned(num);
    private isShortUnsigned(num);
    private isIntegerSigned(num);
    private isIntegerUnsigned(num);
}
declare module Shaders {
    function loadShaders(callback: () => void): void;
    function compileShaders(): void;
    class CompiledProgram {
        private gl;
        private vertexName;
        private fragmentName;
        program: WebGLProgram;
        uniforms: {
            [index: string]: number;
        };
        attribs: {
            [index: string]: number;
        };
        constructor(gl: WebGLRenderingContext, vertexName: string, fragmentName: string);
        compileProgram(): void;
    }
}
declare enum SpriteBatchLayer {
    Corpse = 0,
    Item = 1,
    Monster = 2,
    FlyingMonster = 3,
}
declare class SpriteBatch {
    private static shaderProgram;
    private static spriteLength;
    capacity: number;
    texSprites: WebGLTexture;
    inverseSpriteTextureSize: Vec2;
    private count;
    private buffer;
    private colorBuffer;
    private array;
    private colorArray;
    private gl;
    private begun;
    constructor(gl: WebGLRenderingContext, maxSprites?: number);
    clear(): void;
    begin(): void;
    add(tileX: number, tileY: number, spriteSize: number, sourceX: number, sourceY: number, sourceSize: number, red?: number, green?: number, blue?: number, alpha?: number): void;
    end(): void;
    render(x: number, y: number, tileScale: number, viewportWidth: number, viewportHeight: number): void;
    setSpriteImage(image: HTMLImageElement): void;
}
declare module SpriteUtil {
    class SpriteInfo {
        texCoord: Vec2;
        texSize: number;
        texOffsetY: number;
        constructor(texCoord: Vec2, texSize: number, texOffsetY: number);
    }
    class TexturePacker {
        private gl;
        width: number;
        height: number;
        texture: WebGLTexture;
        inverseTextureSize: Vec2;
        private spriteLoadCount;
        private sprites;
        private rootNode;
        private padding;
        private loadedSprites;
        constructor(gl: WebGLRenderingContext, width: number, height: number, nullSprite: boolean, padding: number);
        load(callback: () => void): void;
        addSprite(src: string, callback: (si: SpriteInfo, imageElement: HTMLImageElement) => void): void;
        private loadSprite(sprite, callback, retry?);
        private spriteLoaded(callback);
        private checkFinished(callback);
        private pack();
        private packSprite(gl, image);
    }
}
declare module TileAdaptor {
    interface ITileAdaptation {
        topLeftFG: Vec2;
        topRightFG: Vec2;
        bottomLeftFG: Vec2;
        bottomRightFG: Vec2;
        topLeftBG: Vec2;
        topRightBG: Vec2;
        bottomLeftBG: Vec2;
        bottomRightBG: Vec2;
    }
    interface ITileAdaptor {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType): ITileAdaptation;
    }
    interface IDoodadAdaptor {
        adapt(world: WorldLayer, x: number, y: number, doodadType: DoodadType): ITileAdaptation;
    }
    function setDefaultBackground(tileInfo: TerrainTileInfo): void;
    class Default implements ITileAdaptor {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType): ITileAdaptation;
    }
    class Mountain extends Default {
        private mountainTopFlag;
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType): ITileAdaptation;
        private getTileType(tileMask);
    }
    function getWaterType(terrainType: TerrainType): number;
    class Water extends Default {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType): ITileAdaptation;
    }
    class Dirt implements ITileAdaptor {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType): ITileAdaptation;
    }
    class Fence implements IDoodadAdaptor {
        adapt(world: WorldLayer, x: number, y: number, doodadType: DoodadType): ITileAdaptation;
    }
    class Door implements IDoodadAdaptor {
        adapt(world: WorldLayer, x: number, y: number, doodadType: DoodadType): ITileAdaptation;
    }
    class Wall implements IDoodadAdaptor {
        adapt(world: WorldLayer, x: number, y: number, doodadType: DoodadType): ITileAdaptation;
    }
    class Floor extends Default {
        adapt(world: WorldLayer, x: number, y: number, terrainType: TerrainType): ITileAdaptation;
    }
}
declare namespace Utilities {
    module Random {
        var seed: number;
        var saved: number;
        function randomFromInterval(min: any, max: any): number;
        function nextFloat(): number;
        function nextInt(max: number): number;
        function getSeed(): number;
        function setSeed(newSeed: any): void;
    }
    module TileHelpers {
        var maskGfx: number;
        var maskType: number;
        function getGfx(tile: ITile): number;
        function getGfxRaw(data: number): number;
        function setGfx(tile: ITile, value: number): void;
        function setGfxRaw(data: number, value: number): number;
        function getType(tile: ITile): TerrainType;
        function getTypeRaw(data: number): TerrainType;
        function setType(tile: ITile, value: TerrainType): void;
        function setTypeRaw(data: number, value: TerrainType): number;
    }
    module WebWorkerHelpers {
        function create(workerFunction: (data: any) => void, messageCallbackFunction: (evt: any) => void): Worker;
        function enumToString(name: string, values: any): string;
        function moduleToString(moduleName: string, name: string, moduleToConvert: any, globalVariables?: string[]): string;
    }
    module ItemImageCache {
        function getItemImageUrl(itemType: ItemType, itemImage: ItemImage): string;
        function queueCreateItemImageOutlines(image: HTMLImageElement, itemType: ItemType): void;
        function cacheAllItemImageOutlines(): void;
    }
    function roundNumber(num: any, dec: any): number;
    function loadImage(src: any, callback: any): void;
    function getTileVariation(x: number, y: number): number;
    function lerp(from: number, to: number, t: number): number;
    function easeInQuad(time: number, start: number, change: number, duration: number): number;
    function easeInCubic(time: number, start: number, change: number, duration: number): number;
    function isInBound2Wrapped(bound: Bound2, x: number, y: number): boolean;
    function shuffle(array: number[]): number[];
}
interface JQuery {
    smartResize: any;
    filterByData(name: string, value: any): JQuery;
    contextmenu(p: any, p2?: any, p3?: any): any;
    isSorting(): boolean;
    isVisible(): boolean;
    quickShow(): void;
    quickHide(): void;
    preload(): void;
    getItemType(): ItemType;
    getQuickSlot(): number;
    getEquipSlot(): number;
}
interface Array<T> {
    equals: (object: any) => boolean;
}
declare type TerrainData = number;
declare enum TerrainMask {
    Type = 63,
    Wall = 64,
    Fence = 128,
}
declare class ExploreMap extends ByteGrid {
    private encodedData;
    encode(): void;
    decode(): void;
    getSerializationProperties(version: string): string[];
}
declare class World implements ISerializable {
    private gl;
    width: number;
    height: number;
    layers: WorldLayer[];
    private loaded;
    constructor(gl: WebGLRenderingContext, width: number, height: number);
    toLocal(world: number, local: number): number;
    addLayer(level: number): void;
    load(): void;
    isLoaded(): boolean;
    updateAll(): void;
    resetExploredMap(): void;
    updateTile(x: number, y: number, z: number, tile: ITile, bypass?: boolean): void;
    serializeObject(serializer: Serializer): void;
    deserializeObject(serializer: Serializer): void;
}
declare type onTileUpdateDelegate = (x: number, y: number, flushImmediate: boolean) => void;
declare type onDoodadUpdateDelegate = (x: number, y: number, doodadType: DoodadType, doodadVariation: number, flushImmediate: boolean) => void;
declare class WorldLayer {
    private gl;
    width: number;
    height: number;
    level: number;
    lightLevelMap: ByteGrid;
    lightBlockMap: ByteGrid;
    exploredMap: ExploreMap;
    onTileUpdate: onTileUpdateDelegate;
    onDoodadUpdate: onDoodadUpdateDelegate;
    private terrainMap;
    constructor(gl: WebGLRenderingContext, width: number, height: number, level: number);
    resetExploredMap(): void;
    getTileType(x: number, y: number): TerrainType;
    getTile(x: number, y: number): TerrainData;
    isWall(terrain: TerrainData): boolean;
    isFence(terrain: TerrainData): boolean;
    setTile(x: number, y: number, terrainType: TerrainType, isWall?: boolean, isFence?: boolean): void;
    updateAll(): void;
    updateTile(x: number, y: number, tile: ITile, shouldUpdate?: boolean): void;
    private mapIndex(x, y);
    private updateLightBlockValue(x, y, oldValue);
    private setTileInteral(x, y, tile);
}
import CompiledProgram = Shaders.CompiledProgram;
declare class WorldRenderer {
    private gl;
    private world;
    static positionTextureBuffer: WebGLBuffer;
    static positionBuffer: WebGLBuffer;
    static ditherTexture: WebGLTexture;
    private static subTileSize;
    layers: WorldLayerRenderer[];
    dirtAdaptor: TileAdaptor.Dirt;
    waterAdaptor: TileAdaptor.Water;
    fenceAdaptor: TileAdaptor.Fence;
    mountainAdaptor: TileAdaptor.Mountain;
    wallAdaptor: TileAdaptor.Wall;
    doorAdaptor: TileAdaptor.Door;
    defaultAdaptor: TileAdaptor.Default;
    floorAdaptor: TileAdaptor.Floor;
    private ambientIntensity;
    private ambientColorDay;
    private ambientColorNight;
    private ambientColorCave;
    private textureShaderProgram;
    private fogShaderProgram;
    private screenspaceViewport;
    private worldspaceViewport;
    private tileScale;
    private zoom;
    private layerFramebuffer;
    private layerTexture;
    private fogFramebuffer;
    private fogTexture;
    private fogTextureStorage;
    private itemBatch;
    private corpseBatch;
    private monsterBatch;
    private flyingMonsterBatch;
    private monstersInViewport;
    constructor(gl: WebGLRenderingContext, world: World);
    static getSubTileSize(): number;
    updateAll(): void;
    setSpriteTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    getPixelSize(): number;
    getZoom(): number;
    getTileScale(): number;
    setZoom(zoom: number): void;
    setViewport(view: Vec2): void;
    getViewport(): Vec2;
    getTileViewport(): Vec2;
    render(x: number, y: number, z: number): void;
    screenToTile(screenX: number, screenY: number): Vec2;
    getViewportBounds(): Bound2;
    computeSpritesInViewport(): void;
    batchMonsters(): void;
    private batchShadow(fromX, fromY, toX, toY, t, anim);
    private batchPlayer(batchLayer);
    private spriteBatchForLayer(layer);
}
declare class WorldLayerRenderer {
    private gl;
    private renderer;
    private worldLayer;
    private width;
    private height;
    terrainLayer: TileLayer;
    doodadLayer: TileLayer;
    doodadOverLayer: TileLayer;
    texLightBlock: WebGLTexture;
    texLightLevel: WebGLTexture;
    texExplored: WebGLTexture;
    private dirty;
    constructor(gl: WebGLRenderingContext, renderer: WorldRenderer, worldLayer: WorldLayer, width: number, height: number);
    updateAll(): void;
    setDoodad(x: number, y: number, doodad: DoodadType, variation: number, flushImmediate?: boolean): void;
    renderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    postRenderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    private computeTile(x, y, flushImmediate?);
    private updateTileLightBlock(x, y, value);
    private flush();
}
/**
 * Each tile in the wayward world is rendered as 4 subtiles (topleft, topright, bottomleft, bottomright).
 * The world consists of 3 tile layers (terrain, doodad, doodadOver).
 * Each subtile is a RGBA 32bit pixel representing a foreground and background tile.
 * Red,Green make up the x,y coordinate in the tilesheet of the foreground tile.
 * Blue,Alpha make up the x,y coordinate in the tilesheet of the background tile.
 * If Red and Green are both 0, the subtile foreground is not rendered.
 * If Blue and Alpha are both 0, the subtile background is not rendered.
 */
declare class TileLayer {
    private width;
    private height;
    private static texTileSprites;
    private static inverseTileSpriteTextureSize;
    private static tileShaderProgram;
    private singleTileData;
    private singleTileDataU8;
    private singleTileDataU32;
    private tileData;
    private tileDataU8;
    private tileDataU32;
    private texTiles;
    private inverseTileDataTextureSize;
    constructor(width: number, height: number, gl: WebGLRenderingContext);
    static setTileTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    setTileTopLeft(dataIndex: number, tileX: number, tileY: number): void;
    setTileTopRight(dataIndex: number, tileX: number, tileY: number): void;
    setTileBottomLeft(dataIndex: number, tileX: number, tileY: number): void;
    setTileBottomRight(dataIndex: number, tileX: number, tileY: number): void;
    setTileTopLeftBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileTopRightBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBottomLeftBG(dataIndex: number, tileX: number, tileY: number): void;
    setTileBottomRightBG(dataIndex: number, tileX: number, tileY: number): void;
    sendTileToGPU(x: number, y: number, gl: WebGLRenderingContext): void;
    sendToGPU(gl: WebGLRenderingContext): void;
    render(gl: WebGLRenderingContext, x: number, y: number, subTileSize: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    clear(): void;
}
declare class MapGen200 implements MapGen.IMapGen {
    generateWorld(generateNewWorld: boolean): void;
    private setupTiles(tileGenArray, templateSpawns, caveSpawns, generateNewWorld);
}
declare namespace UI {
    class BaseScreen implements IUiScreen {
        element: JQuery;
        visible: boolean;
        constructor();
        selector(): string;
        bindElements(): void;
        unbindElements(): void;
        onGameEnd(showBlocker: boolean): void;
        isVisible(): boolean;
        show(data?: any): void;
        doShow(): void;
        hide(): void;
        doHide(): void;
        protected onShow(data?: any): void;
        protected onHide(): void;
        onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean;
        onKeyUp(event: JQueryEventObject): void;
    }
}
declare namespace UI {
    class ConfirmScreen extends BaseScreen {
        elementOverlay: JQuery;
        elementMessage: JQuery;
        elementButtonRow: JQuery;
        selector(): string;
        bindElements(): void;
        onShow(data: any): void;
        onHide(): void;
    }
}
declare namespace UI {
    class CoverScreen extends BaseScreen {
        private fadingOut;
        selector(): string;
        bindElements(): void;
        doShow(): void;
        onShow(): void;
        onHide(): void;
        private fadeOut();
        private createParticles();
    }
}
declare namespace UI {
    class HelpScreen extends BaseScreen {
        elementOverlay: JQuery;
        elementTitle: JQuery;
        elementHeader: JQuery;
        elementContent: JQuery;
        elementButtonRow: JQuery;
        selector(): string;
        bindElements(): void;
        setHeight(): void;
        onShow(data: any): void;
        onHide(): void;
        displayHint(hintType: HintType): void;
        onButtonClick(id: string): void;
        reloadToggleHintsState(): void;
    }
}
declare namespace UI {
    enum TextElementId {
        Weight = 0,
        Attack = 1,
        Defense = 2,
        Talent = 3,
    }
    class InGameScreen extends BaseScreen {
        elementVisibleInGame: JQuery;
        elementGame: JQuery;
        elementBlocker: JQuery;
        elementBlockerMouse: JQuery;
        elementStatHealth: JQuery;
        elementStatStamina: JQuery;
        elementStatHunger: JQuery;
        elementStatThirst: JQuery;
        elementStatBurn: JQuery;
        elementStatBleed: JQuery;
        elementStatPoison: JQuery;
        elementAttributeWeight: JQuery;
        elementAttributeAttack: JQuery;
        elementAttributeDefense: JQuery;
        elementAttributeTalent: JQuery;
        elementButtons: JQuery;
        elementQuickSlotsContainer: JQuery;
        elementMessagesOverlay: JQuery;
        elementActions: JQuery;
        elementDialogs: JQuery;
        elementDialogInventory: JQuery;
        elementDialogInventoryContainer: JQuery;
        elementDialogCrafting: JQuery;
        elementDialogCraftingContainer: JQuery;
        elementDialogEquipment: JQuery;
        elementDialogEquipmentContainer: JQuery;
        elementDialogSkills: JQuery;
        elementDialogSkillsContainer: JQuery;
        elementDialogMilestones: JQuery;
        elementDialogMilestonesContainer: JQuery;
        elementDialogMessages: JQuery;
        elementDialogMessagesContainer: JQuery;
        elementDialogMap: JQuery;
        elementContainerDialogs: JQuery[];
        elementOtherDialogs: JQuery[];
        draggingItem: boolean;
        private mouseEvent;
        private touchEvent;
        private mouseX;
        private mouseY;
        private lastText;
        private lastStats;
        private contextMenuTarget;
        private contextMenuActions;
        private contextMenuOpen;
        private contextMenuBlocking;
        private actionsMenuOpen;
        private openedContainer;
        private craftableItemTypes;
        private nonCraftableItemTypes;
        selector(): string;
        bindElements(): void;
        unbindElements(): void;
        bindSortable(element: JQuery): void;
        onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean;
        onKeyUp(event: JQueryEventObject): void;
        pressHotKey(hotKeyNumber: number, hotKey: KeyBind): void;
        useQuickSlot(slot: number): void;
        isSorting(): boolean;
        setupContextMenu(): any;
        onShow(): void;
        onHide(): void;
        initializeGameState(): void;
        onGameEnd(showBlocker: boolean): void;
        setupDialog(dialogId: DialogId, highlightItemId?: number, customDialogInfo?: IDialogInfo): JQueryUI.DialogOptions;
        onMouseDown(event: JQueryEventObject): void;
        onMouseUpOrLeave(event: JQueryEventObject): void;
        onOtherClick(event: JQueryEventObject): void;
        onTouchStart(event: JQueryEventObject): void;
        onMouseMove(event: JQueryEventObject): void;
        onBlockerMouseUpOrLeave(event: JQueryEventObject): void;
        onBlockerMouseMove(event: JQueryEventObject): void;
        highlightItemElementByItemId(itemId: number, highlight: boolean, force?: boolean, skipCount?: boolean): void;
        getMovementDirection(event: any): FacingDirection;
        getTilePositionFromMouseEvent(event: any): {
            x: number;
            y: number;
        };
        onMouseScroll(event: JQueryEventObject): void;
        canUseHotkeys(): boolean;
        refreshStats(): void;
        refreshAttributes(): void;
        updateTextIfChanged(id: TextElementId, element: JQuery, text: string): void;
        onButtonBarClick(button: string): void;
        blurFilters(): void;
        toggleDialog(dialog: JQuery): boolean;
        openDialog(dialog: JQuery): boolean;
        closeDialog(dialog: JQuery): boolean;
        openMapDialog(): void;
        closeAllDialogs(): void;
        clampDialogs(): void;
        getItemClass(item: Item.IItem, itemType?: ItemType): string;
        createItemElementByItemType(itemType: ItemType, item?: Item.IItem): JQuery;
        createItemElementByItem(item: Item.IItem): JQuery;
        syncItemElements(itemId: number, selector?: JQuery): void;
        syncDamaged(item: Item.IItem, element: JQuery): void;
        addItemToContainer(item: Item.IItem, container: Item.IContainer, internal?: boolean, isAddingMultipleItems?: boolean): void;
        onAddItemsToContainer(containerElement: JQuery, containerDialogElement: JQuery, isInventoryContainer: boolean): void;
        afterAddingMultipleItemsToContainer(container: Item.IContainer): void;
        removeItemFromContainer(item: Item.IItem, container: Item.IContainer): void;
        refreshQuickSlots(): void;
        getInventoryItemsInOrder(): any[];
        loadQuickSlots(): void;
        saveItemOrder(containerElement: JQuery): void;
        showItemContextMenu(element: JQuery, isContainer?: boolean): void;
        onContextMenuAction(element: JQuery, action: string, data: any): void;
        onInventoryItemRightClick(element: JQuery): void;
        onContainerItemRightClick(element: JQuery): void;
        onCraftingItemClick(element: JQuery): void;
        onQuickSlotItemRightClick(element: JQuery): void;
        onEquipmentItemRightClick(element: JQuery): void;
        getTooltipHtml(element: JQuery): string;
        tooltipEnable(): void;
        tooltipDisable(): void;
        tooltipHide(): void;
        onTooltipClose(): void;
        getTooltipHtmlForItem(element: JQuery, item: Item.IItem, itemType: ItemType, isQuickSlot: boolean): string;
        displayMessage(message: Message, messageType?: MessageType, ...args: any[]): void;
        createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
        getMessageCount(): number;
        removeOldestMessage(): void;
        getUsedQuickSlots(): number[];
        getFreeQuickSlots(): number[];
        getQuickSlotItemElement(quickSlot: number): JQuery;
        getItemIdInQuickSlot(quickSlot: number): number;
        setQuickSlot(quickSlot: number, itemId: number, internal?: boolean): void;
        setQuickSlotByItemType(quickSlot: number, itemType: ItemType, disabled: boolean): JQuery;
        addItemToFreeQuickSlot(itemId: number): void;
        clearQuickSlot(quickSlot: number, internal?: boolean): void;
        removeItemFromQuickSlot(itemId: number): void;
        updateQuickSlotItem(quickSlot: number): void;
        onSortableItemReceive(event: Event, uiObject: any): void;
        getEquipSlotItemElement(equip: EquipType): JQuery;
        getItemIdInEquipSlot(equip: EquipType): number;
        setEquipSlot(equip: EquipType, itemId: number, internal?: boolean): void;
        removeItemFromEquipSlot(itemId: number, internal?: boolean): void;
        updateSkillsDialog(): void;
        updateMilestonesDialog(): void;
        updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
        createCraftItemElements(): void;
        updateItem(item: Item.IItem): void;
        getDialogElementForContainer(container: Item.IContainer): JQuery;
        isContainerOpen(container: Item.IContainer): boolean;
        openContainer(container: Item.IContainer, containerName?: string): void;
        closeContainer(container: Item.IContainer): void;
        closeContainerDialog(containerDialog: JQuery): void;
        onContainerClose(container: Item.IContainer): JQuery;
        closeStaticContainers(): void;
        closeAllContainers(): void;
        updateContainerName(containerDialogElement: JQuery): void;
        updateOpenedContainer(): void;
        hideContextMenu(): boolean;
        hideActionsMenu(): boolean;
        toggleActionsMenu(center?: boolean): void;
        onClearMessages(): void;
        onFilterInput(containerElement: JQuery): void;
        showSortContextMenu(element: JQuery, container: JQuery, messageType: Message): void;
        sortItems(containerElement: JQuery, sortType: SortType, messageType: Message): void;
        sortItemElements(itemElements: JQuery, sortType: SortType): void;
        onUpdateCrafting(): void;
        updateSort(container: JQuery): void;
        isContainerDialogOver(x: number, y: number): boolean;
    }
}
declare namespace UI {
    class LoadingScreen extends BaseScreen {
        visible: boolean;
        elementMessage: JQuery;
        elementNormal: JQuery;
        elementRest: JQuery;
        selector(): string;
        bindElements(): void;
        onShow(data?: any): void;
        onHide(): void;
        setMessage(message: Message): void;
    }
}
declare namespace UI {
    class OptionsScreen extends BaseScreen {
        elementOverlay: JQuery;
        elementTitleScreenOptions: JQuery;
        elementLanguageSelect: JQuery;
        elementKeybindList: JQuery;
        elementKeybindDefault: JQuery;
        keybindDefaultWidth: number;
        selector(): string;
        bindElements(): void;
        onShow(): void;
        onHide(): void;
        setRangeValue(id: string, value: number): void;
        setCheckboxValue(id: string, checked: boolean): void;
        setButtonChoiceValue(id: string, firstSelected: boolean): void;
        onClickKeybind(element: JQuery, id: KeyBind): void;
        onClickKeyBindDefault(): void;
        resetKeybindState(setDefault?: boolean): KeyBind;
        updateKeybind(key: KeyBind, element: JQuery): void;
        onClickCheckbox(element: JQuery, id: string): void;
        onClickButton(element: JQuery, id: string): void;
        onClickButtonChoice(element: JQuery, id: string): void;
        onRangeChange(element: JQuery, id: string, value: number): void;
        addOptionsSection(elementId: string, sectionName: string): JQuery;
        removeOptionsSection(sectionName: string): void;
    }
}
declare namespace UI {
    class TitleScreen extends BaseScreen {
        openedMenu: string;
        elementPlayGameContainer: JQuery;
        elementNewGame: JQuery;
        elementPlayGameSeparater: JQuery;
        elementSavedGameTemplate: JQuery;
        elementNoMods: JQuery;
        elementModContainer: JQuery;
        elementLocalMods: JQuery;
        elementLocalModsContainer: JQuery;
        elementWorkshopMods: JQuery;
        elementWorkshopModsContainer: JQuery;
        elementInternalMods: JQuery;
        elementInternalModsContainer: JQuery;
        elementModTemplate: JQuery;
        elementImportGameInput: JQuery;
        elementHighscoresContainer: JQuery;
        elementHighscoresNoHighscores: JQuery;
        elementHighscoreTemplate: JQuery;
        elementAboutContainer: JQuery;
        elementEndGameHeaderBottom: JQuery;
        elementEndGameHighscore: JQuery;
        selector(): string;
        bindElements(): void;
        unbindElements(): void;
        onShow(data?: any): void;
        onHide(): void;
        onKeyDown(event: JQueryEventObject, keyCode: number, blockable: boolean): boolean;
        showMainMenuId(mainMenuId: string): void;
        refreshSlots(): void;
        refreshMods(): void;
        refreshHighscores(): void;
        updateModState(element: JQuery, id: number): void;
        postUpdateModState(): void;
        onAction(actionId: string, element: JQuery): void;
        actionNewGame(): void;
        actionEditGame(slot: number, inputElement: JQuery): void;
        actionContinueGame(slot: number): void;
        playSlot(slot: number): void;
        actionDeleteGame(slot: number): void;
        getTooltipHtml(element: JQuery): string;
        onImportGame(e: Event): any;
        onSlotNameChange(slot: number, inputElement: JQuery): void;
        refreshEndGame(): void;
        exportToFile(slot: number): void;
        exportToSteamWorkshop(name: string, slot: number): void;
    }
}