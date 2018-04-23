import Vec2 = TSM.vec2;
import IWorldRenderer from "renderer/IWorldRenderer";
import * as TileAdaptor from "renderer/TileAdaptors";
import WorldLayerRenderer from "renderer/WorldLayerRenderer";
export default class WorldRenderer implements IWorldRenderer {
    private readonly gl;
    private static textureShaderProgram;
    private static worldShaderProgram;
    private static fogShaderProgram;
    positionTextureBuffer: WebGLBuffer;
    positionBuffer: WebGLBuffer;
    ditherTexture: WebGLTexture;
    layers: WorldLayerRenderer[];
    dirtAdaptor: TileAdaptor.Dirt;
    tillAdaptor: TileAdaptor.Till;
    waterAdaptor: TileAdaptor.Water;
    lavaAdaptor: TileAdaptor.Lava;
    fenceAdaptor: TileAdaptor.Fence;
    mountainAdaptor: TileAdaptor.Mountain;
    wallAdaptor: TileAdaptor.Wall;
    defaultAdaptor: TileAdaptor.Default;
    floorAdaptor: TileAdaptor.Floor;
    private readonly ambientIntensity;
    private readonly ambientColorDay;
    private readonly ambientColorDawn;
    private readonly ambientColorNight;
    private readonly ambientColorCave;
    private readonly screenspaceViewport;
    private readonly worldspaceViewport;
    private tileScale;
    private zoom;
    private readonly compositeFramebuffer;
    private readonly compositeTexture;
    private readonly layerFramebuffer;
    private readonly layerTexture;
    private readonly depthBuffer;
    private readonly fogFramebuffer;
    private readonly fogTexture;
    private readonly fogTextureStorage;
    private readonly vertexArraySingle;
    private readonly vertexArrayDouble;
    private readonly itemBatch;
    private readonly corpseBatch;
    private readonly creatureBatch;
    private readonly creatureFlyingBatch;
    private readonly entitiesInViewport;
    private viewportSpritesDirty;
    static compileShaders(gl: WebGL2RenderingContext): void;
    constructor(gl: WebGL2RenderingContext);
    updateAll(): void;
    setSpriteTexture(texture: WebGLTexture, textureSizeInversed: Vec2): any;
    getPixelSize(): number;
    getZoom(): number;
    getTileScale(): number;
    setTileScale(tileScale: number): void;
    setZoom(zoom: number): void;
    setViewport(view: Vec2): void;
    getViewport(): Vec2;
    getTileViewport(): Vec2;
    getAmbientColor(): number[];
    renderWorld(x: number, y: number, z: number): void;
    render(): void;
    screenToTile(screenX: number, screenY: number): Vec2;
    getViewportBounds(): {
        min: Vec2;
        max: Vec2;
        z: number;
    };
    computeSpritesInViewport(): void;
    batchCreatures(): void;
    private isFlyingOffset(tile);
    private batchShadow(fromX, fromY, toX, toY, t, anim);
    private batchPlayers(batchLayer);
    private batchHuman(human, batchLayer);
    /**
     * Renders the status effects currently on the human.
     */
    private renderStatusEffects(renderLayer, batch, human, animOffset, posX, posY, playerSize, offsetX, offsetY, alpha);
    /**
     * Renders a status effect image.
     */
    private renderStatusEffect(batch, human, animOffset, posX, posY, playerSize, offsetX, offsetY, alpha, defaultSprite, spriteOrSpriteLine);
    private spriteBatchForLayer(layer);
    private shouldOffsetFlying(tile);
    private computeSpritesInViewportInternal();
}
