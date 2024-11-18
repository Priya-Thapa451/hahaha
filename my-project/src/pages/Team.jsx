import { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import TeamCard from "../component/TeamCard";

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    async function fetchTeamMember() {
      const response = await fetch(
        "https://betaapi.krofile.com/api/v1/user/@theenchantedkitchen/team"
      );

      const data = await response.json();
      console.log(data);
      setTeamMembers(data.data.allTeamMembers);
    }
    fetchTeamMember();
    console.log("This is the fetched data", teamMembers);
  }, []);

  return (
    <>
      <NavBar />
      {teamMembers.map((member) => (
        <TeamCard
          key={member.id}
          name={member.name}
          desc={member.post}
          since={member.joinedDate}
          image={member.image}
        />
      ))}
    </>
  );
}




