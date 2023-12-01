import React from "react";

function Student({ image, name, email }) {
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <div className="item-container">
            <img className="user-profile-pic" src={image} alt={name} />
        <br />
        <h3>{name}</h3>
        <p>Email: {email}@gmail.com</p>
      </div>
    </div>
  );
}

const ItemStudents = () => {
  const students = [
    {
      pic: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/19/1948251018ad4fcaa989904fad2e5eae8a8a980f_full.jpg",
      id: 1,
      name: "Join",
      email: "join162",
    },
    {
      pic: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c3/c31f2f18dbf044ff085406df931d1c5a8d86ab59_full.jpg",
      id: 2,
      name: "Mary",
      email: "Mary023",
    },
    {
      pic: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/1c/1cc99f49e9568f5f74ac50c0e9be0f3337d2285c_full.jpg",
      id: 3,
      name: "Petter",
      email: "peter283",
    },
    {
      pic: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/59/59eb5fdca61f88afc49c5143c1db6ac7e5c1dd86_full.jpg",
      id: 4,
      name: "Jelly",
      email: "jelly293",
    },
  ];

  return (
    <div className="App">
      <div className="row">
        {students.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 mb-4">
            <Student
              name={item.name}
              image={item.pic}
              email={item.email} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemStudents;