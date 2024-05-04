// JavaScript to handle the popup boxes and close buttons
       document.getElementById('openBtn1').addEventListener('click', function() {
            document.getElementById('popupBox1').style.display = 'block';
            document.getElementById('blurBackground').style.display = 'block';
        });

        document.querySelectorAll('.close-btn').forEach(function(button) {
            button.addEventListener('click', function() {
                this.parentNode.style.display = 'none';
                document.getElementById('blurBackground').style.display = 'none';
            });
        });