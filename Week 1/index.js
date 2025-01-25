
function startCamera() {
    // ตรวจสอบว่าเบราว์เซอร์รองรับ getUserMedia หรือไม่
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                
                var video = document.getElementById('videoElement');
                video.srcObject = stream;
            })
            .catch(function(error) {
                console.log("เกิดข้อผิดพลาดในการเข้าถึงกล้อง: " + error);
            });
    } else {
        alert("เบราว์เซอร์ของคุณไม่รองรับการเข้าถึงกล้อง");
    }
}

// เริ่มเปิดกล้องเมื่อโหลดหน้าเว็บ
window.onload = startCamera;
