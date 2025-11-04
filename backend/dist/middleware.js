import jwt, {} from "jsonwebtoken";
import { JWT_SECRET_KEY } from "./config.js";
export const auth = (req, res, next) => {
    const token = req.headers["authorization"];
    try {
        if (token) {
            const user = jwt.verify(token, JWT_SECRET_KEY);
            req.body.userId = user.Id;
            next();
        }
    }
    catch (err) {
        res.status(200).json({
            message: err,
        });
    }
};
//# sourceMappingURL=middleware.js.map