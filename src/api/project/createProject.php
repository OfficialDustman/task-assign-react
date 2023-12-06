<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['project_name'], $_POST['project_description'], $_POST['team_id'], $_POST['start_date'], $_POST['end_date'], $_POST['status'])) {
    $projectName = $_POST['project_name'];
    $projectDescription = $_POST['project_description'];
    $teamId = $_POST['team_id'];
    $startDate = $_POST['start_date'];
    $endDate = $_POST['end_date'];
    $status = $_POST['status'];

    // Insert the project into the projects table
    $insertProject = $pdo->prepare("INSERT INTO projects (project_name, project_description, team_id, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?)");
    $insertProject->execute([$projectName, $projectDescription, $teamId, $startDate, $endDate, $status]);

    // Get the project ID of the newly created project
    $projectId = $pdo->lastInsertId();

    $response = [
        'status' => 'success',
        'message' => 'Project created successfully',
        'project_id' => $projectId
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
