# Simple Moderation Addon

This addon has a collection of commands to keep your text and voice channels tightly enforced.

---

Assuming **!** is your prefix.

### Ban

`!ban` - Bans a user from your server.

        !ban @User
        !ban @User bad boy

`!softban` - Kicks a user from the server and deletes their messages. You can control how many days of messages you want to delete (1-7 days)

        !softban @User
        !softban @User bad boy
        !softban @User 7

`!unban` - Unban a banned user.

        !unban @User
        !unban @User good boy

### Kick

`!kick` - Kicks a user from your server.

        !kick @User
        !kick @User bad boy

`!voicekick` - Disconnects a member from a voice channel.

        !voicekick @User
        !voicekick @User bad boy

### Mute

`!mute` - Mutes a user from a server. You can also set a timer for auto unmute.

**Note:** You need to set a muted role in your server with preconfigured permission to deny sending messages. And, you need to set that role in your dashboard server settings.

        !mute @User
        !mute 5min @User

`!unmute` - Unmute a muted user.

        !unmute @User
        !unmute @User good boy

### Prune Messages

`!prune` or `!purge` - Delete a certain amount of messages from a channel. You can also use filters to filter out different kinds of users and messages.

Add these at the end of the command to filter only these things:

- **link **— If a message contains a URL.
- **invite **— If a message contains a Discord invite.
- **bots **— If a message is sent by a bot.
- **you **— If a message is sent by yourself.
- **me **— If a message is sent by your bot.
- **@mention** — If a message is sent by the mentioned user.

        !prune
        !prune 10
        !prune link
        !prune @User

---

## Contributing

We encourage contributing to this addon. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## Credits

- [Klasa](http://klasa.js.org/)
- [Klasa Peices](https://github.com/dirigeants/klasa-pieces)
