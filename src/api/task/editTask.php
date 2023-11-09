<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['task_id'], $_POST['end_date'], $_POST['status'])) {
    $taskId = $_POST['task_id'];
    $endDate = $_POST['end_date'];
    $status = $_POST['status'];

    // Check if the provided task ID exists in the database
    $checkTask = $pdo->prepare("SELECT COUNT(*) as task_count FROM tasks WHERE task_id = ?");
    $checkTask->execute([$taskId]);
    $taskCount = $checkTask->fetchColumn();

    if ($taskCount > 0) {
        // Update the end date and/or status of the task
        $updateQuery = "UPDATE tasks SET ";
        $updateData = [];

        if (!empty($endDate)) {
            $updateQuery .= "end_date = ?";
            $updateData[] = $endDate;
        }

        if (!empty($status)) {
            if (!empty($updateData)) {
                $updateQuery .= ", ";
            }
            $updateQuery .= "status = ?";
            $updateData[] = $status;
        }

        $updateQuery .= " WHERE task_id = ?";

        $updateData[] = $taskId;

        $updateTask = $pdo->prepare($updateQuery);
        $updateTask->execute($updateData);

        $response = [
            'status' => 'success',
            'message' => 'Task updated successfully',
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
