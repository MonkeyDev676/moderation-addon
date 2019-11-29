const { Command, Duration } = require("@botbind/klasa");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      permissionLevel: 6,
      requiredPermissions: ["MANAGE_ROLES"],
      runIn: ["text"],
      description: "Mutes a mentioned member.",
      usage: "[when:time] <member:member> [reason:...string]",
      usageDelim: " "
    });
  }

  async run(msg, [when, member, reason]) {
    if (member.id === msg.author.id) throw "You cannot mute yourself.";
    if (member.id === this.client.user.id) throw "I cannot mute myself.";

    if (member.roles.highest.position >= msg.member.roles.highest.position)
      throw "You cannot mute this user.";

    if (member.roles.has(msg.guild.settings.roles.muted))
      throw "The member is already muted.";
    await member.roles.add(msg.guild.settings.roles.muted);

    if (when) {
      await this.client.schedule.create("unmute", when, {
        data: {
          guild: msg.guild.id,
          user: member.id
        }
      });
      return msg.sendMessage(
        `${member.user.tag} got temporarily muted for ${Duration.toNow(when)}.${
          reason ? ` With reason of: ${reason}` : ""
        }`
      );
    }

    return msg.sendMessage(
      `${member.user.tag} got muted.${
        reason ? ` With reason of: ${reason}` : ""
      }`
    );
  }
};
