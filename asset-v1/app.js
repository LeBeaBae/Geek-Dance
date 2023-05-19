/*This mod is as good as Evadare.*/
var app = new function() {
    this.name = "Ancient", this.version = "1", this.date = "2023", this.folder = "asset-v1/", this.looptime = 10666, this.bpm = 90, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 8, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 36, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#2D8723", this.col0 = "#3B9E21", this.col1 = "#42AA20", this.col2 = "#49B51F", this.col3 = "#56C129", this.col4 = "#62CD32", this.animearray = [{
        name: "1_quinn",
        color: "5B432E",
        uniqsnd: !0
    }, {
        name: "2_carter",
        color: "5B432E",
        uniqsnd: !0
    }, {
        name: "3_james",
        color: "5B432E",
        uniqsnd: !0
    }, {
        name: "4_chester",
        color: "5B432E",
        uniqsnd: !0
    }, {
        name: "5_tiki",
        color: "5B432E",
        uniqsnd: !0
    }, {
        name: "6_statue",
        color: "6C736D",
        uniqsnd: !1
    }, {
        name: "7_ziggurat",
        color: "6C736D",
        uniqsnd: !0
    }, {
        name: "8_",
        color: "6C736D",
        uniqsnd: !0
    }, {
        name: "9_",
        color: "6C736D",
        uniqsnd: !0
    }, {
        name: "10_",
        color: "6C736D",
        uniqsnd: !0
    }, {
        name: "11_ixpo",
        color: "D1B238",
        uniqsnd: !0
    }, {
        name: "12_quetzal",
        color: "D1B238",
        uniqsnd: !1
    }, {
        name: "13_",
        color: "D1B238",
        uniqsnd: !0
    }, {
        name: "14_aurum",
        color: "D1B238",
        uniqsnd: !1
    }, {
        name: "15_sun",
        color: "D1B238",
        uniqsnd: !1
    }, {
        name: "16_",
        color: "5E2926",
        uniqsnd: !0
    }, {
        name: "17_",
        color: "5E2926",
        uniqsnd: !0
    }, {
        name: "18_",
        color: "5E2926",
        uniqsnd: !0
    }, {
        name: "19_",
        color: "5E2926",
        uniqsnd: !0
    }, {
        name: "20_",
        color: "5E2926",
        uniqsnd: !0
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a";
        this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b";
        this.animearray[n].anime = a + "-sprite.png";
        this.animearray[n].animeData = a + ".json";
    }
};
