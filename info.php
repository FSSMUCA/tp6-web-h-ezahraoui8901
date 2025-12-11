 <?php
$etablissement = "FSSM";
$module = "Programmation Web";
$annee = 2025;
$a = 7;
$b = 3;
$addition = $a + $b;
$multiplication = $a * $b;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Informations PHP</title>
</head>
<body>
  <div class="container">
    <h1> Informations PHP</h1>
    <div class="card">
      <p><strong>Établissement :</strong> <?php echo $etablissement; ?></p>
      <p><strong>Module :</strong> <?php echo $module; ?></p>
      <p><strong>Année :</strong> <?php echo $annee; ?></p>
      <hr>
      <p><strong>Résultat addition :</strong> <?php echo "$a + $b = $addition"; ?></p>
      <p><strong>Résultat multiplication :</strong> <?php echo "$a * $b = $multiplication"; ?></p>
    </div>
    <div class="back-link">
      <a href="index.html"> Retour à la calculatrice</a>
    </div>
  </div>
</body>
</html>