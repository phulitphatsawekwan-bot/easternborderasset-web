const MyMap = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        className="rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.237019919524!2d100.87954300319683!3d12.91105860250271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102967aa0895db5%3A0x8afae2dff18dd112!2sSupalai%20Ville%20Pattaya%20-%20Thepprasit%208!5e0!3m2!1sen!2sth!4v1755095992982!5m2!1sen!2sth"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MyMap;