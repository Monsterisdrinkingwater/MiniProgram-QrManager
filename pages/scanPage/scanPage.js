const app = getApp();
Page({
    data: {},
    tapQrCode: function () {
        scan('QR_CODE');
    },
    tapBarCode: function () {
        scan('BAR_CODE');
    },
    tapText: function () {
        wx.navigateTo({
            url: "customizePage/customizePage?" +
            "type=TXT_CODE"
        });
    }
});

function scan(scanType) {
    wx.scanCode({
        scanType: [scanType],
        success: (res) => {
            scanSuccess(res);
        },
        fail: (res) => {
            console.log('fail');
        },
        complete: (res) => {
            console.log('complete');
        }
    });

    function scanSuccess(res) {
        let codeList = wx.getStorageSync("codeList") || [];
        if (codeList.indexOf(res.result) >= 0) {
            showFailMessage("已经存在");
        } else {
            wx.navigateTo({
                url: "customizePage/customizePage?" +
                "code=" + encodeURIComponent(res.result) + "&&" +
                "type=" + scanType
            });
        }
    }
    function showFailMessage(content) {
        wx.showModal({
            title: '错误',
            content: content,
            showCancel: false
        });
    }
}
