import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemPage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingImage, setLoadingImage] = useState(true); // Track image loading

  useEffect(() => {
    (async function () {
      setLoading(true);
      setLoadingImage(true); // Reset image loading state

      try {
        const apiData = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await apiData.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(error.message);
      }
    })();
  }, [id]);

  console.log(data);

  if (loading) return <h1>Loading......</h1>;

  return (
    <div className="relative flex justify-center">
      <div
        className="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative p-4 bg-white shadow-xl rounded-xl dark:bg-gray-900 sm:max-w-sm sm:w-full sm:p-6">
            <div className="flex items-center justify-center mx-auto">
              {loadingImage && <h2>Loading Image...</h2>} {/* Show text until image loads */}
              <img
                className={`h-full rounded-lg ${loadingImage ? "hidden" : "block"}`} // Hide image until loaded
                src={data.thumbnail}
                alt={data.title}
                onLoad={() => setLoadingImage(false)} // Hide loading once image loads
              />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                {data.title}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
