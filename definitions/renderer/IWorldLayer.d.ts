import { DoodadType, TerrainMask, TerrainType } from "Enums";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import IExploreMap from "renderer/IExploreMap";
import { TerrainData } from "renderer/IWorld";
import { ITile } from "tile/ITerrain";
export declare type onTileUpdateDelegate = (x: number, y: number, flushImmediate: boolean) => void;
export declare type onDoodadUpdateDelegate = (x: number, y: number, doodadType: DoodadType | null, doodadVariation: number, flushImmediate: boolean) => void;
export interface IWorldLayer {
    width: number;
    height: number;
    level: number;
    lightLevelMap: IByteGrid;
    lightBlockMap: IByteGrid;
    exploredMap: IExploreMap;
    onTileUpdate: onTileUpdateDelegate;
    onDoodadUpdate: onDoodadUpdateDelegate;
    getTile(x: number, y: number): TerrainData;
    getTileType(x: number, y: number): TerrainType;
    getType(terrain: TerrainData): TerrainType;
    isFence(terrain: TerrainData): boolean;
    isTilled(terrain: TerrainData): boolean;
    isWall(terrain: TerrainData): boolean;
    resetExploredMap(): void;
    setTile(x: number, y: number, terrainType: TerrainType | undefined, terrainMasks?: TerrainMask): void;
    updateAll(): void;
    updateTile(x: number, y: number, tile: ITile, shouldUpdate?: boolean): void;
}
export default IWorldLayer;
