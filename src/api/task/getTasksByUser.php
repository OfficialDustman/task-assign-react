<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['username'])) {
    $username = $_POST[''];

    // Check if the username exists in the database
    $checkUser = $pdo->prepare("SELECT COUNT(*) as user_count FROM users WHERE username = ?");
    $checkUser->execute([$username]);
    $userCount = $checkUser->fetchColumn();

    if ($userCount > 0) {
        // Username exists, retrieve task IDs assigned to the user
        $getTaskIds = $pdo->prepare("SELECT task_id FROM task_assignments WHERE username = ?");
        $getTaskIds->execute([$username]);

        $taskIds = $getTaskIds->fetchAll(PDO::FETCH_COLUMN);

        if (!empty($taskIds)) {
            
            // Fetch task details for the retrieved task IDs
            $getTaskDetails = $pdo->prepare("SELECT * FROM tasks WHERE task_id IN (".implode(',', array_fill(0, count($taskIds), '?')).")");
            $getTaskDetails->execute($taskIds);

            $tasks = $getTaskDetails->fetchAll(PDO::FETCH_ASSOC);

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
