(function () {
        let startTime = new Date().getTime();

        function pageLoadingTime() {
            let loadTime = (new Date().getTime() - startTime) / 1000;
            let pageLoad = document.getElementById("load-time");
            pageLoad.innerText = "Page load time is " + loadTime + " sec.";
        }

        window.addEventListener("DOMContentLoaded", _ => {
            pageLoadingTime()
        })
    }
)()