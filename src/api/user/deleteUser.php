<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = md5($_POST['password']); // Hash the provided password using MD5

    // Check if the username and password match in the database
    $checkUser = $pdo->prepare("SELECT username FROM users WHERE username = ? AND password = ?");
    $checkUser->execute([$username, $password]);

    if ($checkUser->fetchColumn()) {
        // Username and password match, proceed to delete the user
        $deleteUser = $pdo->prepare("DELETE FROM users WHERE username = ?");

        if ($deleteUser->execute([$username])) {
            $response = [
                'status' => 'success',
                'message' => 'User deleted successfully'
            ];
        } else {
            $response = [
                'status' => 'error',
                'message' => 'Failed to delete user'
            ];
        }
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Username and password do not match'
        ];
    }
} else {
    $response = [
        'status' => 'error',
        'message' => 'Missing required data'
    ];
}

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
