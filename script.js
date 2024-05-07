document.addEventListener('contextmenu',function(event){
    event.preventDefault();
})
document.getElementById('openBtn1').addEventListener('click', function() {
document.getElementById('popupBox1').style.display = 'block';
document.getElementById('myphoto').style.display = 'block';
document.getElementById('myphoto').style.opacity = '1';
document.getElementById('blurBackground').style.display = 'block';
});

document.querySelectorAll('.close-btn').forEach(function(button) {
button.addEventListener('click', function() {
this.parentNode.style.display = 'none';
document.getElementById('blurBackground').style.display = 'none';
});
});


const certificate = document.getElementById('certificate');
        const overlay = document.getElementById('overlay');
        const popupBox = document.getElementById('popupBox');
        const pdfViewer = document.getElementById('pdfViewer');
        let currentIndex = 0;
        const pdfFiles = [
            "Teach for Everyone certificate on sololearn.pdf",
            "How the internet works and the web development process certificate on Udemy.pdf",
            "C intermidiate.pdf",
            "C++ intermidiate.pdf",
            "C-sharp introduction.pdf",
            "introduction to javascript.pdf",
            "JAVA certificate from Udemy.pdf",
            "python sssso.pdf",
            "Blockchain and Crypto from Beginning certificate from Udemy.pdf",
            "Problem Solving for Beginners certification on log2base2.png"


        ];

        certificate.addEventListener('click', () => {
            overlay.style.display = 'block';
            popupBox.style.display = 'block';
            showPDF();
        });

        function showPDF() {
            const pdfLink = pdfFiles[currentIndex];
            pdfViewer.setAttribute('src', pdfLink);
        }

        function showPrevious() {
            if (currentIndex > 0) {
                currentIndex--;
                showPDF();
            }
        }

        function showNext() {
            if (currentIndex < pdfFiles.length - 1) {
                currentIndex++;
                showPDF();
            }
        }

        function closePopup() {
            overlay.style.display = 'none';
            popupBox.style.display = 'none';
        }
