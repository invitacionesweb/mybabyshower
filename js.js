document.getElementById("btn-confirmar").href = 
    "https://wa.me/" + CONFIG.whatsappNumero + 
    "?text=" + encodeURIComponent(CONFIG.whatsappMensaje);