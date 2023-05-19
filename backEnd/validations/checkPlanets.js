const checkName = (req, res, next) => {
    if (req.body.name) {
      console.log(`Yay! A planet name!`);
      next();
    } else {
      res.status(400).json({ error: "A planet name is required" });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const { signs_of_life } = req.body;
    if (
      signs_of_life === true ||
      signs_of_life === false ||
      signs_of_life === undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "signs_of_life must be a boolean value" });
    }
  };
  
  module.exports = { checkName, checkBoolean };
  