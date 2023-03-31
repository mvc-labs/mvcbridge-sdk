import {OrderRegisterRequest} from "./api";
import {Networks, PrivateKey} from "meta-contract/dist/mvc";
import {mvc} from "meta-contract";
import testnet = Networks.testnet;


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
     * @param message message to sign
     * @param privateKeyWif your private key in WIF format
     */
    public static signMessageBitcoin(message: string, privateKeyWif: string): string {
        const privateKey = PrivateKey.fromWIF(privateKeyWif);
        console.log(privateKey.toAddress('testnet').toString())
        const hash = mvc.crypto.Hash.sha256sha256(Buffer.from(message))
        return Buffer.from(mvc.crypto.ECDSA.sign(hash, privateKey).toDER()).toString("base64");

    }
}