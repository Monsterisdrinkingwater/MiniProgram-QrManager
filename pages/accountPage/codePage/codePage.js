const app = getApp();
let wxbarcode = require('../../../utils/index.js');

Page({
    data: {
        code: {},
        index:-1
    },
    onLoad: function (option) {
        let codeList = wx.getStorageSync('codeList')||[];
        let codeTmp = codeList[option.index];
        wxbarcode.barcode('barcode', codeTmp.scanCode, 680, 200);
        wxbarcode.qrcode('qrcode', codeTmp.scanCode, 420, 420);
        this.setData({
            code: codeTmp,
            index: option.index
        });

    },
    tapOnDeleteBottom: function (ev) {
        console.log(this.data.index);
        let codeList = wx.getStorageSync('codeList');
        if (codeList.length===1)
            codeList = [];
        else
            codeList.splice(this.data.index,1);
        console.log(codeList);
        wx.setStorageSync('codeList',codeList);
        wx.showModal({
            title: '删除成功',
            icon: 'success',
            showCancel: false,
            success: function (res){
                if(res.confirm){
                    wx.navigateBack()
                }
            }
        });
    }
});