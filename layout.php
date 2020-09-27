<?php
global $CFG;
?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <title>SenseHat</title>

    <meta name="description" content="SenseHat companion" />
    <meta name="keywords" content="" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet" type="text/css" />
    <link href='http://fonts.googleapis.com/css?family=Lato:400,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

    <script src="https://kit.fontawesome.com/fa80a6febd.js" crossorigin="anonymous"></script>

</head>

<body>
<a href="<?php echo $CFG->wwwroot?>" class ="logolink">
    <div class="header">
        <div class=test>

        </div>
        <div class="logo">
            <div style="display:inline-block">
                <i class="fab fa-raspberry-pi"></i>
            </div>

            <div style="display:inline-block" class= "title">
                <span class="region_span">Sense</span><span style="letter-spacing: 5px;">Hat</span><br/>
                <span class ="undertitle">companion</span>
            </div>
        </div>
    </div>
    </a>
    <?php
    echo $nav;
    ?>
<div class="wrapper">
    <div class="main">
        <div style="display:inline-block;text-align:center;">
            <div class="content">
                <?php
                    echo $content;
                ?>
            </div>
        </div>
    </div>
    <footer>
    <div class="socials">
        <div class="socialdivs">
            <a href="https://github.com/Ravensbow/"  target="_blank">
                <div class="fb">
                    <i class="fab fa-github"></i>
                </div>
            </a>
            
            </div>
    </div>


<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="scripts/sticky.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<?php echo $scripts;?>
</body>
</html>