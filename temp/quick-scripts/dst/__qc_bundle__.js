
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Circle');
require('./assets/Scripts/GameManager');
require('./assets/Scripts/Menu');
require('./assets/migration/use_reversed_rotateTo');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43c13HUa8dDhK8pvT2k3r48', 'Menu');
// Scripts/Menu.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ===================== TODO =====================
    // 1. Add dynamic click event to StartButton to call this
    //    function
    Menu.prototype.loadGameScene = function () {
        cc.director.loadScene("game");
    };
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBU0EsQ0FBQztJQVBHLG1EQUFtRDtJQUNuRCx5REFBeUQ7SUFDekQsY0FBYztJQUNkLDRCQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBUGdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FTeEI7SUFBRCxXQUFDO0NBVEQsQUFTQyxDQVRpQyxFQUFFLENBQUMsU0FBUyxHQVM3QztrQkFUb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PSBUT0RPID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gMS4gQWRkIGR5bmFtaWMgY2xpY2sgZXZlbnQgdG8gU3RhcnRCdXR0b24gdG8gY2FsbCB0aGlzXHJcbiAgICAvLyAgICBmdW5jdGlvblxyXG4gICAgbG9hZEdhbWVTY2VuZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICB9XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2634aExJ/hM/LL1ywU24TgI', 'GameManager');
// Scripts/GameManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.circleContainer = null;
        _this.cover_red = null;
        _this.cover = null;
        _this.gameoverPanel = null;
        _this.circlePrefab = null;
        _this.bgm = null;
        _this.bgm_2 = null;
        _this.correctSound = null;
        _this.level = [["level", "plusTime_sec", "minusTime_sec", "n_by_n", "nextLevel", "type", "type_option_arr"], ["level1", "1", "1", "2", "3", "CLOSER", "1"], ["level2", "0.98", "1", "3", "2", "CLOSER", "2"], ["level3", "0.96", "1", "3", "3", "CLOSER", "3"], ["level4", "0.94", "1", "3", "2", "CLOSER", "3"], ["level5", "0.92", "1", "4", "2", "CLOSER", "4"], ["level6", "0.9", "1", "4", "3", "CLOSER", "5"], ["level7", "0.88", "1", "4", "2", "CLOSER", "5"], ["level8", "0.86", "1", "4", "3", "CLOSER", "6"], ["level9", "0.84", "1", "5", "3", "CLOSER", "6"], ["level10", "0.82", "1", "5", "2", "CLOSER", "6"], ["level11", "0.8", "1", "5", "3", "CLOSER", "7"], ["level12", "0.78", "1.2", "5", "2", "CLOSER", "7"], ["level13", "0.76", "1.2", "5", "2", "CLOSER", "7"], ["level14", "0.74", "1.2", "5", "2", "CLOSER", "7"], ["level15", "0.72", "1.2", "6", "2", "CLOSER", "8"], ["level16", "0.7", "1.2", "6", "4", "CLOSER", "8"], ["level17", "0.68", "1.2", "6", "2", "CLOSER", "8"], ["level18", "0.66", "1.2", "6", "3", "CLOSER", "9"], ["level19", "0.64", "1.2", "6", "2", "CLOSER", "9"], ["level20", "0.62", "1.3", "7", "3", "CLOSER", "9"], ["level21", "0.6", "1.3", "7", "1", "CLOSER", "9"], ["level22", "0.58", "1.3", "7", "1", "CLOSER", "10"], ["level23", "0.56", "1.3", "7", "1", "CLOSER", "10"], ["level24", "0.54", "1.3", "7", "1", "CLOSER", "10"], ["level25", "0.52", "1.3", "7", "200", "CLOSER", "10"], ["MAX", "0", "1.3", "7", "80", "CLOSER", "10"]];
        _this.colorSet = [["colorId", "color_r", "color_g", "color_b"], ["color0", "90", "45", "145"], ["color1", "145", "35", "135"], ["color2", "215", "15", "120"], ["color3", "230", "35", "45"], ["color4", "245", "150", "30"], ["color5", "250", "220", "5"], ["color6", "180", "210", "55"], ["color7", "5", "190", "115"], ["color8", "5", "150", "175"], ["color9", "24", "75", "169"]];
        _this.curLevel = 1;
        _this.levelWinCount = 0;
        _this.gameLevel = 1;
        _this.remainTime = 20;
        _this.curCloserArr = [];
        _this.gameover = false;
        _this.flag = false;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    GameManager.prototype.start = function () {
        this.initProperties();
        this.playBGM();
        this.newRound();
    };
    GameManager.prototype.initProperties = function () {
        this.levelText = cc.find("Canvas/UI/LEVEL/number").getComponent(cc.Label);
        this.timeText = cc.find("Canvas/UI/TIME/number").getComponent(cc.Label);
    };
    GameManager.prototype.update = function (dt) {
        if (!this.gameover) {
            this.updateUI(dt);
            if (this.remainTime == 0) {
                this.gameover = true;
                this.onGameover();
            }
        }
        if (this.gameLevel >= 10 && !this.flag) {
            this.stopBGM();
            this.playAdvanceBGM();
            this.flag = true;
        }
    };
    GameManager.prototype.playAdvanceBGM = function () {
        cc.audioEngine.playMusic(this.bgm_2, true);
    };
    GameManager.prototype.onKeyDown = function (event) {
        if (event.keyCode == cc.macro.KEY.k) {
            this.getResult(null, "Ans");
        }
    };
    GameManager.prototype.newRound = function () {
        this.checkCloserArr();
        var row = parseInt(this.level[this.curLevel][3]);
        this.spawnCircle(row);
    };
    GameManager.prototype.checkCloserArr = function () {
        if (this.curCloserArr.length <= 1) {
            var index = Math.floor(Math.random() * 10);
            var indexL = (index + 9) % 10;
            var p = parseInt(this.level[this.curLevel][6]) + 1;
            var u = cc.color(parseInt(this.colorSet[index + 1][1]), parseInt(this.colorSet[index + 1][2]), parseInt(this.colorSet[index + 1][3]));
            var d = cc.color(parseInt(this.colorSet[indexL + 1][1]), parseInt(this.colorSet[indexL + 1][2]), parseInt(this.colorSet[indexL + 1][3]));
            var c = cc.color(Math.ceil((d.getR() - u.getR()) / p), Math.ceil((d.getG() - u.getG()) / p), Math.ceil((d.getB() - u.getB()) / p));
            this.curCloserArr.length = 0;
            this.curCloserArr.push(u);
            for (var f = 1; f <= p; f++) {
                var m = cc.color(u.getR() + c.getR() * f, u.getG() + c.getG() * f, u.getB() + c.getB() * f);
                if (Math.abs(d.getR() - m.getR()) + Math.abs(d.getG() - m.getG()) + Math.abs(d.getB() - m.getB()) >= 10) {
                    this.curCloserArr.push(m);
                }
            }
            this.curCloserArr.push(d);
        }
        this.targetColor = this.curCloserArr.shift();
        this.baseColor = this.curCloserArr[0];
    };
    GameManager.prototype.getResult = function (event, customEventData) {
        if (this.gameover)
            return;
        if (customEventData == "Ans") {
            this.gameLevel++;
            this.levelWinCount++;
            if (this.levelWinCount == parseInt(this.level[this.curLevel][4])) {
                this.levelWinCount = 0;
                this.curLevel++;
                if (this.curLevel > 26) {
                    this.curLevel = 26;
                }
            }
            this.remainTime += parseFloat(this.level[this.curLevel][1]);
            this.newRound();
            this.playEffect();
        }
        else {
            var offset = 4;
            this.circleContainer.runAction(cc.sequence(cc.moveTo(0.05, cc.v2(offset, -110.5)), cc.moveTo(0.05, cc.v2(-offset, -110.5)), cc.moveTo(0.05, cc.v2(offset, -110.5)), cc.moveTo(0.05, cc.v2(-offset, -110.5)), cc.moveTo(0.05, cc.v2(0, -110.5))));
            this.cover_red.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(0.1), cc.fadeOut(0.1)));
            this.remainTime -= parseFloat(this.level[this.curLevel][2]);
        }
    };
    GameManager.prototype.updateUI = function (dt) {
        this.levelText.string = this.gameLevel.toString();
        this.remainTime -= dt;
        if (this.remainTime < 0) {
            this.remainTime = 0;
        }
        this.timeText.string = this.remainTime.toFixed(2).toString().replace(".", ":");
    };
    GameManager.prototype.onGameover = function () {
        this.cover.runAction(cc.fadeTo(0.2, 128));
        this.gameoverPanel.active = true;
        this.gameoverPanel.runAction(cc.fadeIn(0.2));
        var LEVELText = this.gameoverPanel.getChildByName("LEVEL").getComponent(cc.Label);
        LEVELText.string = "Lv. " + this.gameLevel.toString();
        this.stopBGM();
    };
    GameManager.prototype.loadMenu = function () {
        cc.director.loadScene("menu");
    };
    GameManager.prototype.playBGM = function () {
        // ===================== TODO =====================
        // 1. Play music. The audio clip to play is this.bgm
        // ================================================
    };
    GameManager.prototype.stopBGM = function () {
        // ===================== TODO =====================
        // 1. Stop music. 
        // ================================================
    };
    GameManager.prototype.playEffect = function () {
        // ===================== TODO =====================
        // 1. Play sound effect. The audio clip to play is 
        //    this.correctSound
        // ================================================
    };
    GameManager.prototype.spawnCircle = function (row) {
        cc.log("spawn " + row + "*" + row);
        this.clearCircle();
        var containerSize = 380;
        if (row == 2) {
            containerSize = 246;
        }
        else if (row == 3) {
            containerSize = 369;
        }
        var circleSize = containerSize / row;
        // ===================== TODO =====================
        // 1. Update the size of circleContainer
        //
        // 2. Spawn [row]*[row] circles (this.circlePrefab)
        //    under circleContainer.
        //    (Be child nodes of the circleContainer node)
        // 
        //    Hints:  cc.instantiate(), cc.Node.addChild()
        // 
        // 3. All circles should be place like a square matrix.
        //    There is no space between each circle in each
        //    row and each column.
        // 
        //    e.g. 
        //    A 3*3 matrix of circles is look like:
        //    https://i.imgur.com/NuLEiyY.png
        //    A 4*4 matrix of circles is look like:
        //    https://i.imgur.com/Ij8GDvx.png
        // 
        //    Hints:  Layout component
        // 
        // 4. The width and height of each circle is 
        //    [circleSize].
        // 
        // 5. Only ONE of the circles is the answer.
        // 
        //    Hints:  Math.floor(Math.random() * 12) will return a random number between 0 and 12 
        // 
        // 6. There is a child node named "Background" under
        //    the circle node. You should change the color
        //    of the "Background" node to this.targetColor
        //    if it is the answer. Otherwise, change the color to
        //    this.baseColor.
        // 
        // 7. Add a click event to the Button component of
        //    each circle so that when you click on it,
        //    GameManager.getResult() will be called.
        // 
        // 8. If the circle is the answer, customEventData
        //    of the click event should be "Ans". Please refer to 
        //    GameManager.getResult() for more details.
        // ================================================
    };
    GameManager.prototype.clearCircle = function () {
        this.circleContainer.removeAllChildren();
    };
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "circleContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "cover_red", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "cover", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "gameoverPanel", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "circlePrefab", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "bgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "bgm_2", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "correctSound", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBbVFDO1FBaFFHLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsV0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3A2QyxjQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFB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QUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25JLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDO2dCQUN2QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVG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Y29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaXJjbGVDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY292ZXJfcmVkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNvdmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lb3ZlclBhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgY2lyY2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5BdWRpb0NsaXB9KVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxyXG4gICAgYmdtXzI6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBjb3JyZWN0U291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgbGV2ZWwgPSBbW1wibGV2ZWxcIiwgXCJwbHVzVGltZV9zZWNcIiwgXCJtaW51c1RpbWVfc2VjXCIsIFwibl9ieV9uXCIsIFwibmV4dExldmVsXCIsIFwidHlwZVwiLCBcInR5cGVfb3B0aW9uX2FyclwiXSwgW1wibGV2ZWwxXCIsIFwiMVwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjFcIl0sIFtcImxldmVsMlwiLCBcIjAuOThcIiwgXCIxXCIsIFwiM1wiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCIyXCJdLCBbXCJsZXZlbDNcIiwgXCIwLjk2XCIsIFwiMVwiLCBcIjNcIiwgXCIzXCIsIFwiQ0xPU0VSXCIsIFwiM1wiXSwgW1wibGV2ZWw0XCIsIFwiMC45NFwiLCBcIjFcIiwgXCIzXCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjNcIl0sIFtcImxldmVsNVwiLCBcIjAuOTJcIiwgXCIxXCIsIFwiNFwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI0XCJdLCBbXCJsZXZlbDZcIiwgXCIwLjlcIiwgXCIxXCIsIFwiNFwiLCBcIjNcIiwgXCJDTE9TRVJcIiwgXCI1XCJdLCBbXCJsZXZlbDdcIiwgXCIwLjg4XCIsIFwiMVwiLCBcIjRcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiNVwiXSwgW1wibGV2ZWw4XCIsIFwiMC44NlwiLCBcIjFcIiwgXCI0XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjZcIl0sIFtcImxldmVsOVwiLCBcIjAuODRcIiwgXCIxXCIsIFwiNVwiLCBcIjNcIiwgXCJDTE9TRVJcIiwgXCI2XCJdLCBbXCJsZXZlbDEwXCIsIFwiMC44MlwiLCBcIjFcIiwgXCI1XCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjZcIl0sIFtcImxldmVsMTFcIiwgXCIwLjhcIiwgXCIxXCIsIFwiNVwiLCBcIjNcIiwgXCJDTE9TRVJcIiwgXCI3XCJdLCBbXCJsZXZlbDEyXCIsIFwiMC43OFwiLCBcIjEuMlwiLCBcIjVcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiN1wiXSwgW1wibGV2ZWwxM1wiLCBcIjAuNzZcIiwgXCIxLjJcIiwgXCI1XCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjdcIl0sIFtcImxldmVsMTRcIiwgXCIwLjc0XCIsIFwiMS4yXCIsIFwiNVwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI3XCJdLCBbXCJsZXZlbDE1XCIsIFwiMC43MlwiLCBcIjEuMlwiLCBcIjZcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiOFwiXSwgW1wibGV2ZWwxNlwiLCBcIjAuN1wiLCBcIjEuMlwiLCBcIjZcIiwgXCI0XCIsIFwiQ0xPU0VSXCIsIFwiOFwiXSwgW1wibGV2ZWwxN1wiLCBcIjAuNjhcIiwgXCIxLjJcIiwgXCI2XCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjhcIl0sIFtcImxldmVsMThcIiwgXCIwLjY2XCIsIFwiMS4yXCIsIFwiNlwiLCBcIjNcIiwgXCJDTE9TRVJcIiwgXCI5XCJdLCBbXCJsZXZlbDE5XCIsIFwiMC42NFwiLCBcIjEuMlwiLCBcIjZcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiOVwiXSwgW1wibGV2ZWwyMFwiLCBcIjAuNjJcIiwgXCIxLjNcIiwgXCI3XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjlcIl0sIFtcImxldmVsMjFcIiwgXCIwLjZcIiwgXCIxLjNcIiwgXCI3XCIsIFwiMVwiLCBcIkNMT1NFUlwiLCBcIjlcIl0sIFtcImxldmVsMjJcIiwgXCIwLjU4XCIsIFwiMS4zXCIsIFwiN1wiLCBcIjFcIiwgXCJDTE9TRVJcIiwgXCIxMFwiXSwgW1wibGV2ZWwyM1wiLCBcIjAuNTZcIiwgXCIxLjNcIiwgXCI3XCIsIFwiMVwiLCBcIkNMT1NFUlwiLCBcIjEwXCJdLCBbXCJsZXZlbDI0XCIsIFwiMC41NFwiLCBcIjEuM1wiLCBcIjdcIiwgXCIxXCIsIFwiQ0xPU0VSXCIsIFwiMTBcIl0sIFtcImxldmVsMjVcIiwgXCIwLjUyXCIsIFwiMS4zXCIsIFwiN1wiLCBcIjIwMFwiLCBcIkNMT1NFUlwiLCBcIjEwXCJdLCBbXCJNQVhcIiwgXCIwXCIsIFwiMS4zXCIsIFwiN1wiLCBcIjgwXCIsIFwiQ0xPU0VSXCIsIFwiMTBcIl1dO1xyXG4gICAgY29sb3JTZXQgPSBbW1wiY29sb3JJZFwiLCBcImNvbG9yX3JcIiwgXCJjb2xvcl9nXCIsIFwiY29sb3JfYlwiXSwgW1wiY29sb3IwXCIsIFwiOTBcIiwgXCI0NVwiLCBcIjE0NVwiXSwgW1wiY29sb3IxXCIsIFwiMTQ1XCIsIFwiMzVcIiwgXCIxMzVcIl0sIFtcImNvbG9yMlwiLCBcIjIxNVwiLCBcIjE1XCIsIFwiMTIwXCJdLCBbXCJjb2xvcjNcIiwgXCIyMzBcIiwgXCIzNVwiLCBcIjQ1XCJdLCBbXCJjb2xvcjRcIiwgXCIyNDVcIiwgXCIxNTBcIiwgXCIzMFwiXSwgW1wiY29sb3I1XCIsIFwiMjUwXCIsIFwiMjIwXCIsIFwiNVwiXSwgW1wiY29sb3I2XCIsIFwiMTgwXCIsIFwiMjEwXCIsIFwiNTVcIl0sIFtcImNvbG9yN1wiLCBcIjVcIiwgXCIxOTBcIiwgXCIxMTVcIl0sIFtcImNvbG9yOFwiLCBcIjVcIiwgXCIxNTBcIiwgXCIxNzVcIl0sIFtcImNvbG9yOVwiLCBcIjI0XCIsIFwiNzVcIiwgXCIxNjlcIl1dO1xyXG5cclxuICAgIGN1ckxldmVsOiBudW1iZXIgPSAxO1xyXG4gICAgbGV2ZWxXaW5Db3VudDogbnVtYmVyID0gMDtcclxuICAgIGdhbWVMZXZlbDogbnVtYmVyID0gMTtcclxuXHJcbiAgICByZW1haW5UaW1lOiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICBsZXZlbFRleHQ6IGNjLkxhYmVsO1xyXG4gICAgdGltZVRleHQ6IGNjLkxhYmVsO1xyXG5cclxuICAgIHRhcmdldENvbG9yOiBjYy5Db2xvcjtcclxuICAgIGJhc2VDb2xvcjogY2MuQ29sb3I7XHJcbiAgICBjdXJDbG9zZXJBcnI6IGNjLkNvbG9yW10gPSBbXTtcclxuXHJcbiAgICBnYW1lb3ZlciA9IGZhbHNlO1xyXG5cclxuICAgIGZsYWc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmluaXRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKClcclxuICAgICAgICB0aGlzLm5ld1JvdW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFByb3BlcnRpZXMoKXtcclxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IGNjLmZpbmQoXCJDYW52YXMvVUkvTEVWRUwvbnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy50aW1lVGV4dCA9IGNjLmZpbmQoXCJDYW52YXMvVUkvVElNRS9udW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5nYW1lb3Zlcil7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoZHQpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnJlbWFpblRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVvdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25HYW1lb3ZlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nYW1lTGV2ZWwgPj0gMTAgJiYgIXRoaXMuZmxhZykge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BCR00oKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5QWR2YW5jZUJHTSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5QWR2YW5jZUJHTSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ21fMiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSBjYy5tYWNyby5LRVkuayl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzdWx0KG51bGwsIFwiQW5zXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXdSb3VuZCgpe1xyXG4gICAgICAgIHRoaXMuY2hlY2tDbG9zZXJBcnIoKTtcclxuICAgICAgICBsZXQgcm93ID0gcGFyc2VJbnQodGhpcy5sZXZlbFt0aGlzLmN1ckxldmVsXVszXSk7XHJcbiAgICAgICAgdGhpcy5zcGF3bkNpcmNsZShyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ2xvc2VyQXJyKCl7XHJcbiAgICAgICAgaWYodGhpcy5jdXJDbG9zZXJBcnIubGVuZ3RoIDw9IDEpe1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleEwgPSAoaW5kZXggKyA5KSAlIDEwO1xyXG4gICAgICAgICAgICBsZXQgcCA9IHBhcnNlSW50KHRoaXMubGV2ZWxbdGhpcy5jdXJMZXZlbF1bNl0pICsgMTtcclxuICAgICAgICAgICAgbGV0IHUgPSBjYy5jb2xvcihwYXJzZUludCh0aGlzLmNvbG9yU2V0W2luZGV4ICsgMV1bMV0pLCBwYXJzZUludCh0aGlzLmNvbG9yU2V0W2luZGV4ICsgMV1bMl0pLCBwYXJzZUludCh0aGlzLmNvbG9yU2V0W2luZGV4ICsgMV1bM10pKTtcclxuICAgICAgICAgICAgbGV0IGQgPSBjYy5jb2xvcihwYXJzZUludCh0aGlzLmNvbG9yU2V0W2luZGV4TCArIDFdWzFdKSwgcGFyc2VJbnQodGhpcy5jb2xvclNldFtpbmRleEwgKyAxXVsyXSksIHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXhMICsgMV1bM10pKTtcclxuICAgICAgICAgICAgbGV0IGMgPSBjYy5jb2xvcihNYXRoLmNlaWwoKGQuZ2V0UigpIC0gdS5nZXRSKCkpIC8gcCksIE1hdGguY2VpbCgoZC5nZXRHKCkgLSB1LmdldEcoKSkgLyBwKSwgTWF0aC5jZWlsKChkLmdldEIoKSAtIHUuZ2V0QigpKSAvIHApKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJDbG9zZXJBcnIubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jdXJDbG9zZXJBcnIucHVzaCh1KTtcclxuICAgICAgICAgICAgZm9yKGxldCBmID0gMTsgZiA8PSBwOyBmKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IG0gPSBjYy5jb2xvcih1LmdldFIoKSArIGMuZ2V0UigpICogZiwgdS5nZXRHKCkgKyBjLmdldEcoKSAqIGYsIHUuZ2V0QigpICsgYy5nZXRCKCkgKiBmKTtcclxuICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKGQuZ2V0UigpIC0gbS5nZXRSKCkpICsgTWF0aC5hYnMoZC5nZXRHKCkgLSBtLmdldEcoKSkgKyBNYXRoLmFicyhkLmdldEIoKSAtIG0uZ2V0QigpKSA+PSAxMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJDbG9zZXJBcnIucHVzaChtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1ckNsb3NlckFyci5wdXNoKGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhcmdldENvbG9yID0gdGhpcy5jdXJDbG9zZXJBcnIuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmJhc2VDb2xvciA9IHRoaXMuY3VyQ2xvc2VyQXJyWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGdldFJlc3VsdChldmVudCwgY3VzdG9tRXZlbnREYXRhKXtcclxuICAgICAgICBpZih0aGlzLmdhbWVvdmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKGN1c3RvbUV2ZW50RGF0YSA9PSBcIkFuc1wiKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTGV2ZWwrKztcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFdpbkNvdW50Kys7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGV2ZWxXaW5Db3VudCA9PSBwYXJzZUludCh0aGlzLmxldmVsW3RoaXMuY3VyTGV2ZWxdWzRdKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsV2luQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJMZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jdXJMZXZlbCA+IDI2KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1ckxldmVsID0gMjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lICs9IHBhcnNlRmxvYXQodGhpcy5sZXZlbFt0aGlzLmN1ckxldmVsXVsxXSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV3Um91bmQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheUVmZmVjdCgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gNDtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVDb250YWluZXIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKG9mZnNldCwgLTExMC41KSksXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIoLW9mZnNldCwgLTExMC41KSksXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIob2Zmc2V0LCAtMTEwLjUpKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52Migtb2Zmc2V0LCAtMTEwLjUpKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52MigwLCAtMTEwLjUpKVxyXG4gICAgICAgICAgICApKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY292ZXJfcmVkLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVJbigwLjEpLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMSksXHJcbiAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KDAuMSlcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZSAtPSBwYXJzZUZsb2F0KHRoaXMubGV2ZWxbdGhpcy5jdXJMZXZlbF1bMl0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVSShkdCl7XHJcbiAgICAgICAgdGhpcy5sZXZlbFRleHQuc3RyaW5nID0gdGhpcy5nYW1lTGV2ZWwudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1haW5UaW1lIC09IGR0O1xyXG4gICAgICAgIGlmKHRoaXMucmVtYWluVGltZSA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVUZXh0LnN0cmluZyA9IHRoaXMucmVtYWluVGltZS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCI6XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2FtZW92ZXIoKXtcclxuICAgICAgICB0aGlzLmNvdmVyLnJ1bkFjdGlvbihjYy5mYWRlVG8oMC4yLCAxMjgpKTtcclxuICAgICAgICB0aGlzLmdhbWVvdmVyUGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVvdmVyUGFuZWwucnVuQWN0aW9uKGNjLmZhZGVJbigwLjIpKTtcclxuICAgICAgICBsZXQgTEVWRUxUZXh0ID0gdGhpcy5nYW1lb3ZlclBhbmVsLmdldENoaWxkQnlOYW1lKFwiTEVWRUxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBMRVZFTFRleHQuc3RyaW5nID0gXCJMdi4gXCIgKyB0aGlzLmdhbWVMZXZlbC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcEJHTSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNZW51KCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWVudVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QkdNKCl7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gUGxheSBtdXNpYy4gVGhlIGF1ZGlvIGNsaXAgdG8gcGxheSBpcyB0aGlzLmJnbVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdG9wQkdNKCl7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gU3RvcCBtdXNpYy4gXHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlFZmZlY3QoKXtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBQbGF5IHNvdW5kIGVmZmVjdC4gVGhlIGF1ZGlvIGNsaXAgdG8gcGxheSBpcyBcclxuICAgICAgICAvLyAgICB0aGlzLmNvcnJlY3RTb3VuZFxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkNpcmNsZShyb3c6IG51bWJlcil7XHJcbiAgICAgICAgY2MubG9nKFwic3Bhd24gXCIgKyByb3cgKyBcIipcIiArIHJvdyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJDaXJjbGUoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lclNpemUgPSAzODA7XHJcbiAgICAgICAgaWYocm93ID09IDIpe1xyXG4gICAgICAgICAgICBjb250YWluZXJTaXplID0gMjQ2O1xyXG4gICAgICAgIH1lbHNlIGlmKHJvdyA9PSAzKXtcclxuICAgICAgICAgICAgY29udGFpbmVyU2l6ZSA9IDM2OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNpcmNsZVNpemUgPSBjb250YWluZXJTaXplIC8gcm93O1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBVcGRhdGUgdGhlIHNpemUgb2YgY2lyY2xlQ29udGFpbmVyXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAyLiBTcGF3biBbcm93XSpbcm93XSBjaXJjbGVzICh0aGlzLmNpcmNsZVByZWZhYilcclxuICAgICAgICAvLyAgICB1bmRlciBjaXJjbGVDb250YWluZXIuXHJcbiAgICAgICAgLy8gICAgKEJlIGNoaWxkIG5vZGVzIG9mIHRoZSBjaXJjbGVDb250YWluZXIgbm9kZSlcclxuICAgICAgICAvLyBcclxuICAgICAgICAvLyAgICBIaW50czogIGNjLmluc3RhbnRpYXRlKCksIGNjLk5vZGUuYWRkQ2hpbGQoKVxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vIDMuIEFsbCBjaXJjbGVzIHNob3VsZCBiZSBwbGFjZSBsaWtlIGEgc3F1YXJlIG1hdHJpeC5cclxuICAgICAgICAvLyAgICBUaGVyZSBpcyBubyBzcGFjZSBiZXR3ZWVuIGVhY2ggY2lyY2xlIGluIGVhY2hcclxuICAgICAgICAvLyAgICByb3cgYW5kIGVhY2ggY29sdW1uLlxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vICAgIGUuZy4gXHJcbiAgICAgICAgLy8gICAgQSAzKjMgbWF0cml4IG9mIGNpcmNsZXMgaXMgbG9vayBsaWtlOlxyXG4gICAgICAgIC8vICAgIGh0dHBzOi8vaS5pbWd1ci5jb20vTnVMRWl5WS5wbmdcclxuICAgICAgICAvLyAgICBBIDQqNCBtYXRyaXggb2YgY2lyY2xlcyBpcyBsb29rIGxpa2U6XHJcbiAgICAgICAgLy8gICAgaHR0cHM6Ly9pLmltZ3VyLmNvbS9JajhHRHZ4LnBuZ1xyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vICAgIEhpbnRzOiAgTGF5b3V0IGNvbXBvbmVudFxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vIDQuIFRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIGVhY2ggY2lyY2xlIGlzIFxyXG4gICAgICAgIC8vICAgIFtjaXJjbGVTaXplXS5cclxuICAgICAgICAvLyBcclxuICAgICAgICAvLyA1LiBPbmx5IE9ORSBvZiB0aGUgY2lyY2xlcyBpcyB0aGUgYW5zd2VyLlxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vICAgIEhpbnRzOiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpIHdpbGwgcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEyIFxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vIDYuIFRoZXJlIGlzIGEgY2hpbGQgbm9kZSBuYW1lZCBcIkJhY2tncm91bmRcIiB1bmRlclxyXG4gICAgICAgIC8vICAgIHRoZSBjaXJjbGUgbm9kZS4gWW91IHNob3VsZCBjaGFuZ2UgdGhlIGNvbG9yXHJcbiAgICAgICAgLy8gICAgb2YgdGhlIFwiQmFja2dyb3VuZFwiIG5vZGUgdG8gdGhpcy50YXJnZXRDb2xvclxyXG4gICAgICAgIC8vICAgIGlmIGl0IGlzIHRoZSBhbnN3ZXIuIE90aGVyd2lzZSwgY2hhbmdlIHRoZSBjb2xvciB0b1xyXG4gICAgICAgIC8vICAgIHRoaXMuYmFzZUNvbG9yLlxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vIDcuIEFkZCBhIGNsaWNrIGV2ZW50IHRvIHRoZSBCdXR0b24gY29tcG9uZW50IG9mXHJcbiAgICAgICAgLy8gICAgZWFjaCBjaXJjbGUgc28gdGhhdCB3aGVuIHlvdSBjbGljayBvbiBpdCxcclxuICAgICAgICAvLyAgICBHYW1lTWFuYWdlci5nZXRSZXN1bHQoKSB3aWxsIGJlIGNhbGxlZC5cclxuICAgICAgICAvLyBcclxuICAgICAgICAvLyA4LiBJZiB0aGUgY2lyY2xlIGlzIHRoZSBhbnN3ZXIsIGN1c3RvbUV2ZW50RGF0YVxyXG4gICAgICAgIC8vICAgIG9mIHRoZSBjbGljayBldmVudCBzaG91bGQgYmUgXCJBbnNcIi4gUGxlYXNlIHJlZmVyIHRvIFxyXG4gICAgICAgIC8vICAgIEdhbWVNYW5hZ2VyLmdldFJlc3VsdCgpIGZvciBtb3JlIGRldGFpbHMuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDaXJjbGUoKXtcclxuICAgICAgICB0aGlzLmNpcmNsZUNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9183cxAf2hAlKn1CNf8Edz9', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateTo._reverse = true;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlVG8uanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVUbyIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFFBQVosR0FBdUIsSUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiB2ZXJzaW9ucy5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5BY3Rpb24gaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiDniYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5jYy5Sb3RhdGVUby5fcmV2ZXJzZSA9IHRydWU7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Circle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '164a92KgZ1DIro953xb26Ry', 'Circle');
// Scripts/Circle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        return _this;
    }
    Circle.prototype.start = function () {
        this.bg = this.node.getChildByName("Background");
    };
    Circle.prototype.update = function (dt) {
        if (this.bg.width < this.node.width) {
            this.bg.width = (this.node.width - 10) * 0.1 + this.bg.width;
            this.bg.height = (this.node.height - 10) * 0.1 + this.bg.height;
        }
        if (this.bg.width > this.node.width) {
            this.bg.width = this.node.width;
            this.bg.height = this.node.height;
        }
    };
    Circle = __decorate([
        ccclass
    ], Circle);
    return Circle;
}(cc.Component));
exports.default = Circle;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWtCQztRQWhCRyxRQUFFLEdBQVksSUFBSSxDQUFDOztJQWdCdkIsQ0FBQztJQWRHLHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDbkU7UUFDRCxJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQWpCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtCMUI7SUFBRCxhQUFDO0NBbEJELEFBa0JDLENBbEJtQyxFQUFFLENBQUMsU0FBUyxHQWtCL0M7a0JBbEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5iZyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuYmcud2lkdGggPCB0aGlzLm5vZGUud2lkdGgpe1xyXG4gICAgICAgICAgICB0aGlzLmJnLndpZHRoID0gKHRoaXMubm9kZS53aWR0aCAtIDEwKSAqIDAuMSArIHRoaXMuYmcud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuYmcuaGVpZ2h0ID0gKHRoaXMubm9kZS5oZWlnaHQgLSAxMCkgKiAwLjEgKyB0aGlzLmJnLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5iZy53aWR0aCA+IHRoaXMubm9kZS53aWR0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmcud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuYmcuaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
