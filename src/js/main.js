const settings = {
    jsEnabledClass: 'js-enabled',
    playingClass: 'playing',
    keys: 'qsdfghjkl'
}
document.documentElement.classList.add(settings.jsEnabledClass);


const drumKit = {
    //buttons: document.querySelectorAll('.key')
    init() {
        this.actionEcran();
        this.actionClavier();
    },

    actionEcran() {
        document.querySelectorAll('.key').forEach((el) => {
            el.addEventListener('click', (e) => this.play(e.currentTarget.dataset.key));

            el.addEventListener('transitionend', (e) => {
                const k = e.currentTarget.dataset.key;
                document.body.classList.remove(k);
                e.currentTarget.classList.remove(settings.playingClass);
            });
        });
    },
    actionClavier() {
        document.addEventListener('keydown', (e) => {
            const k = e.key.toLowerCase();
            if (settings.keys.includes(k)) this.play(k);
        });
    },
    play(k) {
        const linkedAudio = document.querySelector(`audio[data-key=${k}]`);
        linkedAudio.pause();
        linkedAudio.currentTime = 0;
        linkedAudio.play();
        document.querySelector(`div[data-key=${k}]`).classList.add(settings.playingClass);
        document.body.classList.add(k);
    }
}


drumKit.init();