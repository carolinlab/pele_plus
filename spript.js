document.addEventListener("DOMContentLoaded", function () {

    console.log("Pele+ carregado!");

    const navItems = document.querySelectorAll(".nav-item");
    const pages = document.querySelectorAll(".page");


    function changePage(pageName) {

        console.log("Mudando para:", pageName);

        pages.forEach(function (page) {

            page.classList.remove("active-page");

        });


        navItems.forEach(function (item) {

            item.classList.remove("active");

        });


        const page = document.getElementById(pageName);

        const button = document.querySelector(
            '[data-page="' + pageName + '"]'
        );


        if (page) {

            page.classList.add("active-page");

        }


        if (button) {

            button.classList.add("active");

        }

    }


    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const pageName = item.getAttribute("data-page");

            changePage(pageName);

        });

    });


    /* ===============================
       MODAL NOVA AVALIAÇÃO
    =============================== */

    const modal = document.getElementById("evaluationModal");

    const openButtons = document.querySelectorAll(
        '[onclick="openEvaluation()"]'
    );


    function openEvaluation() {

        if (modal) {

            modal.classList.add("show");

        }

    }


    function closeEvaluation() {

        if (modal) {

            modal.classList.remove("show");

        }

    }


    window.openEvaluation = openEvaluation;

    window.closeEvaluation = closeEvaluation;

    window.changePage = changePage;


    /* ===============================
       BOTÃO NOVA AVALIAÇÃO
    =============================== */

    openButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            openEvaluation();

        });

    });


    /* ===============================
       UPLOAD
    =============================== */

    const imageInput = document.getElementById("imageInput");

    const uploadArea = document.getElementById("uploadArea");

    const imagePreview = document.getElementById("imagePreview");

    const previewImage = document.getElementById("previewImage");

    const analyzeButton = document.getElementById("analyzeButton");


    if (imageInput) {

        imageInput.addEventListener("change", function (event) {

            const file = event.target.files[0];

            if (!file) return;


            const reader = new FileReader();


            reader.onload = function (event) {

                previewImage.src = event.target.result;

                uploadArea.style.display = "none";

                imagePreview.style.display = "block";

                analyzeButton.classList.remove("disabled");

            };


            reader.readAsDataURL(file);

        });

    }


    /* ===============================
       CONTINUAR PARA ANÁLISE
    =============================== */

    if (analyzeButton) {

        analyzeButton.addEventListener("click", function () {

            if (
                analyzeButton.classList.contains("disabled")
            ) {

                return;

            }


            closeEvaluation();


            const analysisScreen =
                document.getElementById("analysisScreen");


            if (analysisScreen) {

                analysisScreen.classList.add("show");

            }


            const processing =
                document.getElementById("processingState");


            const result =
                document.getElementById("resultState");


            if (processing && result) {

                processing.style.display = "block";

                result.style.display = "none";


                setTimeout(function () {

                    processing.style.display = "none";

                    result.style.display = "block";

                }, 2800);

            }

        });

    }


});
