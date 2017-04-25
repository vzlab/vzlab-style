;(function () {
    var full_shadow = 256
    var update_shadow = false
    var header_element = document.querySelector('#header')
    var max_shadow_size = 24;

    self.addEventListener('scroll', function (e) {
        update_shadow = true
    })

    // header_element.style.transition = "100ms box-shadow 500ms"

    function updateHeaderShadow() {
        if (update_shadow) {
            var shadow_size = Math.min(1, pageYOffset / full_shadow) * max_shadow_size
            header_element.style.boxShadow = "0 0 " + shadow_size + "px black" // rgba(0, 0, 0, .75)"
            update_shadow = false
        }

        requestAnimationFrame(updateHeaderShadow)
    }
    setTimeout(updateHeaderShadow, 0)
})()
