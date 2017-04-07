import Vec2 = TSM.vec2;
import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { FacingDirection, IHighscore, IPoint, IPointZ, ISeeds, SaveType, SentenceCaseStyle, SkillType, TerrainType, TurnType } from "Enums";
import IOptions from "game/IOptions";
import TimeManager from "game/TimeManager";
import { IItem, IItemArray, IObjectDescription } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import { IWorldPacket } from "multiplayer/IPacket";
import { IPlayer, IPlayerCustomization } from "player/IPlayer";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { SaveObject } from "save/ISaveManager";
import { IPropSerializable } from "save/ISerializer";
import { ITile, ITileArray, ITileContainer, ITileData } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
export interface IGame extends IPropSerializable {
    interval: number;
    mapSize: number;
    mapSizeSq: number;
    halfMapSize: number;
    slot: number;
    loadedResources: boolean;
    version: string;
    saveVersion: string | null;
    isLoadingSave: boolean;
    tile: ITileArray;
    tileData: ITileData[][][][];
    tileContainers: ITileContainer[];
    items: IItemArray;
    creatures: ICreature[];
    doodads: IDoodad[];
    tileEvents: ITileEvent[];
    corpses: ICorpse[];
    creatureSpawnTimer: number;
    messageTimer: number;
    saveClear: boolean;
    playing: boolean;
    paused: boolean;
    savedHighscore: boolean;
    autoSaveTimer: number;
    updateRender: boolean;
    dailyChallenge: boolean;
    fillCount: number;
    fillTile: boolean[][];
    unloading: boolean;
    spawnCoords: any;
    contaminatedWater: IPointZ[];
    fadeInAmount: number;
    lastPlayedVersion: string | null;
    time: TimeManager;
    absoluteTime: number;
    isRealTime: boolean;
    crafted: {
        [index: number]: boolean;
    };
    newCrafted: {
        [index: number]: boolean;
    };
    highscores: IHighscore[];
    visible: boolean;
    seeds: ISeeds;
    playedCount: number;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
    particle: IParticle;
    debugRenderer: ITextureDebugRenderer;
    notifier: INotifier;
    cartographyTexture: WebGLTexture;
    addPlayer(playerOptions?: IPlayerOptions): IPlayer;
    addZoomLevel(amount: number): void;
    animateSkeletalRemains(player: IPlayer, x: number, y: number, z: number): void;
    changeTile(newTile: any, changeX: number, changeY: number, changeZ: number, stackTiles: boolean): void;
    checkAndRemoveBlood(player: IPlayer): boolean;
    checkForHiddenMob(player: IPlayer, x: number, y: number, z: number): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    directionToMovement(direction: FacingDirection): IPoint;
    displayMessageIfCanSeeTile(x: number, y: number, z: number, message: Message, messageType: MessageType, ...messageArgs: any[]): boolean;
    enableFlowFieldDebug(): void;
    fireBreath(x: number, y: number, z: number, facingDirection: FacingDirection, itemName?: string): void;
    getAmbientLightLevel(): number;
    getAttack(): number;
    getBenignity(): number;
    getBlackness(): number;
    getCompletedMilestoneCount(): number;
    getFireMessage(decay: number): Message;
    getHeight(z0: number, z1: number, d: number): number;
    getMalignity(): number;
    getMovementFinishTime(): number;
    getName(object: IItem | ICreature | IDoodad | IPlayer | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    getNameFromDescription(description: IObjectDescription | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    getNearestPlayer(x: number, y: number): IPlayer | undefined;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    getPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean): IPlayer | undefined;
    getPlayerAtTile(tile: ITile, includeGhosts?: boolean): IPlayer | undefined;
    getPlayerByName(name: string): IPlayer | undefined;
    getPlayers(includeGhosts?: boolean): IPlayer[];
    getReputation(): number;
    getSerializationProperties(_: string): string[];
    getSkillPercent(skill: SkillType): number;
    getStrength(): number;
    getTile(x: number, y: number, z: number): ITile;
    getTileInFrontOfPlayer(player: IPlayer): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    getWrappedCoord(x: number): number;
    hurtTerrain(player: IPlayer | undefined, x: number, y: number, z: number, tile: ITile): boolean;
    isTileEmpty(x: number, y: number, z: number): boolean;
    isTileFull(x: number, y: number, z: number): boolean;
    isTileFullEx(tile: ITile): boolean;
    makeCaveEntrance(player: IPlayer): TerrainType | null;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(slot: number): void;
    outputFireMessage(player: IPlayer, decay: number): void;
    packGround(x: number, y: number, z: number): void;
    passTurn(player: IPlayer, turnType?: TurnType): void;
    play(saveSlot: number, options?: IPlayOptions): void;
    postLoadResources(): void;
    processWaterContamination(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    removePlayer(pid: number): void;
    resetGameState(): void;
    resizeRenderer(): void;
    saveGame(saveType: SaveType, callback?: (slot?: number, bytes?: number, saveObject?: SaveObject) => void): void;
    setGlContextSize(width: number, height: number): void;
    setPaused(paused: boolean, chatMessage?: boolean): void;
    setRealTime(enabled: boolean): void;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    setupSave(_: number): void;
    shouldRender(): number;
    synchronizeFlowFields(excludeLocal?: boolean): void;
    tickRealtime(): void;
    updateCraftTableAndWeight(): void;
    updateCraftTableAndWeightNextTick(): void;
    updateFieldOfViewNextTick(): void;
    updateFlowFieldTile(x: number, y: number, z: number): void;
    updateGame(resting?: boolean): void;
    updateOption(player: IPlayer | undefined, id: string, value: boolean): void;
    updateReputation(reputation: number): void;
}
export default IGame;
export declare type IGameOld = Partial<IGame> & {
    dayNight: number;
    dayNightSwitch: 0 | 1;
    monsters: ICreature[];
    tamedCreatures: number[];
    options: IOptions;
};
export interface IPlayOptions {
    seed?: string | number;
    name?: string;
    customization?: IPlayerCustomization;
    multiplayer?: IWorldPacket;
}
export interface IPlayerOptions {
    id?: number;
    identifier?: string;
    name?: string;
    options?: IOptions;
    position?: IPointZ;
    customization?: IPlayerCustomization;
}
export declare const lineOfSightRadius = 20;
export declare const lineOfSightDetail = 4;