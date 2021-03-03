import { HTTP } from "Config/HTTPService";

import CONSTANTS from "Config/constants";

const PLACE_CRYPTO_ORDER = CONSTANTS.API_URL.PLACE_CRYPTO_ORDER
const GET_CRYPTO_ORDERS = CONSTANTS.API_URL.GET_CRYPTO_ORDERS

export default class CryptoOrderService {
    getCryptoOrder() {
        return HTTP.get(GET_CRYPTO_ORDERS, {
            headers: {
                'Content-Type': "application/json"
            }
        })
    }

    placeCryptoOrder(order) {
        return HTTP.post(PLACE_CRYPTO_ORDER, order, {
            headers: {
                contentType: "application/json"
            }
        })
    }
}