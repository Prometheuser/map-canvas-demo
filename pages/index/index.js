//index.js
//获取应用实例
var app = getApp()

//window
const {
  windowWidth,
  windowHeight
} = wx.getSystemInfoSync()

const wScale = windowWidth / 375;
const hScale = windowHeight / 625;

Page({
  data: {
    markers: [{
      iconPath: "../../images/red_pocket.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    userInfo: {},
    tapPocket: false
  },
  drawPocketCanvas() {
    var context = wx.createContext()
    context.setFillStyle('white')
    context.fillRect(0, 0, wScale * 750, hScale * 240)
    
    context.setFontSize(wScale * 14)
    context.setFillStyle('#000000')
    context.fillText('该车为', wScale * 16, hScale * 26)

    context.setFillStyle('#F05B48')
    context.fillText('红包车', wScale * 62, hScale * 26)

    context.setFillStyle('#000000')
    context.fillText(`，编号 666666`, wScale * 110, hScale * 26)

    context.setFillStyle('#E5E5E5')
    context.beginPath()
    context.setLineWidth(0.1)
    context.moveTo(0, hScale * 40)
    context.lineTo(wScale * 750, hScale * 40)
    context.stroke()

    context.drawImage('../../images/red_pocket.png', wScale * 16, hScale * 52, wScale * 56, hScale * 56)

    context.setFontSize(wScale * 12)
    context.setFillStyle('#A0A0A0')
    context.fillText('恭喜您找到一辆红包车！', wScale * 88, hScale * 65)
    context.fillText(`骑行该红包车2小时内免费，`, wScale * 88, hScale * 85)
    context.fillText(`超过10分钟可得最高100元现金。`, wScale * 88, hScale * 105)

    context.drawImage('../../images/right_arrow.png', wScale * 350, hScale * 75, wScale * 24, hScale * 14)

    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: context.getActions() // 获取绘图动作数组
    })

    this.setData({ tapPocket: true })
  },
  canvasTap(e) {
    wx.navigateTo({
      url: "../logs/logs"
    })
  },
  markerTap(e) {
    this.drawPocketCanvas()
  },
  mapTap(e) {
    this.setData({ tapPocket: false })
  },
  onLoad: function () {    
  }
})
