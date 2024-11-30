import "./banner.css";

const banner = () => {
  return (
    <section className="banner-section d-flex justify-content-center">
      <div className="banner-wrapper d-flex flex-column text-center ">
        <div className="inner-banner text-white ">
          <h1 className="title">Make Every Moment Picture-Perfect!</h1>
          <p className="text-content pt-4">
            Turn every occasion into a memorable celebration with our premium
            photo booth experiences! 
            Whether it’s a wedding, corporate event, birthday party, or any
            special gathering, our photo 
            booths bring fun, creativity, and energy to every event. Capture the
            joy of your guests 
            and create keepsakes they’ll cherish forever.
          </p>
        </div>

        <div className="quote mt-3 w-100 d-flex justify-content-center">
          <button className="btn btn-danger btn-lg px-5 py-3" type="submit">
            Instant Quotes
          </button>
        </div>
      </div>
    </section>
  );
};

export default banner;
