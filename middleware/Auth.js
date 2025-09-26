const jwt = require("jsonwebtoken");
const Auth = (roles = []) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
          message: "UnAuthorization: no token provided",
        });
      }

      const token = authHeader.split(" ")[1];

      if (!token) {
        return res.status(401).json({
          message: "UnAuthorization: no token provided",
        });
      }

      let secretKey = "12456452";
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;

      if (req.user && !roles.includes(decoded.role)) {
        return res.status(403).json({
          message: "ForBidden: no Access",
        });
      }

      next();
    } catch (err) {
      return res.status(401).json({
        message: "UnAuthorization: no token provided",
      });
    }
  };
};

module.exports =Auth