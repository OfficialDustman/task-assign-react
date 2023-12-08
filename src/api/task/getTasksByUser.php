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
        // Username exists, retrieve task IDs and project names assigned to the user
        $getTaskDetails = $pdo->prepare("
            SELECT t.*, p.project_name, ta.username as assigned_users
            FROM tasks t
            JOIN task_assignments ta ON t.task_id = ta.task_id
            JOIN projects p ON t.project_id = p.project_id
            WHERE ta.username = ?
        ");
        $getTaskDetails->execute([$username]);

        $tasks = $getTaskDetails->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($tasks)) {
            $response = [
                'status' => 'success',
                'message' => 'Tasks retrieved successfully',
                'data' => $tasks
            ];
        } else {
            $response = [
                'status' => 'success',
                'message' => 'No tasks found for the user',
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
