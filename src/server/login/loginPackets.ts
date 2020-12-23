import { PacketWriter } from '../../protocol/packet/packetWriter';
import { CommonSendOpcode } from '../../protocol/opcode/common/send';
import { ServerType } from '../baseServer';


export class LoginPackets {

    static getCenterHandshakeAck(): Buffer {
        const packet = new PacketWriter(3);
        packet.writeShort(CommonSendOpcode.CENTER_HANDSHAKE_ACK.getValue());
        packet.writeByte(ServerType.LOGIN);
        return packet.getPacket();
    }

}