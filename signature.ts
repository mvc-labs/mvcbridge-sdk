import {OrderRegisterRequest} from "./api";
import {Message, PrivateKey} from "meta-contract/dist/mvc";

export const MESSAGE_DIVIDER = "_";

export class SignatureHelper {


    /**
     * Get the signing message for the order register request
     * @param request the order register request without signature
     * @return the message to sign
     */
    public static getSigningMessageFromOrder(request: OrderRegisterRequest): string {
        // concat all the fields with the divider
        // txid_fromChain_fromTokenName_fromAddress_toChain_toTokenName_toAddress_amount
        return request.txid
            + MESSAGE_DIVIDER
            + request.fromChain
            + MESSAGE_DIVIDER
            + request.fromTokenName
            + MESSAGE_DIVIDER
            + request.fromAddress
            + MESSAGE_DIVIDER
            + request.toChain
            + MESSAGE_DIVIDER
            + request.toTokenName
            + MESSAGE_DIVIDER
            + request.toAddress
            + MESSAGE_DIVIDER
            + request.amount;
    }

    /**
     * Sign the message using the private key, this can be used to sign the message for bitcoin like blockchains
     * Signing using standard bitcoin message with prefix
     * '\x18Bitcoin Signed Message:\n' + message.length + message
     *
     * @param message message to sign
     * @param privateKeyWif your private key in WIF format
     */
    public static signMessageBitcoin(message: string, privateKeyWif: string): string {
        const privateKey = PrivateKey.fromWIF(privateKeyWif);
        return Message.sign(message, privateKey)
    }

}