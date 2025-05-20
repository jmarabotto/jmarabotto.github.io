/* fetch the header html file to show header */
const pathParts = window.location.pathname.split('/');
const basePath = `/`;

fetch(`${basePath}header.html`)
.then(res => {
    if (!res.ok) throw new Error('Failed to load header');
    return res.text();
})
.then(html => {
    document.getElementById('header').innerHTML = html;
})
.catch(err => console.error('Header load error:', err));

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
    
/* Close the dropdown if the user clicks outside of it */
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}