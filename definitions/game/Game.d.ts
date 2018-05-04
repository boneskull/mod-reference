import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature, IDamageInfo } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { DamageType, Difficulty, FacingDirection, FireType, IMessagePack, IObjectDescription, ISeeds, ItemQuality, ItemType, SaveType, SentenceCaseStyle, SkillType, TerrainType, TurnType } from "Enums";
import { ICrafted, IGame, IPlayerOptions, IPlayOptions } from "game/IGame";
import TimeManager from "game/TimeManager";
import { IItem, IItemArray } from "item/IItem";
import { Message, MessageType } from "language/Messages";
import { INPC } from "npc/INPC";
import { IPlayer } from "player/IPlayer";
import { INotifier } from "renderer/INotifier";
import ITextureDebugRenderer from "renderer/ITextureDebugRenderer";
import { IParticle } from "renderer/particle/IParticle";
import { IHighscore } from "save/data/ISaveDataGlobal";
import { ISaveInfo } from "save/ISaveManager";
import { ITile, ITileArray, ITileContainer, ITileData } from "tile/ITerrain";
import { ITileEvent } from "tile/ITileEvent";
import Emitter from "utilities/Emitter";
import { IVector2, IVector3 } from "utilities/math/IVector";
import Vec2 from "utilities/math/Vector2";
import { IVersionInfo } from "utilities/Version";
export default class Game extends Emitter implements IGame {
    readonly interval: number;
    readonly mapSize: number;
    readonly mapSizeSq: number;
    slot: number;
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
    spawnCoords: IVector3;
    tile: ITileArray;
    updateFieldOfView: boolean;
    updateRender: boolean;
    contaminatedWater: IVector3[];
    corpses: SaferArray<ICorpse>;
    creatures: SaferArray<ICreature>;
    creatureSpawnTimer: number;
    difficulty: Difficulty;
    doodads: SaferArray<IDoodad>;
    flowFieldSyncCount: number;
    isRealTime: boolean;
    items: IItemArray;
    lastCreationIds: {
        [index: number]: number;
    };
    mapGenVersion: string;
    npcs: SaferArray<INPC>;
    realTimeTickSpeed: number;
    savedHighscore: IHighscore | undefined;
    saveVersion: string;
    seeds: ISeeds;
    shouldUpdateTablesAndWeight: boolean;
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
    version: string;
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
    private renderingEnabled;
    private playOptions;
    private readonly ambientLightLevelCache;
    readonly isDailyChallenge: boolean;
    constructor();
    initialize(): void;
    setupGl(restoring: boolean): void;
    resetWebGL(): void;
    setGlContextSize(width: number, height: number): void;
    resizeRenderer(): void;
    checkWaterFill(x: number, y: number, z: number, needed: number): void;
    consumeWaterTile(x: number, y: number, z: number): void;
    checkForHiddenMob(human: IBaseHumanEntity, x: number, y: number, z: number): void;
    animateSkeletalRemains(player: IPlayer, x: number, y: number, z: number): void;
    getWrappedCoord(x: number): number;
    getTileFromPoint(point: IVector3): ITile;
    getTile(x: number, y: number, z: number): ITile;
    getTileUnsafe(x: number, y: number, z: number): ITile;
    setTile(x: number, y: number, z: number, tile: ITile): ITile;
    getOrCreateTile(x: number, y: number, z: number): ITile;
    setPaused(paused: boolean, showChatMessage?: boolean): void;
    gameLoop: (timeStamp: any) => void;
    saveGame(saveType: SaveType): Promise<ISaveInfo | undefined>;
    updateThumbnail(): Promise<void>;
    addZoomLevel(amount: number): void;
    getFireMessage(decay?: number, isOpenFire?: boolean): Message;
    outputFireMessage(player: IPlayer, decay?: number, isOpenFire?: boolean): void;
    requestPlay(options: Partial<IPlayOptions> & {
        slot: number;
    }): Promise<void>;
    play(options: Partial<IPlayOptions> & {
        slot: number;
    }): Promise<void>;
    addPlayer(playerOptions?: Partial<IPlayerOptions>): IPlayer;
    removePlayer(pid: number): void;
    deletePlayer(plys: IPlayer[], identifier: string): void;
    isRealTimeMode(): boolean;
    synchronizeFlowFields(plys: IPlayer[]): void;
    enableFlowFieldDebug(): void;
    resetGameState(skipSave?: boolean): Promise<void>;
    shouldRender(): number;
    makeLavaPassage(player: IPlayer): TerrainType | undefined;
    makeCaveEntrance(player: IPlayer): TerrainType | undefined;
    getTileData(x: number, y: number, z: number): ITileData[] | undefined;
    getOrCreateTileData(x: number, y: number, z: number): ITileData[];
    updateTablesAndWeightNextTick(): void;
    makeMiniMap(offsetX: number, offsetY: number, offsetZ: number, skillCheck?: boolean): void;
    getBlackness(): number;
    getAmbientLightLevel(z: number): number;
    updateAmbientLightLevel(z: number): void;
    updateReputation(reputation: number): void;
    getReputation(): number;
    getDifficulty(): Difficulty;
    getMalignity(): number;
    getBenignity(): number;
    getMaxHealth(): number;
    getStrength(): number;
    getTactics(): number;
    getSkillPercent(skill: SkillType): number;
    getPlayerAverage(calc: (player: IPlayer) => number, round?: boolean): number;
    changeTile(newTileInfo: TerrainType | ITileData, x: number, y: number, z: number, stackTiles: boolean, dropTiles?: boolean): void;
    isPositionFull(x: number, y: number, z: number): boolean;
    isTileFull(tile: ITile): boolean;
    isOnFire(tile: ITile): FireType;
    isTileEmpty(tile: ITile): boolean;
    isPositionEmpty(x: number, y: number, z: number): boolean;
    processWaterContamination(): void;
    getMovementFinishTime(): number;
    passTurn(player: IPlayer, turnType?: TurnType): void;
    tickRealtime(): void;
    updateView(updateFov: boolean): void;
    /**
     * AVOID USING THIS. USE updateTablesAndWeightNextTick INSTEAD!
     * For most cases you don't need this
     */
    updateTablesAndWeight(): void;
    rangeFinder(weaponRange: number, playerSkillLevel: number): number;
    damage(target: IPlayer | ICreature | IBaseHumanEntity, damageInfo: IDamageInfo): number | undefined;
    getPlayers(includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    isPlayerAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    isPlayerAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): boolean;
    getPlayersAtTile(tile: ITile, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersAtPosition(x: number, y: number, z: number, includeGhosts?: boolean, includeConnecting?: boolean): IPlayer[];
    getPlayersThatSeePosition(x: number, y: number, z: number): IPlayer[];
    canASeeB(aX: number, aY: number, aZ: number, bX: number, bY: number, bZ: number, nondeterministic?: boolean): boolean;
    getNearestPlayer(x: number, y: number, z?: number): IPlayer | undefined;
    getPlayerByPid(pid: number): IPlayer | undefined;
    getPlayerByIdentifier(identifier: string, includeAbsent?: boolean): IPlayer | undefined;
    getPlayerByName(name: string): IPlayer | undefined;
    getValidPlayerName(name: string | undefined): string;
    getHeight(z0: number, z1: number, d: number): number;
    getLightSourceAt(x: number, y: number, z: number): number;
    setupSave(_: number): void;
    onGlobalSlotLoaded(_: number, success: boolean): void;
    onSaveLoaded(slot: number): void;
    getName(object: IItem | ICreature | IDoodad | IPlayer | IBaseHumanEntity | ICorpse | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    getNameFromDescription(description: IObjectDescription | undefined, textCase?: SentenceCaseStyle, withPrefix?: boolean): string;
    movementToDirection(x: number, y: number): FacingDirection;
    directionToMovement(direction: FacingDirection): IVector2;
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
    getDamageTypeString(damageTypes: DamageType[], prefixes?: string[]): string;
    private updateOptionInternal(id, value, player?);
    private tick();
    private updateEntityFov();
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
    private initializeGameState(isTraveling?);
    private setZoomLevel();
    private playGame(options);
    private upgradeSave(saveVersion);
    private upgradePlayer(player, saveVersion);
    private upgradeSaveMoveProperty(fromObject, toObject, propertyName, toPropertyName?);
    private upgradeGlobalSave(saveVersion);
}
