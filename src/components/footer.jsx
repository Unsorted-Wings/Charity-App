export default function Footer() {
  return (
    <footer className="bg-white">
      <br />

      <hr />
      <br />
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col sm:justify-start lg:justify-center items-center">
          <div className="flex items-center flex-col justify-center">
            <br />
            <h3 className="text-2xl font-bold text-slate-700">Our Location</h3>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.480599097289!2d72.5659996!3d23.0428356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848e92ab1a31%3A0xaa58049a1d90aecf!2sSachin%20Gandhi%20%26%20Associates!5e0!3m2!1sen!2sin!4v1700952466574!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-700 font-bold ">
              © 2023 Love The World. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
