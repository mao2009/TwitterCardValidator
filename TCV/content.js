const interval = 500;
const btn = document.querySelector("input[type='submit']");

let enable_flag = false;

btn.addEventListener("click", click_Preview);

function click_Preview(){
    if(enable_flag) return;
    enable_flag = true;
    const cardPreview =  document.getElementById("CardPreview");
    const ID = setInterval(() => {
        const classList = cardPreview.classList;

        
        if(classList.contains("is-error")){
            this.click();
        }else if(classList.contains("is-loading")){
            // 読み込み待ち
        }else{
            clearInterval(ID);
            enable_flag = false
        }
    }, interval);

    // Escで終了できるようにする
    document.onkeydown=() => {
        const EscKyeCode = 27;
        if(event.keyCode === EscKyeCode){
            clearInterval(ID);
            enable_flag = false
        }
    }
}