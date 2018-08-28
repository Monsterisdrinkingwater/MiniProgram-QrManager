const app = getApp();
Page({
    data: {
        userInfo: {},
        codeList:[],
        numOfCode:0
    },
    onLoad: function () {
        let userInfoTemp = app.globalData.userInfo;
        this.setData({
            userInfo: userInfoTemp
        });

    },
    onShow: function () {
        let codeListTemp = wx.getStorageSync('codeList')||[];
        let numOfCodeTemp = codeListTemp.length;
        console.log(codeListTemp);
        this.setData({
            codeList: codeListTemp,
            numOfCode: numOfCodeTemp
        });
    },
    tapOnBox: function (ev) {
        let index = ev.currentTarget.dataset.boxindex;
        wx.navigateTo({
            url: "codePage/codePage?index=" + index
        })
    },

});
