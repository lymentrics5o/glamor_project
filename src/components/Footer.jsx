const Footer = () => {
    return ( 
        <div>
             <section class="row bg-dark">
                
                 <div class="col-md-4 text-left text-warning">
                  <h5 class="p-2 text-center">About Us</h5>
                  <p>we are a prestigious jewellery company located at the core of Nairobi. we aim to give our esstemed customers the best service and quality products</p>
                  <p>we ore located along express way road ,hamilton building</p>
                  <p>our contact numbers are;
                    +254756342537
                    
                    +254768904536
                  </p>
                  <br/>
                 </div>

               

                 <div class="col-md-4  text-light">
                  <h5 class="p-2 text-center text-warning">Contact Us</h5>
                  <input class="form-control" type="email" placeholder="Enter your email"/>
                  <br/>
                  <textarea class="form-control" rows="7" placeholder="Leave a comment"></textarea>
<br/>
                  <input type="submit" value="Send Message" class="btn btn-outline-danger"/>
                 </div>

                 <div class="col-md-4 ">
                  <h4 class="text-center text-warning">Stay Connected</h4>
                  <br/>
                  <a href="https://public">
                    <img src="images/social-media-icon-set-6994936_640.webp" alt=""/>
                  </a>
                  <a href="https://instagram.com">
                    <img src="images/in.png" alt=""/>
                  </a>
                  
                  <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dolorum voluptates qui eos, vel sint, error quasi a quos officiis repellendus rerum nobis animi. Eum sapiente ullam in dolorem velit.</p>
                </div>
                  

               </section>
               <footer class="bg-dark text-warning text-center p-2">
                <h5>Developed by PHOENIX 5O &copy; 2025.All rights reserved</h5>
               </footer>
        </div>
     );
}
 
export default Footer;