<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['username']) && isset($_POST['team'])) {
    $email = $_POST['email'];
    $password = md5($_POST['password']); // Hash the password using MD5
    $username = $_POST['username'];
    $teamName = $_POST['team'];

    // Check if the selected team name exists in the database
    $teamCheck = $pdo->prepare("SELECT team_id FROM teams WHERE team_name = ?");
    $teamCheck->execute([$teamName]);
    $teamId = $teamCheck->fetchColumn();

    if ($teamId !== false) {
        // Team exists, check if the username already exists
        $checkUsername = $pdo->prepare("SELECT COUNT(*) as username_count FROM users WHERE username = ?");
        $checkUsername->execute([$username]);
        $usernameCount = $checkUsername->fetchColumn();

        if ($usernameCount === 0) {
            // Username is unique, proceed to create the user
            $insertUser = $pdo->prepare("INSERT INTO users (email, password, username, team_id) VALUES (?, ?, ?, ?)");

            if ($insertUser->execute([$email, $password, $username, $teamId])) {
                $response = [
                    'status' => 'success',
                    'message' => 'User created successfully'
                ];
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'Failed to create user'
                ];
            }
        } else {
            // Username already exists, provide feedback to choose a different username
            $response = [
                'status' => 'error',
                'message' => 'Username is already taken, please choose a different username'
            ];
        }
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Selected team does not exist'
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
