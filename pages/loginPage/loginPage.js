const app = getApp();

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    bindViewTap: function (ev) {
        wx.switchTab({url: '../scanPage/scanPage'});
    },

    getUserInfo: function (e) {
        app.globalData.userInfo = e.detail.userInfo;
        if(!app.globalData.userInfo) return;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },

    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            });
        } else if (this.data.canIUse) {
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            };
        } else {
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo;
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    }
});
