var versionUpdate = function () {
  var getProtocol = window.location.protocol;
  var getHost = window.location.host;
  var data = {
    versionNum: 'V6.6.6',
    versionTime: '2025.03.03',
    versionLink: getProtocol + "//" + getHost + "/app/DSMTV.apk",
    managementLink: getProtocol + "//" + getHost + "/iptv/",
    versionSize: '14.81MB',
    versionAndroid: 'Android 4.0+',
  }
  return {
    getNum: function () {
      return data.versionNum
    },
    getTime: function () {
      return data.versionTime
    },
    getLink: function () {
      return data.versionLink
    },
    getMLink: function () {
      return data.managementLink
    },
    getSize: function () {
      return data.versionSize
    },
    getAndroid: function () {
      return data.versionAndroid
    }
  }
}