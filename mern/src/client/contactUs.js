import "./contactUs.css";
function ContactUs()
{
    return <div className="container">
      <div>
        <h1>Contact us!</h1>
        <form target="_blank" action="https://formsubmit.co/batyarivka@gmail.com" method="POST">
          <div className="form-group">
              <div className="col">
                <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
              </div>
              <div className="col">
                <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
              </div>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-control" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">Submit Form</button>
        </form>
      </div>
  </div>
}
export default ContactUs;
