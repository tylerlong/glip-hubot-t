// Description:
//   Example scripts for you to examine and try out.
//
// Commands:
//   hubot send to group <group_id> <message> <n> times
//   hubot group_id - show the current group ID

module.exports = function(robot) {
  robot.respond(/send to group\s+(\d+)\s+([\s\S]+)\s+(\d+)\s+times$/, function(res) {
    const times = parseInt(res.match[3]);
    const envelope = {
      user: {
        reply_to: parseInt(res.match[1])
      }
    };
    for (i = 0; i < times; i++) {
      robot.send(envelope, res.match[2].replace(/<n>/, i + 1))
    }
  });
  robot.respond(/group_id$/, function(res) {
    res.send(res.envelope.room);
  });
};
