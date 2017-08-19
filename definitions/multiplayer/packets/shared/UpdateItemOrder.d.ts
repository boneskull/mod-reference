import { IContainer } from "item/IItem";
import SharedPacket from "multiplayer/packets/SharedPacket";
export default class UpdateItemOrderPacket extends SharedPacket {
    container: IContainer;
    itemOrder: number[] | undefined;
    process(): void;
}
