<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = md5($_POST['password']); // Hash the provided password using MD5

    // Check if the email exists in the database
    $checkEmail = $pdo->prepare("SELECT username FROM users WHERE email = ?");
    $checkEmail->execute([$email]);

    if ($checkEmail->fetchColumn()) {
        // Email exists, check if the hashed password matches
        $checkUser = $pdo->prepare("SELECT username, email, team_id FROM users WHERE email = ? AND password = ?");
        $checkUser->execute([$email, $password]);
        $userDetails = $checkUser->fetchColumn();

        if ($userDetails) {
            // Username and password match, sign-in successful
            $response = [
                'status' => 'success',
                'message' => 'Sign-in successful',
                'data' => $userDetails
            ];
        } else {
            $response = [
                'status' => 'error',
                'message' => 'Password does not match the email'
            ];
        }
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Email not found in the database'
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
