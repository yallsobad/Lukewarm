import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Spinner from "../components/Spinner";

function Events() {
  return (
    <div>
      <header className="page-header-container">
        <h1 className="page-title">Events</h1>
        <p className="event-page-description">
          Below are the upcoming events where you can find the Lukewarm booth!
        </p>
      </header>

      <div className="event-container">
        <div className="event-image-container">
          <img
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
        <div className="event-info-container">
          <div className="event-info">
            <h1>Event Header</h1>
            <h2 className="event-date">February 24th, 2023</h2>
            <p className="event-address">
              2813 Hampshire Ave S, Saint Louis Park, MN, 55426
            </p>
            <p className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              quisquam, commodi voluptate blanditiis aliquid omnis molestiae
              perferendis labore cumque nobis harum molestias adipisci sint,
              delectus assumenda culpa illo, ea modi possimus sequi inventore
              aut hic! Molestias recusandae dolores a voluptatum.
            </p>
            <div className="leaflet-container">
              <MapContainer
                style={{ height: "100%", width: "100%" }}
                center={[44.952, -93.365]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[44.952, -93.365]}>
                  <Popup>
                    2813 Hampshire Ave S, Saint Louis Park, MN, 55426
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="event-container">
        <div className="event-image-container">
          <img
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
        <div className="event-info-container">
          <div className="event-info">
            <h1>Event Header</h1>
            <h2 className="event-date">February 24th, 2023</h2>
            <p className="event-address">
              2813 Hampshire Ave S, Saint Louis Park, MN, 55426
            </p>
            <p className="event-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              quisquam, commodi voluptate blanditiis aliquid omnis molestiae
              perferendis labore cumque nobis harum molestias adipisci sint,
              delectus assumenda culpa illo, ea modi possimus sequi inventore
              aut hic! Molestias recusandae dolores a voluptatum.
            </p>
          </div>
          <div className="leaflet-container">
            <MapContainer
              style={{ height: "100%", width: "100%" }}
              center={[44.952, -93.365]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[44.952, -93.365]}>
                <Popup>2813 Hampshire Ave S, Saint Louis Park, MN, 55426</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;
