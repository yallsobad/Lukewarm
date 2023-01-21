import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

function Listings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let listings = [];

    const fetchListings = async () => {
      try {
        const listingsSnapshot = await getDocs(collection(db, "listings"));

        listingsSnapshot.forEach((listing) => {
          return listings.push({
            id: listing.id,
            data: listing.data(),
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <header className="page-header-container">
        <h1 className="page-title">Listings</h1>
        <p className="page-description">
          All items here are currently for sale. Contact us for more details.
        </p>
      </header>
      <div className="listings-container">
        {listings.map((listing) => (
          <Card
            title={listing.data.title}
            subtitle={listing.data.subtitle}
            imgUrl={listing.data.imgUrl}
            price={listing.data.price}
            category={listing.data.category}
            description={listing.data.description}
            key={listing.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Listings;
