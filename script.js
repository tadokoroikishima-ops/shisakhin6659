// Terra’s Finest - script.js

function toggleSb(head) {
const body = head.nextElementSibling;
const arrow = head.querySelector(’.arrow’);
if (body.classList.contains(‘collapsed’)) {
body.classList.remove(‘collapsed’);
arrow.textContent = ‘▼’;
} else {
body.classList.add(‘collapsed’);
arrow.textContent = ‘▲’;
}
}

document.addEventListener(‘DOMContentLoaded’, function() {
const container = document.getElementById(‘autoGallery’);
const section = document.getElementById(‘gallerySection’);
const overlay = document.getElementById(‘gallery-count-overlay’);

```
// オーバーレイは初期非表示
if (overlay) overlay.style.display = 'none';

if (!container) return;
let found = 0;

function updateOverlay() {
    if (overlay) {
        overlay.style.display = 'flex';
        overlay.textContent = found + ' 📷';
    }
}

for (let i = 1; i <= 100; i++) {
    (function(n) {
        const img = new Image();
        img.onload = function() {
            const el = document.createElement('img');
            el.src = 'images/gallery-' + n + '.jpg';
            el.alt = 'Gallery image ' + n;
            el.loading = 'lazy';
            container.appendChild(el);
            found++;
            updateOverlay();
        };
        img.onerror = function() {
            if (n === 1 && found === 0 && section) section.style.display = 'none';
        };
        img.src = 'images/gallery-' + n + '.jpg';
    })(i);
}
```

});
