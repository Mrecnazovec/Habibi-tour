let btn = document.querySelector(".language");
let span_lang = document.querySelector(".lang_span")
let language_box = document.querySelector(".language_box")
btn.addEventListener("click", function(e){
    
    console.log(span_lang.classList[1]);
    if (span_lang.classList[1] == "active"){
        span_lang.classList.remove("active")
        span_lang.classList.add("disable")
    } else {
        span_lang.classList.add("active")
        span_lang.classList.remove("disable")
    }
    if (language_box.classList[1] == "active"){
        language_box.classList.remove("active")
        language_box.classList.add("disable")
    } else {
        language_box.classList.add("active")
        language_box.classList.remove("disable")
    }
})