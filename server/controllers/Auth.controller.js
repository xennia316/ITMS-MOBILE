const pool = require("../db/db");

const SignUp = async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    plateNumber,
    userName,
  } = req.params;

  try {
    pool.connect();


    const sqlstr = `insert into users (first_name, last_name, phone_number, email, password, plate_number, user_name) 
    values ('${firstName}', '${lastName}', '${phoneNumber}', '${email}', '${password}', '${plateNumber}', '${userName}')`;

    await pool.query(sqlstr);
    res.json("user created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

export { SignUp };
