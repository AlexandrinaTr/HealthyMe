function Contact() {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-accent-pink-light via-card-bg to-primary-green-light mt-10 py-3"
    >
      <div className="mx-3 my-10 bg-card-bg shadow rounded">
        <form action="#">
          <div>
            <label htmlFor="name" className="block text-sm px-5 pt-2">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-4/5 bg-card-bg border-b border-primary-green mx-5"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm px-5 pt-2">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-4/5 bg-card-bg border-b border-b-primary-green mx-5"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm px-5 pt-2">
              Your weight
            </label>
            <input
              type="email"
              id="weight"
              name="weight"
              required
              className="w-4/5 bg-card-bg border-b border-b-primary-green mx-5"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm px-5 pt-2">
              Your height
            </label>
            <input
              type="email"
              id="weight"
              name="weight"
              required
              className="w-4/5 bg-card-bg border-b border-b-primary-green mx-5"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block text-sm px-5 pt-2">
              Your age
            </label>
            <input
              type="email"
              id="weight"
              name="weight"
              required
              className="w-4/5 bg-card-bg border-b border-b-primary-green mx-5 mb-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
