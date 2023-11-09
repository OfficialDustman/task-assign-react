<?php
// Include database connection setup (modify the details as per your configuration)
require 'config.php';

// Check if the required POST data is set
if (isset($_POST['project_id'])) {
    $projectId = $_POST['project_id'];

    // Check if the provided project ID exists in the database
    $checkProject = $pdo->prepare("SELECT COUNT(*) as project_count FROM projects WHERE project_id = ?");
    $checkProject->execute([$projectId]);
    $projectCount = $checkProject->fetchColumn();

    if ($projectCount > 0) {
        // Delete the project based on the provided project ID
        $deleteProject = $pdo->prepare("DELETE FROM projects WHERE project_id = ?");
        $deleteProject->execute([$projectId]);

        $response = [
            'status' => 'success',
            'message' => 'Project deleted successfully',
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Project does not exist'
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
