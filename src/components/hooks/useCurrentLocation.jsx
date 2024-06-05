import { useCallback, useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = useCallback(() => {
    setLoading(true);
    if (!navigator.geolocation) {
      setError(
        "Purtroppo la geolocalizzazione non è supportata da browser. Riprovare"
      );
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setError(null);
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLocation(null);
        setLoading(false);
      }
    );
  }, []);

  const reset = () => {
    setLocation(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return { location, error, loading, getLocation, reset };
};

export default useCurrentLocation;
