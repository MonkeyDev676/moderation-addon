const { Command } = require("@botbind/klasa");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      permissionLevel: 6,
      requiredPermissions: ["BAN_MEMBERS"],
      runIn: ["text"],
      description: "Bans a mentioned user.",
      usage: "<member:user> [reason:...string]",
      usageDelim: " "
    });
  }

  async run(msg, [user, reason]) {
    if (user.id === msg.author.id) throw "You cannot ban yourself.";
    if (user.id === this.client.user.id) throw "I cannot ban myself.";

    const member = await msg.guild.members.fetch(user).catch(() => null);
    if (member) {
      if (member.roles.highest.position >= msg.member.roles.highest.position)
        throw "You cannot ban this user.";
      if (!member.bannable) throw "I cannot ban this user.";
    }

    const options = {};
    if (reason) options.reason = reason;

    await msg.guild.members.ban(user, options);
    return msg.sendMessage(
      `${member.user.tag} got banned.${
        reason ? ` With reason of: ${reason}` : ""
      }`
    );
  }
};
