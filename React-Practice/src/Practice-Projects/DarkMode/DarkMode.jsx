import React, { useState } from "react";

function DarkMode() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const changeTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const handleSubmit = (e) => {
    
  }

  return (
    <>
      <div className="border border-dark mt-4 mb-4">
        <div className="flex justify-between">
          <h1 className={`${darkTheme ? 'text-fuchsia-500' : 'text-black'}`}>Dark Mode Challenge</h1>
          <button onClick={changeTheme}>
            {darkTheme ? (
              <img
                width="30px"
                src="../public/images/brightness-and-contrast.png"
                alt="dark-Mode"
              />
            ) : (
              <img
                width="30px"
                src="../public/images/day-and-night.png"
                alt="light-Mode"
              />
            )}
          </button>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex
            debitis obcaecati excepturi, explicabo ducimus sunt at facilis
            voluptates corporis quisquam natus vitae deleniti, ullam vel sit
            eligendi? Ullam vel officia, illo omnis, in maxime ipsum labore
            cupiditate culpa ipsa assumenda. Facere reiciendis magnam aspernatur
            sapiente voluptatem, corrupti beatae, ratione nisi aut aperiam
            voluptatum, fugit optio impedit explicabo. Quos, minima! Eum eos, ut
            culpa laboriosam sit repudiandae deleniti esse dicta optio adipisci
            incidunt aperiam aliquid eligendi facere fuga voluptatum
            voluptatibus reiciendis aliquam magni itaque ea quod? Odit minima,
            commodi at ducimus vel fuga architecto. Cupiditate voluptate, ad
            inventore architecto molestiae blanditiis maxime similique! Quas
            iusto optio accusamus nisi repellat? Possimus, debitis. Incidunt,
            velit molestiae? Laborum, voluptatem soluta eos corporis labore
            sapiente optio! Impedit eius laborum ut consequuntur dolores? Culpa
            pariatur, illo voluptas quae, ea voluptatum quos, fugiat inventore
            adipisci consequuntur accusantium ipsa cum ut architecto repudiandae
            veniam eligendi repellendus dolores minus ducimus. In consectetur
            rerum quae laudantium sit, beatae error totam corporis assumenda
            architecto nesciunt, voluptas nostrum. Neque iusto qui quasi,
            incidunt nisi illo fuga quaerat totam ratione vel repellat at labore
            vero pariatur a, doloremque, blanditiis nostrum magnam aliquid ex
            mollitia id? Inventore, eligendi esse nihil iure expedita numquam.
          </p>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="name"
                required={true}
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                <input 
                type="email"
                required={true}
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <button
                type="submit"
                >Submit</button>
            </form>
        </div>
      </div>
    </>
  );
}

export default DarkMode;
