<?php 

// Gestion dynamique du contenu grâce au back-end (PHP ici)
$feelsGreat = 1;
$moreText = 'Comment allez-vous?';

?>

<!DOCTYPE html>
<html>
<head>
	<title>Bonsoir, 1er cours</title>
    <style type="text/css">
        p {
            color: blue;
        }
    </style>
</head>
<body>
	<p id="test">Bonjour</p>
    <br>

    <?php if($feelsGreat) : ?>
        <?php echo $moreText; ?>
    <?php endif; ?>

    <script type="text/javascript">
        setTimeout(function() {
            document.getElementById('test').innerHTML = 'Salutations!';
            document.getElementById('test').style = 'color: red;';
        }, 3000);
    </script>
</body>
</html>