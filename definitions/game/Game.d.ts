import Vec2 = TSM.vec2;
import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature, IDamageInfo } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { Difficulty, FacingDirection, FireType, IMessagePack, IObjectDescription, IPoint, IPointZ, ISeeds, ItemQuality, ItemType, IVersionInfo, SaveType, SentenceCaseStyle, SkillType, TerrainType, TurnType } from "Enums";
import { ICrafted, IGame, IPlayerOptions, IPlayOptions } from "game/IGame";
import TimeManager from "game/TimeManager";
import { IItem, IItemArray } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import { IPlayer } from "player/IPlayer";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { ISaveInfo } from "save/ISaveManager";
import { ITile, ITileArray, ITileContainer, ITileData } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
import * as Utilities from "Utilities";
export default class Game extends Utilities.Emitter implements IGame {
    readonly interval: number;
    readonly mapSize: number;
    readonly mapSizeSq: number;
    slot: number;
    loadedResources: boolean;
    version: string;
    mapGenVersion: string;
    previousSaveVersion: IVersionInfo;
    absoluteTime: number;
    autoSaveTimer: number;
    crafted: {
        [index: number]: ICrafted;
    };
    fadeInAmount: number;
    fillCount: number;
    fillTile: boolean[][];
    isLoadingSave: boolean;
    messageTimer: number;
    paused: boolean;
    playing: boolean;
    realTimeNextTick: number;
    saveClear: boolean;
    spawnCoords: IPointZ;
    tile: ITileArray;
    unloading: boolean;
    updateFieldOfView: boolean;
    updateRender: boolean;
    contaminatedWater: IPointZ[];
    corpses: SaferArray<ICorpse>;
    creatures: SaferArray<ICreature>;
    creatureSpawnTimer: number;
    difficulty: Difficulty;
    doodads: SaferArray<IDoodad>;
    flowFieldSyncCount: number;
    isRealTime: boolean;
    realTimeTickSpeed: number;
    items: IItemArray;
    lastCreationIds: {
        [index: number]: number;
    };
    savedHighscore: boolean;
    saveVersion: string;
    seeds: ISeeds;
    shouldUpdateCraftTableAndWeight: boolean;
    tileContainers: ITileContainer[];
    tileData: {
        [index: number]: {
            [index: number]: {
                [index: number]: ITileData[];
            };
        };
    };
    tileEvents: SaferArray<ITileEvent>;
    time: TimeManager;
    cartographyTexture: WebGLTexture;
    debugRenderer: ITextureDebugRenderer;
    glContext: WebGL2RenderingContext | null;
    glVersion: number;
    mapContext: CanvasRenderingContext2D | null;
    notifier: INotifier;
    particle: IParticle;
    spriteTexture: WebGLTexture;
    spriteTextureSizeInversed: Vec2;
    tileTexture: WebGLTexture;
    tileTextureSizeInversed: Vec2;
    visible: boolean;
    private gameCanvas;
    private thumbnailResolve?;
    private simulateInterval?;
    private loadedWorld;
    private renderingEnabled;
    private playOptions;
    readonly isDailyChallenge: boolean;
    constructor();
    setupGl(restoring: boolean): void;
    resetGl(): void;
    setGlContextSize(width: number, height: number): void;
    resizeRenderer(): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    checkForHiddenMob(player: IPlayer, x: number, y: number, z: number): void;
    animateSkeletalRemains(player: IPlayer, x: number, y: number, z: number): void;
    getWrappedCoord(x: number): number;
    getTileInFrontOfPlayer(player: IPlayer): ITile;
    getTileFromPoint(point: IPointZ): ITile;
    getTile(x: number, y: number, z: number): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    setPaused(paused: boolean, chatMessage?: boolean): void;
    gameLoop: (timeStamp: any) => void;
    saveGame(saveType: SaveType): Promise<ISaveInfo | undefined>;
    updateThumbnail(): Promise<void>;
    addZoomLevel(amount: number): void;
    getFireMessage(decay?: number, isOpenFire?: boolean): Message;
    outputFireMessage(player: IPlayer, decay?: number, isOpenFire?: boolean): void;
    play(options: Partial<IPlayOptions>): void;
    addPlayer(playerOptions?: Partial<IPlayerOptions>): IPlayer;
    removePlayer(pid: number): void;
    setRealTime(enabled: boolean): void;
    synchronizeFlowFields(plys: IPlayer[]): void;
    enableFlowFieldDebug(): void;
    resetGameState(skipSave?: boolean): Promise<void>;
    shouldRender(): number;
    makeCaveEntrance(player: IPlayer): TerrainType | undefined;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    hurtTerrain(player: IPlayer | undefined, x: number, y: number, z: number, tile: ITile): boolean;
    updateCraftTableAndWeightNextTick(): void;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    getBlackness(): number;
    getAmbientLightLevel(z: number): number;
    updateReputation(reputation: number): void;
    getReputation(): number;
    getDifficulty(): Difficulty;
    getReputationMessage(): string;
    getMalignity(): number;
    getBenignity(): number;
    getStrength(): number;
    getTactics(): number;
    getSkillPercent(skill: SkillType): number;
    getPlayerAverage(calc: (player: IPlayer) => number, round?: boolean): number;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean): void;
    isTileFull(x: number, y: number, z: number): boolean;
    isTileFullEx(tile: ITile): boolean;
    isOnFire(tile: ITile): FireType;
    isTileEmpty(x: number, y: number, z: number): boolean;
    processWaterContamination(): void;
    getMovementFinishTime(): number;
    passTurn(player: IPlayer, turnType?: TurnType): void;
    tickRealtime(): void;
    updateView(updateFov: boolean): void;
    /**
     * AVOID USING THIS. USE updateCraftTableAndWeightNextTick INSTEAD!
     * For most cases you don't need this
     */
    updateCraftTableAndWeight(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    damage(target: IPlayer | ICreature, damageInfo: IDamageInfo): number | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer | undefined;
    getPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer | undefined;
    getPlayersThatSeeTile(tileX: number, tileY: number, tileZ: number): IPlayer[];
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, nondeterministic?: boolean): boolean;
    getNearestPlayer(x: number, y: number, z?: number): IPlayer | undefined;
    getPlayerByPid(pid: number): IPlayer | undefined;
    getPlayerByIdentifier(identifier: string): IPlayer | undefined;
    getPlayerByName(name: string, ignoreCase?: boolean): IPlayer | undefined;
    getValidPlayerName(name: string | undefined): string;
    getHeight(z0: number, z1: number, d: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    setupSave(_: number): void;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(slot: number): void;
    getSerializationProperties(_: string): string[];
    getName(object: IItem | ICreature | IDoodad | IPlayer | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    getNameFromDescription(description: IObjectDescription | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    movementToDirection(x: number, y: number): FacingDirection;
    directionToMovement(direction: FacingDirection): IPoint;
    fireBreath(x: number, y: number, z: number, facingDirection: FacingDirection, itemName?: string): void;
    updateOption(player: IPlayer | undefined, id: string, value: boolean | number): void;
    updateFlowFieldTile(tile: ITile, x: number, y: number, z: number): void;
    displayMessageIfCanSeeTile(x: number, y: number, z: number, message: Message, messageType: MessageType, ...messageArgs: any[]): boolean;
    getCompletedMilestoneCount(): number;
    packGround(x: number, y: number, z: number): void;
    getRandomQuality(itemType?: ItemType, bonusQuality?: number): ItemQuality;
    getMaxDurability(quality: ItemQuality, itemDurability: number): number;
    doLavaEvents(x: number, y: number, z: number): void;
    getInspectHealthMessage(percent: number, skillPercent: number, name: string): IMessagePack;
    wrapCoordinate(cordinate: number, reference: number): number;
    private updateOptionInternal(id, value, player?);
    private tick();
    private processTimers(realPlayers);
    private processAutoSave();
    private tickDayNightCycle(realPlayers);
    private runRandomEvents(player);
    private upgradeToClasses<T>(arr, c, onUpdate?);
    private processMessages();
    private prePlay(isLoadingSave, options);
    private playPostSeed(options);
    private render();
    private simulate();
    private getPotentialRecipesInContainer(container, typesChecked, potentialRecipes);
    private removeAndFixPids(playerArray, pid);
    private createWorld();
    private createWorldRenderer();
    private loadResources();
    private initializeGameState(isTravelling?);
    private setZoomLevel();
    private postGenerateWorld(options);
    private postLoadResources();
    private checkAfterLoading();
    private playGame(options);
    private upgradeSave(saveVersion);
    private upgradePlayer(player, saveVersion);
    private upgradeSaveMoveProperty(fromObject, toObject, propertyName, toPropertyName?);
    private upgradeGlobalSave(saveVersion);
}
