import './Css/Contact.css'

const Contact = () => {
  const handleFormSubmit = (formData) =>{
    console.log(formData.entries())
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData)
  }
  return (
    <div className="container">
      <div className="contact">
        <h1>Contact Us</h1>
        <form action={handleFormSubmit}>
          <input type="text" name='username' autoComplete='false' placeholder="Enter Your Name" required /> <br />
          <input type="text" name='email' autoComplete='false' placeholder="Enter your Email" required /><br />
          <textarea name="message" id="message" placeholder="Enter your massage" autoComplete='false' rows="10" required></textarea>
          <div className="send-btn">
            <button type='submit' value="send">Send</button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Contact