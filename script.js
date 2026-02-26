function loadShortcuts() {
    const container = document.getElementById('shortcutContainer');
    container.innerHTML = '';
    
    shortcutsData.forEach(shortcut => {
        const card = document.createElement('a');
        card.href = shortcut.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'shortcut-card';
        card.innerHTML = `
            <div style="font-size: 32px;">🔗</div>
            <div class="name">${shortcut.website}</div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadShortcuts);
