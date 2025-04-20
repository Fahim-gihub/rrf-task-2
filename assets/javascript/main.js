jQuery(document).ready(function() {
    $(".popup-dorik").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,

        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com' ,
                    id: 'v=',
                    src: 'https://files.dorik.com/635bcad9b8a74e0091632998/videos/Dorik-AI-Intro-720p-vG0YQ.mp4'
                }
            },

            srcAction: 'iframe_src'
        }
    });
});