// 抓瀏覽器實體 window，不用引號，抓 標籤（body)、class 才需要引號
// 抓出可視範圍寬度（或高度）
// console.log($(window).width() <= 480)
// 表達式

// const isMobile = $(window).width() <= 480
// console.log(isMobile)

// 另一種方法（比較多行）---------------------
// let isMobile;

// if ($(window).width() <= 480) {
//     isMobile = true;
// } else {
//     isMobile = false;
// }
// console.log(isMobile)
// -----------------------------
// 判斷式

const isMobile = $(window).width() <= 480
const $slide = $('#Slide')
const $grid = $slide.find('.grid')
// const $grid = $('#Slide .grid')
// 或是用 後代選取器 比較好理解
const $nav = $('#Nav')

console.log($grid)


// if(isMobile == true) {
//     $('#Grid').addClass("grid-2")
// } else {
//     $('#Grid').addClass("grid-3")
// }
// == 判斷式
// 用程式把 grid-2  grid-3 代入，本來是寫在html，要記得刪掉，
// 不然開發者工具手機版會同時出現 grid-2  grid-3 混淆
// 最初寫法

function setGrid() {
    if(isMobile) {
        $grid.addClass('grid-2');
        return;
    }
    $grid.addClass('grid-3');
}
// 可能在其他會用到，改成具名函式，記得呼叫↓↓↓
// return：傳回值，擋掉停在這邊，可以不用寫 else{}



// $(window).scroll(function() {
//     if(isMobile == true){
//             // console.log($(window).scrollTop());
//         if($(this).scrollTop() == 0) {
//             $nav.removeClass('nav-active')
//         } else {
//             $nav.addClass('nav-active')
//         }
//     }
// });
// （1）如果手機版 <= 480：
//     nav-active（透明黑底）上捲時出現。scrollTop = 0 時隱藏
// （2）如果手機版 <= 480：
//     手機版才會執行這個動作，桌機不會（右側 nav 就不會有黑底了）

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

// 初始化
function setInit() {
    setGrid();
}

// 事件
function setEvent() {
    setScroll();
    setFancybox()
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

setInit();
setEvent();
// 要呼叫才會執行







// 拉動螢幕時，console true、false即時出現，不用重整
$(window).resize(function() {
    const isMobile = $(window).width() <= 480;
    console.log(isMobile)
})


