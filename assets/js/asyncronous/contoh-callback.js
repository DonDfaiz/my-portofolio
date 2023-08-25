// Fungsi ini adalah contoh fungsi yang menerima callback dengan parameter
function processUserData(id, callback) {
    // Simulasi pengambilan data pengguna dari server
    setTimeout(function() {
      const userData = {
        id: id,
        username: "john_doe",
        email: "john@example.com"
      };
      callback(userData); // Memanggil callback dengan parameter userData
    }, 1000); // Penundaan selama 1 detik
  }
  
  // Fungsi callback yang akan dipanggil dengan parameter
  function displayUserDetails(user) {
    console.log("User ID:", user.id);
    console.log("Username:", user.username);
    console.log("Email:", user.email);
  }
  
  // Memanggil fungsi processUserData dengan displayUserDetails sebagai callback
  processUserData(123, displayUserDetails);

  
  
  
  
  