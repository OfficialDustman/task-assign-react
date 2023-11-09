<?php
// Include database connection setup (modify the details as per your configuration)
require 'config.php';

// Check if the required POST data is set
if (isset($_POST['project_id'], $_POST['end_date'], $_POST['status'])) {
    $projectId = $_POST['project_id'];
    $endDate = $_POST['end_date'];
    $status = $_POST['status'];

    // Check if the provided project ID exists in the database
    $checkProject = $pdo->prepare("SELECT COUNT(*) as project_count FROM projects WHERE project_id = ?");
    $checkProject->execute([$projectId]);
    $projectCount = $checkProject->fetchColumn();

    if ($projectCount > 0) {
        // Update the end date and/or status of the project
        $updateQuery = "UPDATE projects SET ";
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

        $updateQuery .= " WHERE project_id = ?";

        $updateData[] = $projectId;

        $updateProject = $pdo->prepare($updateQuery);
        $updateProject->execute($updateData);

        $response = [
            'status' => 'success',
            'message' => 'Project updated successfully',
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
