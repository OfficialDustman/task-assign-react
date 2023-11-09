<?php
// Include database connection setup (modify the details as per your configuration)
require 'config.php';

// Check if the database connection is established
if ($pdo) {
    // Database connection is successful
    $response = [
        'status' => 'success',
        'message' => 'Database connection is established.'
    ];
} else {
    // Database connection failed
    $response = [
        'status' => 'error',
        'message' => 'Database connection failed.'
    ];
}


// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>