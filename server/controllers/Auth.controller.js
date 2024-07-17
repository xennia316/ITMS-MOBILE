const { createClient } = require("@supabase/supabase-js");
const bcrypt = require("bcryptjs");
const supabaseUrl = "https://wlbjoivuilrezhdeensx.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SignUp = async (req, res) => {
  const { username, firstName, lastName, phoneNumber, plateNumber, password } =
    req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("user_name", username);

    if (data.length === 0) {
      const { data, error } = await supabase.from("users").insert([
        {
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          password: hashedPassword,
          plate_number: plateNumber,
          user_name: username,
        },
      ]);

      if (error) {
        return res.status(400).json({ error: error.message });
      }
      // Handle successful sign-up (e.g., generate token, create session)
      res.status(201).json({ message: "User created successfully" });
    } else {
      return res.status(400).json({ error: "Username already exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

const SignIn = async (req, res) => {
  const { username, password } = req.body;

  // validate input data
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select()
      .eq("user_name", username)
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    if (data.length === 0) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Handle successful sign-in (e.g., generate token, create session)
    res.status(200).json({ message: "Sign in successful" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

module.exports = { SignUp, SignIn };
