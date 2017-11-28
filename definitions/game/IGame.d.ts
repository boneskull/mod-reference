import Vec2 = TSM.vec2;
import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature, IDamageInfo } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { Difficulty, FacingDirection, FireType, IMessagePack, IObjectDescription, IPoint, IPointZ, ISeeds, ItemQuality, ItemType, IVersionInfo, SaveType, SentenceCaseStyle, SkillType, TerrainType, TurnType } from "Enums";
import TimeManager from "game/TimeManager";
import { IItem, IItemArray } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import { IMultiplayerOptions, IMultiplayerWorldData } from "multiplayer/IMultiplayer";
import { ICharacter } from "newui/util/Character";
import { IPlayer } from "player/IPlayer";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { IHighscoreOld, IOptions } from "save/data/ISaveDataGlobal";
import { ISaveInfo } from "save/ISaveManager";
import { IPropSerializable } from "save/ISerializer";
import { ITile, ITileArray, ITileContainer, ITileData } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
import Emitter from "utilities/Emitter";
export interface IGame extends IPropSerializable, Emitter {
    interval: number;
    mapSize: number;
    mapSizeSq: number;
    slot: number;
    loadedResources: boolean;
    version: string;
    mapGenVersion: string;
    saveVersion: string | undefined;
    isLoadingSave: boolean;
    tile: ITileArray;
    tileData: {
        [index: number]: {
            [index: number]: {
                [index: number]: ITileData[];
            };
        };
    };
    tileContainers: ITileContainer[];
    items: IItemArray;
    creatures: SaferArray<ICreature>;
    doodads: SaferArray<IDoodad>;
    tileEvents: SaferArray<ITileEvent>;
    corpses: SaferArray<ICorpse>;
    creatureSpawnTimer: number;
    messageTimer: number;
    saveClear: boolean;
    playing: boolean;
    paused: boolean;
    savedHighscore: boolean;
    autoSaveTimer: number;
    updateRender: boolean;
    fillCount: number;
    fillTile: boolean[][];
    unloading: boolean;
    spawnCoords: IPointZ;
    contaminatedWater: IPointZ[];
    fadeInAmount: number;
    time: TimeManager;
    absoluteTime: number;
    isRealTime: boolean;
    lastCreationIds: {
        [index: number]: number;
    };
    previousSaveVersion: IVersionInfo;
    realTimeTickSpeed: number;
    crafted: {
        [index: number]: ICrafted;
    };
    seeds: ISeeds;
    visible: boolean;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
    particle: IParticle;
    debugRenderer: ITextureDebugRenderer;
    notifier: INotifier;
    cartographyTexture: WebGLTexture;
    readonly isDailyChallenge: boolean;
    addPlayer(playerOptions?: Partial<IPlayerOptions>): IPlayer;
    addZoomLevel(amount: number): void;
    animateSkeletalRemains(player: IPlayer, x: number, y: number, z: number): void;
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, nondeterministic?: boolean): boolean;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean): void;
    checkForHiddenMob(player: IPlayer, x: number, y: number, z: number): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    damage(target: IPlayer | ICreature, damageInfo: IDamageInfo): number | undefined;
    directionToMovement(direction: FacingDirection): IPoint;
    displayMessageIfCanSeeTile(x: number, y: number, z: number, message: Message, messageType: MessageType, ...messageArgs: any[]): boolean;
    doLavaEvents(x: number, y: number, z: number): void;
    enableFlowFieldDebug(): void;
    fireBreath(x: number, y: number, z: number, facingDirection: FacingDirection, itemName?: string): void;
    getAmbientLightLevel(z: number): number;
    getBenignity(): number;
    getBlackness(): number;
    getCompletedMilestoneCount(): number;
    getDifficulty(): Difficulty;
    getFireMessage(decay?: number, isOpenFire?: boolean): Message;
    getHeight(z0: number, z1: number, d: number): number;
    getInspectHealthMessage(percent: number, skillPercent: number, name: string): IMessagePack;
    getLightSourceAt(x: number, y: number, z: number): number;
    getMalignity(): number;
    getMaxDurability(quality: ItemQuality, itemDurability: number): number;
    getMovementFinishTime(): number;
    getName(object: IItem | ICreature | IDoodad | IPlayer | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    getNameFromDescription(description: IObjectDescription | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    getNearestPlayer(x: number, y: number, z?: number): IPlayer | undefined;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    getPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer | undefined;
    getPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer | undefined;
    getPlayerByIdentifier(identifier: string): IPlayer | undefined;
    getPlayerByName(name: string): IPlayer | undefined;
    getPlayerByPid(pid: number): IPlayer | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersThatSeeTile(tileX: number, tileY: number, tileZ: number): IPlayer[];
    getRandomQuality(itemType?: ItemType, bonusQuality?: number): ItemQuality;
    getReputation(): number;
    getReputationMessage(): string;
    getSerializationProperties(_: string): string[];
    getSkillPercent(skill: SkillType): number;
    getStrength(): number;
    getTactics(): number;
    getTile(x: number, y: number, z: number): ITile;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getTileFromPoint(point: IPointZ): ITile;
    getTileInFrontOfPlayer(player: IPlayer): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    getValidPlayerName(name: string | undefined): string;
    getWrappedCoord(x: number): number;
    hurtTerrain(player: IPlayer | undefined, x: number, y: number, z: number, tile: ITile): boolean;
    isOnFire(tile: ITile): FireType;
    isTileEmpty(x: number, y: number, z: number): boolean;
    isTileFull(x: number, y: number, z: number): boolean;
    isTileFullEx(tile: ITile): boolean;
    makeCaveEntrance(player: IPlayer): TerrainType | undefined;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    movementToDirection(x: number, y: number): FacingDirection;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(slot: number): void;
    outputFireMessage(player: IPlayer, decay?: number, isOpenFire?: boolean): void;
    packGround(x: number, y: number, z: number): void;
    passTurn(player: IPlayer, turnType?: TurnType): void;
    play(options: Partial<IPlayOptions> & {
        slot: number;
    }): void;
    processWaterContamination(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    removePlayer(pid: number): void;
    resetGameState(skipSave?: boolean): void;
    resizeRenderer(): void;
    saveGame(saveType: SaveType): Promise<ISaveInfo | undefined>;
    setGlContextSize(width: number, height: number): void;
    setPaused(paused: boolean, chatMessage?: boolean): void;
    setRealTime(enabled: boolean): void;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    setupSave(_: number): void;
    shouldRender(): number;
    synchronizeFlowFields(plys: IPlayer[]): void;
    tickRealtime(): void;
    updateCraftTableAndWeight(): void;
    updateCraftTableAndWeightNextTick(): void;
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number): void;
    updateOption(player: IPlayer | undefined, id: string, value: boolean | number): void;
    updateReputation(reputation: number): void;
    updateView(updateFov: boolean): void;
    wrapCoordinate(cordinate: number, reference: number): number;
}
export default IGame;
export declare enum GameEvent {
    GlobalSlotLoaded = 0,
}
export declare type IGameOld = Partial<IGame> & {
    dayNight: number;
    dayNightSwitch: 0 | 1;
    monsters: ICreature[];
    tamedCreatures: number[];
    options: IOptions;
    lastPlayedVersion: string | undefined;
    highscores: IHighscoreOld[];
    playedCount: number;
    dailyChallenge: boolean;
};
export interface IPlayOptions {
    slot: number;
    name: string;
    seed: string;
    difficulty: Difficulty;
    character: ICharacter;
    multiplayer: IMultiplayerOptions | undefined;
    multiplayerLobbyToJoin: string | undefined;
    realTime: boolean;
    realTimeTickSpeed: number;
    multiplayerWorld?: IMultiplayerWorldData;
}
export interface IPlayerOptions {
    id?: number;
    identifier?: string;
    options?: IOptions;
    position?: IPointZ;
    character: ICharacter;
    completedMilestones?: number;
}
export interface ICrafted {
    unlockTime: number;
    newUnlock: boolean;
}
export declare const lineOfSightRadius = 15;
export declare const lineOfSightMaxRadius = 20;
export declare const lineOfSightDetail = 4;
export declare const interval = 16.6666;
export declare const maximumDirectionTurnDelay: number;
export declare const defaultDirectionTurnDelay: number;
