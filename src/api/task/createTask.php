<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['task_name'], $_POST['task_description'], $_POST['project_id'], $_POST['start_date'], $_POST['end_date'], $_POST['status'], $_POST['assigned_users'])) {
    $taskName = $_POST['task_name'];
    $taskDescription = $_POST['task_description'];
    $projectId = $_POST['project_id'];
    $startDate = $_POST['start_date'];
    $endDate = $_POST['end_date'];
    $status = $_POST['status'];
    $assignedUsers = $_POST['assigned_users'];

    // Insert the task into the tasks table
    $insertTask = $pdo->prepare("INSERT INTO tasks (task_name, task_description, project_id, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?)");
    $insertTask->execute([$taskName, $taskDescription, $projectId, $startDate, $endDate, $status]);

    // Get the task ID of the newly created task
    $taskId = $pdo->lastInsertId();

    if (!empty($assignedUsers)) {
        // Prepare the data for inserting into the task_assignments table
        $assignmentData = [];
        foreach ($assignedUsers as $username) {
            $assignmentData[] = "($taskId, '$username')";
        }

        // Insert the assignment data into the task_assignments table
        $insertAssignments = $pdo->prepare("INSERT INTO task_assignments (task_id, username) VALUES " . implode(', ', $assignmentData));
        $insertAssignments->execute();
    }

    $response = [
        'status' => 'success',
        'message' => 'Task created and assigned to users successfully',
        'task_id' => $taskId
    ];
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
