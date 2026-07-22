/* =====================================
   NAVEGAÇÃO PRINCIPAL
===================================== */

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageName = item.dataset.page;

        if (pageName) {
            changePage(pageName);
        }

    });

});


function changePage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    navItems.forEach(item => {
        item.classList.remove("active");
    });


    const selectedPage = document.getElementById(pageName);

    const selectedButton = document.querySelector(
        `[data-page="${pageName}"]`
    );


    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    if (selectedButton) {
        selectedButton.classList.add("active");
    }

}


/* =====================================
   MODAL DE NOVA AVALIAÇÃO
===================================== */

const modal = document.getElementById("evaluationModal");

const imageInput = document.getElementById("imageInput");

const uploadArea = document.getElementById("uploadArea");

const imagePreview = document.getElementById("imagePreview");

const previewImage = document.getElementById("previewImage");

const analyzeButton = document.getElementById("analyzeButton");


function openEvaluation() {

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeEvaluation() {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

}


function showImage(file) {

    if (!file || !file.type.startsWith("image/")) {

        alert("Selecione uma imagem válida.");

        return;

    }


    const reader = new FileReader();


    reader.onload = function(event) {

        previewImage.src = event.target.result;

        uploadArea.style.display = "none";

        imagePreview.style.display = "block";

        analyzeButton.classList.remove("disabled");

    };


    reader.readAsDataURL(file);

}


imageInput.addEventListener("change", function(event) {

    const file = event.target.files[0];

    showImage(file);

});


function removeImage() {

    imageInput.value = "";

    previewImage.src = "";

    imagePreview.style.display = "none";

    uploadArea.style.display = "block";

    analyzeButton.classList.add("disabled");

}


/* =====================================
   DRAG AND DROP
===================================== */

uploadArea.addEventListener("dragover", function(event) {

    event.preventDefault();

    uploadArea.classList.add("dragover");

});


uploadArea.addEventListener("dragleave", function() {

    uploadArea.classList.remove("dragover");

});


uploadArea.addEventListener("drop", function(event) {

    event.preventDefault();

    uploadArea.classList.remove("dragover");

    const file = event.dataTransfer.files[0];

    showImage(file);

});


/* =====================================
   COMEÇAR ANÁLISE
===================================== */

analyzeButton.addEventListener("click", function() {

    if (analyzeButton.classList.contains("disabled")) {

        return;

    }


    closeEvaluation();

    openAnalysisScreen();

});


/* =====================================
   TELA DE ANÁLISE
===================================== */

function openAnalysisScreen() {

    const analysisScreen = document.getElementById("analysisScreen");

    analysisScreen.classList.add("show");

    startProcessing();

}


function closeAnalysisScreen() {

    const analysisScreen = document.getElementById("analysisScreen");

    analysisScreen.classList.remove("show");

}


/* =====================================
   PROCESSAMENTO SIMULADO
===================================== */

function startProcessing() {

    const processingState = document.getElementById("processingState");

    const resultState = document.getElementById("resultState");

    processingState.style.display = "block";

    resultState.style.display = "none";


    setTimeout(() => {

        processingState.style.display = "none";

        resultState.style.display = "block";

    }, 2800);

}


/* =====================================
   GERAR RELATÓRIO
===================================== */

function generateReport() {

    alert(
        "Relatório preparado. A geração de PDF será conectada na próxima etapa."
    );

}


/* =====================================
   FECHAR TELAS COM ESC
===================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeEvaluation();

        closeAnalysisScreen();

    }

});
