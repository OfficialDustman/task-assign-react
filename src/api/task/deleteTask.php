<?php
// Include database connection setup (modify the details as per your configuration)
require 'config.php';

// Check if the required POST data is set
if (isset($_POST['task_id'])) {
    $taskId = $_POST['task_id'];

    // Check if the provided task ID exists in the database
    $checkTask = $pdo->prepare("SELECT COUNT(*) as task_count FROM tasks WHERE task_id = ?");
    $checkTask->execute([$taskId]);
    $taskCount = $checkTask->fetchColumn();

    if ($taskCount > 0) {
        // Delete the task based on the provided task ID
        $deleteTask = $pdo->prepare("DELETE FROM tasks WHERE task_id = ?");
        $deleteTask->execute([$taskId]);

        $response = [
            'status' => 'success',
            'message' => 'Task deleted successfully',
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Task does not exist'
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
