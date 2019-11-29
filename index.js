const {
  Client,
  Client: { plugin }
} = require("@botbind/klasa");

Client.defaultGuildSchema.add("roles", schema => schema.add("muted", "role"));

module.exports = {
  [plugin]() {
    this.commands.registerCoreDirectory(`${__dirname}/`);
    this.tasks.registerCoreDirectory(`${__dirname}/`);
  }
};
