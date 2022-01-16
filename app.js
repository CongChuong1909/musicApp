const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const nameSongHeader = $(".name_song");
const cdImage = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const btnPlay = $(".btn-toggle-play");
const isPlay = $(".player");
const progress = $("#progress");
const cdInner = $('.cd-inner');
const btnNext = $(".btn-next");
const btnPrev = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playList = $(".playlist");
const timeEnd = $(".time_end");
const timeCurrent =$(".time_current");
const modalMenu = $(".menu_modal");
const usBtn = $(".btn_us");
const vnBtn = $(".btn_vn");
const favoriteBtn = $(".btn_favorite");
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    currentList:'us',
    songs:{
        us: [
            {
                name: "Lullaby",
                singer: "Mariah Carey",
                path: "./access/mp3/Lullaby-R3hab-Mike-Williams.mp3",
                image: "https://images.genius.com/39d60745c3d8779a031f78d21fb953de.1000x1000x1.jpg"
            },
            {
                name: "Merry Christmas",
                singer: "Elton John",
                path: "./access/mp3/MerryChristmas-EdSheeranEltonJohn-7122326.mp3",
                image: "https://thoidai.com.vn/stores/news_dataimages/van.ho/122020/14/20/3700_MerryChristmas.png?rt=20201214203710"
            },
            {
                name: "Stay",
                singer: "Justin Bieber",
                path: "./access/mp3/Stay-TheKidLAROIJustinBieber-7045258.mp3",
                image: "https://t.vietgiaitri.com/2021/9/8/stay-cua-the-kid-laroi-va-justin-bieber-loi-nguoc-dong-tren-billboard-hot-100-0f7-6046805.jpeg"
            },
            {
                name: "Build A Bitch",
                singer: "Bella Poarch",
                path: "./access/mp3/BuildABitch-BellaPoarch-7030913.mp3",
                image: "https://i.ytimg.com/vi/HeCTeP7esNg/maxresdefault.jpg"
            },
            {
                name: "Easy On Me",
                singer: "Adele",
                path: "./access/mp3/EasyOnMe-Adele-7107614.mp3",
                image: "https://data.chiasenhac.com/data/cover/151/150370.jpg"
            },
            {
                name: "Angel Baby",
                singer: "Adele",
                path: "./access/mp3/AngelBaby-TroyeSivan-7086687.mp3",
                image: "https://avatar-ex-swe.nixcdn.com/song/2021/09/10/2/9/e/9/1631247361891_640.jpg"
            },
            {
                name: "Forever In Love",
                singer: "Adele",
                path: "./access/mp3/ForeverInLove_KennyG_h94.mp3",
                image: "https://i.scdn.co/image/ab67616d0000b273775be36ca77a54d5f8c2c41f"
            },
            {
                name: "Let's Fall In Love For The Night",
                singer: "Finneas",
                path: "./access/mp3/Let-s-Fall-In-Love-For-The-Night-FINNEAS.mp3",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8f/f0/18/8ff018f1-0c8e-1798-643a-dd704ca2de8e/5054526249936_1.jpg/500x500cc.jpg"
            },
            {
                name: "My Heart Will Go On",
                singer: "Various Artists",
                path: "./access/mp3/My-Heart-will-go-on-Various-Artists.mp3",
                image: "https://m.media-amazon.com/images/I/81neq8NxggL._SL1500_.jpg"
            },
            {
                name: "Set Fire To The Rain",
                singer: "Adele",
                path: "./access/mp3/Set-Fire-to-the-Rain-Adele.mp3",
                image: "https://upload.wikimedia.org/wikipedia/vi/f/ff/Adele-set_fire_to_the_rain_s.jpg"
            },
            {
                name: "Rap dizz phai phai",
                singer: "Người trong jang hồ",
                path: "./access/mp3/Rap-Ve-Free-Fire-Phan-Ann-TMons.mp3",
                image: "https://play-lh.googleusercontent.com/lrLRup7kuMuc3c6R_DPC0SRA0_VaeJHTpwQuvY4OQuUjQ0tLxVhO4sWyO_T4OwGtikwz"
            },
        ],
        vn:[
            {
                name: 'Bài này chill phết',
                singer: 'Đen Vâu',
                path: './access/mp3/vn/Bài Này Chill Phết.mp3',
                image: 'http://zonews.net/wp-content/uploads/2019/05/min1.jpg'
            },
            {
                name: 'Chỉ là không cùng nhau',
                singer: 'Tăng Phúc',
                path: './access/mp3/vn/CHỈ LÀ KHÔNG CÙNG NHAU.mp3',
                image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/f/1/a/1f1ab8428a983f8a7700bfaa5591713b.jpg'
            },
            {
                name: 'Lối nhỏ',
                singer: 'Đen Vâu',
                path: './access/mp3/vn/Lối Nhỏ.mp3',
                image: 'https://i.ytimg.com/vi/KKc_RMln5UY/maxresdefault.jpg'
            },
            {
                name: 'Nơi này có anh',
                singer: 'Sơn Tùng MTP',
                path: './access/mp3/vn/NƠI NÀY CÓ ANH.mp3',
                image: 'https://upload.wikimedia.org/wikipedia/vi/1/1d/N%C6%A1i_n%C3%A0y_c%C3%B3_anh_-_Single_Cover.jpg'
            },
            {
                name: 'Tháng mấy em nhớ anh',
                singer: 'Hà Anh Tuấn',
                path: './access/mp3/vn/thang_may_em_nho_anh.mp3',
                image: 'https://i.scdn.co/image/ab67616d0000b2734b18f196222db6c99f952839'
            },
            {
                name: 'Thanh Xuân',
                singer: 'Da LAB',
                path: './access/mp3/vn/Thanh Xuân.mp3',
                image: 'https://avatar-ex-swe.nixcdn.com/song/2018/08/24/b/a/9/5/1535121377317_640.jpg'
            },
            {
                name: 'Thiên Đàng',
                singer: 'Joli Poli - Wowy',
                path: './access/mp3/vn/THIÊN ĐÀNG.mp3',
                image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/7/a/c/67ac7d2313b6291e48083a2b53bc9b90.jpg'
            },
            {
                name: 'Tất cả sẽ thay anh',
                singer: 'Tăng Phúc',
                path: './access/mp3/vn/Tất Cả Sẽ Thay Anh.mp3',
                image: 'https://i.scdn.co/image/ab67616d00001e0249b27182961005b5a47068fe'
            },
            {
                name: 'Đừng chờ anh nữa',
                singer: 'Tăng Phúc',
                path: './access/mp3/vn/ĐỪNG CHỜ ANH NỮA.mp3',
                image: 'https://i.ytimg.com/vi/C3GqqnJ9ID0/maxresdefault.jpg'
            }
        ],
        favorite:[

        ]
      }  
    ,

    renderSong: function () {
        const htmls = this.songs[this.currentList].map((song, index) => {
            return `
            <div class="song ${index == this.currentIndex ? 'active' : ''}" data-index = ${index}>
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="like like-index = ${index}">
                    <i class="fas fa-heart heart_icon"></i>
                </div>
            </div>
            `
        })
        $(".playlist").innerHTML = htmls.join('')
    },

    defineProperties: function () {
        //Định nghĩa một thuộc tính mới của object app là một property "currenSong";
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentList][this.currentIndex];//lấy ra phần tử đầu của array song
            }
        })
    },


    handleEvent: function () {        
        var checkbox_toggle = $('#theme');
        checkbox_toggle.addEventListener('change', function(){
            $(".dashboard").classList.toggle('IU');
            $(".playlist").classList.toggle("IU");
        });

        //Xử lý đóng mở modal
       
        modalMenu.onclick = function(){
            $(".modal_list-song").classList.add("active2");
        }
        $(".modal_close").onclick = function(){
            $(".modal_list-song").classList.remove("active2");
        }
        $(".modal_overlay").onclick = function(){
            $(".modal_list-song").classList.remove("active2");
        }

        //xoay đĩa
        const cdThumbAnimate = cdImage.animate([
            { transform: "rotate(360deg)" }
        ], {
            duration: 15000,
            iterations: Infinity,
        })


        cdThumbAnimate.pause();
        //xử lý trượt lên xuống của cd
        const cdWidth = cd.offsetWidth;
        document.onscroll = (function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
        })

        // xử lý khi click nút play
        btnPlay.onclick = function () {
            if (app.isPlaying == true) {
                audio.pause();
            }
            else {
                audio.play();
            }
        }
        audio.onplay = function () {
            app.isPlaying = true;
            isPlay.classList.add("playing");
            cdThumbAnimate.play();
        }
        audio.onpause = function () {
            app.isPlaying = false;
            isPlay.classList.remove("playing");
            cdThumbAnimate.pause();
        }

        //time update
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.round((audio.currentTime / audio.duration * 100) * 1000) / 1000;
                progress.value = progressPercent;
            }
            timeEnd.innerHTML = app.loadTimeSong(audio.duration);
            timeCurrent.innerHTML = app.loadTimeSong(audio.currentTime);
        }
        //xử lý tua
        progress.onchange = (function (e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        })
        btnNext.onclick = (function () {
            if (app.isRandom) {
                app.playRandomSong();
            } else {
                app.nextSong();
            }
            audio.play();
            app.renderSong();
        })
        btnPrev.onclick = (function () {
            if (app.isRandom) {
                app.playRandomSong();
            } else {
                app.prevSong();
            }
            audio.play();
            app.renderSong();
        })
        randomBtn.onclick = (function () {
            app.isRandom = !app.isRandom;
            randomBtn.classList.toggle("active", app.isRandom);
        })
        audio.onended = function () {
            if (app.isRepeat) {
                audio.play();
            }
            else {
                btnNext.click();
            }
        }

        repeatBtn.onclick = function () {
            app.isRepeat = !app.isRepeat;
            repeatBtn.classList.toggle("active", app.isRepeat)
        }
        playList.onclick = function(e){
            const heartBtns = $$(".like");
            const songNode = e.target.closest(".song");
            if(songNode || e.target.closest(".like")){
                if(songNode && !e.target.closest(".like")){
                    app.currentIndex=Number(songNode.dataset.index);
                    app.loadCurrentSong();
                    app.renderSong();
                    audio.play();
                }
                if(e.target.closest(".like")){
                    if(app.currentList === 'favorite')
                    {
                        var indexTrace = Number(songNode.dataset.index);
                        app.songs['favorite'].splice(indexTrace, 1);
                        app.renderSong();
                    }
                    else{
                        var indexTrace = Number(songNode.dataset.index);
                       if(app.currentList === 'us'){
                           newListFavorite = app.songs['us'][indexTrace];
                           $$('.heart_icon').forEach(function(item){
                            item.onclick = function(){
                               item.classList.toggle("red");
                            }
                        })
                       }
                       else {
                           newListFavorite = app.songs['vn'][indexTrace];
                           $$('.heart_icon').forEach(function(item){
                            item.onclick = function(){
                               item.classList.toggle("red");
                            }
                        })
                       }
                       if(!app.songs['favorite'].includes(newListFavorite)){
                           app.songs['favorite'].push(newListFavorite);
                       }
                    }
                }
            }
        }
        vnBtn.onclick = function(){
            usBtn.classList.remove("active");
            favoriteBtn.classList.remove("active");
            vnBtn.classList.add("active");

            app.currentList = 'vn';
            app.currentIndex = 0;
            app.loadCurrentSong();
            app.renderSong();
            btnPlay.click();
        }
        usBtn.onclick = function(){
            favoriteBtn.classList.remove("active");
            vnBtn.classList.remove("active");
            usBtn.classList.add("active");

            app.currentList = 'us';
            app.currentIndex = 0;
            app.loadCurrentSong();
            app.renderSong();
            btnPlay.click();
        }
        favoriteBtn.onclick = function(){
            usBtn.classList.remove("active");
            vnBtn.classList.remove("active");
            favoriteBtn.classList.add("active");

            app.currentList = 'favorite';
            app.currentIndex = 0;
            app.loadCurrentSong();
            app.renderSong();
            btnPlay.click();
        }
      
        

    },

    loadCurrentSong: function () {
        nameSongHeader.textContent = this.currentSong.name;
        cdImage.style.backgroundImage = `url(${this.currentSong.image})`;
        audio.src = this.currentSong.path;
    },

    loadTimeSong: function(time){
        let TimeOfSongMinutes;
        let TimeOfSongSeconds;
        if(time){
            TimeOfSongMinutes = Math.floor(time / 60).toLocaleString("en-US",{minimumIntegerDigits:2}) ;
            TimeOfSongSeconds = Math.floor(time % 60).toLocaleString("en-US",{minimumIntegerDigits:2}) ;
        }
        else{
            TimeOfSongMinutes = (0).toLocaleString("en-US",{minimumIntegerDigits:2}) ;
            TimeOfSongSeconds = (0).toLocaleString("en-US",{minimumIntegerDigits:2});
        }
        return `${TimeOfSongMinutes} : ${TimeOfSongSeconds}`
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs[this.currentList].length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs[this.currentList].length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs[this.currentList].length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },



    start: function () {
        //định nghĩa các thuộc tính cho object
        this.defineProperties();
        
        //render lên html
        this.renderSong();
        //lắng nghe,xử lý sự kiện trong DOM
        this.handleEvent();

        this.loadTimeSong();

        this.loadCurrentSong();



    },
}
app.start();

