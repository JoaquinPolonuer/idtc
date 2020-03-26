const {
  create,
  getUsersByUserDocument,
  getUsers,
  deleteUser,
  updateUser,
  getUserByUserEmail,
  getUserByUserId,
  getClassUser
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getUsersByUserDocument: (req, res) => {
    const document = req.params.document;
    getUsersByUserDocument(document, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getUserByUserId: (req, res) => {
    const body = req.body;
    getUserByUserId(body.id_user, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getClassUser: (req, res) => {
    const id_user = req.params.id_user;
    getClassUser(id_user, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }

      return res.json({
        success: 1,
        data: results
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: "user deleted successfully"
      });
    });
  },
  updateUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "failed to update user"
        });
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  login: (req, res) => {
    if (
      !req.headers.authorization ||
      req.headers.authorization.indexOf("Basic ") === -1
    ) {
      return res.status(403).json({ message: "Missing Authorization Header" });
    }

    const base64Credentials = req.headers.authorization.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString(
      "ascii"
    );
    const [username, password] = credentials.split(":");

    getUserByUserEmail(username, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(401).json({
          success: 0,
          data: "invalid email or password"
        });
      }
      const result = compareSync(password, results.password);
      if (result) {
        results.password = undefined;

        const jsontoken = sign(
          { sub: results.document },

          process.env.JSONTOKEN_KEY,
          {
            expiresIn: "1h"
          }
        );
        return res.json({
          success: 1,
          message: "login successsfully",
          token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          data: "invalid email or password"
        });
      }
    });
  }
};
