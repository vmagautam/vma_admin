const constants = {
    UserAuth: {
      secret:
        'aa100876d5d014d957577e4b21e20b52bd9b16ce2a2837cde40d682133af23c2580c9beabf01fbaefd7e792bae4d581cd54e662911dc36a31302368f226baf01',
      refreshTokenSecret: 'refresh-token-secret',
      tokenexpiry: '365d',
      refreshTokenExpiry: '2h',
    },
    adminAuth: {
      secret:
        'f20ad99cd642290e483cd7381baa9dca2995b92ec5eaa66b670d9204ca11e61e6bc56e4b705d8950ca0b577ce204dedc8e4468f35b05d2eacff510d037148b25',
      refreshTokenSecret: 'refresh-token-secret',
      tokenexpiry: '365d',
      refreshTokenExpiry: '2h',
    },
    level: {
      Entry_Level: 'Entry Level',
      Mid_Level: 'Mid Level',
      Senior_Level: 'Senior Level',
    },
    ipRestrictedType: {
      Whitelist: 'Whitelist',
      Blacklist: 'Blacklist',
    },
    userStatus: {
      Approved: 'Activated',
      Pending: 'Pending',
      Deactivated: 'Deactivated',
      Muted: 'Muted',
    },
  };
  
  module.exports = constants;
  