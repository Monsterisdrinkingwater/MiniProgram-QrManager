const app = getApp();
Page({
    data: {
        scanCode: '',
        scanType: '',
        customizedName: '',
        customizedType: ''
    },onLoad: function (scanResult) {
        this.setData({
            scanCode: decodeURIComponent(scanResult.code),
            scanType: scanResult.type
        });
    },
    onReady: function () {
    //TODO finish the function
    },
    blurName: function(event){
        this.setData({
            customizedName: event.detail.value
        });
    },
    blurText: function(event){
        this.setData({
            scanCode: event.detail.value
        });
    },
    tapOnSubmitButton: function () {
        let codeList = wx.getStorageSync('codeList')||[];
        console.log(this.data);
        codeList.push(Object.assign({}, this.data));
        console.log(codeList);
        wx.setStorageSync('codeList', codeList);
        wx.showModal({
            title: '提交成功',
            content: '已经保存到我的二维码',
            icon: 'success',
            showCancel: false,
            success: function (res){
                if(res.confirm){
                    wx.navigateBack();
                }
            }
        });

    }

});