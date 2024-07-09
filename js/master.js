// ---------------全域變數-----------------
const isMobile = $(window).width() <= 480
const $slide = $('#Slide')
const $grid = $slide.find('.grid')
// const $grid = $('#Slide .grid')
// 或是用 後代選取器 比較好理解
const $nav = $('#Nav')
const $btns = $nav.find('.nav-btn')
// ---------------全域變數-----------------（在裡面是區域變數）

console.log($grid)


function setGrid() {
    if(isMobile) {
        $grid.addClass('grid-2');
        return;
    }
    $grid.addClass('grid-3');
}
// 可能在其他會用到，改成具名函式，記得呼叫↓↓↓
// return：傳回值，擋掉停在這邊，可以不用寫 else{}


function setScroll() {
    // 另一個寫法：
$(window).scroll(function() {
    // isMobile: true
    // !isMobile: false  驚嘆號是否定
    if(!isMobile)return
        
    if($(this).scrollTop() == 0) {
            $nav.removeClass('nav-active')
        } else {
            $nav.addClass('nav-active')
        }    
    // 如果手機版 "不是“ <= 480：
    // 桌機版直接return擋掉，手機版繼續執行
});

}

function setFancybox() {
    $grid.find('a').fancybox({
        protect: true,
        // 鎖右鍵

        loop: true,
        // 圖片、影片、文件循環

        animationDuration: 1000,
        // Fancybox開啟、關閉動畫時間（毫秒）

        transitionDuration: 1000,
        // 圖片換到下一張圖片的轉場時間

        transitionEffect: 'slide',
        // 轉場效果

        // fullScreen: {
        //     autoStart: true,
        // },
        // 全螢幕

        // keyboard: false,
        // 鍵盤控制
        infobar: false,
        // 左上分頁資訊

        // toolbar: false,
        // 右上工具選項

        // smallBtn: true,
        // 右上關閉按鈕顯示

        // arrows: false,
        // 左右分頁按鈕顯示

        // slideShow: {
        //     autoStart: true,
        //     speed: 1000,
        // },
        // 幻燈片播放

        // thumbs: false,
        // 縮圖

        buttons: [
            'share',
            'slideShow',
            'fullScreen',
            'download',
            'thumbs',
            'close'
        ],
        // 工具選項內容

        media: {
            youtube: {
                params: {
                    autoplay: false
                }
            },
        }

        // youtube不會自動播放
    });
}

function setClickBtn() {
    // console.log($nav.find('.nav-btn')) 
    

    $btns.click(function(){
         $(this)
            .attr('disabled', true)
            .siblings().attr('disabled', false)
        // attr：屬性。ex：點到pr的頁面，pr 的 btn 會變成disabled，無法再點選，以防記憶體外洩
        // 當事者啟用disbaled，其他兄弟姊妹不啟用disabled
        const index = $(this).index()
        // console.log(index)
        // 取出索引值（當事者this)
        
       

        // if (index == 0){
        //     $slide.css('transform', 'translate(0,0)')
        // } 
        // if (index == 1){
        //     $slide.css('transform', 'translate(-100vw, 0)')
        // } if (index == 2){
        //     $slide.css('transform', 'translate(-200vw, 0)')
        // } 
        // if (index == 3){
        //     $slide.css('transform', 'translate(0, -100vh)')
        // } 
        // if (index == 4){
        //     $slide.css('transform', 'translate(-100vw, -100vh)')
        // } 
        // if (index == 5){
        //     $slide.css('transform', 'translate(-200vw, -100vh)')
        // }
        // 第1種：比較耗效能，第一個成立還是會繼續往下讀取
        

        // if (index == 0){
        //     $slide.css('transform', 'translate(0,0)')
        // } else if (index == 1){
        //     $slide.css('transform', 'translate(-100vw, 0)')
        // } else if (index == 2){
        //     $slide.css('transform', 'translate(-200vw, 0)')
        // } else if (index == 3){
        //     $slide.css('transform', 'translate(0, -100vh)')
        // } else if (index == 4){
        //     $slide.css('transform', 'translate(-100vw, -100vh)')
        // } else if (index == 5){
        //     $slide.css('transform', 'translate(-200vw, -100vh)')
        // }
        // 第2種：6選1 用else if：效率比較好，不會有多餘的程式在跑

        switch(index){
            case 0:
                $slide.css('transform', 'translate(0,0)')
                break
                // break 中斷：判斷如果條件成立，就執行事項，做完馬上停止，後面就不會執行
        }
        switch(index){
            case 1:
                $slide.css('transform', 'translate(-100vw, 0)')
                break
        }
        switch(index){
            case 2:
                $slide.css('transform', 'translate(-200vw, 0)')
                break
        }
        switch(index){
            case 3:
                $slide.css('transform', 'translate(0, -100vh)')
                break
        }
        switch(index){
            case 4:
                $slide.css('transform', 'translate(-100vw, -100vh)')
                break
        }
        switch(index){
            case 5:
                $slide.css('transform', 'translate(-200vw, -100vh)')
                break
        }
        // 第3種：效率最好

    })
    
}

// 初始化
function setInit() {
    setGrid();
    // $nav.find('.nav-btn').eq(0).attr('disabled', true); 優化↓↓↓
    $btns.eq(0).attr('disabled', true);
    
    // 載入畫面第一個按鈕就要disabled
}

// 事件
function setEvent() {
    setScroll();
    setFancybox();
    setClickBtn();
}



setInit();
setEvent();
// 要呼叫才會執行








