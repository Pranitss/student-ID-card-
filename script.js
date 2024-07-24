window.onload = function() {
    var qr = new QRious({
      element: document.getElementById('qr-code'),
      value: 'https://www.student-portal.com/student/123456789', // URL or any other information
      size: 200,
    });
  };
  