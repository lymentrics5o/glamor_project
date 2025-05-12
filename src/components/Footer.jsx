const Footer = () => {
  return ( 
      <div>
           <section class="row bg-primary">
              
               <div class="col-md-4 text-left text-dark">
                <h5 class="p-2 text-center">About Us</h5>
                <p>Nova Pharmaceuticals is a pharmacy that delivers all time services.</p>
                <p>we are opened 24-7 hrs and do free deliveries</p>
                <p>we are located in Westlands,Nairobi-kenya</p>
                <br/>
               </div>

             

               <div class="col-md-4  text-dark">
                <h5 class="p-2 text-center">Contact Us</h5>
                <p></p>
                <input class="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea class="form-control" rows="7" placeholder="Leave a comment"></textarea>
<br/>
                <input type="submit" value="Send Message" class="btn btn-outline-info"/>
               </div>

               <div class="col-md-4 ">
                <h4 class="text-center text-dark">Stay Connected</h4>
                <br/>
                <p>on Facebook</p>
                <p>twitter</p>
                <p>and instagram</p>
                <h4>our contact numbers are ;</h4>
                <p>0789032415</p>
                <p>or</p>
                <p>0792613614</p>
            
              </div>
                

             </section>
             <footer class="bg-dark text-white text-center p-2">
              <h5>Developed by Nancy Warui &copy; 2025.All rights reserved</h5>
             </footer>
      </div>
   );
}

export default Footer;