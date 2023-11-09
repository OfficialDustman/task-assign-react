<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['username'])) {
    $username = $_POST['username'];

    if (isset($_POST['password'])) {
        $password = md5($_POST['password']); // Hash the provided password using MD5

        // Check if the username and password match in the database
        $checkUser = $pdo->prepare("SELECT username FROM users WHERE username = ? AND password = ?");
        $checkUser->execute([$username, $password]);

        if ($checkUser->fetchColumn()) {
            // Username and password match, proceed to change the user's password
            if (isset($_POST['new_password'])) {
                $newPassword = md5($_POST['new_password']); // Hash the new password using MD5

                // Update the user's password
                $updatePassword = $pdo->prepare("UPDATE users SET password = ? WHERE username = ?");
                if ($updatePassword->execute([$newPassword, $username])) {
                    $response = [
                        'status' => 'success',
                        'message' => 'Password updated successfully'
                    ];
                } else {
                    $response = [
                        'status' => 'error',
                        'message' => 'Failed to update password'
                    ];
                }
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'Missing new password'
                ];
            }
        } else {
            $response = [
                'status' => 'error',
                'message' => 'Username and password do not match'
            ];
        }
    } elseif (isset($_POST['team'])) {
        $teamName = $_POST['team'];

        // Check if the team name exists in the database
        $checkTeam = $pdo->prepare("SELECT team_id FROM teams WHERE team_name = ?");
        $checkTeam->execute([$teamName]);

        $teamId = $checkTeam->fetchColumn();

        if ($teamId !== false) {
            // Team name exists, proceed to change the user's team
            $updateTeam = $pdo->prepare("UPDATE users SET team_id = ? WHERE username = ?");
            if ($updateTeam->execute([$teamId, $username])) {
                $response = [
                    'status' => 'success',
                    'message' => 'Team updated successfully'
                ];
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'Failed to update team'
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
} else {
    $response = [
        'status' => 'error',
        'message' => 'Missing username'
    ];
}

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
