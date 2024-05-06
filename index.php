<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOGGO LOVERS</title>
    <link rel="icon" type="png" href="paws.avif">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    <input type="checkbox" id="menu-toggle">
    <header>
        <div class="logo">
            <h3 class="dog"><span>Dog</span>go</h3>
        </div>
        <nav class="navbar">
            <ul class="nav-list">
                <li><a href="index.php">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#review">Reviews</a></li>
                <li><a href="#favorite">Favorite</a></li>
            </ul>
            <label for="menu-toggle" class="hamburger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </label>
        </nav>
        
    </header>
    <section class="home" id="home"> 
        <div class="home-intro">
            <div class="paw-content">
                <p>Welcome to Doggo Lovers, where wagging tails and wet noses reign supreme! We're a community of passionate dog enthusiasts dedicated to celebrating the love, joy, and companionship that dogs bring into our lives. Whether you're seeking tips on training your furry friend, heartwarming stories of canine heroism, or simply a place to connect with fellow dog lovers, you've found your digital home. Join us as we embark on a tail-wagging adventure together, because here, every day is a celebration of our beloved canine companions. Woof woof! 🐾</p>
            </div>
        </div>
    
    </section>

    <section class="shop" id="shop">
        
        <div class="container">
            <div class="searchbar-container">
                <input type="text" placeholder="Search Dogs" class="searchbar" id="searchInput">
                <button class="search_button" onclick="searchDogs()"><i class="fa-solid fa-magnifying-glass fa-2x"></i></button>
            </div>
            <div class="shop_header">
                <h1>DOG SHOP</h1>
                <div class="shopping">
                    <i class="fa fa-shopping-bag fa-3x" aria-hidden="true"></i>
                    <span class="quantity">0</span>
                </div>
            </div>
    
            <div class="list">
              
            </div>
        </div>
        <div class="card">
            <h1>Cart</h1>
            <ul class="listCard">
            </ul>
            <div class="checkOut">
                <div class="total">0</div>
                <div class="closeShopping">Close</div>
            </div>
        </div>
    
        <script src="app.js"></script>

    </section>
    
    <section class="about" id="about">
        <div class="about-content"> 
        <h3>Welcome to Doggo Lovers!</h3>
        <p>At Doggo Lovers, we're passionate about all things dogs. Whether you're a seasoned dog owner, a prospective pet parent, or just a dog enthusiast, you've come to the right place. Our website is dedicated to celebrating the wonderful world of dogs and providing valuable resources to help you care for your furry friends.</p><br>
        <h3>Our Story</h3>
        <p>Our journey began with a wagging tail and a slobbery kiss. I, Jerwin, stumbled upon Buddy, a scrappy mutt at a local shelter, and knew he was meant to be mine. Bringing Buddy home marked the start of a beautiful bond filled with laughter, love, and countless adventures.

        <br><br>Inspired by our connection, I launched Doggo Lovers website, a digital haven celebrating the remarkable relationship between humans and dogs. Through articles and photos we aim to honor the unconditional love and companionship that dogs offer.
            
        <br><br>Join us as we share heartwarming stories, helpful tips, and the joy that comes with having a furry friend by your side. Life is simply better with a dog in it.</p><br>
        <h3>Our Story</h3>
        <p>Our mission at Doggo lovers is simple: to be a trusted source of information, guidance, and inspiration for dog lovers everywhere. We strive to educate, entertain, and empower dog owners with the knowledge and resources they need to provide the best possible care for their canine companions.</p><br>
        <h3>What We Offer</h3>
        <p>Informative Articles: From dog care tips and training advice to breed profiles and health information, we cover a wide range of topics to help you better understand and care for your dog.

            <br><br>Heartwarming Stories: Get ready to be inspired by heartwarming tales of rescue dogs finding their forever homes, courageous canines saving lives, and the incredible bond between humans and dogs.
            
            <br><br>Community Engagement: Join our growing community of dog lovers on social media and share your own stories, photos, and tips with us. We love hearing from our readers and connecting with fellow dog enthusiasts!</p>
    </div>
    </section>

    <section class="contact" id="contact">
        <div class="contact-page">
            <div class="left-contact">
                <div class="contact-content">
                    <h1>CONTACT FORM</h1>
                    <form action="formhandler.php" method="POST">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
        
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
        
                        
                        <div class="contact-button">
                            <button type="Submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="right-contact">
                <div class="contact-content">
                    <h1>CONTACT US</h1>
                    <p>Get in touch with us! Whether you have questions, feedback, or business inquiries, I am here to help. Simply fill out the contact form, drop us an email, or give us a call. We look forward to hearing from you!</p>
                </div>
            </div>
        </div>
    </section>

    <section id="review">

        <div class="main-container">
            <!-- Rating state start -->
            <div class="sub-container" id="rating-container">
              <img class="icon-star" src="image/icon-star.svg" alt="icon star">
              <h1>Rate our service?</h1>
              <p class="rating-text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
              </p>
              <button class="num-btn" id="first-btn">1</button>
              <button class="num-btn" id="sec-btn">2</button>
              <button class="num-btn" id="third-btn">3</button>
              <button class="num-btn" id="fourth-btn">4</button>
              <button class="num-btn" id="fifth-btn">5</button><br>
              <button id="submit-btn">Submit</button>
            </div>
           <!-- Rating state end -->

           <!-- Thank you state start -->
              <div class="sub-container" id="abt-appreciate">
                <img src="image/illustration-thank-you.svg" alt="">
                <p id="thank-el"></p>
                <h2>Thank you!</h2>
                <p class="review_p">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                </p>  
              </div>
            <!-- Thank you state end -->
        
          </div>
          <script src="index.js"></script>
    </section>

    <section class="favorite" id="favorite"> 
        <div class="container">
        <h1 class="heading">FAVORITE DOGS</h1>
        <div class="favorite-dogs">
        <!-- This section will be populated dynamically when a dog card is added to favorites -->
        </div>
        </div>
        <script src="app.js"> </script>
            
    </section>
    <footer>
       &copy All Rights Reserved
    </footer>
</body>
</html>