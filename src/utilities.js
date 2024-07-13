import crypto from 'crypto'
export function checkHash(hash, initData, botToken) {

    const secretKey = crypto.createHmac("sha256", "WebAppData")
        .update(botToken);

    const calculatedHash = crypto.createHmac("sha256", secretKey.digest())
        .update(dataCheckString)
        .digest("hex");
}

//query_id=AAF-OItjAAAAAH44i2Omoagn&user=%7B%22id%22%3A1670068350%2C%22first_name%22%3A%22R%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720884133&hash=be2c19d680d966e600e08d754b2b213f090420092be62612c0887e3995e5e3c0