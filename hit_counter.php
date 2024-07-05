<?php
$counterFile = '../data/hit_counter.txt';

// Check if the counter file exists
if (!file_exists($counterFile)) {
    // Create the file and initialize the counter to 0
    file_put_contents($counterFile, '0');
}

// Read the current count
$count = (int)file_get_contents($counterFile);

// Increment the counter
$count++;

// Save the new count
file_put_contents($counterFile, (string)$count);

// Output the count
echo $count;
?>
