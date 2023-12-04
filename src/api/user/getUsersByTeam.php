<?php
// Include database connection setup (modify the details as per your configuration)
require '../config.php';

// Check if the required POST data is set
if (isset($_POST['team_id'])){
    $teamId = $_POST['team_id'];

    // Check if the email exists in the database
    $getUsers = $pdo->prepare("SELECT username FROM users WHERE team_id = ?");
    $getUsers->execute([$teamId]);
    $userDetails = $getUsers->fetchAll(PDO::FETCH_ASSOC);
    if ($userDetails) { 
        $response = [
            'status' => 'success',
            'message' => 'All Users in the Team',
            'data' => $userDetails
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'There is no User in the Team'
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
