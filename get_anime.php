<?php
// Simulate fetching anime data from a database or API
$animeList = [
    [
        'title' => 'My Hero Academia',
        'genre' => 'Action, Superhero',
        'studio' => 'Bones',
        'image' => 'mhc.jpeg'
    ],
    [
        'title' => 'Attack on Titan',
        'genre' => 'Action, Dark Fantasy',
        'studio' => 'MAPPA',
        'image' => '../images/aot.jpeg'
    ],
    [
        'title' => 'Jujutsu Kaisen',
        'genre' => 'Action, Supernatural',
        'studio' => 'MAPPA',
        'image' => '../images/jujutsu.jpeg'
    ]
];

echo json_encode($animeList);
?>
