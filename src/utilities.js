import crypto from 'crypto'
export function checkHash(hash, initData, botToken) {

    const secretKey = crypto.createHmac("sha256", "WebAppData")
        .update(botToken);

    const calculatedHash = crypto.createHmac("sha256", secretKey.digest())
        .update(dataCheckString)
        .digest("hex");
}