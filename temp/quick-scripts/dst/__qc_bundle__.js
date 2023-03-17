
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
        cc.audioEngine.playMusic(this.bgm, true);
    };
    GameManager.prototype.stopBGM = function () {
        // ===================== TODO =====================
        // 1. Stop music. 
        cc.audioEngine.stopMusic();
        // ================================================
    };
    GameManager.prototype.playEffect = function () {
        // ===================== TODO =====================
        // 1. Play sound effect. The audio clip to play is 
        //    this.correctSound
        cc.audioEngine.playEffect(this.correctSound, false);
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
        this.circleContainer.width = containerSize;
        this.circleContainer.height = containerSize;
        // ===================== TODO =====================
        // 1. Update the size of circleContainer
        //
        // 2. Spawn [row]*[row] circles (this.circlePrefab)
        //    under circleContainer.
        //    (Be child nodes of the circleContainer node)
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
        var ans = Math.floor(Math.random() * ((row * row) - 1));
        for (var c = 0; c < row * row; c++) {
            var circle = cc.instantiate(this.circlePrefab);
            circle.parent = this.circleContainer;
            circle.width = circleSize;
            circle.height = circleSize;
            if (c == ans) {
                circle.getChildByName("Background").color = this.targetColor;
                circle.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
                    this.getResult(event, "Ans");
                }, this);
            }
            else {
                circle.getChildByName("Background").color = this.baseColor;
                circle.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
                    this.getResult(event, "FUCK");
                }, this);
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNlJDO1FBMVJHLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsV0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3A2QyxjQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFB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QUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25JLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDO2dCQUN2QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVG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LEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs4Q0FDTjtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7cURBQ0k7SUF4QmpCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E2Ui9CO0lBQUQsa0JBQUM7Q0E3UkQsQUE2UkMsQ0E3UndDLEVBQUUsQ0FBQyxTQUFTLEdBNlJwRDtrQkE3Um9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNpcmNsZUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb3Zlcl9yZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY292ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVvdmVyUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjaXJjbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBiZ21fMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGNvcnJlY3RTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBsZXZlbCA9IFtbXCJsZXZlbFwiLCBcInBsdXNUaW1lX3NlY1wiLCBcIm1pbnVzVGltZV9zZWNcIiwgXCJuX2J5X25cIiwgXCJuZXh0TGV2ZWxcIiwgXCJ0eXBlXCIsIFwidHlwZV9vcHRpb25fYXJyXCJdLCBbXCJsZXZlbDFcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiQ0xPU0VSXCIsIFwiMVwiXSwgW1wibGV2ZWwyXCIsIFwiMC45OFwiLCBcIjFcIiwgXCIzXCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjJcIl0sIFtcImxldmVsM1wiLCBcIjAuOTZcIiwgXCIxXCIsIFwiM1wiLCBcIjNcIiwgXCJDTE9TRVJcIiwgXCIzXCJdLCBbXCJsZXZlbDRcIiwgXCIwLjk0XCIsIFwiMVwiLCBcIjNcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiM1wiXSwgW1wibGV2ZWw1XCIsIFwiMC45MlwiLCBcIjFcIiwgXCI0XCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjRcIl0sIFtcImxldmVsNlwiLCBcIjAuOVwiLCBcIjFcIiwgXCI0XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjVcIl0sIFtcImxldmVsN1wiLCBcIjAuODhcIiwgXCIxXCIsIFwiNFwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI1XCJdLCBbXCJsZXZlbDhcIiwgXCIwLjg2XCIsIFwiMVwiLCBcIjRcIiwgXCIzXCIsIFwiQ0xPU0VSXCIsIFwiNlwiXSwgW1wibGV2ZWw5XCIsIFwiMC44NFwiLCBcIjFcIiwgXCI1XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjZcIl0sIFtcImxldmVsMTBcIiwgXCIwLjgyXCIsIFwiMVwiLCBcIjVcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiNlwiXSwgW1wibGV2ZWwxMVwiLCBcIjAuOFwiLCBcIjFcIiwgXCI1XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjdcIl0sIFtcImxldmVsMTJcIiwgXCIwLjc4XCIsIFwiMS4yXCIsIFwiNVwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI3XCJdLCBbXCJsZXZlbDEzXCIsIFwiMC43NlwiLCBcIjEuMlwiLCBcIjVcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiN1wiXSwgW1wibGV2ZWwxNFwiLCBcIjAuNzRcIiwgXCIxLjJcIiwgXCI1XCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjdcIl0sIFtcImxldmVsMTVcIiwgXCIwLjcyXCIsIFwiMS4yXCIsIFwiNlwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI4XCJdLCBbXCJsZXZlbDE2XCIsIFwiMC43XCIsIFwiMS4yXCIsIFwiNlwiLCBcIjRcIiwgXCJDTE9TRVJcIiwgXCI4XCJdLCBbXCJsZXZlbDE3XCIsIFwiMC42OFwiLCBcIjEuMlwiLCBcIjZcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiOFwiXSwgW1wibGV2ZWwxOFwiLCBcIjAuNjZcIiwgXCIxLjJcIiwgXCI2XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjlcIl0sIFtcImxldmVsMTlcIiwgXCIwLjY0XCIsIFwiMS4yXCIsIFwiNlwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI5XCJdLCBbXCJsZXZlbDIwXCIsIFwiMC42MlwiLCBcIjEuM1wiLCBcIjdcIiwgXCIzXCIsIFwiQ0xPU0VSXCIsIFwiOVwiXSwgW1wibGV2ZWwyMVwiLCBcIjAuNlwiLCBcIjEuM1wiLCBcIjdcIiwgXCIxXCIsIFwiQ0xPU0VSXCIsIFwiOVwiXSwgW1wibGV2ZWwyMlwiLCBcIjAuNThcIiwgXCIxLjNcIiwgXCI3XCIsIFwiMVwiLCBcIkNMT1NFUlwiLCBcIjEwXCJdLCBbXCJsZXZlbDIzXCIsIFwiMC41NlwiLCBcIjEuM1wiLCBcIjdcIiwgXCIxXCIsIFwiQ0xPU0VSXCIsIFwiMTBcIl0sIFtcImxldmVsMjRcIiwgXCIwLjU0XCIsIFwiMS4zXCIsIFwiN1wiLCBcIjFcIiwgXCJDTE9TRVJcIiwgXCIxMFwiXSwgW1wibGV2ZWwyNVwiLCBcIjAuNTJcIiwgXCIxLjNcIiwgXCI3XCIsIFwiMjAwXCIsIFwiQ0xPU0VSXCIsIFwiMTBcIl0sIFtcIk1BWFwiLCBcIjBcIiwgXCIxLjNcIiwgXCI3XCIsIFwiODBcIiwgXCJDTE9TRVJcIiwgXCIxMFwiXV07XHJcbiAgICBjb2xvclNldCA9IFtbXCJjb2xvcklkXCIsIFwiY29sb3JfclwiLCBcImNvbG9yX2dcIiwgXCJjb2xvcl9iXCJdLCBbXCJjb2xvcjBcIiwgXCI5MFwiLCBcIjQ1XCIsIFwiMTQ1XCJdLCBbXCJjb2xvcjFcIiwgXCIxNDVcIiwgXCIzNVwiLCBcIjEzNVwiXSwgW1wiY29sb3IyXCIsIFwiMjE1XCIsIFwiMTVcIiwgXCIxMjBcIl0sIFtcImNvbG9yM1wiLCBcIjIzMFwiLCBcIjM1XCIsIFwiNDVcIl0sIFtcImNvbG9yNFwiLCBcIjI0NVwiLCBcIjE1MFwiLCBcIjMwXCJdLCBbXCJjb2xvcjVcIiwgXCIyNTBcIiwgXCIyMjBcIiwgXCI1XCJdLCBbXCJjb2xvcjZcIiwgXCIxODBcIiwgXCIyMTBcIiwgXCI1NVwiXSwgW1wiY29sb3I3XCIsIFwiNVwiLCBcIjE5MFwiLCBcIjExNVwiXSwgW1wiY29sb3I4XCIsIFwiNVwiLCBcIjE1MFwiLCBcIjE3NVwiXSwgW1wiY29sb3I5XCIsIFwiMjRcIiwgXCI3NVwiLCBcIjE2OVwiXV07XHJcblxyXG4gICAgY3VyTGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBsZXZlbFdpbkNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgZ2FtZUxldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHJlbWFpblRpbWU6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIGxldmVsVGV4dDogY2MuTGFiZWw7XHJcbiAgICB0aW1lVGV4dDogY2MuTGFiZWw7XHJcblxyXG4gICAgdGFyZ2V0Q29sb3I6IGNjLkNvbG9yO1xyXG4gICAgYmFzZUNvbG9yOiBjYy5Db2xvcjtcclxuICAgIGN1ckNsb3NlckFycjogY2MuQ29sb3JbXSA9IFtdO1xyXG5cclxuICAgIGdhbWVvdmVyID0gZmFsc2U7XHJcblxyXG4gICAgZmxhZzpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFByb3BlcnRpZXMoKTtcclxuICAgICAgICB0aGlzLnBsYXlCR00oKVxyXG4gICAgICAgIHRoaXMubmV3Um91bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UHJvcGVydGllcygpe1xyXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gY2MuZmluZChcIkNhbnZhcy9VSS9MRVZFTC9udW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLnRpbWVUZXh0ID0gY2MuZmluZChcIkNhbnZhcy9VSS9USU1FL251bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmdhbWVvdmVyKXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVVSShkdCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVtYWluVGltZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVvdmVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVMZXZlbCA+PSAxMCAmJiAhdGhpcy5mbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEJHTSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlBZHZhbmNlQkdNKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBZHZhbmNlQkdNKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbV8yLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5rKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHQobnVsbCwgXCJBbnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5ld1JvdW5kKCl7XHJcbiAgICAgICAgdGhpcy5jaGVja0Nsb3NlckFycigpO1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludCh0aGlzLmxldmVsW3RoaXMuY3VyTGV2ZWxdWzNdKTtcclxuICAgICAgICB0aGlzLnNwYXduQ2lyY2xlKHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDbG9zZXJBcnIoKXtcclxuICAgICAgICBpZih0aGlzLmN1ckNsb3NlckFyci5sZW5ndGggPD0gMSl7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TCA9IChpbmRleCArIDkpICUgMTA7XHJcbiAgICAgICAgICAgIGxldCBwID0gcGFyc2VJbnQodGhpcy5sZXZlbFt0aGlzLmN1ckxldmVsXVs2XSkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgdSA9IGNjLmNvbG9yKHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXggKyAxXVsxXSksIHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXggKyAxXVsyXSksIHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXggKyAxXVszXSkpO1xyXG4gICAgICAgICAgICBsZXQgZCA9IGNjLmNvbG9yKHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXhMICsgMV1bMV0pLCBwYXJzZUludCh0aGlzLmNvbG9yU2V0W2luZGV4TCArIDFdWzJdKSwgcGFyc2VJbnQodGhpcy5jb2xvclNldFtpbmRleEwgKyAxXVszXSkpO1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNjLmNvbG9yKE1hdGguY2VpbCgoZC5nZXRSKCkgLSB1LmdldFIoKSkgLyBwKSwgTWF0aC5jZWlsKChkLmdldEcoKSAtIHUuZ2V0RygpKSAvIHApLCBNYXRoLmNlaWwoKGQuZ2V0QigpIC0gdS5nZXRCKCkpIC8gcCkpO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckNsb3NlckFyci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckNsb3NlckFyci5wdXNoKHUpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGYgPSAxOyBmIDw9IHA7IGYrKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgbSA9IGNjLmNvbG9yKHUuZ2V0UigpICsgYy5nZXRSKCkgKiBmLCB1LmdldEcoKSArIGMuZ2V0RygpICogZiwgdS5nZXRCKCkgKyBjLmdldEIoKSAqIGYpO1xyXG4gICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMoZC5nZXRSKCkgLSBtLmdldFIoKSkgKyBNYXRoLmFicyhkLmdldEcoKSAtIG0uZ2V0RygpKSArIE1hdGguYWJzKGQuZ2V0QigpIC0gbS5nZXRCKCkpID49IDEwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1ckNsb3NlckFyci5wdXNoKG0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VyQ2xvc2VyQXJyLnB1c2goZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0Q29sb3IgPSB0aGlzLmN1ckNsb3NlckFyci5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuYmFzZUNvbG9yID0gdGhpcy5jdXJDbG9zZXJBcnJbMF07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgZ2V0UmVzdWx0KGV2ZW50LCBjdXN0b21FdmVudERhdGEpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZW92ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoY3VzdG9tRXZlbnREYXRhID09IFwiQW5zXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVMZXZlbCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsV2luQ291bnQrKztcclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbFdpbkNvdW50ID09IHBhcnNlSW50KHRoaXMubGV2ZWxbdGhpcy5jdXJMZXZlbF1bNF0pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxXaW5Db3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckxldmVsKys7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmN1ckxldmVsID4gMjYpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyTGV2ZWwgPSAyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgKz0gcGFyc2VGbG9hdCh0aGlzLmxldmVsW3RoaXMuY3VyTGV2ZWxdWzFdKTtcclxuICAgICAgICAgICAgdGhpcy5uZXdSb3VuZCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5RWZmZWN0KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSA0O1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUNvbnRhaW5lci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIob2Zmc2V0LCAtMTEwLjUpKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52Migtb2Zmc2V0LCAtMTEwLjUpKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52MihvZmZzZXQsIC0xMTAuNSkpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKC1vZmZzZXQsIC0xMTAuNSkpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKDAsIC0xMTAuNSkpXHJcbiAgICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3Zlcl9yZWQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZUluKDAuMSksXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4xKVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lIC09IHBhcnNlRmxvYXQodGhpcy5sZXZlbFt0aGlzLmN1ckxldmVsXVsyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVJKGR0KXtcclxuICAgICAgICB0aGlzLmxldmVsVGV4dC5zdHJpbmcgPSB0aGlzLmdhbWVMZXZlbC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbWFpblRpbWUgLT0gZHQ7XHJcbiAgICAgICAgaWYodGhpcy5yZW1haW5UaW1lIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZVRleHQuc3RyaW5nID0gdGhpcy5yZW1haW5UaW1lLnRvRml4ZWQoMikudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIjpcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lb3Zlcigpe1xyXG4gICAgICAgIHRoaXMuY292ZXIucnVuQWN0aW9uKGNjLmZhZGVUbygwLjIsIDEyOCkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5ydW5BY3Rpb24oY2MuZmFkZUluKDAuMikpO1xyXG4gICAgICAgIGxldCBMRVZFTFRleHQgPSB0aGlzLmdhbWVvdmVyUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoXCJMRVZFTFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIExFVkVMVGV4dC5zdHJpbmcgPSBcIkx2LiBcIiArIHRoaXMuZ2FtZUxldmVsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5zdG9wQkdNKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1lbnUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKXtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBQbGF5IG11c2ljLiBUaGUgYXVkaW8gY2xpcCB0byBwbGF5IGlzIHRoaXMuYmdtXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdG9wQkdNKCl7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gU3RvcCBtdXNpYy4gXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlFZmZlY3QoKXtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBQbGF5IHNvdW5kIGVmZmVjdC4gVGhlIGF1ZGlvIGNsaXAgdG8gcGxheSBpcyBcclxuICAgICAgICAvLyAgICB0aGlzLmNvcnJlY3RTb3VuZFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0U291bmQsZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkNpcmNsZShyb3c6IG51bWJlcil7XHJcbiAgICAgICAgY2MubG9nKFwic3Bhd24gXCIgKyByb3cgKyBcIipcIiArIHJvdyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJDaXJjbGUoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lclNpemUgPSAzODA7XHJcbiAgICAgICAgaWYocm93ID09IDIpe1xyXG4gICAgICAgICAgICBjb250YWluZXJTaXplID0gMjQ2O1xyXG4gICAgICAgIH1lbHNlIGlmKHJvdyA9PSAzKXtcclxuICAgICAgICAgICAgY29udGFpbmVyU2l6ZSA9IDM2OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNpcmNsZVNpemUgPSBjb250YWluZXJTaXplIC8gcm93O1xyXG4gICAgICAgIHRoaXMuY2lyY2xlQ29udGFpbmVyLndpZHRoPWNvbnRhaW5lclNpemU7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVDb250YWluZXIuaGVpZ2h0PWNvbnRhaW5lclNpemU7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gVXBkYXRlIHRoZSBzaXplIG9mIGNpcmNsZUNvbnRhaW5lclxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gMi4gU3Bhd24gW3Jvd10qW3Jvd10gY2lyY2xlcyAodGhpcy5jaXJjbGVQcmVmYWIpXHJcbiAgICAgICAgLy8gICAgdW5kZXIgY2lyY2xlQ29udGFpbmVyLlxyXG4gICAgICAgIC8vICAgIChCZSBjaGlsZCBub2RlcyBvZiB0aGUgY2lyY2xlQ29udGFpbmVyIG5vZGUpXHJcblxyXG4gICAgICAgIC8vICAgIEhpbnRzOiAgY2MuaW5zdGFudGlhdGUoKSwgY2MuTm9kZS5hZGRDaGlsZCgpXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gMy4gQWxsIGNpcmNsZXMgc2hvdWxkIGJlIHBsYWNlIGxpa2UgYSBzcXVhcmUgbWF0cml4LlxyXG4gICAgICAgIC8vICAgIFRoZXJlIGlzIG5vIHNwYWNlIGJldHdlZW4gZWFjaCBjaXJjbGUgaW4gZWFjaFxyXG4gICAgICAgIC8vICAgIHJvdyBhbmQgZWFjaCBjb2x1bW4uXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gICAgZS5nLiBcclxuICAgICAgICAvLyAgICBBIDMqMyBtYXRyaXggb2YgY2lyY2xlcyBpcyBsb29rIGxpa2U6XHJcbiAgICAgICAgLy8gICAgaHR0cHM6Ly9pLmltZ3VyLmNvbS9OdUxFaXlZLnBuZ1xyXG4gICAgICAgIC8vICAgIEEgNCo0IG1hdHJpeCBvZiBjaXJjbGVzIGlzIGxvb2sgbGlrZTpcclxuICAgICAgICAvLyAgICBodHRwczovL2kuaW1ndXIuY29tL0lqOEdEdngucG5nXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gICAgSGludHM6ICBMYXlvdXQgY29tcG9uZW50XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gNC4gVGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgZWFjaCBjaXJjbGUgaXMgXHJcbiAgICAgICAgLy8gICAgW2NpcmNsZVNpemVdLlxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vIDUuIE9ubHkgT05FIG9mIHRoZSBjaXJjbGVzIGlzIHRoZSBhbnN3ZXIuXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gICAgSGludHM6ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMikgd2lsbCByZXR1cm4gYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgMTIgXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gNi4gVGhlcmUgaXMgYSBjaGlsZCBub2RlIG5hbWVkIFwiQmFja2dyb3VuZFwiIHVuZGVyXHJcbiAgICAgICAgLy8gICAgdGhlIGNpcmNsZSBub2RlLiBZb3Ugc2hvdWxkIGNoYW5nZSB0aGUgY29sb3JcclxuICAgICAgICAvLyAgICBvZiB0aGUgXCJCYWNrZ3JvdW5kXCIgbm9kZSB0byB0aGlzLnRhcmdldENvbG9yXHJcbiAgICAgICAgLy8gICAgaWYgaXQgaXMgdGhlIGFuc3dlci4gT3RoZXJ3aXNlLCBjaGFuZ2UgdGhlIGNvbG9yIHRvXHJcbiAgICAgICAgLy8gICAgdGhpcy5iYXNlQ29sb3IuXHJcbiAgICAgICAgLy8gXHJcblxyXG4gICAgICAgIGxldCBhbnM9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKChyb3cqcm93KS0xKSlcclxuXHJcbiAgICAgICAgZm9yKGxldCBjPTAgO2M8cm93KnJvdztjKyspe1xyXG4gICAgICAgICAgICBsZXQgY2lyY2xlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaXJjbGVQcmVmYWIpO1xyXG4gICAgICAgICAgICBjaXJjbGUucGFyZW50PXRoaXMuY2lyY2xlQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGNpcmNsZS53aWR0aD1jaXJjbGVTaXplO1xyXG4gICAgICAgICAgICBjaXJjbGUuaGVpZ2h0PWNpcmNsZVNpemVcclxuICAgICAgICAgICAgaWYgKGM9PWFucyl7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmNvbG9yPXRoaXMudGFyZ2V0Q29sb3JcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2lyY2xlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFJlc3VsdChldmVudCxcIkFuc1wiKTsgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuY29sb3I9dGhpcy5iYXNlQ29sb3JcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2lyY2xlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFJlc3VsdChldmVudCxcIkZVQ0tcIik7IH0sIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyA3LiBBZGQgYSBjbGljayBldmVudCB0byB0aGUgQnV0dG9uIGNvbXBvbmVudCBvZlxyXG4gICAgICAgIC8vICAgIGVhY2ggY2lyY2xlIHNvIHRoYXQgd2hlbiB5b3UgY2xpY2sgb24gaXQsXHJcbiAgICAgICAgLy8gICAgR2FtZU1hbmFnZXIuZ2V0UmVzdWx0KCkgd2lsbCBiZSBjYWxsZWQuXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gOC4gSWYgdGhlIGNpcmNsZSBpcyB0aGUgYW5zd2VyLCBjdXN0b21FdmVudERhdGFcclxuICAgICAgICAvLyAgICBvZiB0aGUgY2xpY2sgZXZlbnQgc2hvdWxkIGJlIFwiQW5zXCIuIFBsZWFzZSByZWZlciB0byBcclxuICAgICAgICAvLyAgICBHYW1lTWFuYWdlci5nZXRSZXN1bHQoKSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ2lyY2xlKCl7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
    Menu.prototype.Button_Init = function () {
        var button_Act1 = new cc.Component.EventHandler();
        button_Act1.target = this.node;
        button_Act1.component = "Menu";
        button_Act1.handler = "loadGameScene";
        cc.find("Canvas/UI/StartButton").getComponent(cc.Button).clickEvents.push(button_Act1);
    };
    Menu.prototype.loadGameScene = function () {
        cc.director.loadScene("game");
    };
    // ================================================
    Menu.prototype.onLoad = function () {
    };
    Menu.prototype.start = function () {
        this.Button_Init();
    };
    Menu.prototype.update = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBb0NBLENBQUM7SUFsQ0csbURBQW1EO0lBQ25ELHlEQUF5RDtJQUN6RCxjQUFjO0lBRWQsMEJBQVcsR0FBWDtRQUNJLElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsV0FBVyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDL0IsV0FBVyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7UUFFdEMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBS0QsNEJBQWEsR0FBYjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxtREFBbUQ7SUFJbkQscUJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQkFBTSxHQUFOO0lBRUEsQ0FBQztJQW5DZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW9DeEI7SUFBRCxXQUFDO0NBcENELEFBb0NDLENBcENpQyxFQUFFLENBQUMsU0FBUyxHQW9DN0M7a0JBcENvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyAxLiBBZGQgZHluYW1pYyBjbGljayBldmVudCB0byBTdGFydEJ1dHRvbiB0byBjYWxsIHRoaXNcclxuICAgIC8vICAgIGZ1bmN0aW9uXHJcblxyXG4gICAgQnV0dG9uX0luaXQoKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbl9BY3QxID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBidXR0b25fQWN0MS50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYnV0dG9uX0FjdDEuY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgYnV0dG9uX0FjdDEuaGFuZGxlciA9IFwibG9hZEdhbWVTY2VuZVwiO1xyXG5cclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1VJL1N0YXJ0QnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYnV0dG9uX0FjdDEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGxvYWRHYW1lU2NlbmUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICAgIFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5CdXR0b25fSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19
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
