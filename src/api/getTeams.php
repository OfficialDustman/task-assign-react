<?php
// Include database connection setup (modify the details as per your configuration)
require 'config.php';

// Prepare the SQL query to retrieve all teams
$sql = "SELECT team_id, team_name, team_description FROM teams";

try {
    // Execute the query
    $stmt = $pdo->query($sql);

    // Fetch all teams as an associative array
    $teams = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Check if any teams were found
    if (count($teams) > 0) {
        $response = [
            'status' => 'success',
            'message' => 'Teams retrieved successfully',
            'data' => $teams
        ];
    } else {
        $response = [
            'status' => 'success',
            'message' => 'No teams found',
            'data' => []
        ];
    }
} catch (PDOException $e) {
    $response = [
        'status' => 'error',
        'message' => 'Failed to retrieve teams: ' . $e->getMessage()
    ];
}

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
