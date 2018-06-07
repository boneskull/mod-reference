export interface IHint {
    name?: string;
    description?: string;
    highlightElementSelector?: string[];
}
export declare enum HintType {
    First = 0,
    WelcomeToWayward = 1,
    Controls = 2,
    CorpseCarving = 3,
    Doodads = 4,
    Caves = 5,
    Nightfall = 6,
    StaminaReplenishment = 7,
    HealthProblems = 8,
    Bleeding = 9,
    Poisoned = 10,
    Dehydration = 11,
    UseATool = 12,
    Durability = 13,
    Death = 14,
    ConsumingBadThings = 15,
    FastPickup = 16,
    Bugs = 17,
    HeldItems = 18,
    Milestones = 19,
    Burned = 20,
    Crafting = 21,
    Encumberance = 22,
    MovingItems = 23,
    CraftingFailure = 24,
    Reputation = 25,
    Interface = 26,
    CreatureTaming = 27,
    Combat = 28,
    Quickslots = 29,
    ResourceGathering = 30,
    Multiplayer = 31,
    Gardening = 32,
    WanderingMerchants = 33,
    Last = 34
}
