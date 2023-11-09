<?php
// Include database connection setup (modify the details as per your configuration)
require 'config.php';

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

        // Retrieve all users in the same team
        $getUsersInTeam = $pdo->prepare("SELECT username FROM users WHERE team_id = ?");
        $getUsersInTeam->execute([$teamId]);

        $usernamesInTeam = $getUsersInTeam->fetchAll(PDO::FETCH_COLUMN);

        if (!empty($usernamesInTeam)) {
            // Fetch task IDs for all users in the team
            $getTaskIds = $pdo->prepare("SELECT task_id FROM task_assignments WHERE username IN (".implode(',', array_fill(0, count($usernamesInTeam), '?')).")");
            $getTaskIds->execute($usernamesInTeam);

            $taskIds = $getTaskIds->fetchAll(PDO::FETCH_COLUMN);

            if (!empty($taskIds)) {
                // Fetch task details for the retrieved task IDs
                $getTaskDetails = $pdo->prepare("SELECT t.*, GROUP_CONCAT(ta.username) as assigned_users
                    FROM tasks t
                    LEFT JOIN task_assignments ta ON t.task_id = ta.task_id
                    WHERE t.task_id IN (".implode(',', array_fill(0, count($taskIds), '?')).")
                    GROUP BY t.task_id");
                $getTaskDetails->execute($taskIds);

                $tasks = $getTaskDetails->fetchAll(PDO::FETCH_ASSOC);

                $response = [
                    'status' => 'success',
                    'message' => 'Tasks for the team retrieved successfully',
                    'data' => $tasks
                ];
            } else {
                $response = [
                    'status' => 'success',
                    'message' => 'No tasks found for the team',
                    'data' => []
                ];
            }
        } else {
            $response = [
                'status' => 'success',
                'message' => 'No users found in the team',
                'data' => []
            ];
        }
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
 