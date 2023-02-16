document.addEventListener('DOMContentLoaded', () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <div>
        <div class="load-time-footer" id="load-time" style="color: red; width: 100px">  
        </div>
    </div>
    `;

    document.head.appendChild(footer);
});