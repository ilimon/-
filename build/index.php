<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8">
    <title>Marco Fugaro - Web Developer</title>
    <meta name="description" content="Marco Fugaro - Web Designer / Web Developer from Milano, Italy. I have a passion for clean and minimal web design.">
    <meta name="robots" content="NOODP">
    <meta name="keywords" content="marco fugaro web designer design developer front-end frontend front end milano">
    <meta name="author" content="Marco Fugaro">
    <meta name="copyright" content="&copy; Marco Fugaro <?php echo date('Y'); ?>">

    <!-- FAVICONS -->
    <link rel="shortcut icon" href="images/favicon.png" type="image/png">

    <!-- LINKS -->
    <link rel="stylesheet" href="css/style.min.css?v=1.0.2">

    <!-- RESPONSIVENESS -->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1">

    <!-- IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!--[if IE]>
        <style type="text/css">#marcofugaro{height: 356px;}</style>
    <![endif]-->
</head>
<body>
    <div class="nav-toggle">
        <div class="hamburger">
            <span class="hamburger-icon top"></span>
            <span class="hamburger-icon middle"></span>
            <span class="hamburger-icon bottom"></span>
        </div>
    </div>

    <div id="polyNav">
        <canvas id="navBg" width="400" height="800"></canvas>

        <nav class="main-nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>


    <header>
        <div class="parallax">
            <?php include 'images/me.svg'; ?>
            <h1>Web Developer</h1>
        </div>
    </header>

    <div class="wrapper">
        <section id="home"></section>

        <section id="projects">
            <svg version="1.1" id="colorFill"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 50" enable-background="new 0 0 100 50" xml:space="preserve" preserveAspectRatio="none">
                <polygon fill-rule="evenodd" clip-rule="evenodd" points="0,49 100,0 100,50 0,50"/>
            </svg>
            <svg version="1.1" id="colorMask" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 50" enable-background="new 0 0 100 50" xml:space="preserve" preserveAspectRatio="none">
                <polygon fill-rule="evenodd" clip-rule="evenodd" points="0,50 100,0 100,50"/>
            </svg>
            <h2 class="section-title">Projects</h2>
            <p>Work in progress</p>
        </section>


        <section id="about">
            <svg version="1.1" id="aboutTriangle"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 50" enable-background="new 0 0 100 50" xml:space="preserve" preserveAspectRatio="none">
                <polygon fill-rule="evenodd" clip-rule="evenodd" points="0,0 100,0 0,50"/>
            </svg>
            <svg version="1.1" id="lines"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" preserveAspectRatio="none">
                <line x1="40" y1="0" x2="100" y2="30" />
                <line x1="0" y1="40" x2="100" y2="10" />
                <line x1="0" y1="30" x2="100" y2="50" />
                <line x1="0" y1="60" x2="100" y2="45" />
                <line x1="0" y1="57" x2="100" y2="85" />
                <line x1="10" y1="100" x2="100" y2="70" />
            </svg>


            <h2 class="section-title">About Me</h2>

            <div class="row myself">
                    <img src="images/marco_fugaro.png" alt="Marco Fugaro">
                    <p>My name is Marco Fugaro. I am a <strong>Web Developer</strong> from Milano. I really enjoy clean and minimal web design and easy to read code. I love what I do and I’m always up to date with the latest technologies as I’m constantly learning.</p>
                    <p>I live in Milano and you can usually find me riding my bike somewhere.</p>
                    <!-- <p>I am currently up for hire, if you’re interested you can check out my CV <a href="documents/Marco_Fugaro_CV.pdf" target="_blank">here</a>.</p> -->
            </div>
            <div class="row skills">
                <h3 class="subtitle">Skills</h3>
                <ul>
                    <li><h4>Front-end</h4><p>HTML, Advanced CSS, SCSS, Javascript ES6, Bootstrap, jQuery, Lodash</p></li>
                    <li><h4>Back-end</h4><p>PHP/MySQL, Wordpress Theme Development, C, Python (intermediate)</p></li>
                    <li><h4>Frameworks</h4><p>React&Redux, Laravel, Vue.js</p></li>
                    <li><h4>Web Design</h4><p>Graphic Design & Branding, Responsive Web Design, Cross-Browser Testing, SEO</p></li>
                    <li><h4>Software</h4><p>Photoshop, Illustrator, Git</p></li>
                    <li><h4>Favourite Tools</h4><p>Susy, Gulp, NPM, Google!</p></li>
                    <li><h4>Learning</h4><p>AngularJS, Node.js, ClojureScript, Test Driven Development</p></li>
                </ul>
            </div>

            <svg version="1.1" id="contactCTA"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 51" xml:space="preserve" preserveAspectRatio="none">
                <polygon fill-rule="evenodd" clip-rule="evenodd" points="0,50 50,0 100,50 100,51 0,51" data-bottom="@points: 0,50 50,0 100,50 100,51 0,51" data-33p-top="@points: 0,0 50,50 100,0 100,51 0,51" />
            </svg>
        </section>
        <section id="contact">
            <a href="mailto:marco@fugaro.it" class="email" target="_blank">marco@fugaro.it</a>
            <div class="social">
                <a href="https://twitter.com/marco_fugaro" target="_blank">
                    <span class="hoverer">
                    <span class="diam"></span>
                        <?php include 'images/sprites/twitter.svg'; /*include 'images/sprites/diamond.svg';*/ ?>
                    </span>
                </a>
                <a href="https://www.facebook.com/marco.fugaro" target="_blank">
                    <span class="hoverer">
                    <span class="diam"></span>
                    <?php include 'images/sprites/facebook-old.svg'; /*include 'images/sprites/diamond.svg';*/ ?>
                    </span>
                </a>
                <a href="https://github.com/marcofugaro" target="_blank">
                    <span class="hoverer">
                    <span class="diam"></span>
                    <?php include 'images/sprites/github2.svg'; /*include 'images/sprites/diamond.svg';*/ ?>
                    </span>
                </a>
                <a href="http://codepen.io/marco_fugaro" target="_blank">
                    <span class="hoverer">
                    <span class="diam"></span>
                    <?php include 'images/sprites/codepen.svg'; /*include 'images/sprites/diamond.svg';*/ ?>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/marcofugaro" target="_blank">
                    <span class="hoverer">
                    <span class="diam"></span>
                    <?php include 'images/sprites/linkedin.svg'; /*include 'images/sprites/diamond.svg';*/ ?>
                    </span>
                </a>
                <a href="documents/Marco_Fugaro_CV.pdf" target="_blank">
                    <span class="hoverer">
                    <span class="diam"></span>
                    <?php include 'images/sprites/cv.svg'; /*include 'images/sprites/diamond.svg';*/ ?>
                    </span>
                </a>
            </div>

            <?php include "images/ribbon.svg"; ?>

            <footer>&copy; Copyright <?php echo date('Y'); ?>. Handcrafted with <span class="hearth">&hearts;</span> by Marco Fugaro. All rights reserved.</footer>
        </section>

    </div>
<script src="js/vendor.min.js?v=1.0.2"></script>
<script src="js/main.js?v=1.0.2"></script>
</body>
</html>