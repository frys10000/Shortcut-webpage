function loadShortcuts() {
    const container = document.getElementById('shortcutContainer');
    container.innerHTML = '';
    
    // data URI containing a simple SVG fallback with a link emoji
    const defaultFavicon = 'data:image/svg+xml;charset=UTF-8,' +
        encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">' +
            '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48">🔗</text>' +
        '</svg>');

    shortcutsData.forEach(shortcut => {
        const card = document.createElement('a');
        card.href = shortcut.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'shortcut-card';
        
        // use Google's favicon service to obtain the icon from the domain
        let faviconUrl;
        try {
            const hostname = new URL(shortcut.url).hostname;
            faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;
        } catch (e) {
            faviconUrl = defaultFavicon;
        }

        card.innerHTML = `
            <img src="${faviconUrl}" class="favicon" onerror="this.onerror=null;this.src='${defaultFavicon}'" alt="icon">
            <div class="name">${shortcut.website}</div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadShortcuts);
