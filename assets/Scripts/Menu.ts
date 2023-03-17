const {ccclass, property} = cc._decorator;

@ccclass
export default class Menu extends cc.Component {
    
    // ===================== TODO =====================
    // 1. Add dynamic click event to StartButton to call this
    //    function

    Button_Init() {
        let button_Act1 = new cc.Component.EventHandler();
        button_Act1.target = this.node;
        button_Act1.component = "Menu";
        button_Act1.handler = "loadGameScene";

        cc.find("Canvas/UI/StartButton").getComponent(cc.Button).clickEvents.push(button_Act1);
    }




    loadGameScene(){
        cc.director.loadScene("game");
    }
    // ================================================


    
    onLoad () {
        
    }

    start () {
        this.Button_Init();
    }

    update () {
        
    }
}
