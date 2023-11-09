<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['username'])) {
    $username = $_POST['username'];

    // Check if the username exists in the database
    $checkUser = $pdo->prepare("SELECT COUNT(*) as user_count FROM users WHERE username = ?");
    $checkUser->execute([$username]);
    $userCount = $checkUser->fetchColumn();

    if ($userCount > 0) {
        // Username exists, retrieve the team ID of the user
        $getTeamId = $pdo->prepare("SELECT team_id FROM users WHERE username = ?");
        $getTeamId->execute([$username]);
        $teamId = $getTeamId->fetchColumn();

        // Fetch projects associated with the team
        $getProjects = $pdo->prepare("SELECT * FROM projects WHERE team_id = ?");
        $getProjects->execute([$teamId]);

        $projects = $getProjects->fetchAll(PDO::FETCH_ASSOC);

        $response = [
            'status' => 'success',
            'message' => 'Projects for the team retrieved successfully',
            'data' => $projects
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Username does not exist'
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
