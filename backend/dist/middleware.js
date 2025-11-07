import jwt, {} from "jsonwebtoken";
import { JWT_SECRET_KEY } from "./config.js";
export const auth = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log("Received Header:", authHeader);
    if (!authHeader) {
        return res.status(400).json({ message: "No Authorization header" });
    }
    try {
        const token = authHeader.split(" ")[1];
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